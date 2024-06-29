<template>
  <nav class="border-black border-b-2 fixed w-full z-10 bg-white">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2"
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
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <li>
            <nuxt-link
              to="/auth/login"
              activeClass="text-blue-700"
              class="block py-2 px-3 md:p-0"
              aria-current="page"
              >Login</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              activeClass="text-blue-700"
              to="/auth/register"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Register
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <slot />
</template>
  
  <script lang="ts" setup>
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
  
  <style scoped lang="scss">
/* Add any additional styles here if needed */
.text-blue-700 {
  color: #1d4ed8;
}
</style>
  