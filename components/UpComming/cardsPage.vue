<script setup lang="ts">
defineProps(["items"]);
const defaultOverview = computed(() => {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.";
});
const value = ref<number>(1);
const route = useRoute();
</script>
<template>
  <div class=" " v-for="item in items" :key="item.id">
    <div
      class="flex flex-col items-center my-3 border border-gray-200 rounded-lg shadow cards overflow-hidden cursor-pointer"
    >
      <NuxtImg
        v-if="item?.poster_path || item?.backdrop_path"
        class="object-cover w-full rounded-t-lg h-96 md:h-72 md:rounded-none md:rounded-s-lg hover:scale-105 transition duration-300 ease-in-out"
        :src="`https://image.tmdb.org/t/p/w500/${
          item?.poster_path || item?.backdrop_path
        }`"
        :alt="item?.title || item?.name || item?.original_name"
        loading="lazy"
      />
      <NuxtImg
        v-else
        class="object-cover w-full rounded-t-lg h-96 md:h-72 md:rounded-none md:rounded-s-lg hover:scale-105 transition duration-300 ease-in-out"
        src="https://i.pravatar.cc/500"
        :alt="item?.title || item?.name || item?.original_name"
        loading="lazy"
      />
      <div class="flex flex-col justify-between px-4 my-3 leading-normal">
        <NuxtLink :to="`/movie/${item.id}`">
          <h2 class="mb-2 text-2xl font-bold tracking-tight title">
            {{ item?.title || item?.name || item?.original_name }}
          </h2>
          <p class="mb-3 font-normal overview">
            {{ item?.overview || defaultOverview }}
          </p>
          <p class="flex items-center my-2">
            <i class="pi pi-calendar mx-2"></i>:
            {{ item?.release_date }}
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
            :Data="route.path == '/popular-item' ? item : null"
          />
        </div>
      </div>
    </div>
  </div>
</template>
