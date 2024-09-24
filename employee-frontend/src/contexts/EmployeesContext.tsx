import { createContext, useContext, useEffect, useState } from "react";
import { IEmployee } from "../types/models/Employee";
import { getAllEmployees } from "../api/Employee";
import { EmployeeContextType } from "../types/contexts/EmployeeContext";

const EmployeeContext = createContext<EmployeeContextType>({
  employees: [],
  loading: false,
  refetchEmployees: () => {},
});

export const EmployeeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const result = await getAllEmployees();
      setEmployees(result);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <EmployeeContext.Provider
      value={{ employees, loading, refetchEmployees: fetchEmployees }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => useContext(EmployeeContext);
