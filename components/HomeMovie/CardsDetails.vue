<script setup lang="ts">
defineProps(["item"]);

const { locale } = useI18n();

const defaultOverView = computed(() => {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";
});
</script>


<template>
  <div class="cards">
    <div class="card_border relative">
      <div class="overflow-hidden">
        <NuxtImg
          v-if="item.poster_path"
          class="rounded-lg h-96 w-full object-cover text-white hover:backdrop-brightness-50 hover:scale-105 transition-all duration-300 cursor-pointer"
          :src="`https://image.tmdb.org/t/p/w400/${item.poster_path}`"
          :alt="item.title || item.name || item.original_name"
          format="webp"
          preview
          loading="lazy"
        />
        <NuxtImg
          v-else
          class="rounded-lg h-96 w-full object-cover text-white hover:backdrop-brightness-50"
          src="https://i.pravatar.cc/300"
          :alt="item.title || item.name || item.original_name"
          loading="lazy"
        />
      </div>
      <div class="">
        <nuxt-link
          :to="`/${item.media_type == 'tv' ? 'tv' : 'movie'}/${item.id}`"
          :dir="locale == 'ar' ? 'rtl' : 'ltr'"
        >
          <h2 class="mb-2 text-xl font-bold tracking-tight title">
            {{ item.title || item.name || item.original_name }}
          </h2>
          <p class="mb-3 font-normal overview">
            {{ item.overview || defaultOverView }}
          </p>
        </nuxt-link>

        <ButtonsCardButtons
          :id="item.id"
          :media_type="item.media_type"
          :Data="item"
        />
      </div>
    </div>
  </div>
</template>
