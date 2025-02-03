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
