
<template>
  <div class="card flex justify-center">
    <Button class="btn_swiper_movie" @click="playVideo">
      <i class="pi pi-play text-3xl"></i>
    </Button>
    <Dialog
      v-model:visible="visible"
      dismissableMask
      maximizable
      modal
      :style="{ width: '60rem', height: '100vh' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <iframe
        :src="`https://www.youtube.com/embed/${videoModal.movie_key}`"
        frameborder="0"
        allowfullscreen
        class="w-full h-screen"
        pt:root:style="!border-0 !bg-transparent"
        pt:mask:style="!border-0 !bg-transparent"
        pt:header:style="!border-0 !bg-transparent"
      ></iframe>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { videoMoviesStore } from "../../stores/Viedeos/videoMovies";

const videoModal = videoMoviesStore();
const { locale } = useI18n();
const visible = ref(false);

const props = defineProps(["movie_id"]);

const playVideo = () => {
  visible.value = true;

  videoModal.getVideoMovies(locale.value, props.movie_id);
};
</script>
