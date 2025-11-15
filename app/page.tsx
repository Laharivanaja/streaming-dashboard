// app/page.tsx

import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
} from '@/lib/tmdb';

export default async function Home() {
  // Fetch all data in parallel for better performance
  const [popularData, topRatedData, nowPlayingData, upcomingData] = await Promise.all([
    fetchPopularMovies(),
    fetchTopRatedMovies(),
    fetchNowPlayingMovies(),
    fetchUpcomingMovies(),
  ]);

  // Get hero movie (first popular movie)
  const heroMovie = popularData.results[0];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Banner */}
      <HeroBanner movie={heroMovie} />

      {/* Movie Rows */}
      <div className="container mx-auto space-y-8 py-8">
        <div id="popular">
          <MovieRow movies={popularData.results} categoryTitle="Popular on StreamFlix" />
        </div>

        <div id="top-rated">
          <MovieRow movies={topRatedData.results} categoryTitle="Top Rated" />
        </div>

        <div id="now-playing">
          <MovieRow movies={nowPlayingData.results} categoryTitle="Now Playing" />
        </div>

        <div id="upcoming">
          <MovieRow movies={upcomingData.results} categoryTitle="Coming Soon" />
        </div>
      </div>
    </main>
  );
}