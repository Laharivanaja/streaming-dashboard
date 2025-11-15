// lib/tmdb.ts

import { TMDBResponse, MovieDetail } from '@/types/movie';
import { mockResponse, mockTopRated, mockNowPlaying, mockUpcoming, mockMovieDetail, allMoviesMap } from './mockData';

export async function fetchPopularMovies(): Promise<TMDBResponse> {
  return Promise.resolve(mockResponse);
}

export async function fetchTopRatedMovies(): Promise<TMDBResponse> {
  return Promise.resolve(mockTopRated);
}

export async function fetchNowPlayingMovies(): Promise<TMDBResponse> {
  return Promise.resolve(mockNowPlaying);
}

export async function fetchUpcomingMovies(): Promise<TMDBResponse> {
  return Promise.resolve(mockUpcoming);
}

export async function fetchMovieById(id: string): Promise<MovieDetail> {
  const movieId = parseInt(id);
  const movie = allMoviesMap.get(movieId);
  
  if (movie) {
    return Promise.resolve(movie);
  }
  
  return Promise.resolve({ ...mockMovieDetail, id: movieId });
}

export function getImageUrl(path: string | null, size: 'w342' | 'w500' | 'original' = 'w500'): string {
  if (!path) return '/placeholder.png';
  return `https://image.tmdb.org/t/p/${size}${path}`;
}