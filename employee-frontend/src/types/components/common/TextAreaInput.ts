import { UseFormRegister } from "react-hook-form";

export interface ITextAreaInputProps {
  label: string;
  error?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
}
