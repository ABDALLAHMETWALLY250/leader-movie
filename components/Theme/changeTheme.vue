<template >
  <div class="theme">
    <div class="flex items-center">
      <button @click="changeTheme('dark')" v-if="theme == 'light'">
        <svg
          class="w-6 h-6"
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
          class="w-6 h-6"
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
  </div>
</template>
<script setup lang="ts">
const theme = ref<string>("light");
const changeTheme = (newTheme: string) => {
  theme.value = newTheme;
  localStorage.setItem("theme", newTheme);

  if (theme.value == "dark") {
    document.body.classList.add("dark");
    document.getElementById("navbar")?.classList.add("dark");
    document.getElementById("sidebar")?.classList.add("dark");
  } else if (theme.value == "light") {
    document.body.classList.remove("dark");
    document.getElementById("navbar")?.classList.remove("dark");
    document.getElementById("sidebar")?.classList.remove("dark");
  }
};
onMounted(() => {
  theme.value = localStorage.getItem("theme") || "light";
});
</script>
<style lang="">
</style>