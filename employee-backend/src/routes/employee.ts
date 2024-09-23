import { Router, Request, Response } from "express";
import {
  addNewEmployee,
  deleteEmployee,
  editEmployee,
  getAllEmployees,
  getEmployee,
} from "../services/employee";
import multer from "multer";
import { findIndex } from "../lib/employee";
import { photoConversion } from "../middlewares/photoConversion";
import { handleErrorResponse } from "../lib/error";
import { formDataTypeParsing } from "../middlewares/formDataTypeParsing";

const storage = multer.memoryStorage();
const upload = multer({ storage });
const router = Router();

// Get all employees
router.get("/", (req: Request, res: Response) => {
  try {
    const employees = getAllEmployees();

    res.status(200).json(employees);
  } catch (error) {
    handleErrorResponse(res, error);
  }
});

// Get a single employee by number
router.get("/:number", (req: Request, res: Response) => {
  try {
    const employeeNumber = Number(req.params.number);

    if (isNaN(employeeNumber)) {
      return res.status(400).json({ message: "Invalid employee number" });
    }

    const employee = getEmployee(employeeNumber);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);
  } catch (error) {
    handleErrorResponse(res, error);
  }
});

// Add a new employee
router.post(
  "/",
  upload.single("photo"),
  formDataTypeParsing,
  photoConversion(),
  (req: Request, res: Response) => {
    try {
      const employeeNumber = req.body.number;
      const employeeExists = findIndex(employeeNumber) > -1;

      if (employeeExists) {
        return res
          .status(400)
          .json({ message: "Employee number already exists" });
      }

      addNewEmployee(req.body);

      res.status(201).json({ message: "Employee added", success: true });
    } catch (error) {
      handleErrorResponse(res, error);
    }
  }
);

// Edit an existing employee
router.put(
  "/:number",
  upload.single("photo"),
  formDataTypeParsing,
  photoConversion(true),
  (req: Request, res: Response) => {
    try {
      const employeeNumber = Number(req.params.number);

      if (isNaN(employeeNumber)) {
        return res.status(400).json({ message: "Invalid employee number" });
      }

      editEmployee(employeeNumber, req.body);
      res.status(200).json({ message: "Employee updated", success: true });
    } catch (error) {
      handleErrorResponse(res, error);
    }
  }
);

// Delete an employee by number
router.delete("/:number", (req: Request, res: Response) => {
  try {
    const employeeNumber = Number(req.params.number);

    if (isNaN(employeeNumber)) {
      return res.status(400).json({ message: "Invalid employee number" });
    }

    deleteEmployee(employeeNumber);

    res.status(200).json({ message: "Employee deleted", success: true });
  } catch (error) {
    handleErrorResponse(res, error);
  }
});

export default router;
