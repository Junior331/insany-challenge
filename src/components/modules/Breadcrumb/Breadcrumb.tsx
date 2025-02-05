"use client";

import * as S from "./BreadcrumbStyled";
import { props } from "./@types";

export const Breadcrumb = ({ items }: props) => {
  return (
    <S.BreadcrumbContainer>
      <S.BackButton href="/">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.7">
            <path
              d="M5 0.999916L1 4.99992L5 8.99992"
              stroke="#8C95A1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        Voltar
      </S.BackButton>
      <S.BreadcrumbList>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.96348 13.3891V9.51856C8.96348 8.80554 8.38785 8.22876 7.67878 8.22876H6.39408C5.68387 8.22876 5.10938 8.80667 5.10938 9.51856V13.3891"
            stroke="#8C95A1"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.89453 5.39014V13.3889H12.1755V5.39014"
            stroke="#8C95A1"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.609375 6.29335L7.03514 1.77792L13.4609 6.29335"
            stroke="#8C95A1"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <S.Separator>/</S.Separator>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={item.href} className="flex items-center">
              {index > 0 && <S.Separator>/</S.Separator>}
              {isLast ? (
                <S.CurrentPage>{item.label}</S.CurrentPage>
              ) : (
                <S.BreadcrumbItem href={item.href}>
                  {item.label}
                </S.BreadcrumbItem>
              )}
            </div>
          );
        })}
      </S.BreadcrumbList>
    </S.BreadcrumbContainer>
  );
};
