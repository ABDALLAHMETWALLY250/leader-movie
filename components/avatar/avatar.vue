<template>
  <div class="relative inline-block text-left">
    <button @click="toggleMenu" aria-label="avatar">
      <div
        class="flex items-center gap-2 xl:flex xl:items-center xl:gap-1 xl:flex-col lg:flex lg:items-center lg:gap-1 lg:flex-col md:flex md:items-center md:gap-1 md:flex-col"
      >
        <img
          v-if="userAvatar.profile_image"
          :src="userAvatar.profile_image"
          alt="user avatar"
          class="w-12 h-12 border-2 border-gray-200 rounded-full object-cover"
          loading="lazy"
        />

        <h5 class="font-medium text-base">
          {{ userName?.username?.substring(0, 6) }}
        </h5>
      </div>
    </button>
    <transition aria-label="fade">
      <div
        v-if="isMenuOpen"
        class="absolute bottom-0 mx-12 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      >
        <div class="py-1">
          <nuxt-link
            to="/watchlist"
            active-class="bg-gray-100"
            class="w-full px-4 py-2 text-sm hover:text-red-700 hover:bg-gray-100 flex items-center justify-between text-black"
          >
            <span>{{ $t("Add_to_watchlist") }}</span>
            <i class="pi pi-heart mx-5"></i>
          </nuxt-link>
          <nuxt-link
            to="/watchlater"
            active-class="bg-gray-100"
            class="w-full px-4 py-2 text-sm hover:bg-gray-100 flex items-center justify-between text-black"
          >
            <span>{{ $t("Add_to_watch_Later") }}</span>
            <i class="pi pi-clock mx-5"></i>
          </nuxt-link>
          <button
            aria-label="logout"
            @click="
              logoutStore.logUserOut($t('Are_you_sure'), $t('yes'), $t('no'))
            "
            class="w-full text-red-500 px-4 py-2 text-sm hover:bg-gray-100 flex items-center justify-between"
          >
            <span>{{ $t("logout") }}</span>
            <i class="pi pi-sign-out mx-5"></i>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/auth/login";

const userAvatar = ref({});
const userName = ref({});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  userAvatar.value = user || {};
  userName.value = user || {};
});

const logoutStore = useAuthStore();
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
