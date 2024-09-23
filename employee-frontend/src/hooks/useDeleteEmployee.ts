/* eslint-disable @typescript-eslint/no-explicit-any */
import { message, Modal } from "antd";
import { deleteEmployee } from "../api/Employee";
import { useSelectedContext } from "../contexts/SelectedContext";

export function useDeleteEmployee() {
  const [messageApi, contextHolder] = message.useMessage();
  const { selectedNumber } = useSelectedContext();

  const deleteConfirmation = () => {
    Modal.confirm({
      title: "Delete Employee",
      content: "Are you sure you want to delete?",
      async onOk() {
        try {

          console.log("selectedNumber", selectedNumber);
          const result = await deleteEmployee(selectedNumber!);

          if (result.success) {
            window.location.reload();
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
