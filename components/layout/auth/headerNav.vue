<template>
  <nav class="fixed top-0 w-full z-10 bg-white navbar" id="navbar">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2"
    >
      <nuxt-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <NuxtImg src="favicon.ico" class="w-14" alt="Logo" format="webp" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Leader Movie</span
        >
      </nuxt-link>
      <button
        name="navbar"
        @click="toggleMenu"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <i class="pi pi-bars"></i>
      </button>
      <div
        :class="{ hidden: !isMenuOpen, block: isMenuOpen }"
        class="w-full md:block md:w-auto"
        id="navbar-default"
      >
        <ul
          class="font-medium flex justify-center flex-col px-1 py-3 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
        >
          <li class="my-3" style="margin: 1rem 0.8rem" @click="isMenuOpen = false">
            <nuxt-link
              to="/auth/login"
              activeClass="active"
              class="block py-2 px-3 md:p-0"
              aria-current="page"
            >
              {{ $t("login") }}
            </nuxt-link>
          </li>
          <li class="my-3" style="margin: 1rem 0.8rem" @click="isMenuOpen = false">
            <nuxt-link
              activeClass="active"
              to="/auth/register"
              class="block py-2 px-3 md:p-0"
            >
              {{ $t("register") }}
            </nuxt-link>
          </li>

          <li
            class="my-3 xl:py-0 lg:py-0 md:py-0 xl:px-0 lg:px-0 md:px-0 px-3"
            style="margin: 1rem 0.8rem"
          >
            <LangDropDown />
          </li>

          <li
            class="my-3 xl:py-0 lg:py-0 md:py-0 xl:px-0 lg:px-0 md:px-0 px-3"
            style="margin: 1rem 0.8rem"
          >
            <ThemeChangeTheme @changeTheme="changeTheme" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
    
<script lang="ts" setup>
const emit = defineEmits(["changeTheme"]);
const theme = ref<string>("light");
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const changeTheme = (newTheme: string) => {
  theme.value = newTheme;
  localStorage.setItem("theme", theme.value);

  emit("changeTheme", theme.value);

  if (theme.value == "dark") {
    theme.value = "dark";
  } else if (theme.value == "light") {
    theme.value = "light";
  }
};
onMounted(() => {
  theme.value = localStorage.getItem("theme") || "light";
});
</script>
    
