"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import * as S from "./FAQStyled";
import { faqData, faqTypes } from "./utils";
import { getIcons } from "@/assets/icons";
import { theme } from "@/styles/theme";

export const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <S.Section id="FAQ">
      <S.Container>
        <S.Content>
          <S.Title size={1.4}>Tire suas dúvidas</S.Title>
          <S.Title size={4}>Perguntas mais frequentes</S.Title>
          <S.Text size={2}>
            Separamos algumas perguntas e respostas que podem te ajudar na sua
            decisão
          </S.Text>

          <S.ContainerCards>
            {faqTypes.map((item) => (
              <S.ContactCard key={item.id}>
                <S.Icon src={item.icon} alt="Icon" />
                <S.ContactInfo>
                  <S.Title>{item.title}</S.Title>
                  <S.Text>{item.description}</S.Text>
                </S.ContactInfo>
              </S.ContactCard>
            ))}
          </S.ContainerCards>
        </S.Content>

        <S.AccordionContainer>
          {faqData.map((faq) => {
            const isActive = activeId === faq.id;
            return (
              <S.AccordionItem key={faq.id}>
                <S.AccordionHeader
                  style={{
                    marginBottom: isActive ? "-27px" : "0",
                  }}
                  aria-expanded={isActive}
                  onClick={() => setActiveId(isActive ? null : faq.id)}
                >
                  <S.QuestionNumber>
                    {String(faq.id).padStart(2, "0")}
                  </S.QuestionNumber>
                  <S.Question>{faq.question}</S.Question>
                  <S.IconWrapper
                    key={isActive ? "close" : "plus"}
                    initial={{
                      opacity: 0,
                      rotate: isActive ? 180 : -180,
                    }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{
                      opacity: 0,
                      rotate: isActive ? -180 : 180,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {isActive ? (
                      <S.Icon src={getIcons("close").src} alt="Icon close" />
                    ) : (
                      <S.Icon src={getIcons("plus").src} alt="Icon plus" />
                    )}
                  </S.IconWrapper>
                </S.AccordionHeader>

                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div
                      exit={{ height: 0 }}
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <motion.div
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <S.Text
                          style={{
                            fontSize: 16,
                            paddingLeft: 55,
                            paddingRight: 55,
                            paddingBottom: 24,
                            color: theme.palette.color.neutrals.dark.dark_300,
                          }}
                        >
                          {faq.answer}
                        </S.Text>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </S.AccordionItem>
            );
          })}
        </S.AccordionContainer>
      </S.Container>
    </S.Section>
  );
};
