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

  const details = [
    { label: "Name", value: name },
    { label: "Department", value: dept },
    { label: "Number", value: number },
    { label: "Active", value: active ? "Yes" : "No" },
    { label: "Email", value: email },
    { label: "Address", value: address },
  ];

  return (
    <div className="p-4">
      <h1 className="text-center text-xl font-bold">Employee Details</h1>
      <img
        src={photo}
        alt={name}
        className="mx-auto my-4 size-[150px] rounded-lg"
      />
      {details.map((detail, index) => (
        <p key={index} className="mb-2 text-gray-700">
          {detail.label}: {detail.value}
        </p>
      ))}
    </div>
  );
}
