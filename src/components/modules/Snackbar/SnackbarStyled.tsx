import styled from "styled-components";
import { styledProps } from "./@types";

export const ContainerSnackbar = styled.div<styledProps>`
  width: auto;
  height: auto;
  z-index: 9999;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: flex-start;
  ${({ $vertical }) => ($vertical === "top" ? "top: 20px;" : "bottom: 20px;")}

  ${({ $horizontal }) =>
    $horizontal === "left"
      ? "left: 20px;"
      : $horizontal === "right"
      ? "right: 20px;"
      : "left: 50%; transform: translateX(-50%);"}
`;
