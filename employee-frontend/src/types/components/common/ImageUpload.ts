import { FieldErrors } from "react-hook-form";
import { ChangeEvent } from "react";

export interface IImageUploadProps {
  label: string;
  errors: FieldErrors;
  photo: string | null;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
