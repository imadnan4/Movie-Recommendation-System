import { useState } from 'react';
import { Movie } from '../types';

export function useRecommendations() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getRecommendations = async (movieTitle: string): Promise<Movie[]> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movie_title: movieTitle }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }

      const data = await response.json();

      // Check if recommendations and posters exist and match in length
      if (!data.recommendations || !data.posters || data.recommendations.length !== data.posters.length) {
        throw new Error('Invalid response format from the server');
      }

      // Map the response to the Movie type
      return data.recommendations.map((title: string, index: number) => ({
        title, // Movie title
        poster_path: data.posters[index] || '', // Corresponding poster URL, handle empty poster path
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      return [];
    } finally {
      setLoading(false); // Ensure the loading state is cleared
    }
  };

  return { getRecommendations, loading, error };
}
