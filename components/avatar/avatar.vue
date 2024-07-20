<template>
  <div class="relative inline-block text-left">
    <button @click="toggleMenu">
      <div
        class="flex items-center gap-2 xl:flex xl:items-center xl:gap-1 xl:flex-col lg:flex lg:items-center lg:gap-1 lg:flex-col md:flex md:items-center md:gap-1 md:flex-col"
      >
        <img
          v-if="userAvatar.profile_image"
          :src="userAvatar.profile_image"
          alt="user avatar"
          class="w-12 h-12 border-2 border-gray-200 rounded-full object-cover"
        />
        <img
          v-else
          :src="defaultUserAvatar"
          alt="user avatar"
          class="w-12 h-12 border-2 border-gray-200 rounded-full object-cover"
        />
        <h5 class="font-medium text-base">
          {{ userName?.username?.substring(0, 6) }}
        </h5>
      </div>
    </button>
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      >
        <div class="py-1">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Profile</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >Settings</a
          >
          <button
            @click="logoutStore.logUserOut()"
            class="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {{ $t("logout") }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "../../stores/auth/login";

const userAvatar = ref({});
const userName = ref({});
const defaultUserAvatar =
  "https://cdn-icons-png.flaticon.com/512/149/149071.png";
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
