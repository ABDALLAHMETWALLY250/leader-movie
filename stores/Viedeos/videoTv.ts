export const videoTvStore = defineStore("videoTv", {
  state: () => ({
    videoTv: [],
    loading: false,
    tv_keyOne: null,
    tv_keyTwone: null,
    tv_keyThree: null,
  }),
  actions: {
    async getVideoTv(language: string, id: number) {
      this.loading = true;

      try {
        const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";

        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/videos?language=${language}&api_key=${api_key}`
        );
        const data = await response.json();

        this.videoTv = data.results;
        this.loading = false;
        // console.log(id, "fff");

        this.tv_keyOne = data.results[0]?.key;
      } catch (error) {
        console.error("Error fetching popular tvs:", error);
        this.loading = false;
      }
    },
  },
});
