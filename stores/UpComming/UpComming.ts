export const useUpComing = defineStore("upComing", {
  state: () => {
    return {
      upComming: [],
    };
  },
  actions: {
    async getUpComing(lang: string) {
      try {
        const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
        fetch(
          ` https://api.themoviedb.org/3/movie/upcoming?language=${lang}&page=1&api_key=${api_key}`
        ).then((res) =>
          res.json().then((data) => (this.upComming = data.results))
        );
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    },
  },
});
