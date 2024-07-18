<template>
  <div class="search_modal">
    <button class="has-tooltip" @click="showModal = true">
      <span
        class="tooltip rounded shadow-lg p-1 bg-gray-100 text-sky-500 ms-7"
        >{{ $t("search") }}</span
      >
      <svg
        class="w-6 h-6 searchIcon"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      </svg>
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
                  :src="`https://image.tmdb.org/t/p/w500//${item.backdrop_path}`"
                  class="w-16 h-24 rounded-md object-cover"
                />

                {{ item?.title ? item?.title : item?.original_title }}
              </div>
            </li>
          </ul>
          <h5 v-else class="my-40 text-center font-medium capitalize text-base">
            {{ $t("No_search_result") }}
          </h5>
          <button
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

const searchText = ref("");

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
