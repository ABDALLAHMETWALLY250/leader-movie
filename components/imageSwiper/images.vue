<template>
  <Swiper
    class="mySwiper"
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 4000,
    }"
    :dir="locale == 'ar' ? 'rtl' : 'ltr'"
    :key="locale"
    :creative-effect="creativeEffect"
  >
    <SwiperSlide v-for="slide in allMoviesStore.movieSwiper" :key="slide.id">
      <figure
        class="relative transition-all duration-300 cursor-pointer filter brightness-90"
      >
        <nuxt-link to="/">
          <img
            v-if="slide.backdrop_path"
            class="image_film relative"
            :src="`https://image.tmdb.org/t/p/w500/${
              slide.backdrop_path ? slide.backdrop_path : slide.poster_path
            }`"
            :alt="`${slide.title} image`"
          />
          <img
            v-else
            class="image_film relative"
            src="https://i.pravatar.cc/300"
            :alt="`${slide.title} image`"
          />
          <div class="overlay"></div>
        </nuxt-link>

        <videoModal
          class="absolute bottom-2/4 left-1/2 text-white"
          :movie_id="slide.id"
        />

        <figcaption class="absolute px-4 text-white bottom-10">
          <h3 class="text-2xl font-bold">{{ slide?.title }}</h3>
          <p class="mt-3 xl:w-3/5 lg:w-3/5 slide_text">{{ slide?.overview }}</p>
          <div class="flex items-center gap-3">
            <p class="flex items-center mt-3">
              <i class="pi pi-calendar mx-2"></i>
              : {{ slide?.release_date }}
            </p>

            <p class="flex items-center mt-3">
              <Rating v-model="value" readonly :stars="1" class="mx-2" />
              : {{ (slide?.vote_average * 10).toFixed(2) }} %
            </p>
          </div>

          <div class="flex items-center gap-3 mt-3">
            <button class="bg-red-700 py-2 px-5 rounded-lg">
              {{ $t("Add_to_watchlist") }}
            </button>
            <button
              class="border border-red-700 hover:bg-red-700 py-2 px-5 rounded-lg transition-all duration-300"
            >
              {{ $t("Add_to_watch_Later") }}
            </button>
          </div>
        </figcaption>
      </figure>
    </SwiperSlide>
  </Swiper>
</template>
  

<script setup >
import { useMovieSwiper } from "../../stores/MovieSwiper/MovieSwiper";

const allMoviesStore = useMovieSwiper();
const { locale } = useI18n();
const value = ref(3.5);
// console.log(allMoviesStore.movieSwiper);

// swiper
const creativeEffect = computed(() => {
  if (locale.value === "ar") {
    return {
      prev: {
        shadow: true,
        translate: [0, 0, -200],
      },
      next: {
        translate: ["-100%", 0, 0], // Reversed for RTL
      },
    };
  } else {
    return {
      prev: {
        shadow: true,
        translate: [0, 0, -200],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    };
  }
});
// swiper
onMounted(() => {
  locale.value = localStorage.getItem("locale") || "en";
  allMoviesStore.setMovieSwiper(locale.value);
});
</script>
