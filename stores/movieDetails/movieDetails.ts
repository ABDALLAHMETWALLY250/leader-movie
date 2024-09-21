export const useMovieDetails = defineStore("movieDetails", {
  state: () => ({
    movieDetails: {} as object | string | any,
  }),

  actions: {
    async getMovieDetails(id: string | number | string[], language: string) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
      try {
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=${language}`
        ).then((res) =>
          res.json().then((data) => {
            this.movieDetails = data;
            console.log(this.movieDetails, "movieDetails");
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
});
