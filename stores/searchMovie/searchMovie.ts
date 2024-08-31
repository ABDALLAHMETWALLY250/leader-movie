export const useSearchMovie = defineStore("searchMovie", {
  state: () => ({
    searchMovie: [] as Array<object>,
    searchText: "" as string,
    loading: false as boolean,
    page: 1 as number,
  }),
  actions: {
    async setSearchMovie(
      searchMovie: string,
      searchMovielang: string,
      page: number
    ) {
      this.loading = true;
      try {
        this.loading = true;
        const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
        await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${this.searchText}&include_adult=false&language=${searchMovielang}&page=${page}&api_key=${api_key}`
        ).then((res) =>
          res.json().then((data) => {
            this.searchMovie.push(...data.results);
            this.page = data.page;
            this.loading = false;
          })
        );
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
  },
});
