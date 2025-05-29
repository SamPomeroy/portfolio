import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h2 className="text-4xl font-semibold mb-6 text-lime-400">About Me</h2>
      <p className="text-lg max-w-2xl text-[#E3FDFD] leading-relaxed mb-6">
        I’m a full stack developer with a background in customer service, resilience, and tech for good. 
        I'm rebuilding my life and career with purpose and intention.
      </p>
      <div className="text-[#F0EDE3] text-lg max-w-xl">
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>💻 Skilled in React, JavaScript, and Python.</li>
          <li>💡 Passionate about second chances and social impact.</li>
          <li>📢 Strong communicator and problem solver.</li>
        </ul>
      </div>
    </div>
  );
}