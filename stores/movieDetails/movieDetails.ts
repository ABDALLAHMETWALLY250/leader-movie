export interface MovieDetailsInterface {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  runtime: number;
  budget: number;
  revenue: number;
  genres: Array<any>;
  status: string;
  original_language: string;
  homepage: string;
  imdb_id: string;
}

export const useMovieDetails = defineStore("movieDetails", {
  state: () => ({
    movieDetails: {} as MovieDetailsInterface,
  }),

  actions: {
    async getMovieDetails(id: string | number | string[], language: string) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
      try {
        await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=${language}`
        ).then((res) =>
          res.json().then((data) => {
            this.movieDetails = data;
            // console.log(this.movieDetails, "movieDetails");
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
});
