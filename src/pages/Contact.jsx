import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/images/SamNov24.jpg";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qwejpff', 'template_oendt53', form.current, 'Q8UPudRsQUocxX9Jm')
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      }, (error) => {
        alert("Something went wrong: " + error.text);
      });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-8 text-center">
      <div className="max-w-2xl w-full">
        <img
          src={profileImage}
          alt="Samantha Pomeroy"
          className="w-40 h-40 mx-auto rounded-full shadow-lg border-4 border-lime-400 mb-6 object-cover"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-[#E3FDFD] mb-6">Contact</h1>
        <p className="text-lg text-[#F0EDE3] leading-relaxed mb-6">
          Feel free to reach out via email at{' '}
          <a
            href="mailto:samanthapomeroy38@gmail.com"
            className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 underline"
          >
            <FaEnvelope /> samanthapomeroy38@gmail.com
          </a>{' '}
          or connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/samantha-pomeroy-42a36a319/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 underline"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </p>

<form
  ref={form}
  onSubmit={sendEmail}
  className="flex flex-col gap-4 bg-[#1a1a1a] bg-opacity-80 p-6 rounded-xl shadow-md text-left"
>
  <input
    type="text"
    name="user_name"
    placeholder="Your Name"
    className="p-3 rounded bg-[#2a2a2a] text-lime-300 placeholder-gray-400 border border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-300"
    required
  />
  <input
    type="email"
    name="user_email"
    placeholder="Your Email"
    className="p-3 rounded bg-[#2a2a2a] text-lime-300 placeholder-gray-400 border border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-300"
    required
  />
  <textarea
    name="message"
    rows="5"
    placeholder="Your Message"
    className="p-3 rounded bg-[#2a2a2a] text-lime-300 placeholder-gray-400 border border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-300"
    required
  ></textarea>
<button
  type="submit"
  className="bg-[#2a2a2a] text-lime-300 border border-lime-400 hover:bg-[#333] hover:border-lime-300 transition duration-200 ease-in-out font-semibold py-2 px-4 rounded shadow-sm"
>
  Send Message
</button>
</form>
      </div>
    </section>
  );
}

export default Contact;
