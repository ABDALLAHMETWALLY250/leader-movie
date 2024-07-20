<template >
  <div class="HomeMovie">
    <div class="flex items-center justify-between w-full">
      <div class="flex flex-col gap-1 title">
        <h1 class="text-4xl font-medium capitalize">movie</h1>
        <div class="border-top"></div>
      </div>
      <nuxt-link to="/movies">
        <p
          class="font-normal capitalize hover:underline transition-all duration-300"
        >
          show all
        </p>
      </nuxt-link>
    </div>
    <div
      class="my-3 xl:flex xl:items-center xl:justify-between lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between flex items-center justify-between gap-3 flex-col"
    >
      <div
        class="border border-gray-200 rounded-lg shadow"
        v-for="movie in 5"
        :key="movie"
      >
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal overview">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>