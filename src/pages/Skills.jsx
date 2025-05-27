import React from 'react';
import { skills } from '../data/skills';
import { FaCode, FaTools, FaLightbulb } from 'react-icons/fa';

const skillIcons = {
  technical: FaCode,
  tools: FaTools,
  soft: FaLightbulb,
};

function Skills() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-12 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#E3FDFD] mb-10">
        Skills
      </h1>
      <div className="w-full max-w-4xl text-left">
        {Object.entries(skills).map(([category, skillList]) => {
          const Icon = skillIcons[category] || FaLightbulb;
          return (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold capitalize text-lime-300 mb-3 flex items-center">
                <Icon className="mr-2" /> {category}
              </h2>
              <ul className="list-disc list-inside space-y-1 text-lg text-[#F0EDE3]">
                {skillList.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
