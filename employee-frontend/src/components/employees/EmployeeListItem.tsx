import { Modal } from "antd";
import { IEmployeeListItemProps } from "../../types/components/employee/EmployeeListItem";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeActionsMenu from "./EmployeeActionsMenu";
import { useDeleteEmployee } from "../../hooks/useDeleteEmployee";

export default function EmployeeListItem({
  employee,
  selectedNumber,
}: IEmployeeListItemProps) {
  const { deleteConfirmation, contextHolder } = useDeleteEmployee();

  const viewEmployee = (number: number) => {
    Modal.info({
      icon: null,
      closable: true,
      footer: null,
      content: <EmployeeDetails selectedNumber={number} />,
    });
  };

  return (
    <div
      key={employee.number}
      className="bg-slate-100 rounded-md py-2 px-4 relative"
    >
      {contextHolder}

      <EmployeeActionsMenu
        employee={employee}
        onViewDetails={viewEmployee}
        onEditEmployee={selectedNumber}
        onDeleteEmployee={deleteConfirmation}
      />

      <img
        src={employee.photo}
        alt={employee.name}
        className="rounded-xl mx-auto size-[120px] object-cover mt-4"
      />

      <div className="text-center mt-2">
        <h2 className="font-bold">{employee.name}</h2>
      </div>
    </div>
  );
}
