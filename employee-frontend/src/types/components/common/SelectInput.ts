/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

export interface ISelectInputProps {
  label: string;
  error?: string;
  name: string;
  options: any[];
  register: UseFormRegister<any>;
}
