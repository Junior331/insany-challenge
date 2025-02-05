"use client";

import { motion } from "framer-motion";

import { props } from "./@types";
import * as S from "./MenuStyled";
import {
  routes,
  ulVariant,
  liVariant,
  fadeInVariant,
  mobileMenuVariant,
  hideNavItemsVariant,
} from "../Header/utils";

export const Menu = ({ isMenuOpen, setIsMenuOpen }: props) => {
  return (
    <S.MotionNav initial="closed" animate={isMenuOpen ? "opened" : "closed"}>
      <S.MotionH2
        variants={hideNavItemsVariant}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          width="40px"
          height="40px"
          version="1.1"
          fill="#fff"
          stroke="#fff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Menu">
                <rect
                  id="Rectangle"
                  fillRule="nonzero"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                ></rect>
                <line
                  x1="5"
                  y1="7"
                  x2="19"
                  y2="7"
                  id="Path"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></line>
                <line
                  x1="5"
                  y1="17"
                  x2="19"
                  y2="17"
                  id="Path"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></line>
                <line
                  x1="5"
                  y1="12"
                  x2="19"
                  y2="12"
                  id="Path"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></line>
              </g>
            </g>
          </g>
        </svg>
      </S.MotionH2>

      <S.MobileMenu variants={mobileMenuVariant}>
        <S.MotionButton
          variants={fadeInVariant}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            fill="#000"
            width="25px"
            height="25px"
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.66L6.66 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66 6.66L1 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </S.MotionButton>

        <S.MotionUl variants={ulVariant}>
          {routes.map((navItem) => (
            <S.MotionLi key={navItem.id} whileTap={{ scale: 0.95 }}>
              <motion.div variants={liVariant}>
                <S.Link href={navItem.path}>{navItem.label}</S.Link>
              </motion.div>
            </S.MotionLi>
          ))}
          <S.Button variants={liVariant}>Cadastre-se</S.Button>
        </S.MotionUl>
      </S.MobileMenu>
    </S.MotionNav>
  );
};
