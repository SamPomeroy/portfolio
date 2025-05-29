import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-5xl font-bold mb-6 text-lime-400">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg max-w-xl text-[#E3FDFD] leading-relaxed mb-6">
        I'm Samantha, a developer passionate about second chances, clean code,
        and real impact.
      </p>
      <a
        href="/projects"
        className="text-lg text-lime-400 hover:text-lime-300 underline decoration-dotted underline-offset-4 transition duration-200"
      >
        ✨ Explore My Work
      </a>
    </div>
  );
}
