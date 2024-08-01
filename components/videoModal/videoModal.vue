
<template>
  <div class="card flex justify-center">
    <Button @click="playVideo"> aa </Button>
    <Dialog
      v-model:visible="visible"
      modal
      header="Header"
      :style="{ width: '50vw' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      pt:mask:class="backdrop-blur-sm "
      pt:root:class="!border-0 !bg-transparent "
    >
      <p class="m-0">{{ locale }} - {{ props.movie_id }}</p>
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
onMounted(() => {
  console.log(props.movie_id, "movie_id");
});
</script>
