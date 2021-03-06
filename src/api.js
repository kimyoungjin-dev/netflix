import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "84746f07785a093ed42c3cee12d5a642",
    language: "en-US",
  },
});

export const movieApi = {
  upcoming: () => api.get("movie/upcoming"),
  nowPlaying: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
  review: (id) => api.get(`movie/${id}/reviews`),
  movieCreadit: (id) => api.get(`movie/${id}/credits`),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),

  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  airingToday: () => api.get("tv/airing_today"),
  popular: () => api.get("tv/popular"),
  showCreadit: (id) => api.get(`tv/${id}/credits`),
  review: (id) => api.get(`tv/${id}/reviews`),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
};

export const trending = {
  movieTrending: () => api.get("trending/movie/week"),
  showTrending: () => api.get("trending/tv/week"),
};
