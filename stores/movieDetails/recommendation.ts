export const useRecommendation = defineStore("recommendation", {
  state: () => ({
    recommendations: [],
  }),
  actions: {
    async getRecommendation(id: number, language: string) {
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?language=${language}&api_key=e62b5c7ac206f4ba1f5625e1433cef42&include_adult=true&page=1`
      ).then((res) => {
        res.json().then((data) => {
          this.recommendations = data.results;
          //   console.log(this.recommendations, "recommendations");
        });
      });
    },
  },
});
