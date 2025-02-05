import { ButtonHTMLAttributes, ReactNode, RefObject } from "react";

export type Props = {
  size?: string;
  loading?: boolean;
  disabled?: boolean;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type StyledButtonProps = Props & {
  ref?: RefObject<HTMLButtonElement>;
};
