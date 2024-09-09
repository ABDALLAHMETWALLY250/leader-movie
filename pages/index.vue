<template>
 <div v-if="loading == false">

     <ImageSwiperImages />

  <HomeMovie />
  <div class="px-10">
    <div class="border_top w-full"></div>
  </div>
  <TvShowTvshow />
 </div>
</template>
<script setup lang="ts">

  const loading = ref(false)


onMounted(() => {
  newTheme.value = localStorage.getItem("theme") || "light";
  console.log("loading");
  
  // Set the timeout to update the loading state after 5 seconds
  setTimeout(() => {
    loading.value = false;
  }, 5000);
});
  
</script>

