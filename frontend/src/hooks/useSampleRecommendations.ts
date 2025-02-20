import { Movie } from '../types';

export function useRecommendations() {
  const getRecommendations = async (movieTitle: string): Promise<Movie[]> => {
    const response = await fetch('http://127.0.0.1:5000/recommend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movie_title: movieTitle }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch recommendations');
    }

    return response.json();
  };

  return { getRecommendations };
}

