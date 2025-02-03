import { props } from "./@types";
import * as S from "./InputStyled";

export const Input = ({ error, helperText, ...rest }: props) => {
  return (
    <S.ContainerInput>
      <S.Input {...rest} />

      {error && helperText && (
        <span className="text-error">{helperText}</span>
      )}
    </S.ContainerInput>
  );
};
