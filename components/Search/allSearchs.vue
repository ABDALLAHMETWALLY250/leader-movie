<script setup lang="ts">
const value = ref<number>(3);
const defaultOverView = computed(() => {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";
});

defineProps(["allSearchs"]);
</script>


<template>
  <div
    v-if="allSearchs.length > 0"
    class="grid gap-4 my-8 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
  >
    <div
      v-for="item in allSearchs"
      :key="item.id"
      class="bg-white border border-gray-600 rounded-lg shadow card_Movie relative flex flex-col"
    >
      <div class="overflow-hidden">
        <img
          v-if="item?.backdrop_path || item?.poster_path"
          class="object-cover w-full rounded-t-lg h-96 md:h-72 hover:scale-105 transition duration-300 ease-in-out"
          :src="`https://image.tmdb.org/t/p/w500/${
            item?.backdrop_path || item?.poster_path
          }`"
          :alt="item?.name || item?.title"
          loading="lazy"
        />
        <img
          v-else
          class="object-cover w-full rounded-t-lg h-96 md:h-72 hover:scale-105 transition duration-300 ease-in-out"
          src="https://i.pravatar.cc/500"
          :alt="item?.name || item?.title"
          loading="lazy"
        />
      </div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <NuxtLink :to="`/movie/${item.id}`">
          <h2 class="mb-2 text-2xl font-bold tracking-tight">
            {{ item?.title || item.name }}
          </h2>
          <p class="mb-3 font-normal overview">
            {{ item?.overview || defaultOverView }}
          </p>
          <p class="flex items-center my-2">
            <i class="pi pi-calendar mx-2"></i>
            :
            {{
              item?.release_date ||
              item?.first_air_date ||
              new Date().getDate() +
                "-" +
                (new Date().getMonth() + 1) +
                "-" +
                new Date().getFullYear()
            }}
          </p>
          <p class="flex items-center my-2">
            <Rating v-model="value" readonly :stars="1" />
            : {{ (item.vote_average || 0 * 10).toFixed(1) }}%
          </p>
          <span
            class="px-2 py-1 ms-2 text-md text-center bg-gray-400 rounded-lg w-14"
            >{{ item.media_type }}</span
          >
        </NuxtLink>
        <ButtonsCardButtons
          :id="item?.id"
          :media_type="item?.media_type"
          :Data="item"
          class="py-2"
        />
      </div>
    </div>
  </div>
</template>



