<template>
  <button class="has-tooltip">
    <button
      class="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 ms-5"
      @click="logoutStore.logUserOut()"
    >
      {{ $t("logout") }}
    </button>
    <!-- {{ userAvatar.email }} -->
    <div
      class="xl:flex xl:items-center xl:gap-1 xl:flex-col lg:flex lg:items-center lg:gap-1 lg:flex-col md:flex md:items-center md:gap-1 md:flex-col flex items-center gap-2"
    >
      <img
        :src="
          userAvatar.profile_image
            ? userAvatar.profile_image
            : defaultuserAvatar
        "
        alt="Bordered avatar"
        class="w-12 h-12 border-2 border-gray-200 rounded-full object-cover"
      />
      <h5 class="font-medium text-base">{{ userName.username }}</h5>
    </div>
  </button>
</template>
  
  <script setup >
import { useAuthStore } from "../../stores/auth/login";

const userAvatar = ref("");
const userName = ref("");
const defaultuserAvatar = ref("");

onMounted(() => {
  userAvatar.value = JSON.parse(localStorage.getItem("user"));
  userName.value = JSON.parse(localStorage.getItem("user"));
  // userAvatar.value = localStorage.getItem("profile_image_url");
  defaultuserAvatar.value = "https://i.pravatar.cc/300";
});

const logoutStore = useAuthStore();
</script>
  
  <style lang="">
</style>
  