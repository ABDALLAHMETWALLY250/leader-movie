
<script setup lang="ts">
import { useMovieSwiper } from "@/stores/MovieSwiper/MovieSwiper";

const allMoviesStore = useMovieSwiper();
const { locale } = useI18n();
const value = ref<number>(3.5);

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
  if (allMoviesStore.movieSwiper.length === 0) {
    locale.value = localStorage.getItem("locale") || "en";
    allMoviesStore.setMovieSwiper(locale.value);
  }
});
</script>

<template>
  <div v-if="allMoviesStore.movieSwiper.length <= 0" class="px-4">
    <SkeltonImageSwiper />
  </div>

  <Swiper
    v-else
    class="mySwiper xl:container xl:mx-auto lg:container lg:mx-auto"
    :modules="[SwiperAutoplay, SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
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
      <figure class="relative cursor-pointer">
        <div
          :style="{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
              slide.backdrop_path ||
              slide.poster_path ||
              'https://i.pravatar.cc/300'
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }"
        >
          <NuxtImg
            v-if="slide.backdrop_path"
            class="image_film relative transition duration-300 ease-in-out"
            :src="`https://image.tmdb.org/t/p/w500/${
              slide.backdrop_path ? slide.backdrop_path : slide.poster_path
            }`"
            :alt="`${slide.title} image`"
            rel="preload"
            loading="eager"
          />
          <NuxtImg
            v-else
            class="image_film relative"
            src="https://i.pravatar.cc/300"
            :alt="`${slide.title} image`"
            rel="preload"
            loading="eager"
          />
          <div class="overlay"></div>
        </div>

        <videoModal
          class="absolute top-1/2 left-1/2 text-white"
          :movie_id="slide.id"
        />

        <figcaption
          class="absolute xl:px-28 px-8 xl:w-3/4 lg:w-3/4 w-full text-white bottom-10"
        >
          <h2 class="text-2xl font-bold">{{ slide?.title }}</h2>
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
        </figcaption>
      </figure>
    </SwiperSlide>
  </Swiper>
</template>
  
