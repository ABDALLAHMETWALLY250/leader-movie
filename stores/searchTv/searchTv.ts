export const searchTvStore = defineStore("searchTv", {
  state: () => ({
    tvs: [] as Array<object>,

    loading: false as boolean,
    searchText: "" as string,
    page: 1 as number,
  }),

  actions: {
    async getSearchTv(language: string, search: string, page: number) {
      this.loading = true;

      try {
        const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
        fetch(
          `https://api.themoviedb.org/3/search/tv?include_adult=true&language=${language}&page=${page}&query=${this.searchText}&api_key=${api_key}`
        ).then((res) => {
          res.json().then((data) => {
            this.tvs.push(...data.results);
            this.page = data.page;
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
