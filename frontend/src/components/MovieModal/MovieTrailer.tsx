import React from 'react';

interface MovieTrailerProps {
  trailerKey?: string;
}

export function MovieTrailer({ trailerKey }: MovieTrailerProps) {
  if (!trailerKey) return null;

  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
