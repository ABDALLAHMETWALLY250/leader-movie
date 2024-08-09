<template >
  <div class="HomeMovie">
    <div class="container mx-auto xl:px-5">
      <TopHeader :path="'popular-movie'">
        {{ $t("popular_movie") }}
      </TopHeader>

      <CardloadinHomeCardLoading v-if="!popularMovies.loading" />

      <swiper
        class="mySwiper my-3"
        :modules="[SwiperAutoplay]"
        :slidesPerView="1"
        :spaceBetween="10"
        :loop="true"
        :autoplay="{
          delay: 4000,
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }"
        :dir="locale == 'ar' ? 'rtl' : 'ltr'"
        :key="locale"
      >
        <swiper-slide v-for="item in popularMovies.popularMovie" :key="item.id">
          <CardsDetails :item="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
    
    <script setup  lang="ts" >
import { usePopularMovieStore } from "../../stores/PopularMovie/PopularMovie";
import CardsDetails from "../HomeMovie/CardsDetails.vue";
import TopHeader from "../HomeMovie/TopHeader.vue";

const { locale } = useI18n();
const popularMovies = usePopularMovieStore();
onMounted(() => {
  locale.value = localStorage.getItem("locale") || "en";
  popularMovies.getPopularMovie(locale.value, 1);
});
</script>
    <style lang="">
</style>
    