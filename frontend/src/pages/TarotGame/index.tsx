import React from 'react';

const TarotGame = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Tarot Game</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1916" 
              alt="Tarot Game"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-6">
              Real-time data visualization system for interactive tarot card readings
              and mystical experiences.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'D3.js', 'GraphQL'].map((tag) => (
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

export default TarotGame; 