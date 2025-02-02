"use client";
import { useContext } from "react";

import { Button } from "@/components/elements";
import { Layout } from "@/components/organism";
import { SnackbarContext } from "@/contexts/snackbar";

export default function Home() {
  const { setSnackbar } = useContext(SnackbarContext);

  return (
    <Layout>
      <div>
        <main>
          <h1 style={{ marginTop: 10, marginBottom: 10 }}>
            Next.js 15 + Styled Components
          </h1>
          <Button
            size="100%"
            onClick={() =>
              setSnackbar({
                isOpen: true,
                vertical: "top",
                severity: "info",
                horizontal: "right",
                message: "This info Alert !!",
              })
            }
          >
            Clique right
          </Button>
        </main>
      </div>
    </Layout>
  );
}
