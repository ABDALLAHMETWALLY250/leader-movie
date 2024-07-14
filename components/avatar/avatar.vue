<template>
  <button class="has-tooltip" >
    <button
      class="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 ms-5"
      @click="logoutStore.logUserOut()"
    >
      {{ $t("logout") }}
    </button>

    <img
      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      alt="Bordered avatar"
      class="w-12 h-12 border-2 border-gray-200 rounded-full object-cover"
    />
  </button>
</template>
  
  <script setup lang="ts">
import { useAuthStore } from "../../stores/auth/login";

const logoutStore = useAuthStore();
</script>
  
  <style lang="">
</style>
  