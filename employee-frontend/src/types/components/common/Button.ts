export enum ButtonType {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}

export interface IButtonProps {
  label: string;
  type?: ButtonType;
  onClick?: () => void; // is optional when it is form button
  className?: string; // tailwind css classes
}
