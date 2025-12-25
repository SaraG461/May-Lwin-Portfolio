import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarsBackground } from "@/components/StarBackground";
import Projects from "@/components/Projects";
const Home = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      {/* Dark mode background */}
      {isDark && <StarsBackground />}

      <Navigation />
      <ThemeToggle />

      {/* Hero*/}
      <Hero isDarkMode={isDark} hasAnimated={{ hero: true }} />

      {/* About */}
      <About hasAnimated={{ about: true }} />
    

    {/* Project*/}
      <Projects hasAnimated={{ projects: true }} isDarkMode={isDark} />


    </div>
  );
};

export default Home;
