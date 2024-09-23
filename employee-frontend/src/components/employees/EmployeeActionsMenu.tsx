import { MenuProps, Dropdown } from "antd";
import { IEmployee } from "../../types/models/Employee";
import { MoreOutlined } from "@ant-design/icons";
import { useSelectedContext } from "../../contexts/SelectedContext";

interface EmployeeActionsMenuProps {
  employee: IEmployee;
  onViewDetails: (number: number) => void;
  onDeleteEmployee: (number: number) => void;
}

export default function EmployeeActionsMenu({
  employee,
  onViewDetails,
  onDeleteEmployee,
}: EmployeeActionsMenuProps) {
  const { setSelectedNumber } = useSelectedContext();

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
        setSelectedNumber(employee.number);
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
