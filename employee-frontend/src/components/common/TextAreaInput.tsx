import { ITextAreaInputProps } from "../../types/components/common/TextAreaInput";

export default function TextAreaInput({
  label,
  error,
  name,
  register,
}: ITextAreaInputProps) {
  return (
    <div className="input-block">
      <label>{label}</label>
      <div className="input-block-input">
        <textarea {...register(name)} />
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
