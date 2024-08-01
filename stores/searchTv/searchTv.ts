export const searchTvStore = defineStore("searchTv", {
  state: () => ({
    tvs: [],
    totalPages: 0,
    loading: false,
  }),

  actions: {
    async getSearchTv(language: string, search: string, page: number) {
      this.loading = true;

      try {
        const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";

        const response = await fetch(
          `https://api.themoviedb.org/3/search/tv?include_adult=true&language=${language}&page=${page}&query=${search}&api_key=${api_key}`
        );
        const data = await response.json();

        this.tvs = data.results;
        this.totalPages = data.total_pages;

        console.log(this.tvs);

        this.loading = false;
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        this.loading = false;
      }
    },
  },
});
