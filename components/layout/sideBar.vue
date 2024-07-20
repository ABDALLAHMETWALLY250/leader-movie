<template>
  <div class="sidebar">
    <aside class="h-screen border-2 px-3 bg-gray-100" id="sidebar">
      <nuxt-link class="has-tooltip" to="/" active-class="active">
        <span
          class="tooltip rounded shadow-lg p-1 bg-gray-100 text-sky-500 ms-10 w-max"
          >{{ $t("home") }}</span
        >
        <svg
          class="w-10 h-10 icon"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
            clip-rule="evenodd"
          />
        </svg>
      </nuxt-link>

      <nuxt-link class="has-tooltip" to="/tv-show" active-class="active">
        <span
          class="tooltip rounded shadow-lg p-1 bg-gray-100 text-sky-500 ms-10 w-max"
          >{{ $t("tv_shows") }}</span
        >

        <svg
          fill="#000000"
          class="w-10 h-10 icon"
          width="800px"
          height="800px"
          viewBox="0 0 256 256"
          id="Flat"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M232,80V200a16.01833,16.01833,0,0,1-16,16H40a16.01833,16.01833,0,0,1-16-16V80A16.01833,16.01833,0,0,1,40,64h68.68555L74.34277,29.65723A8.00053,8.00053,0,0,1,85.65723,18.34277L128,60.68652l42.34277-42.34375a8.00053,8.00053,0,0,1,11.31446,11.31446L147.31445,64H216A16.01833,16.01833,0,0,1,232,80Z"
          />
        </svg>
      </nuxt-link>

      <ModalSearch />

      <LangDropDown />

      <div class="flex items-center">
        <ThemeChangeTheme />
      </div>

      <Avatar />
    </aside>
  </div>
</template>

<script setup lang="ts">
// import { defineEmits } from "vue";
</script>

<style lang="scss" scoped>
</style>
