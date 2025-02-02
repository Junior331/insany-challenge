import { HTMLAttributes, ReactNode, RefObject } from "react";

export type Props = {
  size?: string;
  disabled?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export type StyledButtonProps = Props & {
  ref?: RefObject<HTMLButtonElement>;
};
