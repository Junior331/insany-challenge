import fallback from "./placeholder.svg";


export const images = {
  fallback,
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
