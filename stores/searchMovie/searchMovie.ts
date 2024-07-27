export const useSearchMovie = defineStore("searchMovie", {
  state: () => ({
    searchMovie: [],
  }),
  actions: {
    setSearchMovie(searchMovie: string, searchMovielang: string) {
      try {
        const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
        fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=${searchMovielang}&page=1&api_key=${api_key}`
        ).then((res) =>
          res.json().then((data) => {
            this.searchMovie = data.results;
            // console.log(this.searchMovie, "searchMovie");
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
});
