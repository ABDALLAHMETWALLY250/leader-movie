export const useUpComing = defineStore("upComing", {
  state: () => {
    return {
      upComming: [],
      page: 1,
      loading: false,
    };
  },
  actions: {
    async getUpComing(lang: string, page: number) {
      this.loading = true;
      try {
        const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
        fetch(
          ` https://api.themoviedb.org/3/movie/upcoming?language=${lang}&page=${page}&api_key=${api_key}`
        ).then((res) =>
          res.json().then((data) => {
            this.upComming.push(...data.results);

            this.page = data.page;
            this.loading = false;
          })
        );
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        this.loading = false;
      }
    },
  },
});
