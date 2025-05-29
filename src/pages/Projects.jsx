import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-12 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#E3FDFD] mb-10">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project) => (
          <div key={project.id} className="hover:scale-105 transition-transform duration-300">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
