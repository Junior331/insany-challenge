import { Props } from './@types';
import * as S from './ButtonStyled';

const Button = ({
  children,
  disabled = false,
  ...rest
}: Props) => {
  return (
    <S.Button
      disabled={disabled}
      {...rest}
    >
      {children}
    </S.Button>
  );
};

export { Button };
