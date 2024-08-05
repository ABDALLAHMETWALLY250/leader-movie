export const videoMoviesStore = defineStore("videoMovies", {
  state: () => ({
    videoMovies: [],
    loading: false,
    movie_key: null,
  }),
  actions: {
    async getVideoMovies(language: string, id: number) {
      this.loading = true;

      try {
        const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=${language}&api_key=${api_key}`
        );
        const data = await response.json();

        this.videoMovies = data.results;
        this.loading = false;

        this.movie_key = data.results[0].key;

        console.log(this.movie_key, "key");

        console.log(this.videoMovies, "video");
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        this.loading = false;
      }
    },
  },
});
