import React from 'react';
import type { Movie } from '../../types';

interface SimilarMoviesProps {
  movies?: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

export function SimilarMovies({ movies, onMovieSelect }: SimilarMoviesProps) {
  if (!movies?.length) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Similar Movies</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div 
            key={movie.movie_id}
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300 animate-fadeIn"
            onClick={() => onMovieSelect(movie)}
          >
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="mt-2 text-sm font-medium text-center">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
