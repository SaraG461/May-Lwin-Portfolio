import React from "react";
import { Github } from "lucide-react";

const ProjectCard = ({ project, isDarkMode }) => {
  return (
    <div
      className={`
        group relative flex flex-col rounded-xl border transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${isDarkMode ? "bg-gray-800 border-white/20" : "bg-white border-gray-200"}
      `}
    >
      {/* Background box behind image */}
      <div
        className={`
          absolute top-2 left-2 right-2 h-[calc(100%/2.5)] rounded-t-xl
          ${isDarkMode ? "bg-gray-700/30" : "bg-gray-200/50"}
          -z-10
        `}
      />

      {/* Image container with fixed aspect ratio */}
      <div className="w-full aspect-[16/9] overflow-hidden rounded-t-xl flex items-center justify-center">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Project Title */}
        <h3
          className={`
            text-lg font-semibold mb-2 transition-colors
            ${isDarkMode ? "text-white group-hover:text-gray-300" : "text-black group-hover:text-gray-600"}
          `}
        >
          {project.title}
        </h3>

        {/* Project Description */}
        <p
          className={`text-sm flex-grow leading-relaxed mb-4 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`
                px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300
                ${isDarkMode 
                  ? "bg-cyan-400/20 text-cyan-200 border-white/15 hover:-translate-y-0.5 hover:shadow-lg" 
                  : "bg-gradient-to-r from-slate-100 via-indigo-100 to-slate-200 text-slate-800 border border-slate-300 hover:border-slate-400 hover:-translate-y-0.5 hover:shadow-md"
                }
              `}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <div className="flex space-x-4 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 text-sm transition-colors
              ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"}
            `}
          >
            <Github className="w-5 h-5" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
