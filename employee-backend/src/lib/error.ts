import { Response } from "express";

// Helper function to handle error responses
export const handleErrorResponse = (res: Response, error: any) => {
  console.error(error);
  return res
    .status(400)
    .json({ message: error.message || "An error occurred" });
};
