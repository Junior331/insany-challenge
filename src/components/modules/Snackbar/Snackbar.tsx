"use client";

import { useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import * as S from "./SnackbarStyled";
import { theme } from "@/styles/theme";
import { SnackbarContext } from "@/contexts/snackbar";

export const Snackbar = () => {
  const { snackbar, closeSnackbar } = useContext(SnackbarContext);

  useEffect(() => {
    if (snackbar.isOpen) {
      const timer = setTimeout(() => {
        closeSnackbar();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [snackbar.isOpen, closeSnackbar]);

  const snackbarVariants = {
    hidden: {
      opacity: 0,
      x:
        snackbar.horizontal === "left"
          ? -50
          : snackbar.horizontal === "right"
          ? 50
          : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
    exit: {
      opacity: 0,
      x:
        snackbar.horizontal === "left"
          ? -50
          : snackbar.horizontal === "right"
          ? 50
          : 0,
      transition: { duration: 0.3 },
    },
  };

  const severityColor =
    theme.message[snackbar.severity as keyof typeof theme.message].default;

  return (
    <S.ContainerSnackbar
      $vertical={snackbar.vertical}
      $horizontal={snackbar.horizontal}
    >
      <AnimatePresence>
        {snackbar.isOpen && (
          <motion.div
            variants={snackbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              color: "#fff",
              padding: "16px",
              minWidth: "280px",
              borderRadius: "4px",
              backgroundColor: severityColor,
              boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div
              style={{
                fontSize: 16,
                marginBottom: 5,
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {snackbar.severity}
            </div>
            <div
              style={{
                fontSize: 14,
              }}
            >
              {snackbar.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </S.ContainerSnackbar>
  );
};
