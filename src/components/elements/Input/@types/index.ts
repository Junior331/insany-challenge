import { InputHTMLAttributes } from "react";

export type props = {
  error?: boolean;
  helperText?: string;
} & InputHTMLAttributes<HTMLInputElement>;
