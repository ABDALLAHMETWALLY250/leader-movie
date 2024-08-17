<template>
  <div
    class="container mx-auto px-5 popular_movie"
    v-if="popularMovies.popularMovie.length > 0 && !popularMovies.loading"
  >
    <div class="grid grid-cols-12 gap-4">
      <div
        class="xl:col-span-6 lg:col-span-6 col-span-12"
        v-for="movie in popularMovies.popularMovie"
        :key="movie.id"
      >
        <div
          :to="`/movie/${movie.id}`"
          class="relative flex flex-col items-center my-3 border border-gray-200 rounded-lg shadow md:flex-row cards"
        >
          <img
            v-if="movie?.poster_path || movie?.backdrop_path"
            class="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-48 md:rounded-none md:rounded-s-lg"
            :src="`https://image.tmdb.org/t/p/w500/${
              movie?.poster_path || movie?.backdrop_path
            }`"
            :alt="movie?.title || movie?.name || movie?.original_name"
          />
          <img
            v-else
            class="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://i.pravatar.cc/500"
            :alt="movie?.title || movie?.name || movie?.original_name"
          />
          <div class="flex flex-col justify-between px-4 leading-normal">
            <NuxtLink :to="`/movie/${movie.id}`">
              <h5 class="mb-2 text-2xl font-bold tracking-tight title">
                {{ movie?.title || movie?.name || movie?.original_name }}
              </h5>
              <p class="mb-3 font-normal overview">
                {{ movie?.overview || defaultOverview }}
              </p>
              <p class="flex items-center my-2">
                <i class="pi pi-calendar mx-2"></i>:
                {{
                  movie?.release_date
                    ? new Date(movie.release_date).toLocaleDateString()
                    : new Date().toLocaleDateString()
                }}
              </p>
              <p class="flex items-center my-2">
                <Rating v-model="value" readonly :stars="1" class="star" />
                : {{ (movie?.vote_average * 10).toFixed(1) }} %
              </p>
            </NuxtLink>
            <div class="py-2">
              <ButtonsCardButtons
                :id="movie?.id"
                :media_type="movie?.media_type"
                :Data="route.path == '/popular-movie' ? movie : null"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="popularMovies.loading" class="text-center w-full">
    <h1 class="text-4xl font-bold">{{ $t("Loading") }}</h1>
  </div>
</template>

<script setup lang="ts">
import { usePopularMovieStore } from "../../stores/PopularMovie/PopularMovie";

const route = useRoute();
const { locale } = useI18n();
const popularMovies = usePopularMovieStore();
const currentPage = ref<number>(1);
const value = ref<number>(1);
const scroll = ref<number>(1);

onMounted(() => {
  locale.value = localStorage.getItem("locale") || "en";
  popularMovies.getPopularMovie(locale.value, currentPage.value);
  setupInfiniteScroll();
});

onUpdated(() => {
  setupInfiniteScroll();
});

onUnmounted(() => {
  window.onscroll = null; // Clean up the scroll event listener
});

const defaultOverview = computed(() => {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.";
});

const setupInfiniteScroll = () => {
  window.onscroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      popularMovies.getPopularMovie(locale.value, currentPage.value + 1);
      currentPage.value++;
      scroll.value = window.scrollY;
    }
  };
};
</script>
