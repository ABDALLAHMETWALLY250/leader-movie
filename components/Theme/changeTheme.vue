<template >
  <div class="theme">
    <div class="flex items-center">
      <button @click="changeTheme('dark')" v-if="theme == 'light'" aria-label="theme">
        <i class="pi pi-moon"></i>
      </button>

      <button
        @click="changeTheme('light')"
        v-else-if="theme == 'dark'"
        aria-label="theme"
      >
        <i class="pi pi-sun"></i>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const theme = ref<string>("light");
const emit = defineEmits(["changeTheme"]);

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
<style lang="">
</style>