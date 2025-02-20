import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { RecommendationSection } from './components/RecommendationSection';
import { Footer } from './components/Footer';
import { BackgroundBlobs } from './components/BackgroundBlobs';
import { useRecommendations } from './hooks/useRecommendations';
import type { Movie } from './types';

export function App() {
  const [query, setQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const { getRecommendations, loading, error } = useRecommendations();

  const handleSearch = async () => {
    if (!query.trim()) return;
    setSelectedMovie(query);
    const results = await getRecommendations(query);
    setRecommendations(results);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-900 to-black text-white">
      <div className="relative">
        <BackgroundBlobs />
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-8">
            <Header />
            <SearchBar
              query={query}
              loading={loading}
              onQueryChange={setQuery}
              onSearch={handleSearch}
            />
            {error && (
              <p className="text-red-500 text-center mt-4" role="alert">
                {error}
              </p>
            )}
            <RecommendationSection
              selectedMovie={selectedMovie}
              recommendations={recommendations}
              loading={loading}
            />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

