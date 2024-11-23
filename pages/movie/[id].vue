<script setup lang="ts">
import { useMovieDetails } from "~/stores/movieDetails/movieDetails";
import type { MovieDetailsInterface } from "~/stores/movieDetails/movieDetails";

const movieDetails = useMovieDetails();

const { locale } = useI18n();

const value = ref<number>(4);

const route = useRoute();

const item = ref<MovieDetailsInterface>({} as MovieDetailsInterface);

const fetchMovieDetails = async () => {
  await movieDetails.getMovieDetails(+route.params.id, locale.value);

  item.value = movieDetails.movieDetails;
};

const formattedRuntime = computed(() => {
  const runtime = item.value.runtime;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
});

onMounted(async () => {
  await fetchMovieDetails();
});

watch(
  () => route.params.id,
  () => {
    fetchMovieDetails();
  }
);
</script>


<template >
  <DetailsBanner>
    <template #imageBanner>
      <NuxtImg
        :src="`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`"
        class="w-full h-full filter brightness-50"
        :alt="item?.title"
      />
    </template>
    <template #contentBanner>
      <h3 class="text-3xl font-bold text-white my-3">{{ item?.title }}</h3>
      <div class="flex flex-wrap gap-3 my-3">
        <div class="flex justify-center gap-2">
          <Rating v-model="value" readonly :stars="5" class="star" />
          <span>: {{ item?.vote_average?.toFixed(1) }}</span>
        </div>
        <b>.</b>
        <p>{{ item?.vote_count?.toLocaleString() }}k {{ $t("Reviews") }}</p>
        <b>.</b>
        <p>{{ item?.release_date?.split("-")[0] }}</p>
        <b>.</b>
        <p>{{ formattedRuntime }}</p>
      </div>
      <p class="overview">
        {{ item?.overview }}
      </p>
      <ButtonsCardButtons
        class="mt-3"
        :media_type="'movie'"
        :Data="item"
        :id="item.id"
      />
    </template>
  </DetailsBanner>

  <div
    class="details w-full xl:my-16 lg:my-16 md:my-10 py-8 container mx-auto px-8"
  >
    <DetailsFirstSection>
      <template #image>
        <Image
          :src="`https://image.tmdb.org/t/p/w500/${item?.poster_path}`"
          :alt="item?.title"
          preview
          class="w-full rounded-t-lg sm-none"
        />
      </template>

      <template #content>
        <div class="flex flex-col">
          <h3 class="my-3 text-3xl">{{ $t("Storyline") }}</h3>
          <p>{{ item?.overview }}</p>
        </div>
        <p>{{ $t("Released") }}: {{ item?.release_date }}</p>
        <p>{{ $t("Runtime") }}: {{ formattedRuntime }}</p>
        <p>{{ $t("Budget") }}: ${{ item?.budget?.toLocaleString() }}</p>
        <p>{{ $t("Revenue") }}: ${{ item?.revenue?.toLocaleString() }}</p>
        <div class="Genre">
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="genre in item?.genres"
              :key="genre.id"
              class="text-sm bg-gray-800 px-2.5 py-0.5 rounded"
            >
              {{ genre?.name }}
            </li>
          </ul>
        </div>
        <p>{{ $t("Status") }}: {{ item?.status }}</p>
        <p>{{ $t("Language") }}: {{ item?.original_language }}</p>
        <div class="flex items-center gap-4">
          <a :href="`${item?.homepage}`" target="_blank" v-if="item?.homepage">
            <i class="pi pi-link text-xl"></i>
          </a>
        </div>
      </template>
    </DetailsFirstSection>
  </div>

  <DetailsOptionSection
    :id="+route.params.id"
    :media_type="'movie'"
    :data="item"
  />

  <DetailsRecommendation />
</template>
