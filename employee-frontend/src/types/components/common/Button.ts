export enum ButtonType {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

export interface IButtonProps {
  label: string;
  type?: ButtonType;
  onClick?: () => void;
  className?: string;
}
