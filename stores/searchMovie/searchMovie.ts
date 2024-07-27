export const useSearchMovie = defineStore("searchMovie", {
  state: () => ({
    searchMovie: [],
    searchText: "",
    totalPages: null,
    loading: false,
  }),
  actions: {
    setSearchMovie(searchMovie: string, searchMovielang: string, page: number) {
      this.loading = true;
      try {
        this.loading = true;
        const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
        fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=${searchMovielang}&page=${page}&api_key=${api_key}`
        ).then((res) =>
          res.json().then((data) => {
            this.searchMovie = data.results;
            this.totalPages = data.total_pages;
            this.loading = false;
            // console.log(this.totalPages, "searchMovie");
          })
        );
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
  },
});
