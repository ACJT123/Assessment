import { UseFormRegister } from "react-hook-form";

export interface ITextInputProps {
  label: string;
  error?: string;
  type?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
}
