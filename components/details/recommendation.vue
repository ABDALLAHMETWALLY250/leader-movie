<script setup lang="ts">
import { useRecommendation } from "~/stores/movieDetails/recommendation";

const recommendation = useRecommendation();

const { locale } = useI18n();
const route = useRoute();
const fetchRecommendation = async () => {
  await recommendation.getRecommendation(+route.params.id, locale.value);
};

onMounted(async () => {
  await fetchRecommendation();
});

watch(
  () => route.params.id,
  async () => {
    await fetchRecommendation();
  }
);
</script>

<template>
  <div class="container mx-auto xl:px-10 lg:px-10 md:px-10 sm:px-10 py-20 px-4">
    <h3 class="text-3xl font-bold">{{ $t("Recommendation") }}</h3>
    <swiper
      class="mySwiper my-4"
      :modules="[SwiperAutoplay]"
      :spaceBetween="10"
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
      <SwiperSlide
        v-for="recommendation in recommendation.recommendations"
        :key="recommendation"
      >
        <HomeMovieCardsDetails :item="recommendation" />
      </SwiperSlide>
    </swiper>
  </div>
</template>
