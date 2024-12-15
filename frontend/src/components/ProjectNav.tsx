import React from 'react';
import { Link } from 'react-router-dom';

const ProjectNav = () => {
  const projects = [
    {
      title: 'House of Hope',
      path: '/projects/house-of-hope'
    },
    {
      title: 'Tarot Game',
      path: '/projects/tarot-game'
    },
    {
      title: 'Money Tracker',
      path: '/projects/money-tracker'
    }
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold">
          Portfolio
        </Link>
        <div className="flex gap-4">
          {projects.map((project) => (
            <Link
              key={project.path}
              to={project.path}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {project.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ProjectNav; 