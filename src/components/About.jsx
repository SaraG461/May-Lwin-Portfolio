import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Code, Palette, Smartphone, ExternalLink } from "lucide-react";
import { StarsBackground } from "@/components/StarBackground";

const About = ({ hasAnimated }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDark = () =>
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    checkDark(); 
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Code className={`w-8 h-8 mb-4 ${isDarkMode ? "text-white" : "text-black"}`} />,
      title: "Clean Code",
      description: "I write maintainable and efficient code following best practices and design patterns.",
    },
    {
      icon: <Palette className={`w-8 h-8 mb-4 ${isDarkMode ? "text-white" : "text-black"}`} />,
      title: "UI/UX Design",
      description: "I create user-friendly interfaces with a focus on usability with attention to detail.",
    },
    {
      icon: <Smartphone className={`w-8 h-8 mb-4 ${isDarkMode ? "text-white" : "text-black"}`} />,
      title: "Responsive Design",
      description: "I ensure applications work seamlessly across various devices and screen sizes, ensuring great experience on all devices.",
    },
    {
      icon: <ExternalLink className={`w-8 h-8 mb-4 ${isDarkMode ? "text-white" : "text-black"}`} />,
      title: "Performance",
      description: "I optimize applications for speed and efficiency, ensuring fast load times and smooth interactions.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 px-6 transition-colors duration-500"
    >
      {/* Dark mode star background */}
      {isDarkMode && <StarsBackground />}
      {isDarkMode && <div className="absolute inset-0 bg-black/30 -z-10" />}

      <div className="relative max-w-6xl mx-auto">
        <div
          className={`transition-all duration-100 delay-200 ${
            hasAnimated.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className={`text-4xl font-bold mb-12 text-center ${isDarkMode ? "text-white" : "text-black"}`}>
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                I am a Software Engineering graduate with academic experience in full-stack
                development, AI-driven applications, and database systems. I specialize in Python-based
                backend development, React frontends, and cloud-ready solutions using modern development
                tools. I am passionate about building scalable, user-friendly software and enjoy working
                collaboratively to turn ideas into high-quality, real-world applications.
              </p>

              
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-sm border transition-colors duration-500 ${
                    isDarkMode
                      ? "bg-gray-800/70 border-gray-700 text-white"
                      : "bg-white border-gray-200 text-gray-800"
                  }`}
                >
                  {feature.icon}
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
