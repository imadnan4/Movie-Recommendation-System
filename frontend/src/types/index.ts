export interface Movie {
  movie_id: number;
  tmdb_id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path?: string;
  genres?: string[];
  rating?: number;
  release_date?: string;
  runtime?: number;
  cast?: CastMember[];
  trailer_key?: string;
  similar_movies?: Movie[];
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path?: string;
}
