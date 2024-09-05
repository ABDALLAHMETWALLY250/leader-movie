<template>
  <div class="search_modal">
    <nuxt-link
      v-tooltip.left="{
        value: $t('search'),
        pt: {
          arrow: {
            style: {
              borderBottomColor: 'var(--p-primary-color)',
            },
          },
          text: '!bg-primary !text-primary-contrast !font-medium !text-sm !px-2 !py-1 !rounded',
        },
      }"
      to="/search"
      activeClass="active"
      aria-label="search"
    >
      <i class="pi pi-search text-xl font-bold"></i>
    </nuxt-link>

    <transition aria-label="modal">
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

          <div v-if="searchForAll.searchForAll.length > 0">
            <!-- Tailwind Grid for responsiveness -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="movie in movies"
                :key="movie"
                class="bg-gray-100 p-4 rounded shadow-md"
              >
                <p>{{ movie }}-m</p>
              </div>

              <div
                v-for="tv in Tvs"
                :key="tv"
                class="bg-gray-100 p-4 rounded shadow-md"
              >
                <p>{{ tv }}-ff</p>
              </div>

              <div
                v-for="actor in Actors"
                :key="actor"
                class="bg-gray-100 p-4 rounded shadow-md"
              >
                <p>{{ actor }}-p</p>
              </div>
            </div>
          </div>

          <h5 v-else class="my-40 text-center font-medium capitalize text-base">
            {{ $t("No_search_result") }}
          </h5>

          <button
            aria-label="close"
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

const movies = ref([]);

const Tvs = ref([]);

const Actors = ref([]);

const searchForAllMovies = () => {
  searchForAll.searchForAll.filter((movie: any | null) => {
    if (movie?.media_type === "movie") {
      movies.value.push(movie);
    }
  });
};

const searchForallTvs = () => {
  searchForAll.searchForAll.filter((tv: any | null) => {
    if (tv?.media_type === "tv") {
      Tvs.value.push(tv);
    }
  });
};

const searchForPerson = () => {
  searchForAll.searchForAll.filter((person: any | null) => {
    if (person?.media_type === "person") {
      Actors.value.push(person);
    }
  });
};

watch(searchText, () => {
  if (searchText.value) {
    searchForAllMovies();
    searchForallTvs();
    searchForPerson();
  }
});

onMounted(() => {
  locale.value = localStorage.getItem("locale") || "en";
});
</script>
