<script setup lang="ts">
import { useMovieDetails } from "~/stores/movieDetails/movieDetails";

const movieDetails = useMovieDetails();

const { locale } = useI18n();

const route = useRoute();

const fetchMovieDetails = () => {
  movieDetails.getMovieDetails(route.params.id, locale.value);
};

onMounted(() => {
  fetchMovieDetails();
});
</script>


<template >
  <div>
    <h1>{{ route.params.id }}</h1>
    {{ movieDetails.movieDetails.homepage }}
    {{ movieDetails.movieDetails.overview }}
  </div>
</template>
