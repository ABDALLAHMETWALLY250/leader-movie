<template >
  <div class="login">
    <div
      class="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 w-full h-full"
    >
      <!-- image -->
      <div class="image">
        <img
          src="https://tse1.mm.bing.net/th?id=OIG1.6yegaAA1pehQF3sDAPs1&pid=ImgGn"
          alt="image Login"
        />
        <div class="description sm-none">
          <div class="circle">
            <img src="~/assets/images/logo.png" alt="Logo" />
          </div>
          <h4>{{ $t("Welcome_in_Leader_movie") }}</h4>
          <span class="text-gray-500">{{
            $t(
              "Discover_the_latest_reviews_news_and_exclusive_content_on_Leader_Movie_your_go_to_source_for_all_things_cinema"
            )
          }}</span>
        </div>
      </div>
      <div class="description lb-none dk-none tb-none ">
        <div class="circle">
          <img src="~/assets/images/logo.png" alt="Logo" />
        </div>
        <h4>{{ $t("Welcome_in_Leader_movie") }}</h4>
        <span class="text-gray-500">{{
          $t(
            "Discover_the_latest_reviews_news_and_exclusive_content_on_Leader_Movie_your_go_to_source_for_all_things_cinema"
          )
        }}</span>
      </div>
      <!-- image -->

      <div class="flex items-center w-full login_form">
        <AuthLogin />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});
</script>