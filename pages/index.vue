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



  
</script>

