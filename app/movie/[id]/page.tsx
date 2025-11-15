// app/movie/[id]/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { fetchMovieById, getImageUrl } from '@/lib/tmdb';
import { notFound } from 'next/navigation';

interface MoviePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const resolvedParams = await params;
  let movie;
  
  try {
    movie = await fetchMovieById(resolvedParams.id);
  } catch (error) {
    notFound();
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      {/* Backdrop Section */}
      <div className="relative h-[50vh] md:h-[70vh]">
        <Image
          src={getImageUrl(movie.backdrop_path, 'original')}
          alt={movie.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="md:col-span-1">
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={getImageUrl(movie.poster_path, 'w500')}
                alt={movie.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{movie.title}</h1>
              {movie.tagline && (
                <p className="text-gray-400 italic text-lg">{movie.tagline}</p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded font-bold">
                ⭐ {movie.vote_average.toFixed(1)}
              </span>
              <span className="text-gray-300">
                {new Date(movie.release_date).getFullYear()}
              </span>
              <span className="text-gray-300">{formatRuntime(movie.runtime)}</span>
              <span className="text-gray-300 capitalize">{movie.status}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-800 px-4 py-2 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{movie.overview}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {movie.budget > 0 && (
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Budget</h3>
                  <p className="text-xl font-semibold">{formatCurrency(movie.budget)}</p>
                </div>
              )}
              {movie.revenue > 0 && (
                <div>
                  <h3 className="text-gray-400 text-sm mb-1">Revenue</h3>
                  <p className="text-xl font-semibold">{formatCurrency(movie.revenue)}</p>
                </div>
              )}
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}