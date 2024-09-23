import EmployeeListItem from "./EmployeeListItem";
import { Spin } from "antd";
import { useEmployeeContext } from "../../contexts/EmployeesContext";

export default function EmployeeList() {
  const { employees } = useEmployeeContext();

  if (!employees) {
    return <Spin fullscreen tip="Loading" />;
  }

  return (
    <div>
      <h1 className="font-bold text-center text-xl">Employee List</h1>

      {employees.length === 0 && <p className="mt-8">No employees found</p>}

      <div className="grid grid-cols-4 mt-8 gap-2">
        {employees.map((employee) => (
          <EmployeeListItem key={employee.number} employee={employee} />
        ))}
      </div>
    </div>
  );
}
