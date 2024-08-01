<template >
  <div class="HomeMovie">
    <div class="container mx-auto xl:px-5">
      <TopHeader :path="'movies'">
        {{ $t("Movies") }}
      </TopHeader>
      <h1
        v-if="!popularMovies.loading"
        class="text-3xl font-bold text-center mt-6"
      >
        Lodading...
      </h1>
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

      <!-- <div class="card">
        <Carousel
          :value="popularMovies.popularMovie"
          :numVisible="4"
          :loop="true"
          :numScroll="1"
          :dir="locale == 'ar' ? 'rtl' : 'ltr'"
          :key="locale"
          :responsiveOptions="responsiveOptions"
        >
          <template #item="slotProps">
            <CardsDetails :movie="slotProps" class="mx-1 mt-4" />
          </template>
        </Carousel>
      </div> -->
    </div>
  </div>
</template>

<script setup  >
import { usePopularMovieStore } from "../../stores/PopularMovie/PopularMovie";
import CardsDetails from "./CardsDetails.vue";
import TopHeader from "./TopHeader.vue";

const locale = useI18n();
// const responsiveOptions = ref([
//   {
//     breakpoint: "1400px",
//     numVisible: 3,
//     numScroll: 1,
//   },
//   {
//     breakpoint: "1199px",
//     numVisible: 3,
//     numScroll: 1,
//   },
//   {
//     breakpoint: "767px",
//     numVisible: 3,
//     numScroll: 1,
//   },
//   {
//     breakpoint: "575px",
//     numVisible: 1,
//     numScroll: 1,
//   },
// ]);

const popularMovies = usePopularMovieStore();

onMounted(() => {
  locale.value = localStorage.getItem("locale") || "en";
  popularMovies.getPopularMovie(locale.value);
});
</script>
<style lang="">
</style>
