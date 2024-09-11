<template>
  <div>
    <Swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
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
      class="mySwiper h-96 my-8"
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

  
  
  