import { ITextInputProps } from "../../types/components/common/TextInput";

export default function TextInput({
  label,
  error,
  name,
  type,
  register,
}: ITextInputProps) {
  return (
    <div className="input-block">
      <label>{label}</label>

      <div className="input-block-input">
        <input type={type ?? "text"} {...register(name)} />
        <p className="error">{error}</p>
      </div>
    </div>
  );
}
