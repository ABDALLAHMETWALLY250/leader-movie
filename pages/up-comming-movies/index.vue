<script setup lang="ts">
import { useUpComing } from "~/stores/UpComming/UpComming";

const { locale } = useI18n();
const useupcoming = useUpComing();

const currentPage = ref<number>(1);

const fetchMOvies = () => {
  if (useupcoming.upComming.length === 0) {
    locale.value = localStorage.getItem("locale") || "en";
    useupcoming.getUpComing(locale.value, useupcoming.page);
  }
};

onMounted(() => {
  fetchMOvies();
  setupInfiniteScroll();
});

onUpdated(() => {
  setupInfiniteScroll();
  currentPage.value = useupcoming.page;
});

onUnmounted(() => {
  window.onscroll = null;
});

const setupInfiniteScroll = () => {
  window.onscroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 40
    ) {
      currentPage.value++;
      useupcoming.page = currentPage.value;
      useupcoming.getUpComing(locale.value, useupcoming.page);
    }
  };
};

useHead({
  title: "Up-comming-movies",
  meta: [{ name: "description", content: "Up-comming-movies" }],
});
</script>

<template >
  <div class="container mx-auto px-5">
    <div
      class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4"
      v-if="useupcoming.upComming.length > 0"
    >
      <UpCommingCardsPage :items="useupcoming.upComming" />
    </div>
    <div class="text-center w-full">
      <SkeltonCardPageLoading />
    </div>
  </div>
</template>
