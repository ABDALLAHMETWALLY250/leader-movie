<script setup lang="ts">
const props = defineProps({
  videoMovies: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="">
    <div class="container mx-auto my-6 h-[40rem] overflow-auto vedios">
      <ul
        class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 col-span-12 gap-4 my-4"
      >
        <li v-for="video in props.videoMovies" :key="video.id" class="w-full">
          <iframe
            :src="`https://www.youtube.com/embed/${video.key}`"
            frameborder="0"
            class="w-full h-96"
          ></iframe>
        </li>
      </ul>
    </div>
  </div>
</template>
