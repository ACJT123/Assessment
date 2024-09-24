import { MenuProps, Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useSelectedContext } from "../../contexts/SelectedContext";
import { EmployeeActionsMenuProps } from "../../types/components/employee/EmployeeActionsMenu";

export default function EmployeeActionsMenu({
  employee,
  onViewDetails,
  onDeleteEmployee,
}: EmployeeActionsMenuProps) {
  const { setSelectedNumber } = useSelectedContext();
  const { number } = employee;

  const items: MenuProps["items"] = [
    {
      label: "View Details",
      key: "1",
      onClick: () => onViewDetails(number),
    },
    {
      label: "Edit",
      key: "2",
      onClick: () => {
        setSelectedNumber(number);
      },
    },
    {
      label: "Delete",
      key: "3",
      onClick: () => onDeleteEmployee(number),
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
