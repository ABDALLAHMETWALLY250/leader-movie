<template>
  <nav class="fixed top-0 w-full z-10 bg-white navbar" id="navbar">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2"
    >
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="~/assets/images/logo.png" class="w-14" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Leader Movie</span
        >
      </a>
      <button
        @click="toggleMenu"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        :class="{ hidden: !isMenuOpen, block: isMenuOpen }"
        class="w-full md:block md:w-auto"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col px-1 py-3 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
        >
          <li class="my-3">
            <nuxt-link
              to="/auth/login"
              activeClass="active"
              class="block py-2 px-3 md:p-0"
              aria-current="page"
            >
              {{ $t("login") }}
            </nuxt-link>
          </li>
          <li class="my-3">
            <nuxt-link
              activeClass="active"
              to="/auth/register"
              class="block py-2 px-3 md:p-0"
            >
              {{ $t("register") }}
            </nuxt-link>
          </li>

          <!-- <li class="my-3 xl:py-0 lg:py-0 md:py-0 xl:px-0 lg:px-0 md:px-0 px-3">
            <LangDropDown />
          </li> -->

          <li class="my-3 xl:py-0 lg:py-0 md:py-0 xl:px-0 lg:px-0 md:px-0 px-3">
            <div class="flex items-center">
              <button @click="changeTheme('dark')" v-if="theme == 'light'">
                <svg
                  class="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                  />
                </svg>
              </button>

              <button
                @click="changeTheme('light')"
                v-else
                class="flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                  />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
    
    <script lang="ts" setup>
const theme = ref("");

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const changeTheme = (newTheme: string) => {
  theme.value = newTheme;
  localStorage.setItem("theme", newTheme);

  if (theme.value == "dark") {
    document.body.classList.add("dark");
    document.getElementById("navbar")?.classList.add("dark");
  } else if (theme.value == "light") {
    document.body.classList.remove("dark");
    document.getElementById("navbar")?.classList.remove("dark");
  }
};

onMounted(() => {
  theme.value = localStorage.getItem("theme") || "light";
});
</script>
    
