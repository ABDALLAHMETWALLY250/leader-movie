export const usePopularMovieStore = defineStore("PopularMovie", {
  state: () => ({
    popularMovie: [] as Array<object>,
    popularMoviePage: [] as Array<object>,

    loading: false as boolean,
    page: 1 as number,
  }),
  actions: {
    async getPopularMovie(language: string, page: number) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";

      try {
        fetch(
          `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}&api_key=${api_key}`
        ).then((res) => {
          this.loading = true;
          res.json().then((data) => {
            this.popularMovie.push(...data.results);
            this.page = data.page;
            this.loading = false;
          });
        });
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        this.loading = false;
      }
    },
    async getPopularMoviePage(language: string, page: number) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}&api_key=${api_key}`
        );
        this.loading = true;
        const data = await res.json();

        data.results.forEach((movie: any) => {
          if (!this.popularMoviePage.some((m: any) => m.id === movie.id)) {
            this.popularMoviePage.push(movie);
          }
        });
        this.loading = false;
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        this.loading = false;
      }
    },
  },
});
