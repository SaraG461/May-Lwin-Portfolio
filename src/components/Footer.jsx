import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`py-4 px-6 transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200"
          : "bg-gradient-to-r from-indigo-100 via-pink-100 to-yellow-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
      <p className="text-center text-sm">
          © 2026 May Lwin. Built with ReactJS & Tailwind CSS.
        </p>

        
      </div>

      
      <div
        className={`mt-4 h-[1px] w-full ${
          isDarkMode ? "bg-gray-700/50" : "bg-gray-300/50"
        }`}
      />
    </footer>
  );
};

export default Footer;
