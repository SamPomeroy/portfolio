import React from 'react';

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-[#1E1E1E] border border-[#333] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-lime-400 mb-3 font-mono">{title}</h3>
        <p className="text-[#d4d4d4] text-sm mb-4 flex-grow font-mono">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-sm text-lime-400 hover:text-lime-300 font-mono underline decoration-dotted underline-offset-4 transition duration-200"
          >
            ↳ View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

