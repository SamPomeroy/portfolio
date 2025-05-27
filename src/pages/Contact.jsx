
import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-8 text-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#E3FDFD] mb-6">Contact</h1>
        <p className="text-lg text-[#F0EDE3] leading-relaxed">
          Feel free to reach out via email at{' '}
          <a
            href="mailto:samanthapomeroy38@gmail.com"
            className="flex items-center gap-2 text-lime-400 hover:text-lime-300 underline"
          >
            <FaEnvelope /> samanthapomeroy38@gmail.com
          </a>{' '}
          or connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/samantha-pomeroy-42a36a319/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lime-400 hover:text-lime-300 underline"
          >
            <FaLinkedin /> LinkedIn
          </a>
          
        </p>
      </div>
    </section>
  );
}

export default Contact;