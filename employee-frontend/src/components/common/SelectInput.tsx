import { ISelectInputProps } from "../../types/components/common/SelectInput";

export default function SelectInput({
  label,
  error,
  name,
  options,
  register,
}: ISelectInputProps) {
  return (
    <div className="input-block">
      <label>{label}</label>
      <div className="input-block-input">
        <select {...register(name)}>
          {Object.values(options).map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
