<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});
useHead({
  title: "Login",
  meta: [{ name: "description", content: "Login" }],
});
</script>

<template >
  <div class="login">
    <div
      class="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 w-full h-full"
    >
      <!-- image -->
      <div class="image">
        <img
          src="https://tse3.mm.bing.net/th?id=OIG2.7V5eJMq00fx1VreZjxJP&pid=ImgGn"
          alt="image Login"
          loading="lazy"
        />
        <div class="description sm-none">
          <div class="circle">
            <NuxtImg
              src="favicon.ico"
              alt="Logo"
              format="webp"
              loading="lazy"
            />
          </div>
          <h4>{{ $t("Welcome_in_Leader_movie") }}</h4>
          <span class="text-gray-500 xl:flex xl:w-8/12">{{
            $t(
              "Discover_the_latest_reviews_news_and_exclusive_content_on_Leader_Movie_your_go_to_source_for_all_things_cinema"
            )
          }}</span>
        </div>
      </div>
      <div class="description lb-none dk-none tb-none">
        <div class="circle">
          <NuxtImg src="favicon.ico" alt="Logo" format="webp" loading="lazy" />
        </div>
        <h4>{{ $t("Welcome_in_Leader_movie") }}</h4>
        <span class="text-gray-500 xl:flex lg:w-1/2 lg:flex">{{
          $t(
            "Discover_the_latest_reviews_news_and_exclusive_content_on_Leader_Movie_your_go_to_source_for_all_things_cinema"
          )
        }}</span>
      </div>
      <!-- image -->

      <div class="flex items-center w-full login_form xl:px-14">
        <AuthLogin />
      </div>
    </div>
  </div>
</template>

