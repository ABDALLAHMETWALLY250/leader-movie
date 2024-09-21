export const useAllMoviesStore = defineStore("allMovies", {
  state: () => ({
    allMovies: [] as Array<any>,
  }),
  actions: {
    async setAllMovies(language: string) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";

      try {
        await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=${language}&page=1&sort_by=popularity.desc&api_key=${api_key}`
        ).then((res) =>
          res.json().then((data) => {
            this.allMovies = data.results;
          })
        );
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    },
  },
});
