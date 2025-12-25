import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { StarsBackground } from "@/components/StarBackground";

const Projects = ({ hasAnimated, isDarkMode }) => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 transition-colors"
    >
      {/* Dark mode star background */}
      {isDarkMode && <StarsBackground />}
      {isDarkMode && <div className="absolute inset-0 bg-black/30 -z-10" />}

      <div className="relative max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-300 ${
            hasAnimated?.projects
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Heading */}
          <h2
            className={`text-3xl font-bold mb-12 text-center transition-colors ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Featured Projects
          </h2>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isDarkMode={isDarkMode} // pass dark mode to each card
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
