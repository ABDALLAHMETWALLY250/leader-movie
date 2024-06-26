<template >
  <div class="container mx-auto">
    <h1 class="text-3xl text-red-600">hello</h1>

    <p>count {{ countStore.count }}</p>

    <button
      class="bg-sky-500 text-white px-8 py-2 rounded-md"
      @click="countStore.increment"
    >
      button
    </button>
  </div>
</template>
<script setup>
import { useCountStore } from "../stores/count";
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});
const countStore = useCountStore();
</script>
<style lang="">
</style>