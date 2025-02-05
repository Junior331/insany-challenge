import db from "./db.svg";
import logo from "./logo.svg";
import avatar from "./avatar.svg";
import bgHome from "./bg_home.svg";
import bgCard from "./bg_card.svg";
import circles from "./circles.svg";
import bgLines from "./bg_lines.svg";
import abstract from "./abstract.svg";
import bgFooter from "./bg_footer.svg";
import avatar01 from "./avatar_01.svg";
import avatar02 from "./avatar_02.svg";
import avatar03 from "./avatar_03.svg";
import avatar04 from "./avatar_04.svg";
import fallback from "./placeholder.svg";
import avatarDetail from "./avatar_detail.svg";
import avatarTechnologies from "./avatar_technologies.svg";

export const images = {
  db,
  logo,
  avatar,
  bgCard,
  bgHome,
  bgLines,
  circles,
  fallback,
  bgFooter,
  avatar01,
  avatar02,
  avatar03,
  avatar04,
  abstract,
  avatarDetail,
  avatarTechnologies,
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
