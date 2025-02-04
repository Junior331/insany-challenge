"use client";

import { Layout } from "@/components/organism";
import { About, Careers, Contact, FAQ, Hero, Solutions, Support } from "@/screens";
import FAQSection from "@/screens/FAQSection/faq-section";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <Solutions />

      {/* <About />
      
      <Support />
      
      <Contact /> */}
      
      <FAQ />

      {/* <FAQSection /> */}

      {/* <Careers /> */}
    </Layout>
  );
}
