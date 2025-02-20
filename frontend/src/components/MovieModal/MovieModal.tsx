import React from 'react';
import { MovieModalContent } from './MovieModalContent';
import { MovieModalOverlay } from './MovieModalOverlay';
import type { MovieModalProps } from './types';

export function MovieModal({ movie, isOpen, onClose, loading }: MovieModalProps) {
  console.log('MovieModal rendering with:', {
    isOpen,
    movieTitle: movie?.title,
    loading
  });
  if (!isOpen) return null;

  return (
    <MovieModalOverlay onClose={onClose}>
      <MovieModalContent movie={movie} onClose={onClose} loading={loading} />
    </MovieModalOverlay>
  );
}
