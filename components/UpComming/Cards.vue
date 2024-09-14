<script setup lang="ts">
const prosp = defineProps(["items"]);
</script>

<template>
  <div class="upcomming-card">
    <img
      :src="`https://image.tmdb.org/t/p/w500/${
        items?.backdrop_path || items?.poster_path
      }`"
      :alt="items?.title || items?.name || items?.original_name"
      loading="lazy"
      class="object-cover w-full rounded-t-lg h-full"
    />

    <div class="actions">
      <div
        class="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden bg-fixed"
      >
        <div
          class="flex justify-center items-center h-full"
          style="background-color: rgba(0, 0, 0, 0.3)"
        >
          <h5 class="text-xl font-bold text-white mb-3">
            {{ items?.title || items?.name || items?.original_name }}
          </h5>
        </div>
      </div>

      <div class="absolute bottom-0 w-full bg-white">
        <ButtonsCardButtons
          :id="items.id"
          :media_type="items.media_type"
          :Data="items"
        />
      </div>
    </div>
  </div>
</template>
