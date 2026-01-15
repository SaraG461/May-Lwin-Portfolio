import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { contactLinks } from "../data/contact";

const Contact = ({ hasAnimated, isDarkMode }) => {

  const contactLinkWithIcons = contactLinks.map((link) => ({
    ...link,
    icon:
      link.label === "Email"
        ? <Mail className="w-5 h-5 mr-2" />
        : link.label === "GitHub"
        ? <Github className="w-5 h-5 mr-2" />
        : <Linkedin className="w-5 h-5 mr-2" />,
  }));

  return (
    <section id="contact" className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        <div
          className={`transition-all duration-1000 delay-500 ${
            hasAnimated.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`text-4xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Connect
          </h2>
          <p
            className={`text-xl mb-12 max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm a passionate Software Developer, building scalable and user-friendly web
            applications using React, Python, and JavaScript. I'm eager to start my early
            career by contributing to innovative projects that make a positive impact to society. Feel free
            to reach out for job opportunities or just to say hello!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 flex-wrap">
            {contactLinkWithIcons.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-xl font-medium transition-all duration-300
                  ${
                    link.label === "Email"
                      ? isDarkMode
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-black text-white hover:bg-gray-800"
                      : link.label === "GitHub"
                      ? isDarkMode
                        ? "bg-gray-800 text-white hover:bg-gray-700"
                        : "bg-gray-100 text-black hover:bg-black hover:text-white"
                      : isDarkMode
                      ? "bg-blue-800 text-white hover:bg-blue-600"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white"
                  }
                `}
              >
                {link.icon}
                <span className="text-sm md:text-base">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
