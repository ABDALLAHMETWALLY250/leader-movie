
<script setup lang="ts">
import { usePopularMovieStore } from "../../stores/PopularMovie/PopularMovie";


const { locale } = useI18n();
const popularMovies = usePopularMovieStore();

const currentPage = ref<number>(1);

const fetchMOvies = () => {
  if (popularMovies.popularMoviePage.length === 0) {
    locale.value = localStorage.getItem("locale") || "en";
    popularMovies.getPopularMoviePage(locale.value, popularMovies.page);
  }
};

onMounted(() => {
  fetchMOvies();
  setupInfiniteScroll();
});

onUpdated(() => {
  setupInfiniteScroll();
  currentPage.value = popularMovies.page;
});

onUnmounted(() => {
  window.onscroll = null;
});



const setupInfiniteScroll = () => {
  window.onscroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 40
    ) {
      currentPage.value++;
      popularMovies.page = currentPage.value;
      popularMovies.getPopularMoviePage(locale.value, popularMovies.page);
    }
  };
};

useHead({
  title: "Popular-movie",
  meta: [{ name: "description", content: "Popular-movie" }],
});
</script>

<template>
  <div
    class="container mx-auto px-5 popular_movie"
    v-if="popularMovies.popularMoviePage.length > 0"
  >
    <PopularMovieShowCards  :items="popularMovies.popularMoviePage"/>
  </div>

  <div class="text-center w-full">
    <SkeltonCardPageLoading />
  </div>
</template>

