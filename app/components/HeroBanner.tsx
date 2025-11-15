// app/components/HeroBanner.tsx

import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/types/movie';
import { getImageUrl } from '@/lib/tmdb';

interface HeroBannerProps {
  movie: Movie;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={getImageUrl(movie.backdrop_path, 'original')}
          alt={movie.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {movie.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-sm md:text-base">
            <span className="text-green-400 font-semibold">
              ⭐ {movie.vote_average.toFixed(1)}
            </span>
            <span className="text-gray-300">
              {new Date(movie.release_date).getFullYear()}
            </span>
          </div>

          <p className="text-gray-200 text-sm md:text-lg line-clamp-3 md:line-clamp-4">
            {movie.overview}
          </p>

          <div className="flex space-x-4 pt-4">
            <Link
              href={`/movie/${movie.id}`}
              className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              ▶ Play
            </Link>
            <Link
              href={`/movie/${movie.id}`}
              className="bg-gray-600/80 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-600 transition"
            >
              ℹ More Info
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}