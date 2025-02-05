import * as S from "./LoadStyled";
import { containerVariants, dotTransition, dotVariants } from "./utils";

export const Load = () => {
  return (
    <S.Container>
      <S.ContainerDots
        initial="initial"
        animate="animate"
        variants={containerVariants}
      >
        <S.Dot variants={dotVariants} transition={{...dotTransition, repeatType: "reverse"}} />
        <S.Dot variants={dotVariants} transition={{...dotTransition, repeatType: "reverse"}} />
        <S.Dot variants={dotVariants} transition={{...dotTransition, repeatType: "reverse"}} />
      </S.ContainerDots>
    </S.Container>
  );
};


