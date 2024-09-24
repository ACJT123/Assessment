import { INumberInputProps } from "../../types/components/common/NumberInput";

export default function NumberInput({
  label,
  error,
  name,
  register,
}: INumberInputProps) {
  return (
    <div className="input-block">
      <label>{label}</label>

      <div className="input-block-input">
        <input type="number" {...register(name)} defaultValue={0} />
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
