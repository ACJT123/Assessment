import { Request, Response, NextFunction } from "express";

export const formDataTypeParsing = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const number = req.body.number;
  const active = req.body.active;

  if (number && active) {
    req.body.number = Number(number);
    req.body.active = active === "true" ? true : false;
    next();
  } else {
    return res.status(400).json({ message: "Invalid number or active" });
  }
};
