<template >
  <div class="movies">
    <div class="relative w-full h-full">
      <video
        src="assets/videos/video-movies.webm"
        autoplay
        loop
        muted
        playsinline
        class="w-full h-full object-cover filter brightness-75"
      ></video>
      <Banner
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
      >
        <div class="title xl:px-80 lg:px-40 md:px-20 px-5">
          <h3>{{ $t("Movies") }}</h3>
          <p class="description my-5">
            {{ $t("Explore_Our_Extensive_Collection_Of_Movies") }}
          </p>
        </div>

        <form
          @submit.prevent="searchClick"
          class="lg:px-40 md:px-20 sm:px-14 px-6 mx-auto"
        >
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <i class="pi pi-search text-xl font-bold dark:text-gray-800"></i>
            </div>
            <label
              for="search-movie"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >{{ $t("search") }}</label
            >
            <input
              type="search"
              id="search-movie"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :placeholder="$t('search')"
              required
              v-model="searchMovie.searchText"
            />
            <button
              aria-label="search"
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {{ $t("search") }}
            </button>
          </div>
        </form>
      </Banner>
    </div>
  </div>
  <div>
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

const curentPage = ref<number>(1);

const searchClick = () => {
  searchMovie.setSearchMovie(
    searchMovie.searchText,
    locale.value,
    searchMovie.page
  );
};

const setupInfiniteScroll = () => {
  window.onscroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 40
    ) {
      curentPage.value++;
      searchMovie.page = curentPage.value;
      searchMovie.setSearchMovie(
        searchMovie.searchText,
        locale.value,
        searchMovie.page
      );
    }
  };
};

onUpdated(() => {
  if (!searchMovie.searchText) {
    window.onscroll = null;
  } else {
    console.log("setupInfiniteScroll Updated", searchMovie.page);

    setupInfiniteScroll();
    curentPage.value = searchMovie.page;
    console.log("setupInfiniteScroll after Updated", searchMovie.page);
  }
});

onUnmounted(() => {
  window.onscroll = null;
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
</script>
