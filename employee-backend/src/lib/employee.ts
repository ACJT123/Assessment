import { employees } from "../models/Employee";

export const findIndex = (number: number) => {
  return employees.findIndex((emp) => emp.number === number);
};
