import React, { useState, useEffect } from 'react';
import { Star, Info, Loader2 } from 'lucide-react';
import { Movie } from '../types';
import { MovieModal } from './MovieModal';
import { useMovieDetails } from '../hooks/useMovieDetails';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { fetchMovieDetails, loading } = useMovieDetails('e8d8a2fe1fce1f0e6a5357b4c7feb0f0');
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log('Modal state changed:', isModalOpen);
    if (isModalOpen && movie.tmdb_id) {
      console.log('Fetching details for movie:', {
        title: movie.title,
        tmdb_id: movie.tmdb_id
      });
      fetchMovieDetails(movie.tmdb_id)
        .then(details => {
          console.log('Received movie details:', {
            ...details,
            hasOverview: !!details?.overview,
            hasCast: !!details?.cast?.length,
            hasSimilar: !!details?.similar_movies?.length
          });
          if (details) {
            setMovieDetails({ ...movie, ...details });
          }
        })
        .catch(err => {
          console.error('Error fetching movie details:', {
            error: err,
            message: err.message,
            stack: err.stack
          });
        });
    }
  }, [isModalOpen, movie.tmdb_id]);

  return (
    <>
      <div className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fadeIn">
        <div className="relative aspect-[2/3] group">
          <img
            src={movie.poster_path}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {movie.title}
            </h3>
            <div className="flex items-center justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-300">
                  {movie.rating?.toFixed(1) || 'N/A'}
                </span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Info className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <MovieModal
        movie={movieDetails || movie}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setMovieDetails(null);
        }}
        loading={loading}
      />
    </>
  );
}
