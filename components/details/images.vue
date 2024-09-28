<script setup lang="ts">
const props = defineProps({
  imagesForMovie: {
    type: Object,
    required: true,
  },
});
</script>


<template>
  <div>
    <div class="container mx-auto my-6">
      <div
        class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 col-span-12 gap-4 my-4 w-full h-[40rem] overflow-auto posters"
      >
        <div
          v-for="image in props.imagesForMovie.posters"
          :key="image.id"
          class="w-full"
        >
          <Image
            :src="`https://image.tmdb.org/t/p/w400/${image.file_path}`"
            :alt="image.file_path"
            loading="lazy"
            class="hover:filter hover:brightness-50 hover:backdrop-brightness-50 hover:scale-105 transition-all duration-300 cursor-pointer"
            preview
          />
        </div>
      </div>
    </div>
  </div>
</template>
