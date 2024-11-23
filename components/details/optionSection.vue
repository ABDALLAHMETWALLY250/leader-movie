<script setup lang="ts">
import { videoMoviesStore } from "~/stores/Viedeos/videoMovies";
import { useImagesForMovie } from "~/stores/movieDetails/imagesForMovie";

const videoModal = videoMoviesStore();
const imagesForMovie = useImagesForMovie();

const { locale } = useI18n();

const props = defineProps({
  media_type: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

const fetcVideo = () => {
  videoModal.getVideoMovies(locale.value, props.id);
};

const fetcImages = () => {
  imagesForMovie.getImages(props.id, locale.value);
};

const handleTabs = () => {
  fetcVideo();
  fetcImages();
};

watch(
  () => props.id,
  () => {
    fetcVideo();
    fetcImages();
  }
);
</script>

<template>
  <div class="my-6 container mx-auto xl:px-32 md:px-20 sm:px-10 px-4">
    <TabView @tab-change="handleTabs">
      <TabPanel header="production companies">
        <ul
          class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 col-span-12 my-4 gap-8"
        >
          <li
            v-for="company in data.production_companies"
            :key="company.id"
            class="w-full"
          >
            <NuxtImg
              :src="`https://image.tmdb.org/t/p/w500/${company.logo_path}`"
              :alt="company.name"
              class="w-full h-48"
              v-if="company.logo_path"
            />

            <NuxtImg
              src="https://via.placeholder.com/300x450"
              :alt="company.name"
              class="w-full h-48 object-cover"
              v-else
            />
            <p class="text-center text-white mt-6">{{ company.name }}</p>
          </li>
        </ul>
      </TabPanel>
      <TabPanel header="Posters">
        <div
          v-if="imagesForMovie.images.length == 0"
          class="container mx-auto xl:px-32 lg:px-32 md:px-20 sm:px-10 my-6"
        >
          <div
            class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 col-span-12 gap-4 my-4"
          >
            <div class="w-full" v-for="i in 20" :key="i">
              <Skeleton height="10rem"></Skeleton>
            </div>
          </div>
        </div>
        <DetailsImages v-else :imagesForMovie="imagesForMovie.images" />
      </TabPanel>

      <TabPanel header="Videos">
        <div
          v-if="videoModal.videoMovies.length == 0"
          class="container mx-auto xl:px-32 lg:px-32 md:px-20 sm:px-10 my-6"
        >
          <div
            class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 col-span-12 gap-4 my-4"
          >
            <div class="w-full" v-for="i in 20" :key="i">
              <Skeleton height="10rem"></Skeleton>
            </div>
          </div>
        </div>
        <DetailsVedios v-else :videoMovies="videoModal.videoMovies" />
      </TabPanel>
    </TabView>
  </div>
</template>
