export const searchForAllStore = defineStore("searchForAll", {
  state: () => ({
    searchForAll: [],
    loading: false,
    totalPages: null,
  }),
  actions: {
    async fetchSearchForAll(lang: any, searchText: any, page: any) {
      try {
        const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";

        await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${searchText}&include_adult=false&language=${lang}&page=${page}&api_key=${api_key}`
        ).then((res) => {
          res.json().then((data) => {
            this.searchForAll = data.results;
            this.totalPages = data.total_pages;
            // console.log(data);
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
