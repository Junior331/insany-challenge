import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionNav = styled(motion.nav)`
  width: auto;
  display: none;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MotionH2 = styled(motion.h2)`
  cursor: pointer;
`;

export const MobileMenu = styled(motion.div)`
  top: 0;
  left: 0;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: #000;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
`;

export const MotionButton = styled(motion.button)`
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  margin: 36px 44px 0 0;
  background: transparent;
`;

export const MotionUl = styled(motion.ul)`
  gap: 80px;
  width: 75%;
  height: 100%;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
`;

export const MotionLi = styled(motion.li)`
  text-align: center;
`;

export const Button = styled(motion.button)`
  width: 100%;
  border: none;
  height: 50px;
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  margin-top: auto;
  padding: 10px 20px;
  align-items: center;
  margin-bottom: 40px;
  border-radius: 0.7rem;
  justify-content: center;
  transition: 0.2s color ease;
  font-size: ${({ theme }) => theme.typography.fontSize - 0.2}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  background: ${({ theme }) => theme.palette.color.auxiliary.white};
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_700};
`;

export const Link = styled.a`
  color: #fff;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSizeBold}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};

  &:hover::after {
    left: 0;
    width: 100%;
  }

  &::after {
    width: 0;
    left: 50%;
    content: "";
    height: 2px;
    bottom: -5px;
    position: absolute;
    background-color: #fff;
    transition: width 0.3s ease, left 0.3s ease;
  }
`;
