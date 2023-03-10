import { TwoMpSharp } from '@mui/icons-material';
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = import.meta.env.VITE_APP_TMDB_KEY;

// movie/popular?api_key=<<api_key>>&language=en-US&page=1
export const tmdbApi = createApi({
  reducerPath: 'tbdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // Get movie by genre
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}&language=en-US`,
    }),

    //* Get Movies by Type
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        //* Get Movies By Search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }
        //* get movies by categories
        if (
          genreIdOrCategoryName
          && typeof genreIdOrCategoryName === 'string'
        ) {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }
        //* get movies by genre
        if (
          genreIdOrCategoryName
          && typeof genreIdOrCategoryName === 'number'
        ) {
          console.log('here');
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        //* Get popular movies
        return `movie/popular?&api_key=${tmdbApiKey}&language=en-US&${page}`;
      },
    }),

    //* get movies
    getMovie: builder.query({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),

    //* Get User Specific Movies
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),

    getRecommendation: builder.query({
      query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),

    //* Get actors info
    getActor: builder.query({
      query: (id) => `/person/${id}?api_key=${tmdbApiKey}&language=en-US`,
    }),

    //* Get movies by actor id
    getMoviesByActorId: builder.query({
      query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
    }),

  }),
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetListQuery,
  useGetRecommendationQuery,
  useGetActorQuery,
  useGetMoviesByActorIdQuery,
} = tmdbApi;
