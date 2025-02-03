import star from "./star.svg";
import fallback from "../images/placeholder.svg";

export const icons = {
  star,
  fallback,
};
type IIcons = keyof typeof icons;

export const getIcons = (id: IIcons) => {
  return icons[id] ?? icons.fallback;
};
