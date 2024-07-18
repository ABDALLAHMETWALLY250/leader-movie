<template>
  <Swiper
    class="mySwiper"
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :pagination="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide
      v-for="slide in allMoviesStore.allMovies.slice(0, 6)"
      :key="slide"
    >
      <figure
        class="relative transition-all duration-300 cursor-pointer filter brightness-90"
      >
        <nuxt-link to="/">
          <img
            class="image_film relative"
            :src="`https://image.tmdb.org/t/p/w400/${slide.backdrop_path}`"
            :alt="`${slide.title} image`"
          />
          <div class="overlay"></div>
        </nuxt-link>
        <!-- <div class="absolute bottom-2/4 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </div> -->

        <videoModal class="absolute bottom-2/4 left-1/2" />

        <figcaption class="absolute px-4 text-white bottom-10">
          <h3 class="text-2xl font-bold">{{ slide?.title }}</h3>
          <p class="my-3 xl:w-3/5 lg:w-3/5 slide_text">{{ slide?.overview }}</p>
        </figcaption>
      </figure>
    </SwiperSlide>
  </Swiper>
</template>
  

<script setup >
import { useAllMoviesStore } from "../../stores/Movies/AllMovies";

const allMoviesStore = useAllMoviesStore();
const { locale } = useI18n();
console.log(allMoviesStore.allMovies);

onMounted(() => {
  locale.value = localStorage.getItem("locale") || "en";
  allMoviesStore.setAllMovies(locale.value);
});
</script>
