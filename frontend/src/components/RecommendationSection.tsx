import React from 'react';
import { MovieCard } from './MovieCard';
import { Movie } from '../types';

interface RecommendationSectionProps {
  selectedMovie: string;
  recommendations: { title: string; poster_path: string }[];
  loading: boolean;
}

export function RecommendationSection({ selectedMovie, recommendations, loading }: RecommendationSectionProps) {
  if (!selectedMovie) return null;

  return (
    <div className="mb-8 text-center animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-2">
        Recommendations based on "{selectedMovie}"
      </h2>
      <p className="text-gray-400">Here are some movies you might enjoy</p>

      {loading ? (
        <p className="text-gray-400">Loading recommendations...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {recommendations.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
