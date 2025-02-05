"use client";

import { Layout, Sections } from "@/components/organism";

export default function Home() {
  return (
    <Layout>
      <Sections.Hero />
      <Sections.Solutions />
      <Sections.Blog />
      <Sections.Benefits />
      <Sections.Contact />
      <Sections.FAQ />
      <Sections.Footer />
    </Layout>
  );
}