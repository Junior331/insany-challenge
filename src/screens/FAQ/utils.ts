import { getIcons } from "@/assets/icons";

export const faqData = [
  {
    id: 1,
    question: "Quais recursos ainda posso acessar nas novas Páginas?",
    answer:
      "Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultrices semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.",
  },
  {
    id: 2,
    question: "Como faço para ativar a minha nova Página?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    question: "Há algum conteúdo que não migrará com a minha Página?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    question: "Como as pessoas encontrarão a minha nova Página?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    question: "O que é o Feed? Como faço para configurá-lo?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

export const faqTypes = [
  {
    id: 1,
    title: "Dúvidas? ",
    icon: getIcons("chat").src,
    description: "Envie uma mensagem para nosso time",
  },
  {
    id: 2,
    title: "Faça parte",
    icon: getIcons("rectangles").src,
    description: "Cadastre-se para transformar sua empresa",
  },
  {
    id: 3,
    title: "Chama no zap",
    icon: getIcons("zap").src,
    description: "Fale com conosso comercial",
  },

];
