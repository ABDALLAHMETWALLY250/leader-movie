<template >
  <div class="movies">
    <Banner>
      <div class="title xl:px-80 lg:px-40 md:px-20 px-5">
        <h3>{{ $t("Movies") }}</h3>
        <p class="description my-5">
          {{ $t("Explore_Our_Extensive_Collection_Of_Movies") }}
        </p>
      </div>

      <form
        @submit.prevent="searchClick(curentPage)"
        class="lg:px-40 md:px-20 sm:px-14 px-6 mx-auto"
      >
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >{{ $t("search") }}</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <i class="pi pi-search text-xl font-bold dark:text-gray-800"></i>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :placeholder="$t('search')"
            required
            v-model="searchMovie.searchText"
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {{ $t("search") }}
          </button>
        </div>
      </form>
    </Banner>
  </div>
  <div class="p-6">
    <CardsCardShow />
  </div>

  <div v-if="searchMovie.searchMovie.length == 0">
    <popularMovieShowPopularMovie />
  </div>
</template>
<script setup lang="ts">
import { useSearchMovie } from "~/stores/searchMovie/searchMovie";

const { locale } = useI18n();

const searchMovie = useSearchMovie();

const curentPage = ref(1);

const searchClick = (i: number) => {
  searchMovie.setSearchMovie(searchMovie.searchText, locale.value, i);
  curentPage.value = i;
  setupInfiniteScroll();
};

const setupInfiniteScroll = () => {
  window.onscroll = () => {
    let bottomOfWindow =
      document.documentElement.scrollTop + window.innerHeight ===
      document.documentElement.offsetHeight;
    if (bottomOfWindow) {
      searchClick(curentPage.value + 1);
    }
  };
};

onUpdated(() => {
  if (!searchMovie.searchText) {
    searchMovie.searchMovie = [];
    window.onscroll = null;
  } else {
    setupInfiniteScroll();
  }
});

watch(
  () => searchMovie.searchText,
  () => {
    if (!searchMovie.searchText) {
      searchMovie.searchMovie = [];
      window.onscroll = null;
    }
  }
);

onUnmounted(() => {
  window.onscroll = null;
});
</script>
<style >
</style>