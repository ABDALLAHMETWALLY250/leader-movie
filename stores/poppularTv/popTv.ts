export const usePopTv = defineStore("popTv", {
  state: () => ({
    popTv: [],
    loading: false,
  }),

  actions: {
    async getPopTv(language: string) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
      this.loading = true;
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/tv/day?language=${language}&page=1&api_key=${api_key}`
        );
        const data = await response.json();

        this.popTv = data.results;
      } catch (error) {
        console.error("Error fetching popular TV shows:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
