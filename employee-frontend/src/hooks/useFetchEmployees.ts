import { useState, useEffect } from "react";
import { IEmployee } from "../types/models/Employee";
import { getAllEmployees } from "../api/Employee";

export function useFetchEmployees() {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employees = await getAllEmployees();
        setEmployees(employees);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

  return { employees };
}
