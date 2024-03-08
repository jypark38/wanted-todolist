import { KeyboardEvent, MouseEvent } from "react";

export interface buttonProps {
  option: string;
  className?: string;
  handleClick?: (
    event?: KeyboardEvent<HTMLElement> | MouseEvent<HTMLElement>
  ) => void;
}
