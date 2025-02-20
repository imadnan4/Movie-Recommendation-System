import type { Movie } from '../../types';

export interface MovieModalProps {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
  loading?: boolean;
}

export interface MovieModalContentProps {
  movie: Movie;
  onClose: () => void;
  loading?: boolean;
}

export interface MovieModalOverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

export interface MoviePosterProps {
  movie: Movie;
}

export interface MovieDetailsProps {
  movie: Movie;
  onClose: () => void;
}
