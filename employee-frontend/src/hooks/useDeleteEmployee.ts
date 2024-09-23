/* eslint-disable @typescript-eslint/no-explicit-any */
import { message, Modal } from "antd";
import { deleteEmployee } from "../api/Employee";
import { useEmployeeContext } from "../contexts/EmployeesContext";

export function useDeleteEmployee() {
  const [messageApi, contextHolder] = message.useMessage();
  const { refetchEmployees } = useEmployeeContext();

  const deleteConfirmation = (number: number) => {
    Modal.confirm({
      title: "Delete Employee",
      content: "Are you sure you want to delete?",
      async onOk() {
        try {
          const result = await deleteEmployee(number);

          if (result.success) {
            messageApi.success(result.message);

            // Refetch employees
            refetchEmployees();
          } else {
            messageApi.error(result.message);
          }
        } catch (error: any) {
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
