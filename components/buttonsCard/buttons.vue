<template >
  <div class="flex flex-wrap items-center gap-4 justify-between">
    <button @click.prevent="addWasList" class="btn_swiper_movie_card">
      <i class="pi pi-heart text-2xl"></i>
    </button>

    <button @click.prevent="addWatchList" class="btn_swiper_movie_card">
      <i class="pi pi-clock text-2xl"></i>
    </button>

    <button @click.prevent="addWatchList" class="btn_swiper_movie_card">
      <i class="pi pi-eye text-2xl"></i>
    </button>

    <VideoModalForCardsVideoModal :movie_id="id" />
  </div>
</template>
<script setup lang="ts">
const addWasList = () => {
  console.log("waaddWasList");
};

const addWatchList = () => {
  console.log("addWatchList");
};

defineProps(["id"]);
</script>
<style lang="">
</style>