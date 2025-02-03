import logo from "./logo.svg";
import bgHome from "./bg_home.png";
import fallback from "./placeholder.svg";

export const images = {
  logo,
  bgHome,
  fallback,
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
