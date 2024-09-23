import { useFetchEmployee } from "../../hooks/useFetchEmployee";
import { Spin } from "antd";
import { IEmployeeDetailsProps } from "../../types/components/employee/EmployeeDetails";

export default function EmployeeDetails({
  selectedNumber,
}: IEmployeeDetailsProps) {
  const { employees } = useFetchEmployee(selectedNumber);

  if (!employees) {
    return <Spin fullscreen tip="Loading" />;
  }

  const { name, photo, dept, number, active, email, address } = employees;

  return (
    <div className="p-4">
      <h1 className="text-center text-xl font-bold">Employee Details</h1>

      <img src={photo} alt={name} className="mx-auto my-4" />
      <h2 className="mb-2 text-gray-700">Name: {name}</h2>
      <p className="mb-2 text-gray-700">Department: {dept}</p>
      <p className="mb-2 text-gray-700">Number: {number}</p>
      <p className="mb-2 text-gray-700">Active: {active ? "Yes" : "No"}</p>
      <p className="mb-2 text-gray-700">Email: {email}</p>
      <p className="mb-2 text-gray-700">Address: {address}</p>
    </div>
  );
}
