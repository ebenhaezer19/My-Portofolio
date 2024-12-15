import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 mb-6 animate-pulse">
          Krisopras Eben Haezer
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl mb-8 font-light">
          Full Stack Developer & Creative Technologist
        </p>
        <div className="inline-block p-[2px] bg-gradient-to-r from-purple-500 to-emerald-500 rounded-lg transition-all duration-300 hover:scale-105">
          <button className="px-8 py-3 bg-gray-900 rounded-lg text-white hover:bg-gray-800 transition-colors">
            Explore My Work
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </div>
    </section>
  );
}