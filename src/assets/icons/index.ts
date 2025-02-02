import fallback from "../images/placeholder.svg";

export const icons = {
  fallback,
};
type IIcons = keyof typeof icons;

export const getIcons = (id: IIcons) => {
  return icons[id] ?? icons.fallback;
};
