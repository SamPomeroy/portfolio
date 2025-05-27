import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from 'react-icons/fa';

const sections = [
  { path: '/', label: 'Home', icon: <FaHome /> },
  { path: '/about', label: 'About', icon: <FaUser /> },
  { path: '/skills', label: 'Skills', icon: <FaCode /> },
  { path: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
];

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-20 bg-[#1B1E18] flex flex-col items-center py-6 gap-4 shadow-lg">
      {sections.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `w-16 h-16 rounded-full flex items-center justify-center font-bold transition-colors ${
              isActive ? 'bg-lime-400' : 'bg-[#333] hover:bg-lime-600'
            }`
          }
          title={label}
        >
          {label[0]}
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;
