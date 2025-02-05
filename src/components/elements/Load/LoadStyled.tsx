import { motion } from "framer-motion";
import styled from "styled-components";

export const Dot = styled(motion.span)`
  width: 1rem;
  height: 1rem;
  display: block;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.palette.color.auxiliary.white};
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerDots = styled(motion.div)`
  gap: 8px;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
`;
