import { findIndex } from "../lib/employee";
import { IEmployee } from "../types/employee";
import { employees } from "../models/Employee";

export const getAllEmployees = () => {
  return employees.map((employee) => {
    return {
      number: employee.number,
      name: employee.name,
      photo: employee.photo,
    };
  });
};

export const getEmployee = (number: number) => {
  const idx = findIndex(number);

  if (idx > -1) {
    return employees[idx];
  }

  return null;
};

export const addNewEmployee = (employee: IEmployee) => {
  employees.push(employee);
};

export const editEmployee = (number: number, employee: IEmployee) => {
  const idx = findIndex(number);

  if (idx === -1) return;

  if (
    (idx !== employee.number && findIndex(employee.number) === -1) ||
    idx === employee.number
  ) {
    employees[idx] = employee;
  } else {
    throw new Error("Employee number already exists");
  }
};

export const deleteEmployee = (number: number) => {
  const idx = findIndex(number);

  if (idx > -1) {
    employees.splice(idx, 1); // remove itself from the array
  }
};
