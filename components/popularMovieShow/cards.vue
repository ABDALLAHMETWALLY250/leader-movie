<script setup lang="ts">
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const value = ref<number>(1);
const route = useRoute();
const defaultOverview = computed(() => {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.";
});
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <div
      class="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12"
      v-for="movie in items"
      :key="movie.id"
    >
      <div
        class="flex flex-col items-center my-3 border border-gray-200 rounded-lg shadow cards overflow-hidden cursor-pointer"
      >
        <img
          v-if="movie?.poster_path || movie?.backdrop_path"
          class="object-cover w-full rounded-t-lg h-96 md:h-72 md:rounded-none md:rounded-s-lg hover:scale-105 transition duration-300 ease-in-out"
          :src="`https://image.tmdb.org/t/p/w500/${
            movie?.poster_path || movie?.backdrop_path
          }`"
          :alt="movie?.title || movie?.name || movie?.original_name"
          loading="lazy"
        />
        <img
          v-else
          class="object-cover w-full rounded-t-lg h-96 md:h-72 md:rounded-none md:rounded-s-lg hover:scale-105 transition duration-300 ease-in-out"
          src="https://i.pravatar.cc/500"
          :alt="movie?.title || movie?.name || movie?.original_name"
          loading="lazy"
        />
        <div class="flex flex-col justify-between px-4 my-3 leading-normal">
          <NuxtLink :to="`/movie/${movie.id}`">
            <h2 class="mb-2 text-2xl font-bold tracking-tight title">
              {{ movie?.title || movie?.name || movie?.original_name }}
            </h2>
            <p class="mb-3 font-normal overview">
              {{ movie?.overview || defaultOverview }}
            </p>
            <p class="flex items-center my-2">
              <i class="pi pi-calendar mx-2"></i>:
              {{ movie?.release_date }}
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
</template>
