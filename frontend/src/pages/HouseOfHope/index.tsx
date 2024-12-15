import React from 'react';
import { useParams } from 'react-router-dom';

const HouseOfHope = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">House of Hope | Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974" 
              alt="House of Hope"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-6">
              A revolutionary AI-powered analytics platform designed to streamline administrative tasks
              and improve decision-making processes.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'AI'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-purple-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseOfHope; 