export const videoMoviesStore = defineStore("videoMovies", {
  state: () => ({
    videoMovies: [],
    loading: false,
    movie_keyOne: null,
    movie_keyTwone: null,
    movie_keyThree: null,
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

        this.movie_keyOne = data.results[0]?.key;
        this.movie_keyTwone = data.results[1]?.key;
        this.movie_keyThree = data.results[2]?.key;
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        this.loading = false;
      }
    },
  },
});
