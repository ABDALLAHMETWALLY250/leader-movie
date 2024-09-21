<script setup  lang="ts">
import { searchTvStore } from "../../stores/searchTv/searchTv";

const searchTv = searchTvStore();
const { locale } = useI18n();

const searchText = ref<string>("");

const curentPage = ref<number>(1);

const searcTv = () => {
  searchTv.getSearchTv(locale.value, searchText.value, searchTv.page);
};

const setupInfiniteScroll = () => {
  window.onscroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 40
    ) {
      curentPage.value++;
      searchTv.page = curentPage.value;
      // searchTv.getSearchTv(locale.value, searchText.value, searchTv.page);
      searcTv();
    }
  };
};

onUpdated(() => {
  if (!searchTv.searchText) {
    window.onscroll = null;
  } else {
    // console.log("setupInfiniteScroll Updated", searchTv.page);
    setupInfiniteScroll();
    curentPage.value = searchTv.page;
    // console.log("setupInfiniteScroll after Updated", searchTv.page);
  }
});

onUnmounted(() => {
  window.onscroll = null;
});

watch(
  () => searchTv.searchText,
  () => {
    if (!searchTv.searchText) {
      searchTv.tvs = [];
      window.onscroll = null;
    }
  }
);
</script>


<template>
  <div class="tv_show">
    <Banner class="container mx-auto">
      <div class="title xl:px-80 lg:px-40 md:px-20 px-5">
        <h3>{{ $t("tv_shows") }}</h3>
        <p class="description my-5">
          {{ $t("Discover_a_curated_selection_of_the_best_TV_shows") }}
        </p>
      </div>

      <form
        class="lg:px-40 md:px-20 sm:px-14 px-6 mx-auto"
        @submit.prevent="searcTv"
      >
        <label
          for="search-tv"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          {{ $t("search") }}</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <i class="pi pi-search text-xl font-bold dark:text-gray-800"></i>
          </div>
          <input
            type="search"
            id="search-tv"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :placeholder="$t('search')"
            required
            v-model="searchTv.searchText"
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
  <div>
    <CardsCardShowTvs />
  </div>

  <div class="" v-if="searchTv.tvs.length <= 0">
    <PopularTvShowPopularTv />
  </div>
</template>
