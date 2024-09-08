<template >
  <div class="HomeMovie">
    <div class="container mx-auto xl:px-5">
      <HomeMovieTopHeader :path="'popular-tv'">
        {{ $t("popular_tv") }}
      </HomeMovieTopHeader>
      <div v-if="popularTv.popTv.length <= 0" class="mt-6">
        <SkeltonCardsLoading />
      </div>
      <swiper
        class="mySwiper my-3"
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :spaceBetween="10"
        :navigation="true"
        :loop="true"
        :autoplay="{
          delay: 5000,
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
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
        <swiper-slide v-for="item in popularTv.popTv" :key="item">
          <HomeMovieCardsDetails :item="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
  
  <script setup  lang="ts" >
import { usePopTv } from "../../stores/poppularTv/popTv";

const { locale } = useI18n();
const popularTv = usePopTv();
onMounted(() => {
  if (popularTv.popTv.length === 0) {
    locale.value = localStorage.getItem("locale") || "en";
    popularTv.getPopTv(locale.value, 1);
  }
});
</script>
  <style lang="">
</style>
  