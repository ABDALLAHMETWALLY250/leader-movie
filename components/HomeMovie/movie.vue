
<script setup lang="ts" >
import { usePopularMovieStore } from "../../stores/PopularMovie/PopularMovie";

const { locale } = useI18n();

const popularMovies = usePopularMovieStore();

onMounted(() => {
  if (popularMovies.popularMovie.length <= 0) {
    popularMovies.getPopularMovie(locale.value);
  }
});
</script>


<template>
  <div class="HomeMovie">
    <SkeltonCardsLoading v-if="popularMovies.popularMovie.length <= 0" />

    <div class="container mx-auto xl:px-5" v-else>
      <TopHeader :path="'movies'">
        {{ $t("Movies") }}
      </TopHeader>

      <swiper
        class="mySwiper my-3"
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :spaceBetween="10"
        :navigation="true"
        :loop="true"
        :autoplay="{
          delay: 6000,
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }"
        :dir="locale == 'ar' ? 'rtl' : 'ltr'"
        :key="locale"
      >
        <SwiperSlide v-for="item in popularMovies.popularMovie" :key="item">
          <HomeMovieCardsDetails :item="item" />
        </SwiperSlide>
      </swiper>
    </div>
  </div>
</template>
