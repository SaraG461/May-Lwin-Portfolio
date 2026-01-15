import React from "react";
import { skills } from "../data/skills";

const levelLabels = ["Basic", "Working", "Proficient", "Strong", "Expert"];

const Skills = ({ isDarkMode }) => {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <h2
          className={`text-3xl font-bold text-center ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Skills
        </h2>

        {skills.map((group, index) => (
          <div key={index}>
            {/* Title */}
            <h3
              className={`text-xl font-semibold mb-6 ${
                isDarkMode ? "text-cyan-300" : "text-sky-700"
              }`}
            >
              {group.category}
            </h3>

            {/* Box */}
            <div
              className={`p-6 rounded-xl border transition-all duration-300 space-y-6 ${
                isDarkMode
                  ? "bg-gray-800/70 border-white/10 backdrop-blur-md"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              {group.items.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col md:grid md:grid-cols-[140px_1fr_110px] gap-2 md:gap-4 items-center"
                >
                  {/* Skill name */}
                  <span
                    className={`text-sm font-medium mb-1 md:mb-0 ${
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    } md:text-left`}
                  >
                    {skill.name}
                  </span>

                  {/* Bar */}
                  <div className="relative w-full mb-1 md:mb-0">
                    <div
                      className={`h-2 rounded-full ${
                        isDarkMode ? "bg-white/10" : "bg-gray-200"
                      }`}
                    />
                    <div
                      className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-700 ${
                        isDarkMode
                          ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                          : "bg-gradient-to-r from-sky-400 to-indigo-500"
                      }`}
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                  </div>

                  {/* Project amount*/}
                  <span
                    className={`text-xs text-right md:text-right ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {skill.projects} project{skill.projects > 1 && "s"}
                  </span>
                </div>
              ))}

              {/* Level labels aligned under bar */}
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_110px] mt-2">
                <div></div> 
                <div className="flex justify-between text-xs px-1 md:px-0">
                  {levelLabels.map((label, idx) => (
                    <span
                      key={idx}
                      className={`${
                        isDarkMode ? "text-gray-500" : "text-gray-400"
                      } text-[10px] md:text-xs`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <div></div> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
