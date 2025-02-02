import { ReactNode } from "react";
import type { Metadata } from "next";

import Provider from "@/lib/provider";
import { archivo } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Smart Money",
  description: "Insany Challenge",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${archivo.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
