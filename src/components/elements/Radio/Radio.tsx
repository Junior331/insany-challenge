import { props } from "./@types";
import * as S from "./RadioStyled";

export const Radio = ({ label, ...rest }: props) => {
  return (
    <S.RadioLabel>
      <S.RadioInput {...rest} />
      {label}
    </S.RadioLabel>
  );
};
