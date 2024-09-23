/* eslint-disable @typescript-eslint/no-explicit-any */
import { message, Modal } from "antd";
import { deleteEmployee } from "../api/Employee";
import { useEmployeeContext } from "../contexts/EmployeesContext";

export function useDeleteEmployee() {
  const { refetchEmployees } = useEmployeeContext();
  const [messageApi, contextHolder] = message.useMessage();

  const deleteConfirmation = (number: number) => {
    Modal.confirm({
      title: "Delete Employee",
      content: "Are you sure you want to delete?",
      async onOk() {
        try {
          const result = await deleteEmployee(number);

          if (result.success) {
            refetchEmployees();
          }
        } catch (error: any) {
          console.error(error);
          messageApi.error(error.response?.data?.message || "Delete failed");
        }
      },
    });
  };

  return {
    deleteConfirmation,
    contextHolder,
  };
}
