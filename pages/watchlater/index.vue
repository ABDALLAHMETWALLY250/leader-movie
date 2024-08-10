<template >
  <div class="container mx-auto px-4" v-if="addsuseWatchList.list.length > 0">
    <div class="flex justify-center">
      <!-- <p>{{ $t("watchlater") }}</p> -->
      <button @click="clearAll">{{ $t("clear") }}</button>
    </div>
    <div class="grid grid-cols-12 gap-4">
      <div
        class="xl:col-span-6 lg:col-span-6 col-span-12"
        v-for="item in addsuseWatchList.list"
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
      <div class="xl:col-span-6 lg:col-span-6 col-span-12">
        <h4>{{ $t("no_data") }}</h4>
      </div>
    </div>
  </div>
</template>
  <script setup lang="ts">
import { useWatchList } from "~/stores/addWatchList/watchList";

const addsuseWatchList = useWatchList();
let watchlater = reactive([]);
const route = useRoute();
const clearAll = () => {
  addsuseWatchList.DeleteAll();
};
onMounted(() => {
  watchlater = JSON.parse(localStorage.getItem("watchList") || "[]");
});
const value = ref(1);
</script>
  <style lang="">
</style>