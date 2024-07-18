export const useMovieSwiper = defineStore("movieSwiper", {
  state: () => ({
    movieSwiper: [],
  }),
  actions: {
    setMovieSwiper(language: any) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
      fetch(
        `https://api.themoviedb.org/3/trending/movie/day?language=${language}&page=1&api_key=${api_key}`
      ).then((res) =>
        res.json().then((data) => {
          console.log(data.results, "moviesSwiper");
          this.movieSwiper = data.results;
        })
      );
    },
  },
});
