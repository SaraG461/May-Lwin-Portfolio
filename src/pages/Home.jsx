import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarsBackground } from "@/components/StarBackground";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
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

      {/* Light mode background */}
    {!isDark && (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-indigo-200 via-sky-200 to-purple-200 opacity-40 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-rose-200 via-orange-200 to-yellow-200 opacity-40 blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-emerald-200 via-cyan-200 to-blue-200 opacity-30 blur-3xl animate-pulse delay-500" />

       
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
    )}


      <Navigation />
      <ThemeToggle />

      {/* Hero*/}
      <Hero isDarkMode={isDark} hasAnimated={{ hero: true }} />

      {/* About */}
      <About hasAnimated={{ about: true }} />
    

    {/* Project*/}
      <Projects hasAnimated={{ projects: true }} isDarkMode={isDark} />
      {/* Skills */}
      <Skills hasAnimated={{ skills: true }} isDarkMode={isDark} />

      {/* Contact */}
      <Contact hasAnimated={{ contact: true }} isDarkMode={isDark}/>

      {/* Footer */}
      <Footer hasAnimated={{ footer: true }} isDarkMode={isDark} />
      

    </div>
  );
};

export default Home;
