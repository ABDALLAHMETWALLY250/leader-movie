export const searchForAllStore = defineStore("searchForAll", {
  state: () => ({
    searchForAll: [],
  }),
  actions: {
    async fetchSearchForAll(lang: any, searchText: any) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";

      const { data } = await useFetch(
        `https://api.themoviedb.org/3/search/multi?query=${searchText}&include_adult=false&language=${lang}&page=1&api_key=${api_key}`
      );
      console.log(data.value.results, "weqw");

      this.searchForAll = data.value.results;
    },
  },
});