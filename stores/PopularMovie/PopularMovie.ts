export const usePopularMovieStore = defineStore("PopularMovie", {
  state: () => ({
    popularMovie: [],
    loading: false,
    totalPages: null,
  }),
  actions: {
    async getPopularMovie(language: string, page: number) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}&api_key=${api_key}`
        );
        const data = await response.json();

        this.loading = !this.loading;
        this.popularMovie = data.results;
        this.totalPages = data.total_pages;
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        this.loading = false;
      }
    },
  },
});
