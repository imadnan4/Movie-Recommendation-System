import React from 'react';
import { Film } from 'lucide-react';

export function Header() {
  return (
    <header className="text-center mb-12 animate-fadeDown">
      <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
        <Film className="w-10 h-10 animate-pulse" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Movie Recommender System
        </span>
      </h1>
      <p className="text-gray-400">Discover your next favorite movie</p>
    </header>
  );
}