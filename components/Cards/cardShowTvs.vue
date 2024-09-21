
<script setup lang="ts">
import { searchTvStore } from "~/stores/searchTv/searchTv";
const route = useRoute();

const searchTv = searchTvStore();

const value = ref<number>(1);

const defaultOverView = computed(() => {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";
});
</script>
<template>
  <div class="container mx-auto" v-if="searchTv.tvs.length > 0">
    <div class="grid grid-cols-12 gap-4">
      <div
        class="xl:col-span-6 lg:col-span-6 col-span-12"
        v-for="tv in searchTv.tvs"
        :key="tv.id"
      >
        <div
          :to="`/tv/${tv.id}`"
          class="relative flex flex-col items-center my-3 border border-gray-200 rounded-lg shadow md:flex-row cards"
        >
          <img
            v-if="tv?.poster_path || tv?.backdrop_path"
            class="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-48 md:rounded-none md:rounded-s-lg"
            :src="` https://image.tmdb.org/t/p/w500/${
              tv?.poster_path || tv?.backdrop_path
            }`"
            :alt="tv?.title || tv?.name || tv?.original_name"
            loading="lazy"
          />
          <img
            v-else
            class="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://i.pravatar.cc/500"
            :alt="tv?.title || tv?.name || tv?.original_name"
            loading="lazy"
          />

          <div class="flex flex-col justify-between px-4 leading-normal">
            <NuxtLink :to="`/tv/${tv?.id}`">
              <h2 class="mb-2 text-2xl font-bold tracking-tight title">
                {{ tv?.title || tv?.name || tv?.original_name }}
              </h2>
              <p class="mb-3 font-normal overview">
                {{ tv?.overview || defaultOverView }}
              </p>
              <p class="flex items-center my-2">
                <i class="pi pi-calendar mx-2"></i>
                :
                {{ tv?.release_date }}
              </p>
              <p class="flex items-center my-2">
                <Rating v-model="value" readonly :stars="1" class="star" />
                : {{ (tv?.vote_average * 10).toFixed(1) }} %
              </p>
            </NuxtLink>
            <div class="py-2">
              <ButtonsCardButtons
                :id="tv?.id"
                :media_type="tv?.media_type ? tv?.media_type : 'tv'"
                :Data="route.path == '/tv-show' ? tv : null"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-center text-4xl font-bold">{{ $t("Loading") }}</p>
    </div>
  </div>
</template>
  

