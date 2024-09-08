<template>
  <div class="container mx-auto px-5 popular_movie">
    <div class="grid grid-cols-12 gap-4">
      <div
        class="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12"
        v-for="movie in 8"
        :key="movie"
      >
        <Skeleton width="100%" height="400px"></Skeleton>
        <Skeleton width="60%" height="15px" class="my-4"></Skeleton>
        <Skeleton width="100%" height="15px" class="my-4"></Skeleton>
        <Skeleton width="100%" height="15px" class="my-4"></Skeleton>
      </div>
    </div>
  </div>
</template>

  