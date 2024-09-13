<script setup lang="ts">
const route = useRoute();
const { locale } = useI18n();
</script>

<template>
  <div class="py-5">
    <div class="HomeMovie">
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
        <SwiperSlide class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
  




<style scoped lang="scss">
.swiper-slide {
  background-size: cover;
  background-position: center;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    filter: brightness(0.8);
  }
}
</style>

  
  
  
