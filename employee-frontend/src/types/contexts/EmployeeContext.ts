import { IEmployee } from "../models/Employee";

export interface EmployeeContextType {
  employees: IEmployee[];
  loading: boolean;
  refetchEmployees: () => void;
}
