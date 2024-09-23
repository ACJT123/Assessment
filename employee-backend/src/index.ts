import express, { Request, Response, NextFunction } from "express";
import employeeRoutes from "./routes/employee";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import crypto from "crypto";

const app = express();
const port = process.env.PORT || 4200;

const corsOptions = {
  origin: "http://localhost:5173", // Change to your frontend's URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public")); // for serving static files

// Generate a random CSRF token
const generateCsrfToken = (): string => {
  return crypto.randomBytes(100).toString("base64");
};

// Middleware to set CSRF token if not already set
const csrfMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.cookies.csrfToken) {
    const csrfToken = generateCsrfToken();
    res.cookie("csrfToken", csrfToken, {
      httpOnly: false,
      // secure: true, // Enable for HTTPS in production
      sameSite: "lax",
    });
    req.cookies.csrfToken = csrfToken;
  }
  next();
};

// Endpoint to get CSRF token
app.get("/api/get-csrf-token", csrfMiddleware, (req, res) => {
  res.json({ csrfToken: req.cookies.csrfToken });
});

// Middleware to validate CSRF token
app.use((req: Request, res: Response, next: NextFunction) => {
  const csrfToken = req.cookies.csrfToken;
  const csrfHeader = req.headers["x-csrf-token"];

  if (csrfToken && csrfToken === csrfHeader) {
    next(); // Token is valid, proceed
  } else {
    res.status(403).send("Invalid CSRF token");
  }
});

// Your employee routes
app.use("/api/employee", employeeRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
