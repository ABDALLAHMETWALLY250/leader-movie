<script setup lang="ts">
const route = useRoute();

const { locale } = useI18n();

import { useUpComing } from "~/stores/UpComming/UpComming";

const upComing = useUpComing();
onMounted(() => {
  if (upComing.upComming.length <= 0) {
    upComing.getUpComing(locale.value);
  }
});
</script>

<template>
  <SkeltonCardsLoading v-if="upComing.upComming.length <= 0" />
  <div class="p-4 upcomming container mx-auto" v-else>
    <div class="">
      <TopHeader
        :path="route.path == '/movies' ? 'up-comming-movies' : 'up-comming-tv'"
      >
        {{ $t("up_coming") }}
      </TopHeader>
    </div>

    <div>
      <Swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :spaceBetween="10"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
          dynamicBullets: true,
        }"
        :loop="true"
        :modules="[SwiperEffectCoverflow, SwiperPagination, SwiperAutoplay]"
        class="mySwiper h-96 mt-3"
        :key="locale"
        :dir="locale == 'ar' ? 'rtl' : 'ltr'"
      >
        <SwiperSlide
          class="swiper-slide"
          v-for="item in upComing.upComming"
          :key="item"
        >
          <UpCommingCards :items="item" class="h-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
  



