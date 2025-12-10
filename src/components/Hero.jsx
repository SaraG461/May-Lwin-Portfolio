import React, { useState, useEffect } from "react";
import { heroData } from "../data/hero";

const Hero = ({ isDarkMode, hasAnimated = { hero: true } }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const { roles = [] } = heroData;

  useEffect(() => {
    if (roles.length === 0) return;

    const currentRole = roles[currentTextIndex];

    if (!isDeleting) {
      if (currentText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(100);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(150);
      }
    }
  }, [currentText, isDeleting, roles, currentTextIndex, typingSpeed]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Conditional light mode background */}
      {!isDarkMode && (
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-40 right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full opacity-5 blur-3xl animate-pulse delay-500"></div>
        </div>
      )}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center h-full flex flex-col justify-center">
        <div
          className={`transition-all duration-1000 ${
            hasAnimated.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          id="hero"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium animate-fade-in">
              {heroData.greeting}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
