import star from "./star.svg";
import safe from "./safe.svg";
import menu from "./menu.svg";
import check from "./check.svg";
import chart from "./chart.svg";
import phone from "./phone.svg";
import physcis from "./physcis.svg";
import barChart from "./bar_chart.svg";
import interactive from "./interactive.svg";
import fallback from "../images/placeholder.svg";
import wirelessCharging from "./wireless_charging.svg";

export const icons = {
  star,
  safe,
  menu,
  phone,
  check,
  chart,
  physcis,
  barChart,
  fallback,
  interactive,
  wirelessCharging,
};
type IIcons = keyof typeof icons;

export const getIcons = (id: IIcons) => {
  return icons[id] ?? icons.fallback;
};
