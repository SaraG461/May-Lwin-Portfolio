import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project, isDarkMode }) => {
  return (
    <div
      className={`
        group flex flex-col h-full rounded-xl border transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${isDarkMode ? "bg-gray-800 border-white/20" : "bg-white border-gray-200"}
      `}
    >
      {/* Thumbnail / Header */}
      <div
        className={`
          h-40 flex items-center justify-center
          bg-gradient-to-br
          ${isDarkMode ? "from-gray-700 to-gray-800" : "from-gray-100 to-gray-200"}
        `}
      >
        <div className={`text-5xl font-bold ${isDarkMode ? "text-gray-400" : "text-gray-300"}`}>
          {project.title.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Project Title */}
        <h3
          className={`
            text-base font-semibold mb-2 transition-colors
            ${isDarkMode ? "text-white group-hover:text-gray-300" : "text-black group-hover:text-gray-600"}
          `}
        >
          {project.title}
        </h3>

        {/* Project Description */}
        <p
          className={`text-sm flex-grow leading-relaxed ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        {/* Project Links */}
        {(project.github || project.demo) && (
          <div className="flex gap-3 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  transition-colors
                  ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"}
                `}
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  transition-colors
                  ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-black"}
                `}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
