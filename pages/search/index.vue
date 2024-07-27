<template>
  <div class="SearchPage">
    <form
      class="xl:mt-10 xl:px-28 lg:mt-5 mt-20 w-11/12 mx-auto sticky top-14"
      style="z-index: 5"
      @submit.prevent="search"
    >
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
          <i class="pi pi-search text-xl font-bold"></i>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100"
          :placeholder="$t('search')"
          v-model="searchText"
          @input="searchForAll.fetchSearchForAll(locale, searchText)"
        />

        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {{ $t("search") }}
        </button>
      </div>
    </form>

    <div
      class="container mx-auto xl:px-40 lg:px-16 px-6"
      v-if="movies.length > 0 || Tvs.length > 0 || Actors.length > 0"
    >
      <searchAllMovie :movies="movies" v-if="movies.length > 0" class="all" />
      <SearchAllTvs :Tvs="Tvs" v-if="Tvs.length > 0" class="all" />
      <SearchAllActors :Actors="Actors" v-if="Actors.length > 0" class="all" />
    </div>

    <span v-if="searchForAll.loading" class="text-3xl font-bold">
      {{ $t("Loading") }}
    </span>
    <h2
      v-if="
        !searchForAll.loading &&
        movies.length === 0 &&
        Tvs.length === 0 &&
        Actors.length === 0
      "
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

  searchForAll.loading = true;
  searchForAll.searchForAll.forEach((item) => {
    if (item?.media_type === "movie") {
      movies.value.push(item);
    } else if (item?.media_type === "tv") {
      Tvs.value.push(item);
    } else if (item?.media_type === "person") {
      Actors.value.push(item);
    }
  });
  searchForAll.loading = false;
};

const search = () => {
  filterResults();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  locale.value = localStorage.getItem("locale") || "en";
});
</script>

<style lang=""></style>
