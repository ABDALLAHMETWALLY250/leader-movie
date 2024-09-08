<template >
  <div>
    <div class="px-4">
      <Swiper
        class="mySwiper xl:container xl:mx-auto lg:container lg:mx-auto"
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="1"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 7000,
        }"
      >
        <SwiperSlide v-for="slide in 6" :key="slide">
          <Skeleton width="100%" height="350px"></Skeleton>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
