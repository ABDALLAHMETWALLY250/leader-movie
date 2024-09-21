<script setup lang="ts">
import { videoMoviesStore } from "../../stores/Viedeos/videoMovies";
import { videoTvStore } from "../../stores/Viedeos/videoTv";

const videoModal = videoMoviesStore();
const videoTvModal = videoTvStore();
const { locale } = useI18n();
const visible = ref<boolean>(false);

const props = defineProps(["video_id", "media_type"]);

const playVideo = () => {
  if (props.media_type == "tv") {
    videoTvModal.videoTv = [];
    videoTvModal.tv_keyOne = null;
    videoTvModal.tv_keyTwone = null;
    videoTvModal.tv_keyThree = null;
    videoTvModal.getVideoTv(locale.value, props.video_id);
    // console.log(videoTvModal.videoTv, "videoTvModal.videoTv", props.video_id);

    visible.value = true;
  } else {
    videoModal.videoMovies = [];
    videoModal.movie_keyOne = null;
    videoModal.movie_keyTwone = null;
    videoModal.movie_keyThree = null;
    videoModal.getVideoMovies(locale.value, props.video_id);
    visible.value = true;
  }
};
</script>

<template>
  <div class="card flex justify-center">
    <Button
      aria-label="video"
      class="btn_swiper_movie_card pi pi-play text-2xl"
      @click="playVideo"
      v-tooltip.bottom="{
        value: $t('Play_video'),
        pt: {
          arrow: {
            style: {
              borderBottomColor: 'var(--p-primary-color) ',
            },
          },

          text: '!bg-primary !text-primary-contrast !font-medium !rounded !border-0 !bg-primary !px-2 !py-1',
        },
      }"
    >
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
        v-if="videoModal.movie_keyOne || videoTvModal.tv_keyOne"
        :src="`https://www.youtube.com/embed/${
          media_type == 'tv' ? videoTvModal.tv_keyOne : videoModal.movie_keyOne
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


