import 'styled-components';
import { colorShades, defaultShades, typographyType } from './@types';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      color: colorShades;
    };
    message: {
      error: defaultShades;
      info: defaultShades;
      success: defaultShades;
      warning: defaultShades;
    };
    typography: typographyType;
  }
}
