import zap from "./zap.svg";
import chat from "./chat.svg";
import star from "./star.svg";
import safe from "./safe.svg";
import menu from "./menu.svg";
import plus from "./plus.svg";
import close from "./close.svg";
import check from "./check.svg";
import chart from "./chart.svg";
import phone from "./phone.svg";
import dolar from "./dolar.svg";
import globlo from "./globlo.svg";
import twitch from "./twitch.svg";
import physcis from "./physcis.svg";
import facebook from "./facebook.svg";
import linkedin from "./linkedin.svg";
import barChart from "./bar_chart.svg";
import instagram from "./instagram.svg";
import emailFast from "./email_fast.svg";
import rectangles from "./rectangles.svg";
import interactive from "./interactive.svg";
import fallback from "../images/placeholder.svg";
import wirelessCharging from "./wireless_charging.svg";
import chatNotification from "./chat_notification.svg";

export const icons = {
  zap,
  chat,
  star,
  plus,
  safe,
  menu,
  dolar,
  phone,
  check,
  chart,
  close,
  twitch,
  globlo,
  physcis,
  facebook,
  linkedin,
  barChart,
  fallback,
  instagram,
  emailFast,
  rectangles,
  interactive,
  chatNotification,
  wirelessCharging,
};
type IIcons = keyof typeof icons;

export const getIcons = (id: IIcons) => {
  return icons[id] ?? icons.fallback;
};
