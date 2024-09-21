<template >
  <div class="container mx-auto">
    <swiper
      class="mySwiper my-3"
      :modules="[SwiperAutoplay]"
      :spaceBetween="30"
      :loop="true"
      :autoplay="{
        delay: 7000,
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
    >
      <swiper-slide v-for="item in 5" :key="item">
        <div class="cards">
          <div class="card_border relative">
            <Skeleton width="100%" height="400px"></Skeleton>
            <Skeleton width="60%" height="15px" class="my-4"></Skeleton>
            <Skeleton width="100%" height="15px" class="my-4"></Skeleton>
            <Skeleton width="100%" height="15px" class="my-4"></Skeleton>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
  