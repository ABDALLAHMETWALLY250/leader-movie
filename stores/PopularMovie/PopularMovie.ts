export const usePopularMovieStore = defineStore("PopularMovie", {
  state: () => ({
    popularMovie: [],
  }),
  actions: {
    async getPopularMovie(language: string) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=${language}&page=1&api_key=${api_key}`
        );
        const data = await response.json();
        // console.log(data.results, "popularMovie");
        this.popularMovie = data.results;
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    },
  },
});
