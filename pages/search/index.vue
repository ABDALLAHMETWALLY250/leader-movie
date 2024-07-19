<template>
  <div class="SearchPage">
    <form class="xl:mt-10 xl:px-28 lg:mt-5 mt-20 w-11/12 mx-auto sticky top-0">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        {{ $t("search") }}
      </label>
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100"
          :placeholder="$t('search')"
          v-model="searchText"
          @keyup="searchForAll.fetchSearchForAll(locale, searchText)"
        />
      </div>
    </form>

    <div
      class="container mx-auto xl:px-40 lg:px-16 px-6"
      v-if="searchForAll.searchForAll.length > 0"
    >
      <searchAllMovie :movies="movies" />

      <SearchAllTvs :Tvs="Tvs" />

      <SearchAllActors :Actors="Actors" />
    </div>
    <h2
      v-else
      class="my-40 text-center font-medium capitalize text-2xl flex items-center justify-center mt-60"
    >
      {{ $t("No_search_result") }}
    </h2>
  </div>
</template>
<script setup lang="ts">
import { searchForAllStore } from "../../stores/searchForAll/searchForAll";

const { locale } = useI18n();
const searchForAll = searchForAllStore();

const searchText = ref<string>("");
const movies = ref<any[]>([]);
const Tvs = ref<any[]>([]);
const Actors = ref<any[]>([]);

const filterResults = () => {
  movies.value = [];
  Tvs.value = [];
  Actors.value = [];

  searchForAll.searchForAll.forEach((item) => {
    if (item?.media_type == "movie") {
      movies.value.push(item);
    } else if (item?.media_type == "tv") {
      Tvs.value.push(item);
    } else if (item?.media_type == "person") {
      Actors.value.push(item);
    }
  });
};

watch(searchText, () => {
  if (searchText.value.length > 4) {
    filterResults();
  }
});

onMounted(() => {
  locale.value = localStorage.getItem("locale") || "en";
  // Uncomment if you want to fetch on mount
  // searchForAll.fetchSearchForAll(locale.value, searchText.value);
});
</script>

<style lang="">
</style>