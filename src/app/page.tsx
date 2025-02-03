"use client";

import { Layout } from "@/components/organism";
import { About, Careers, Contact, Hero, Solutions, Support } from "@/screens";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <About />
      <Solutions />
      <Support />
      <Contact />
      <Careers />
    </Layout>
  );
}
