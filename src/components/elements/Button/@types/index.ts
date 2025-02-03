import { ButtonHTMLAttributes, HTMLAttributes, ReactNode, RefObject } from "react";

export type Props = {
  size?: string;
  disabled?: boolean;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type StyledButtonProps = Props & {
  ref?: RefObject<HTMLButtonElement>;
};
