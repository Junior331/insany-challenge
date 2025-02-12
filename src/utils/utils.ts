import { formatterProps } from "./types";

export const getCurrentDate = (): string => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
};

export const generateRandomNumber = (untilNumbers: number) =>
  Math.floor(Math.random() * untilNumbers);

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const formatNumberBR = (num: number): string => {
  if (num >= 1e9) return `${Math.floor(num / 1e9)} bi`;
  if (num >= 1e6) return `${Math.floor(num / 1e6)} mi`;
  if (num >= 1e3) return `${Math.floor(num / 1e3)} mil`;
  return num.toString();
};

export const formatter = ({
  type = "en-US",
  currency = "USD",
  style = "decimal",
  minimumFractionDigits,
  maximumFractionDigits,
}: formatterProps) => {
  return new Intl.NumberFormat(type, {
    style,
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  });
};

export const maskCnpj = (value: string) => {
  value = value.replace(/[^\d]/g, "");

  return value.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    "$1.$2.$3/$4-$5"
  );
};

export const maskPhone = (value: string) =>
  value.replace(/(\d{2})(\d{5})(\d{4})/g, "($1) $2-$3");

export const formatDate = (
  dateString: string,
  format: "MMMM YYYY" | "D de MMM YYYY" = "MMMM YYYY"
): string => {
  const date = new Date(dateString);

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const shortMonthNames = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const shortMonth = shortMonthNames[date.getMonth()];
  const year = date.getFullYear();

  switch (format) {
    case "MMMM YYYY":
      return `${month} ${year}`;
    case "D de MMM YYYY":
      return `${day} de ${shortMonth} ${year}`;
    default:
      return `${month} ${year}`;
  }
};
