import React, { useState, useEffect } from "react";
import { heroData } from "../data/hero";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = ({ isDarkMode, hasAnimated = { hero: true } }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const { roles = [] } = heroData;

  useEffect(() => {
    if (!roles.length) return;

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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-start sm:items-center justify-center overflow-hidden pt-28 sm:pt-20">
      
      {/* Light mode background */}
      {!isDarkMode && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-40 right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full opacity-5 blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      )}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col justify-start sm:justify-center">
        <div
          id="hero"
          className={`transition-all duration-1000 ${
            hasAnimated.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Greeting */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
              {heroData.greeting}
            </span>
          </div>

          {/* Name */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight font-bold mb-4 animate-fade-in-up ${
              isDarkMode
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 animate-gradient-x"
                : "bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent"
            }`}
          >
            {heroData.name}
          </h1>

          {/* Focus / Roles */}
          <div className="min-h-[3rem] md:min-h-[4rem] mb-6 flex items-center justify-center">
            <h2
              className={`text-lg sm:text-xl md:text-4xl font-semibold ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
            >
              I focus on {" "}
              <span className={`font-bold ${isDarkMode ? "text-cyan-300" : "text-blue-600"}`}>
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <p
            className={`text-sm sm:text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            {heroData.ctaButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`group relative px-5 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm ${
                  button.variant === "primary"
                    ? isDarkMode
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                    : isDarkMode
                    ? "border-2 border-white text-white hover:bg-white hover:text-black"
                    : "border-2 border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                <span className="relative z-10">{button.text}</span>
              </a>
            ))}
          </div>

          {/* Social Links (icons stay black) */}
          <div className="flex justify-center space-x-6 mb-8">
            {heroData.socialLinks.map((social, index) => {
              const Icon =
                social.icon === "Github"
                  ? Github
                  : social.icon === "Linkedin"
                  ? Linkedin
                  : Mail;

              return (
                <a
                  key={index}
                  href={social.url}
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-110"
                >
                  <Icon className="w-6 h-6 text-black" />
                </a>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            {heroData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-xl sm:text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>
                  {stat.number}
                </div>
                <div className={`text-xs ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          
          
        </div>
      </div>
      {/* Floating Elements */}
      <div className= "absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-float">

      </div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-float delay-1000 ">

      </div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-400 rounded-full opacity-60 animate-float delay-2000 "></div>
      <div className= "absolute bottom-20 right-10 w-5 h-5 bg-orange-400 rounded-full opacity-60 animate-float delay-3000"></div>
    </section>
  );
};

export default Hero;
