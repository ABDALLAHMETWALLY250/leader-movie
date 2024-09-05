<template >
  <div class="container mx-auto px-5 h-screen py-5" v-if="addsuseWashList.list.length > 0">
    <div class="flex justify-between items-center my-5 px-4">
      <h4 class="text-3xl font-semibold">{{ $t("Add_to_watchlist") }}</h4>
      <button
        @click="clearAll($t('All_items_removed_from_list'))"
        class="text-red-500 text-xl"
      >
        {{ $t("clearAll") }}
      </button>
    </div>
    <div class="grid grid-cols-12 gap-4">
      <div
        class="xl:col-span-6 lg:col-span-6 col-span-12"
        v-for="item in addsuseWashList.list"
        :key="item?.id"
      >
        <div
          class="relative flex flex-col items-center my-3 border border-gray-200 rounded-lg shadow md:flex-row cards"
        >
          <img
            v-if="item?.poster_path || item?.backdrop_path"
            class="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-48 md:rounded-none md:rounded-s-lg"
            :src="`
                  https://image.tmdb.org/t/p/w500/${
                    item?.poster_path || item?.backdrop_path
                  }
                `"
            :alt="item?.title || item?.name || item?.original_name"
          />
          <img
            v-else
            class="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://i.pravatar.cc/500"
            :alt="item?.title || item?.name || item?.original_name"
          />

          <div class="flex flex-col justify-between px-4 leading-normal">
            <NuxtLink
              :to="`${item?.media_type == 'tv' ? '/tv' : '/movie'}/${item?.id}`"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight title">
                {{ item?.title || item?.name || item?.original_name }}
              </h5>
              <p class="mb-3 font-normal overview">
                {{ item?.overview || defaultOverView }}
              </p>
              <p class="flex items-center my-2">
                <i class="pi pi-calendar mx-2"></i>
                :
                {{
                  item?.release_date
                    ? new Date(item.release_date).toLocaleDateString()
                    : new Date().toLocaleDateString()
                }}
              </p>
              <p class="flex items-center my-2">
                <Rating v-model="value" readonly :stars="1" class="star" />
                : {{ (item?.vote_average * 10).toFixed(1) }} %
              </p>
            </NuxtLink>
            <div class="py-2">
              <ButtonsCardButtons
                :id="item?.id"
                :media_type="item?.media_type"
                :Data="
                  route.path == '/watchlater' || route.path == '/watchlist'
                    ? item
                    : null
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-4" v-else>
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12">
        <div class="flex w-full h-screen items-center justify-center">
          <h4 class="text-center text-2xl font-bold">{{ $t("no_data") }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useWashList } from "~/stores/addToWashList/washList";

const addsuseWashList = useWashList();
let washList = reactive([]);
const route = useRoute();
const value = ref(1);
const clearAll = (message) => {
  addsuseWashList.DeleteAll(message);
};

onMounted(() => {
  washList = JSON.parse(localStorage.getItem("washList") || "[]");
  addsuseWashList.list = JSON.parse(localStorage.getItem("washList") || "[]");
});
</script>
<style lang="">
</style>
