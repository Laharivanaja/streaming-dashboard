// lib/mockData.ts
import { TMDBResponse, MovieDetail } from '@/types/movie';

const mockMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    poster_path: "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    overview: "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison.",
    release_date: "1994-09-23",
    vote_average: 8.7,
    popularity: 100
  },
  {
    id: 2,
    title: "The Godfather",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.",
    release_date: "1972-03-14",
    vote_average: 8.7,
    popularity: 95
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    overview: "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and District Attorney Harvey Dent.",
    release_date: "2008-07-16",
    vote_average: 8.5,
    popularity: 90
  },
  {
    id: 4,
    title: "Pulp Fiction",
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop_path: "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge.",
    release_date: "1994-09-10",
    vote_average: 8.5,
    popularity: 88
  },
  {
    id: 5,
    title: "Forrest Gump",
    poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    backdrop_path: "/7c9UVPPiTPltoZVDH7i7vcfbnsN.jpg",
    overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events.",
    release_date: "1994-06-23",
    vote_average: 8.5,
    popularity: 85
  },
  {
    id: 6,
    title: "Inception",
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology.",
    release_date: "2010-07-15",
    vote_average: 8.4,
    popularity: 92
  },
  {
    id: 7,
    title: "The Matrix",
    poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop_path: "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    overview: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    release_date: "1999-03-30",
    vote_average: 8.2,
    popularity: 87
  },
  {
    id: 8,
    title: "Interstellar",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path: "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    release_date: "2014-11-05",
    vote_average: 8.3,
    popularity: 89
  }
];

const topRatedMovies = [
  {
    id: 11,
    title: "Fight Club",
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop_path: "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression.",
    release_date: "1999-10-15",
    vote_average: 8.4,
    popularity: 94
  },
  {
    id: 12,
    title: "The Lord of the Rings",
    poster_path: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    backdrop_path: "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
    overview: "Young hobbit Frodo Baggins must destroy an ancient ring.",
    release_date: "2001-12-18",
    vote_average: 8.4,
    popularity: 91
  },
  {
    id: 13,
    title: "Star Wars",
    poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    backdrop_path: "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
    overview: "Luke Skywalker joins forces to rescue Princess Leia from the evil Darth Vader.",
    release_date: "1977-05-25",
    vote_average: 8.2,
    popularity: 86
  },
  {
    id: 14,
    title: "Goodfellas",
    poster_path: "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    overview: "The story of Henry Hill and his life in the mob.",
    release_date: "1990-09-12",
    vote_average: 8.5,
    popularity: 83
  },
  {
    id: 15,
    title: "The Silence of the Lambs",
    poster_path: "/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    backdrop_path: "/7NhZeNdIzPT0BRx2pOvGktnnmNZ.jpg",
    overview: "A young FBI cadet must receive the help of an incarcerated cannibal killer.",
    release_date: "1991-02-14",
    vote_average: 8.3,
    popularity: 81
  }
];

const nowPlayingMovies = [
  {
    id: 21,
    title: "Oppenheimer",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    overview: "The story of J. Robert Oppenheimer and the development of the atomic bomb.",
    release_date: "2023-07-21",
    vote_average: 8.1,
    popularity: 98
  },
  {
    id: 22,
    title: "Dune: Part Two",
    poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    overview: "Paul Atreides unites with Chani as he seeks revenge against the conspirators.",
    release_date: "2024-03-01",
    vote_average: 8.2,
    popularity: 95
  },
  {
    id: 23,
    title: "Killers of the Flower Moon",
    poster_path: "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    backdrop_path: "/53BC9F2tpZnsGno2cLhzvGprDYS.jpg",
    overview: "Members of the Osage tribe are murdered under mysterious circumstances.",
    release_date: "2023-10-20",
    vote_average: 7.8,
    popularity: 89
  },
  {
    id: 24,
    title: "Poor Things",
    poster_path: "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    backdrop_path: "/uVlUu174iiKhsUGqnOSy46eIIMU.jpg",
    overview: "The incredible tale about the fantastical evolution of Bella Baxter.",
    release_date: "2023-12-08",
    vote_average: 7.7,
    popularity: 86
  },
  {
    id: 25,
    title: "The Holdovers",
    poster_path: "/ow3OI7Y30t6JQCFVS1MeK0Wz5ru.jpg",
    backdrop_path: "/xi7tQ6u1cPK9kh5V8qFvqybODm5.jpg",
    overview: "A cranky history teacher at a prep school is forced to remain on campus over Christmas.",
    release_date: "2023-10-27",
    vote_average: 7.9,
    popularity: 84
  }
];

const upcomingMovies = [
  {
    id: 31,
    title: "Avatar 3",
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    backdrop_path: "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
    overview: "The third installment in James Cameron's Avatar franchise.",
    release_date: "2025-12-19",
    vote_average: 7.9,
    popularity: 92
  },
  {
    id: 32,
    title: "Mission: Impossible 8",
    poster_path: "/h9YlRHAZWOWtGonllmj6JJg1FrE.jpg",
    backdrop_path: "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
    overview: "Ethan Hunt returns for another impossible mission.",
    release_date: "2025-05-23",
    vote_average: 8.0,
    popularity: 88
  },
  {
    id: 33,
    title: "Fantastic Four",
    poster_path: "/qrwI2T844nrBUv3eDwQZRDdgSFs.jpg",
    backdrop_path: "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
    overview: "Marvel's first family gets a fresh start in the MCU.",
    release_date: "2025-07-25",
    vote_average: 7.5,
    popularity: 85
  },
  {
    id: 34,
    title: "Blade",
    poster_path: "/xEQKMx8vbNx8qzBbWRqF7qZZJrM.jpg",
    backdrop_path: "/fm9aT7wwLYKoC4Crc92kk12Yppm.jpg",
    overview: "The legendary vampire hunter returns.",
    release_date: "2025-11-07",
    vote_average: 7.6,
    popularity: 82
  },
  {
    id: 35,
    title: "Thunderbolts",
    poster_path: "/qBJXqVYmWRkRxAEgQvjpWgGZH9b.jpg",
    backdrop_path: "/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
    overview: "A group of supervillains are recruited for a dangerous mission.",
    release_date: "2025-07-25",
    vote_average: 7.4,
    popularity: 80
  }
];

// Create details for all movies
function createMovieDetail(movie: any): MovieDetail {
  return {
    ...movie,
    genres: [
      { id: 18, name: "Drama" },
      { id: 28, name: "Action" }
    ],
    runtime: 142,
    tagline: `Experience ${movie.title}`,
    status: "Released",
    budget: 25000000,
    revenue: 50000000
  };
}

// Create a map for all movies
export const allMoviesMap = new Map<number, MovieDetail>();
[...mockMovies, ...topRatedMovies, ...nowPlayingMovies, ...upcomingMovies].forEach(movie => {
  allMoviesMap.set(movie.id, createMovieDetail(movie));
});

export const mockResponse: TMDBResponse = {
  page: 1,
  results: mockMovies,
  total_pages: 1,
  total_results: mockMovies.length
};

export const mockTopRated: TMDBResponse = {
  page: 1,
  results: topRatedMovies,
  total_pages: 1,
  total_results: topRatedMovies.length
};

export const mockNowPlaying: TMDBResponse = {
  page: 1,
  results: nowPlayingMovies,
  total_pages: 1,
  total_results: nowPlayingMovies.length
};

export const mockUpcoming: TMDBResponse = {
  page: 1,
  results: upcomingMovies,
  total_pages: 1,
  total_results: upcomingMovies.length
};

export const mockMovieDetail: MovieDetail = createMovieDetail(mockMovies[0]);