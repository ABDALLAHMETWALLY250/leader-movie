<template>
  <div
    class="container mx-auto px-5 popular_movie"
    v-if="popularMovies.popularMovie.length > 0"
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
            :src="`
                  https://image.tmdb.org/t/p/w500/${
                    movie?.poster_path || movie?.backdrop_path
                  }
                `"
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
                <i class="pi pi-calendar mx-2"></i>
                :
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
  <div v-else-if="popularMovies.loading" class="text-center">
    <p class="text-4xl font-bold">{{ $t("Loading") }}</p>
  </div>

  <div
    class="flex w-full items-center gap-4 my-2 overflow-auto container"
    v-if="popularMovies.popularMovie.length"
  >
    <button
      :class="`${
        i == curentPage ? 'bg-sky-400 text-white' : ''
      } px-3 py-1 rounded-md`"
      @click="fetchPageData(i)"
      v-for="i in popularMovies.totalPages"
      :key="i"
    >
      {{ i }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePopularMovieStore } from "../../stores/PopularMovie/PopularMovie";
import { useI18n } from "vue-i18n";
const route = useRoute();
const { locale } = useI18n();
const popularMovies = usePopularMovieStore();
const curentPage = ref(1);

onMounted(() => {
  locale.value = localStorage.getItem("locale") || "en";
  popularMovies.getPopularMovie(locale.value, curentPage.value);
});

const fetchPageData = (i: number) => {
  popularMovies.getPopularMovie(locale.value, i);
  curentPage.value = i;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const value = ref(1);

const defaultOverview = computed(() => {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.";
});
</script>
