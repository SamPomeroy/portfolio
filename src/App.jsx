import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import About from './pages/About';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <MainPanel></MainPanel>
    </div>
  );
}

export default App;
