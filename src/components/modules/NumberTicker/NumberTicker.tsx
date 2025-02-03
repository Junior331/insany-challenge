import { useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

import { props } from "./@types";
import * as S from "./NumberTickerStyled";
import { formatNumberBR } from "@/utils/utils";

export const NumberTicker = ({ targetNumber, duration = 1 }: props) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const controls = useAnimation();

  useEffect(() => {
    if (targetNumber !== currentNumber) {
      controls.start({
        y: [0, 0],
        opacity: [0.8, 1],
        transition: { duration: 0.5, ease: "easeOut" },
      });

      const interval = setInterval(() => {
        setCurrentNumber((prev) => {
          const increment = Math.ceil(targetNumber / (duration * 20));
          if (prev < targetNumber) return prev + increment;
          clearInterval(interval);
          return targetNumber;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [targetNumber, currentNumber, controls, duration]);

  return (
    <S.NumberContainer>
      <S.NumberItem animate={controls}>
        <S.Title>{formatNumberBR(currentNumber)}</S.Title>
      </S.NumberItem>
    </S.NumberContainer>
  );
};
