import React from 'react';
import type { MoviePosterProps } from './types';

export function MoviePoster({ movie }: MoviePosterProps) {
  return (
    <div className="w-full md:w-2/5 relative">
      <img
        src={movie.poster_path}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
    </div>
  );
}
