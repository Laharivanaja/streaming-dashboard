// app/components/MovieRow.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/types/movie';
import { getImageUrl } from '@/lib/tmdb';

interface MovieRowProps {
  movies: Movie[];
  categoryTitle: string;
}

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 px-4">
        {categoryTitle}
      </h2>
      
      <div className="relative group">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 scroll-smooth snap-x snap-mandatory">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
              className="min-w-[150px] md:min-w-[200px] snap-start group/item"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-md transition-transform duration-300 hover:scale-105 hover:z-10">
                <Image
                  src={getImageUrl(movie.poster_path, 'w342')}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 150px, 200px"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <div>
                    <h3 className="text-white font-semibold text-sm line-clamp-2">
                      {movie.title}
                    </h3>
                    <p className="text-green-400 text-xs mt-1">
                      ⭐ {movie.vote_average.toFixed(1)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}