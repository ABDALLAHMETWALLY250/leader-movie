<template >
  <div class="flex flex-wrap items-center justify-between">
    <button
      name="watchlist"
      @click="toggleWatchList(Data, $t('success_Add_to_watchlist'))"
      :class="`btn_swiper_movie_card ${
        route.path == '/watchlist' ? 'hidden' : ''
      }`"
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
      name="watchlater"
      @click="addWatchList(Data, $t('success_Add_to_watchlater'))"
      :class="`btn_swiper_movie_card ${
        route.path == '/watchlater' ? 'hidden' : ''
      }`"
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
      name="Details"
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
import { useWashList } from "~/stores/addToWashList/washList";
import { useWatchList } from "~/stores/addWatchList/watchList";
const addWashList = useWashList();
const addsWatchList = useWatchList();
const route = useRoute();
const toggleWatchList = (Data: Array<object>, message: string) => {
  addWashList.addToList(Data, message);
};

const addWatchList = (Data: Array<object>, message: string) => {
  addsWatchList.addToList(Data, message);
};

defineProps(["id", "media_type", "Data"]);
</script>
<style lang="">
</style>
