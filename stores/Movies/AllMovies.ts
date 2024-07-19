export const useAllMoviesStore = defineStore("allMovies", {
  state: () => ({
    allMovies: [],
  }),
  actions: {
    setAllMovies(language: any) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";

      fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=${language}&page=1&sort_by=popularity.desc&api_key=${api_key}`
      ).then((res) =>
        res.json().then((data) => {
          // console.log(data.results, "movies");

          this.allMovies = data.results;
        })
      );
    },
  },
});
