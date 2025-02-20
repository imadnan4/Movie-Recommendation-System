import React from 'react';
import { X, Star } from 'lucide-react';
import type { MovieDetailsProps } from './types';

export function MovieDetails({ movie, onClose }: MovieDetailsProps) {
  return (
    <div className="w-full md:w-3/5 p-6 md:p-8">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <h2 className="text-2xl md:text-3xl font-bold mb-4">{movie.title}</h2>
      
      <div className="flex items-center gap-2 mb-6">
        <Star className="w-5 h-5 text-yellow-400 fill-current" />
        <span className="text-lg font-semibold">{movie.rating || 4.5}</span>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
        </div>

        {movie.genres && movie.genres.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-500/20 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
