/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addEmployee, editEmployee, getEmployee } from "../api/Employee";
import { schema } from "../schemas/Employee";
import { EmployeeFormMode } from "../types/components/hooks/useEmployeeForm";
import { IEmployee } from "../types/models/Employee";
import { useEmployeeContext } from "../contexts/EmployeesContext";

export function useEmployeeForm(selectedNumber: number) {
  const [photo, setPhoto] = useState<string>("");
  const [mode, setMode] = useState<EmployeeFormMode>(EmployeeFormMode.CREATE);
  const [result, setResult] = useState<{
    message: string;
  }>();
  const [loading, setLoading] = useState<boolean>(false);
  const { refetchEmployees } = useEmployeeContext();

  // Initialize form with react-hook-form and yupResolver
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IEmployee>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    try {
      const fetchEmployees = async () => {
        const selectedEmployee = await getEmployee(selectedNumber);

        // Set the form values with the selected employee
        if (selectedEmployee) {
          // Set the photo URL
          setPhoto(selectedEmployee.photo);

          // Set the form values
          const fields: (keyof IEmployee)[] = [
            "name",
            "dept",
            "active",
            "number",
            "email",
            "address",
            "photo",
          ];

          fields.forEach((field) => setValue(field, selectedEmployee[field]));
        }
      };

      if (selectedNumber !== null) {
        setMode(EmployeeFormMode.EDIT);
        fetchEmployees();
      }
    } catch (error) {
      console.error(error);
    }
  }, [selectedNumber, setValue]);

  // Handle file change for photo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileUrl = URL.createObjectURL(file);

      // Set the preview photo
      setPhoto(fileUrl);

      // Set the form value for photo with the actual file object
      setValue("photo", file, { shouldValidate: true });
    }
  };

  const handleReset = () => {
    // remove photo preview
    setPhoto("");

    // reset mode to create
    setMode(EmployeeFormMode.CREATE);
  };

  const onSubmit = async (data: IEmployee) => {
    try {
      setResult(undefined);
      setLoading(true);

      let result;

      if (mode === EmployeeFormMode.CREATE) {
        result = await addEmployee(data);
      } else {
        result = await editEmployee(data);
      }

      if (result.success) {
        refetchEmployees();
      }
    } catch (error: any) {
      const errorMsg = error.response.data;

      console.error("error", errorMsg);
      setResult(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return {
    photo,
    mode,
    errors,
    register,
    handleFileChange,
    handleReset,
    onSubmit: handleSubmit(onSubmit),
    result,
    loading,
  };
}
