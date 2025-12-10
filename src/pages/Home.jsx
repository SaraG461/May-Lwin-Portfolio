import React, { useState, useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarsBackground } from "@/components/StarBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

export const Home = () => {
  const [isDark, setIsDark] = useState(false);

  // On mount, check if dark mode is active
  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));

    // Listen for future class changes (theme toggle)
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      {/* Dark mode: show stars background */}
      {isDark && <StarsBackground />}

      <Navigation />
      <ThemeToggle />

      {/* Hero content always rendered, light background only in light mode */}
      <Hero isDarkMode={isDark} />
    </div>
  );
};

export default Home;
