import { motion } from "framer-motion";
import styled from "styled-components";

import {
  Text as TextComponent,
  Title as TitleComponent,
} from "@/components/elements";
import { styledProps } from "@/utils/types";

export const GenericContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const Section = styled.section`
  width: 100%;
  min-height: 816px;
  background-color: ${({ theme }) =>
    theme.palette.color.neutrals.light.gray_02};
`;

export const Container = styled.div`
  gap: 64px;
  display: grid;
  margin: 0 auto;
  padding: 120px 90px;
  place-items: flex-start end;
  grid-template-columns: 411px 1fr;

  @media (max-width: 1025px) {
    gap: 40px;
    padding: 64px 30px;
    grid-template-columns: 1fr;
  }
`;

export const Content = styled(GenericContainer)`
  gap: 16px;
  flex-direction: column;

  @media (max-width: 1025px) {
    align-items: center;
    > h2,
    p {
      text-align: center;
    }
  }
`;

export const Text = styled(TextComponent)<styledProps>`
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_200};
  font-size: ${({ size, theme }) => size || theme.typography.fontSizeMedium}rem;
`;

export const Title = styled(TitleComponent)<styledProps>`
  max-width: 440px;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_800};
  font-size: ${({ size, theme }) => size || theme.typography.fontSizeBold}rem;
`;

export const Icon = styled.img`
  width: 44px;
  height: 34px;
  object-fit: contain;
`;

export const ContainerCards = styled(GenericContainer)`
  gap: 44px;
  margin-top: 44px;
  flex-direction: column;
`;
export const ContactCard = styled(GenericContainer)`
  gap: 32px;
  align-items: center;

  @media (max-width: 1025px) {
    margin: 0 auto;
    max-width: 350px;
  }
`;
export const ContactInfo = styled(GenericContainer)`
  gap: 4px;
  flex-direction: column;
`;

export const AccordionContainer = styled.div`
  gap: 4px;
  width: 100%;
  display: flex;
  max-width: 696px;
  flex-direction: column;

  @media (max-width: 1025px) {
    max-width: 100%;
  }
`;

export const AccordionItem = styled.div`
  overflow: hidden;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.color.auxiliary.white};
`;

export const AccordionHeader = styled.button`
  width: 100%;
  border: none;
  display: flex;
  cursor: pointer;
  text-align: left;
  background: none;
  padding: 44px 24px;
  align-items: center;
  margin-bottom: -27px;
  justify-content: space-between;
  transition: margin-bottom 0.3s ease-in-out;
`;

export const QuestionNumber = styled.span`
  font-size: 2rem;
  font-weight: 500;
  margin-right: 16px;
  color: ${({ theme }) => theme.palette.color.brand.default};
`;

export const Question = styled.span`
  flex: 1;
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.color.neutrals.dark.dark_200};
`;

export const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 16px;
    height: 16px;
  }
`;
