<template >
  <div class="cards">
    <div class="card_border relative">
      <div>
        <NuxtImg
          class="rounded-lg w-full object-cover text-white hover:backdrop-brightness-50"
          :src="`https://image.tmdb.org/t/p/w400/${item.poster_path}`"
          :alt="item.title || item.name || item.original_name"
          width="500"
          format="webp"
        />
      </div>
      <div class="">
        <nuxt-link
          :to="`/${item.media_type == 'tv' ? 'tv' : 'movie'}/${item.id}`"
          :dir="locale == 'ar' ? 'rtl' : 'ltr'"
        >
          <h5 class="mb-2 text-xl font-bold tracking-tight title">
            {{ item.title || item.name || item.original_name }}
          </h5>
          <p class="mb-3 font-normal overview">
            {{ item.overview || defaultOverView }}
          </p>
        </nuxt-link>

        <ButtonsCardButtons />
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps(["item"]);

const { locale } = useI18n();

const defaultOverView = computed(() => {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";
});
</script>
<style lang="">
</style>