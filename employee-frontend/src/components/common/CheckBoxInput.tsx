import { ICheckBoxInputProps } from "../../types/components/common/CheckBoxInput";

export default function CheckBoxInput({
  label,
  name,
  register,
}: ICheckBoxInputProps) {
  return (
    <div className="input-block">
      <label>{label}</label>
      <div className="input-block-input">
        <input type="checkbox" {...register(name)} />
      </div>
    </div>
  );
}
