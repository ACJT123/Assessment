import "../../styles/EmployeeForm.css";
import { ButtonType } from "../../types/components/common/Button";
import { Dept } from "../../types/models/Employee";
import Button from "../common/Button";
import CheckBoxInput from "../common/CheckBoxInput";
import NumberInput from "../common/NumberInput";
import SelectInput from "../common/SelectInput";
import TextAreaInput from "../common/TextAreaInput";
import TextInput from "../common/TextInput";
import { useEmployeeForm } from "../../hooks/useEmployeeForm";
import { EmployeeFormMode } from "../../types/components/hooks/useEmployeeForm";
import { message, Spin } from "antd";
import { useEffect } from "react";
import ImageUpload from "../common/ImageUpload";

export default function EmployeeForm() {
  const [messageApi, contextHolder] = message.useMessage();
  const {
    register,
    errors,
    photo,
    mode,
    handleFileChange,
    handleReset,
    onSubmit,
    result,
    loading,
  } = useEmployeeForm();

  useEffect(() => {
    if (!result) return;

    const { success, message } = result;

    if (success) {
      messageApi.success(message);
    } else {
      messageApi.error(message);
    }
  }, [messageApi, result]);

  if (loading) {
    return <Spin fullscreen tip="Loading" />;
  }

  return (
    <div>
      {contextHolder}

      <h1 className="font-bold text-2xl text-center">
        {mode === EmployeeFormMode.CREATE ? "Create Employee" : "Edit Employee"}
      </h1>

      <form
        encType="multipart/form-data"
        onSubmit={onSubmit}
        className="w-[80%] mx-auto"
      >
        <TextInput
          label="Employee Name"
          name="name"
          error={errors.name?.message}
          register={register}
        />

        <SelectInput
          label="Employee Dept."
          name="dept"
          options={Object.values(Dept)}
          error={errors.dept?.message}
          register={register}
        />

        <CheckBoxInput
          label="Employee Active"
          name="active"
          register={register}
        />

        <NumberInput
          label="Employee Number"
          name="number"
          error={errors.number?.message}
          register={register}
        />

        <TextInput
          label="Employee Email"
          name="email"
          type="email"
          error={errors.email?.message}
          register={register}
        />

        <TextAreaInput
          label="Employee Address"
          name="address"
          error={errors.address?.message}
          register={register}
        />

        <ImageUpload
          label="Employee Photo"
          errors={errors.photo?.message?.toString()}
          photo={photo}
          handleFileChange={handleFileChange}
        />

        <div className="flex gap-5 items-center mt-4 justify-center">
          <Button
            label="Clear"
            onClick={handleReset}
            className="bg-slate-500 hover:bg-slate-700 text-white py-2 px-4 rounded"
          />
          <Button
            label={mode === EmployeeFormMode.CREATE ? "Submit" : "Edit"}
            type={ButtonType.SUBMIT}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          />
        </div>
      </form>
    </div>
  );
}
