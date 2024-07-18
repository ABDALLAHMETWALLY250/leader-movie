<template>
  <button class="has-tooltip">
    <button
      class="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 ms-5"
      @click="logoutStore.logUserOut()"
    >
      {{ $t("logout") }}
    </button>

    <img
      :src="userAvatar ? userAvatar : 'https://i.pravatar.cc/300'"
      alt="Bordered avatar"
      class="w-10 h-10 border-2 border-gray-200 rounded-full object-cover"
    />
  </button>
</template>
  
  <script setup >
import { useAuthStore } from "../../stores/auth/login";

const userAvatar = ref("");

onMounted(() => {
  userAvatar.value = localStorage.getItem("avatar");
});

const logoutStore = useAuthStore();
</script>
  
  <style lang="">
</style>
  