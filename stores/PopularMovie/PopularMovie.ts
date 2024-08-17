export const usePopularMovieStore = defineStore("PopularMovie", {
  state: () => ({
    popularMovie: [] as Array<object>,

    loading: true as boolean,
  }),
  actions: {
    async getPopularMovie(language: string, page: number) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";

      try {
        fetch(
          `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}&api_key=${api_key}`
        ).then((res) => {
          res.json().then((data) => {
            this.popularMovie.push(...data.results);
            this.loading = false;
          });
        });
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        this.loading = false;
      }
    },
  },
});
