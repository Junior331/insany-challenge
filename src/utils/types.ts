/* eslint-disable @typescript-eslint/no-explicit-any */
export type httpRequest = {
  body: any;
  url: string;
  headers: any;
  method: "get" | "post" | "put" | "delete";
};

export type httpClientResponse<T = any> = {
  body: T;
  statusCode: number;
};

export type formatterProps = {
  type?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  style?: keyof Intl.NumberFormatOptionsStyleRegistry;
};

export type styledProps = {
  size?: number;
  color?: string;
  isOpen?: boolean;
  $isPrimary?: boolean;
  $isSecondary?: boolean;
};


