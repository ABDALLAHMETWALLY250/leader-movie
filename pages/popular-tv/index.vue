<script setup lang="ts">
import { usePopTv } from "../../stores/poppularTv/popTv";
const route = useRoute();
const { locale } = useI18n();
const popularTv = usePopTv();
const currentPage = ref<number>(1);
const value = ref<number>(1);

const fetchTvs = () => {
  if (popularTv.popTvPage.length === 0) {
    locale.value = localStorage.getItem("locale") || "en";
    popularTv.getPopTvPage(locale.value, popularTv.page);
  }
};

onMounted(() => {
  fetchTvs();
});

const setupInfiniteScroll = () => {
  window.onscroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 200
    ) {
      currentPage.value++;
      popularTv.page = currentPage.value;
      popularTv.getPopTvPage(locale.value, popularTv.page);
    }
  };
};

onUnmounted(() => {
  window.onscroll = null;
});

onUpdated(() => {
  setupInfiniteScroll();
  currentPage.value = popularTv.page;
});

const defaultOverview = computed(() => {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.";
});
useHead({
  title: "Popular-tv",
  meta: [{ name: "description", content: "Popular-tv" }],
});
</script>

<template>
  <div
    class="container mx-auto px-5 popular_movie"
    v-if="popularTv.popTvPage.length > 0"
  >
    <div class="grid grid-cols-12 gap-4">
      <div
        class="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12"
        v-for="tv in popularTv.popTvPage"
        :key="tv.id"
      >
        <div
          class="relative flex flex-col items-center my-3 border border-gray-200 rounded-lg shadow cards overflow-hidden cursor-pointer"
        >
          <NuxtImg
            v-if="tv?.poster_path || tv?.backdrop_path"
            class="object-cover w-full rounded-t-lg h-96 md:h-72 md:rounded-none md:rounded-s-lg hover:scale-105 transition duration-300 ease-in-out"
            :src="`https://image.tmdb.org/t/p/w500/${
              tv?.poster_path || tv?.backdrop_path
            }
                `"
            :alt="tv?.title || tv?.name || tv?.original_name"
            loading="lazy"
          />
          <NuxtImg
            v-else
            class="object-cover w-full rounded-t-lg h-96 md:h-72 md:rounded-none md:rounded-s-lg hover:scale-105 transition duration-300 ease-in-out"
            src="https://i.pravatar.cc/500"
            :alt="tv?.title || tv?.name || tv?.original_name"
            loading="lazy"
          />
          <div class="flex flex-col justify-between px-4 my-3 leading-normal">
            <NuxtLink :to="`/tv/${tv.id}`">
              <h2 class="mb-2 text-2xl font-bold tracking-tight title">
                {{ tv?.title || tv?.name || tv?.original_name }}
              </h2>
              <p class="mb-3 font-normal overview">
                {{ tv?.overview || defaultOverview }}
              </p>
              <p class="flex items-center my-2">
                <i class="pi pi-calendar mx-2"></i>
                :
                {{ tv?.release_date }}
              </p>
              <p class="flex items-center my-2">
                <Rating v-model="value" readonly :stars="1" class="star" />
                : {{ (tv?.vote_average * 10).toFixed(1) }} %
              </p>
            </NuxtLink>
            <div class="py-2">
              <ButtonsCardButtons
                :id="tv?.id"
                :media_type="tv?.media_type"
                :Data="route.path == '/popular-tv' ? tv : null"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center w-full">
      <SkeltonCardPageLoading />
    </div>
  </div>
</template>

