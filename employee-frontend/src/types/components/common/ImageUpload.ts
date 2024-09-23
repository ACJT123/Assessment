import { ChangeEvent } from "react";

export interface IImageUploadProps {
  label: string;
  errors?: string;
  photo: string | null;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
