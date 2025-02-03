"use client";

import { Layout } from "@/components/organism";
import { About, Careers, Contact, Hero, Solutions, Support } from "@/screens";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <Solutions />

      <About />
      
      <Support />
      
      <Contact />
      
      <Careers />
    </Layout>
  );
}
