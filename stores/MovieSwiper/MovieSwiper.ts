export const useMovieSwiper = defineStore("movieSwiper", {
  state: () => ({
    movieSwiper: [] as Array<any>,
  }),
  actions: {
    async setMovieSwiper(language: string) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
      try {
        await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?language=${language}&page=1&api_key=${api_key}`
        ).then((res) =>
          res.json().then((data) => {
            this.movieSwiper = data.results;
            // console.log(this.movieSwiper, "movieSwiper");
          })
        );
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    },
  },
});
