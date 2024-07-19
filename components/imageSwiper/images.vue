<template>
  <Swiper
    class="mySwiper"
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :pagination="true"
    :autoplay="{
      delay: 4000,
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
    <SwiperSlide v-for="slide in allMoviesStore.movieSwiper" :key="slide.id">
      <figure
        class="relative transition-all duration-300 cursor-pointer filter brightness-90"
      >
        <nuxt-link to="/">
          <img
            class="image_film relative"
            :src="`https://image.tmdb.org/t/p/w500/${slide.backdrop_path}`"
            :alt="`${slide.title} image`"
          />
          <div class="overlay"></div>
        </nuxt-link>

        <videoModal class="absolute bottom-2/4 left-1/2 text-white" />

        <figcaption class="absolute px-4 text-white bottom-10">
          <h3 class="text-2xl font-bold">{{ slide?.title }}</h3>
          <p class="mt-3 xl:w-3/5 lg:w-3/5 slide_text">{{ slide?.overview }}</p>
          <div class="flex items-center gap-3">
            <p class="flex items-center mt-3">
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                />
              </svg>
              : {{ slide?.release_date }}
            </p>

            <p class="flex items-center mt-3">
              <svg
                class="w-5 h-5 dark:text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                />
              </svg>

              : {{ slide?.vote_average * 10 }} %
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
// console.log(allMoviesStore.movieSwiper);

onMounted(() => {
  locale.value = localStorage.getItem("locale") || "en";
  allMoviesStore.setMovieSwiper(locale.value);
});
</script>
