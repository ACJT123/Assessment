import { ButtonType, IButtonProps } from "../../types/components/common/Button";

export default function Button({ label, type, onClick, className }: IButtonProps) {
  return (
    <button
      type={type ?? ButtonType.BUTTON}
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  );
}
