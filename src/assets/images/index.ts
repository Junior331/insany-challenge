import logo from "./logo.svg";
import avatar from "./avatar.svg";
import bgHome from "./bg_home.svg";
import bgCard from "./bg_card.svg";
import circles from "./circles.svg";
import bgFooter from "./bg_footer.svg";
import fallback from "./placeholder.svg";

export const images = {
  logo,
  avatar,
  bgCard,
  bgHome,
  circles,
  fallback,
  bgFooter,
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
