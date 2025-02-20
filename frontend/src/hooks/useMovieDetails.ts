import { useState } from 'react';
import type { Movie, CastMember } from '../types';

export function useMovieDetails(apiKey: string) {
  const [loading, setLoading] = useState(false);

  const fetchMovieDetails = async (tmdbId: number): Promise<Partial<Movie>> => {
    setLoading(true);
    try {
      // Fetch movie details
      console.log('Fetching movie details for TMDB ID:', tmdbId);
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${apiKey}&append_to_response=credits,similar`
      );
      
      if (!movieResponse.ok) {
        console.error('Movie details fetch failed:', await movieResponse.text());
        throw new Error('Failed to fetch movie details');
      }
      
      const movieData = await movieResponse.json();
      console.log('Movie details response:', movieData);

      // Fetch trailer
      const videosResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${tmdbId}/videos?api_key=${apiKey}`
      );
      const videosData = await videosResponse.json();
      const trailer = videosData.results.find(
        (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
      );

      // Format cast
      const cast = movieData.credits?.cast?.slice(0, 10).map((member: any) => ({
        id: member.id,
        name: member.name,
        character: member.character,
        profile_path: member.profile_path
          ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
          : undefined,
      })) || [];

      // Format similar movies
      const similar_movies = movieData.similar?.results?.slice(0, 6).map((movie: any) => ({
        movie_id: movie.id,
        tmdb_id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : '',
        overview: movie.overview,
        rating: movie.vote_average,
      })) || [];

      console.log('Trailer response:', videosData);
      console.log('Cast:', cast);
      console.log('Similar movies:', similar_movies);

      return {
        movie_id: movieData.id,
        tmdb_id: movieData.id,
        title: movieData.title,
        overview: movieData.overview,
        poster_path: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
        backdrop_path: `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`,
        genres: movieData.genres?.map((g: any) => g.name),
        rating: movieData.vote_average,
        release_date: movieData.release_date,
        runtime: movieData.runtime,
        cast,
        trailer_key: trailer?.key,
        similar_movies,
      };
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return {};
    } finally {
      setLoading(false);
    }
  };

  return { fetchMovieDetails, loading };
}
