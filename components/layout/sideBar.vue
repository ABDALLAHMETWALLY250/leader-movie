<template>
  <div class="sidebar">
    <aside class="h-screen border-r-2 px-3 bg-gray-100" id="sidebar">
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

      <Avatar />

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

      <LangDropDown />
    </aside>
  </div>
</template>

<script setup lang="ts">
// import { defineEmits } from "vue";
const theme = ref("");

const changeTheme = (newTheme: string) => {
  theme.value = newTheme;
  localStorage.setItem("theme", newTheme);
  // console.log(newTheme);
  // console.log(theme.value);

  if (newTheme == "dark") {
    document.body.classList.add("dark");
    document.getElementById("sidebar")?.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.getElementById("sidebar")?.classList.remove("dark");
  }
};

onMounted(() => {
  theme.value = localStorage.getItem("theme") || "light";
});
</script>

<style lang="scss" scoped>
</style>
