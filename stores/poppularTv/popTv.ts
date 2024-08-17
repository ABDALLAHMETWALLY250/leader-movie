export const usePopTv = defineStore("popTv", {
  state: () => ({
    popTv: [] as Array<object>,
    popTvPage: [] as Array<object>,
    loading: false as boolean,
  }),

  actions: {
    async getPopTv(language: string, page: number) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
      this.loading = true;
      try {
        fetch(
          `https://api.themoviedb.org/3/trending/tv/day?language=${language}&page=${page}&api_key=${api_key}`
        ).then((res) => {
          res.json().then((data) => {
            this.popTv.push(...data.results);
            this.loading = false;
          });
        });
      } catch (error) {
        console.error("Error fetching popular TV shows:", error);
      } finally {
        this.loading = false;
      }
    },
    async getPopTvPage(language: string, page: number) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
      this.loading = true;
      try {
        fetch(
          `https://api.themoviedb.org/3/trending/tv/day?language=${language}&page=${page}&api_key=${api_key}`
        ).then((res) => {
          res.json().then((data) => {
            // this.popTvPage.push(...data.results);
            data.results.forEach((tv: any) => {
              if (!this.popTvPage.some((t: any) => t.id === tv.id)) {
                this.popTvPage.push(tv);
              }
            });
            this.loading = false;
          });
        });
      } catch (error) {
        console.error("Error fetching popular TV shows:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
