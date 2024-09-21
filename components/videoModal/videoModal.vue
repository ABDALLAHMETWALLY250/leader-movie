

<script setup lang="ts">
import { videoMoviesStore } from "../../stores/Viedeos/videoMovies";

const videoModal = videoMoviesStore();
const { locale } = useI18n();
const visible = ref(false);

const props = defineProps(["movie_id"]);

const playVideo = () => {
  videoModal.videoMovies = [];
  videoModal.movie_keyOne = null;
  videoModal.movie_keyTwone = null;
  videoModal.movie_keyThree = null;
  videoModal.getVideoMovies(locale.value, props.movie_id);
  visible.value = true;
};
</script>


<template>
  <div class="">
    <Button class="btn_swiper_movie" @click="playVideo" aria-label="play">
      <i class="pi pi-play text-3xl"></i>
    </Button>
    <Dialog
      v-model:visible="visible"
      dismissableMask
      maximizable
      modal
      :style="{ width: '90rem', height: '100vh' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    >
      <iframe
        v-if="
          videoModal.movie_keyOne ||
          videoModal.movie_keyTwone ||
          videoModal.movie_keyThree
        "
        :src="`https://www.youtube.com/embed/${
          videoModal.movie_keyOne ||
          videoModal.movie_keyTwone ||
          videoModal.movie_keyThree
        }`"
        frameborder="0"
        allowfullscreen
        class="w-full h-screen"
        pt:root:style="!border-0 !bg-transparent"
        pt:mask:style="!border-0 !bg-transparent"
        pt:header:style="!border-0 !bg-transparent"
      ></iframe>
      <div class="w-full h-screen flex items-center justify-center" v-else>
        <h4 class="font-bold text-2xl text-center">
          {{ $t("No_video") }}
        </h4>
      </div>
    </Dialog>
  </div>
</template>
