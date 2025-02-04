import { SetStateAction } from "react";

import { Dispatch } from "react";

export type props = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
};


