import { Dispatch, SetStateAction } from "react";

import { Snackbar } from "@/contexts/snackbar";
import { httpClientResponse, httpRequest } from "@/utils/types";

export type formType = {
  name: string;
  cnpj: string;
  email: string;
  phone: string;
  formType: string;
};

export type postLeadsProps = {
  values: formType;
  resetForm: () => void;
  setSnackbar: (snackbarData: Snackbar) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
};