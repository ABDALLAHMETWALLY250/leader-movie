<template>
  <button class="has-tooltip">
    <button
      class="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 ms-5"
      @click="logoutStore.logUserOut()"
    >
      {{ $t("logout") }}
    </button>
    <!-- {{ userAvatar.email }} -->
    <img
      :src="
        userAvatar.profile_image ? userAvatar.profile_image : defaultuserAvatar
      "
      alt="Bordered avatar"
      class="w-10 h-10 border-2 border-gray-200 rounded-full object-cover"
    />
  </button>
</template>
  
  <script setup >
import { useAuthStore } from "../../stores/auth/login";

const userAvatar = ref("");
const defaultuserAvatar = ref("");

onMounted(() => {
  userAvatar.value = JSON.parse(localStorage.getItem("user"));
  // userAvatar.value = localStorage.getItem("profile_image_url");
  defaultuserAvatar.value = "https://i.pravatar.cc/300";
});

const logoutStore = useAuthStore();
</script>
  
  <style lang="">
</style>
  