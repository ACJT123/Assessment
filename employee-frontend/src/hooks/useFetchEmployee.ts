import { useState, useEffect } from "react";
import { IEmployee } from "../types/models/Employee";
import { getEmployee } from "../api/Employee";

export function useFetchEmployee(number: number) {
  const [employees, setEmployees] = useState<IEmployee>();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await getEmployee(number);
        setEmployees(employees);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, [number]);

  return { employees };
}
