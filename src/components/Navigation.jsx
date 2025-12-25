import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 60;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    closeMobileMenu();
  };

  useEffect(() => {
    // Scroll detection
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Dark mode detection
    const checkDark = () =>
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    checkDark(); // initial
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  // Navbar background based on scroll & dark mode
  const navBgClass = isScrolled
    ? isDarkMode
      ? "bg-gray-900/95 backdrop-blur-md shadow-sm"
      : "bg-white/95 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  // Link color based on scroll & dark mode
  const linkClass = isScrolled
    ? isDarkMode
      ? "text-white hover:text-gray-300"
      : "text-black hover:text-gray-600"
    : isDarkMode
    ? "text-white hover:text-gray-300"
    : "text-black hover:text-gray-600";

  // Logo color
  const logoClass = isScrolled
    ? isDarkMode
      ? "text-white"
      : "text-black"
    : isDarkMode
    ? "text-white"
    : "text-black";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div
            className={`text-xl font-bold transition-colors cursor-pointer hover:opacity-80 ${logoClass}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            May Lwin
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors ${linkClass}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 transition-colors cursor-pointer ${
              isScrolled
                ? isDarkMode
                  ? "text-white hover:text-gray-300"
                  : "text-gray-700 hover:text-black"
                : isDarkMode
                ? "text-white hover:text-gray-300"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white dark:bg-gray-800 border border-gray-100 rounded-lg shadow-lg p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
