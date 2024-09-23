import { IEmployee } from "../../models/Employee";

export interface IEmployeeListItemProps {
  employee: IEmployee;
  selectedNumber: (number: number) => void;
}
