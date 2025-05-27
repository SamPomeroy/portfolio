import React from 'react';

import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';
import About from '../pages/About';
import { Routes, Route } from 'react-router-dom';

function MainPanel() {
  return (
    <main className="ml-16 p-6 min-h-screen bg-[#121212] text-[#E3FDFD] transition-all duration-300">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </main>
  );
}

export default MainPanel;
