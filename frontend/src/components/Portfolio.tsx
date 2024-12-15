import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'House of Hope | Admin Dashboard',
    description: 'A revolutionary AI-powered analytics platform',
    image: 'HOUSE.png',
    tags: ['React', 'Node.js', 'AI'],
  },
  {
    title: 'Tarot Game',
    description: 'Real-time data visualization system',
    image: 'TAROT4.png',
    tags: ['TypeScript', 'D3.js', 'GraphQL'],
  },
  {
    title: 'Money Tracker',
    description: 'Social media analytics tool',
    image: 'MONEY.png',
    tags: ['React', 'Python', 'AWS'],
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-900" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-purple-400 hover:text-purple-300">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-emerald-400 hover:text-emerald-300">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}