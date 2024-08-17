<template >
  <div class="HomeMovie">
    <div class="container mx-auto xl:px-5">
      <TopHeader :path="'popular-tv'">
        {{ $t("popular_tv") }}
      </TopHeader>
      <h4
        v-if="popularTv.popTv.length <= 0"
        class="text-3xl font-bold text-center mt-6"
      >
        <CardloadinHomeCardLoading />
      </h4>
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
        <swiper-slide v-for="item in popularTv.popTv" :key="item.id">
          <CardsDetails :item="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
  
  <script setup  lang="ts" >
import { usePopTv } from "../../stores/poppularTv/popTv";
import CardsDetails from "../HomeMovie/CardsDetails.vue";
import TopHeader from "../HomeMovie/TopHeader.vue";

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
  