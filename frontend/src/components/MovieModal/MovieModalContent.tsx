import React, { useState, useEffect } from 'react';
import { X, Star, Clock, Calendar, Loader2 } from 'lucide-react';
import { MoviePoster } from './MoviePoster';
import { MovieTrailer } from './MovieTrailer';
import { CastList } from './CastList';
import { SimilarMovies } from './SimilarMovies';
import { useMovieDetails } from '../../hooks/useMovieDetails';
import type { MovieModalContentProps } from './types';
import type { Movie } from '../../types';

export function MovieModalContent({ movie: initialMovie, onClose, loading }: MovieModalContentProps) {
  const [movie, setMovie] = useState<Movie>(initialMovie);
  const { fetchMovieDetails } = useMovieDetails('e8d8a2fe1fce1f0e6a5357b4c7feb0f0');

  useEffect(() => {
    const loadMovieDetails = async () => {
      const details = await fetchMovieDetails(movie.tmdb_id);
      setMovie(prev => ({ ...prev, ...details }));
    };
    loadMovieDetails();
  }, [movie.tmdb_id]);

  const handleSimilarMovieSelect = async (selectedMovie: Movie) => {
    setMovie(selectedMovie);
    const details = await fetchMovieDetails(selectedMovie.tmdb_id);
    setMovie(prev => ({ ...prev, ...details }));
  };

  return (
    <div 
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl"
      onClick={e => e.stopPropagation()}
    >
      <div className="relative animate-fadeIn">
        {loading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
            <Loader2 className="w-12 h-12 animate-spin text-white" />
          </div>
        )}
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 z-10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Backdrop */}
        {movie.backdrop_path && (
          <div className="relative h-64 w-full">
            <img
              src={movie.backdrop_path}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              {movie.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{movie.rating.toFixed(1)}</span>
                </div>
              )}
              {movie.runtime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{movie.runtime} min</span>
                </div>
              )}
              {movie.release_date && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                </div>
              )}
            </div>
          </div>

          {/* Trailer */}
          <MovieTrailer trailerKey={movie.trailer_key} />

          {/* Overview */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
          </div>

          {/* Cast */}
          <CastList cast={movie.cast} />

          {/* Similar Movies */}
          <SimilarMovies 
            movies={movie.similar_movies} 
            onMovieSelect={handleSimilarMovieSelect}
          />
        </div>
      </div>
    </div>
  );
}
