"use client";

import { Fragment } from "react";

import * as S from "./ContactStyled";
import { contents } from "./utils";

export const Contact = () => {
  return (
    <S.Section id="Contact">
      {contents.map((item, index) => (
        <Fragment key={item.id}>
          <S.Card >
            <S.ContainerIcon>
              <S.Icon src={item.icon} alt="Icon dolar" />
            </S.ContainerIcon>
            <div>
              <S.Title>{item.title}</S.Title>
              <S.Text>{item.description}</S.Text>
            </div>
            <a href={item.path}>
              <S.Button $isSecondary={item.isSecondary}>
                {item.textButton}
              </S.Button>
            </a>
          </S.Card>
          {index === 0 && <S.Divider />}
        </Fragment>
      ))}
    </S.Section>
  );
};
