import { IEmployee } from "../../models/Employee";

export interface EmployeeActionsMenuProps {
  employee: IEmployee;
  onViewDetails: (number: number) => void;
  onDeleteEmployee: (number: number) => void;
}
