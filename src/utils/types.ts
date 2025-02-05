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

export type styledProps = {
  size?: number;
  color?: string;
  isOpen?: boolean;
  $isPrimary?: boolean;
  $isSecondary?: boolean;
};


