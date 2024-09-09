<template>
 <div v-if="loading == false">

     <ImageSwiperImages />

  <HomeMovie />
  <div class="px-10">
    <div class="border_top w-full"></div>
  </div>
  <TvShowTvshow />
 </div>
  <div class="w-full h-screen flex items-center justify-center text-3xl font-bold" v-else>
        Loading ....
      </div>
</template>
<script setup lang="ts">

  const loading = ref(true)


onMounted(() => {
  newTheme.value = localStorage.getItem("theme") || "light";
  console.log("loading");
  
  // Set the timeout to update the loading state after 5 seconds
  setTimeout(() => {
    loading.value = false;
  }, 5000);
});
  
</script>

