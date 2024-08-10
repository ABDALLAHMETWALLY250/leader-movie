<template >
  <div class="flex flex-wrap items-center gap-4 justify-between">
    <button
      @click="toggleWatchList(Data)"
      class="btn_swiper_movie_card"
      v-tooltip.bottom="{
        value: $t('Add_to_watchlist'),
        pt: {
          arrow: {
            style: {
              borderBottomColor: 'var(--p-primary-color)',
            },
          },
          text: '!bg-primary !text-primary-contrast !font-medium !rounded !border-0 !bg-primary !px-2 !py-1',
        },
      }"
    >
      <i class="pi pi-heart text-2xl"></i>
    </button>

    <button
      @click="addWatchList"
      class="btn_swiper_movie_card"
      v-tooltip.bottom="{
        value: $t('Add_to_watch_Later'),
        pt: {
          arrow: {
            style: {
              borderBottomColor: 'var(--p-primary-color)',
            },
          },
          text: '!bg-primary !text-primary-contrast !font-medium !rounded !border-0 !bg-primary !px-2 !py-1',
        },
      }"
    >
      <i class="pi pi-clock text-2xl"></i>
    </button>

    <nuxt-link
      :to="`${media_type == 'tv' ? '/tv' : '/movie'}/${id}`"
      class="btn_swiper_movie_card"
      v-tooltip.bottom="{
        value: $t('View_details'),
        pt: {
          arrow: {
            style: {
              borderBottomColor: 'var(--p-primary-color)',
            },
          },
          text: '!bg-primary !text-primary-contrast !font-medium !rounded !border-0 !bg-primary !px-2 !py-1',
        },
      }"
    >
      <i class="pi pi-eye text-2xl"></i>
    </nuxt-link>

    <VideoModalForCardsVideoModal :movie_id="id" />
  </div>
</template>
<script setup lang="ts">
const watchList = reactive<any[]>([]);

const addWasList = (Data: any) => {};

const toggleWatchList = (data: any) => {
  const index = watchList.findIndex((item: any) => item.id === data.id);

  if (index > -1) {
    // Item exists, remove it
    watchList.splice(index, 1);
    console.log("Removed from Watchlist", data);
  } else {
    // Item doesn't exist, add it
    watchList.push(data);
    console.log("Added to Watchlist", data);
  }

  localStorage.setItem("watchList", JSON.stringify(watchList));
};

defineProps(["id", "media_type", "Data"]);
</script>
<style lang="">
</style>