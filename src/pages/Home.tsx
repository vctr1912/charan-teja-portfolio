import { useEffect, useState } from "react";
import SideNav from "../components/home/SideNav";
import Hero from "../components/home/Hero";
import MobileImage from "../components/home/MobileImage";
import Work from "../components/home/Work";
import Skills from "../components/home/Skills";
import About from "../components/home/About";
import Contact from "../components/home/Contact";

const sections = ["intro", "work", "skills", "about", "contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-cabinet bg-prime">
      <SideNav
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <Hero />
      <MobileImage />
      <Work />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
