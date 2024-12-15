import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-black" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src="IMG.jpg"
                alt="Profile"
                className="relative w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
              About Me
            </h2>
            <p className="text-gray-400 leading-relaxed">
              In the depths of code and creativity, I craft digital experiences that push the boundaries
              of what's possible. With over 2 years of experience in full-stack development, I've
              learned that true innovation lies at the intersection of technology and artistry.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey began in the realm of traditional software engineering, but my passion for
              creative art and technology has led me to explore new frontiers in web development and interactive
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}