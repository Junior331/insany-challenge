import { getIcons } from "@/assets/icons";

export const contents = [
  {
    id: 1,
    path: '#Hero',
    isSecondary: false,
    icon: getIcons("dolar").src,
    textButton: "Quero ser cliente",
    title: "Faça parte do mercado digital financeiro!",
    description: "Pellentesque urna commodo, elementum, est nullam.",
  },
  {
    id: 2,
    path: '#',
    isSecondary: true,
    textButton: "Fale conosco",
    icon: getIcons("chatNotification").src,
    title: "Um time de suporte incrível para lhe atender",
    description: "Pellentesque urna commodo, elementum, est nullam.",
  },
];
