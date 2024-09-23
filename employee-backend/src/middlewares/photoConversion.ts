import { Request, Response, NextFunction } from "express";

export const photoConversion = (isEdit: boolean = false) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.file) {
      req.body.photo =
        "data:image/jpeg;base64," + req.file.buffer.toString("base64");
      next();
    } else if (isEdit) {
      next();
    } else {
      // In POST requests, photo is mandatory
      return res.status(400).json({ message: "Photo is required" });
    }
  };
};
