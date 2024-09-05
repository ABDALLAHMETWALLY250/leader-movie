<template>
  <div class="search_modal">
    <button name="search" class="w-full" @click="showModal = true">
      <form class="mx-auto">
        <label for="default-search" class="mb-2 text-sm font-medium sr-only">{{
          $t("search")
        }}</label>
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500"
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
            class="block px-3 w-full py-2 ps-10 text-sm border border-gray-300 rounded-lg"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </form>
    </button>

    <transition name="modal">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-filter backdrop-blur-sm z-10"
      >
        <div class="bg-white p-8 rounded-lg shadow-lg w-3/4 search">
          <h2 class="text-2xl mb-4">{{ $t("search") }}</h2>
          <input
            type="text"
            class="w-full p-2 border rounded mb-4"
            :placeholder="$t('search')"
            v-model="searchText"
            @keyup="searchForAll.fetchSearchForAll(locale, searchText)"
          />

          <ul v-if="searchForAll.searchForAll.length > 0">
            <li v-for="item in searchForAll.searchForAll" :key="item">
              <div class="flex items-center gap-3 my-3">
                <img
                  :src="`https://image.tmdb.org/t/p/w400//${
                    item.backdrop_path ? item.backdrop_path : item.poster_path
                  }`"
                  class="w-16 h-24 rounded-md object-cover"
                />

                {{ item?.title ? item?.title : item?.name }}
              </div>
            </li>
          </ul>
          <h5 v-else class="my-40 text-center font-medium capitalize text-base">
            {{ $t("No_search_result") }}
          </h5>
          <button
            name="close"
            @click="showModal = false"
            class="bg-sky-800 text-white p-2 rounded mt-10"
          >
            {{ $t("close") }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
  
<script setup lang="ts">
const showModal = ref(false);

import { searchForAllStore } from "../../stores/searchForAll/searchForAll";

const { locale } = useI18n();

const searchForAll = searchForAllStore();

const searchText = ref<string>("");

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    showModal.value = false;
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscapeKey);
  locale.value = localStorage.getItem("locale") || "en";
  // searchForAll.fetchSearchForAll(locale.value, searchText.value);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscapeKey);
});
</script>
