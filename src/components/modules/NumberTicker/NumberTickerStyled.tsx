import { motion } from "framer-motion";
import styled from "styled-components";
import { Title as TitleComponent } from "@/components/elements";

export const NumberContainer = styled(motion.div)`
  overflow: hidden;
  display: inline-block;
`;

export const NumberItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(TitleComponent)`
  color: ${({ theme }) => theme.palette.color.auxiliary.white};
  font-size: ${({ theme }) => theme.typography.fontSizeBold + 1.6}rem;
`;
