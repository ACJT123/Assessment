import { MenuProps, Dropdown } from "antd";
import { IEmployee } from "../../types/models/Employee";
import { MoreOutlined } from "@ant-design/icons";

interface EmployeeActionsMenuProps {
  employee: IEmployee;
  onViewDetails: (number: number) => void;
  onEditEmployee: (number: number) => void;
  onDeleteEmployee: (number: number) => void;
}

export default function EmployeeActionsMenu({
  employee,
  onViewDetails,
  onEditEmployee,
  onDeleteEmployee,
}: EmployeeActionsMenuProps) {
  const items: MenuProps["items"] = [
    {
      label: "View Details",
      key: "1",
      onClick: () => onViewDetails(employee.number),
    },
    {
      label: "Edit",
      key: "2",
      onClick: () => {
        onEditEmployee(employee.number);
      },
    },
    {
      label: "Delete",
      key: "3",
      onClick: () => onDeleteEmployee(employee.number),
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <div className="text-right absolute right-0 -translate-x-1">
        <MoreOutlined className="cursor-pointer mr-auto" />
      </div>
    </Dropdown>
  );
}
