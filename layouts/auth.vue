<template>
  <LayoutAuthHeaderNav @changeTheme="changeTheme" />

  <slot />
</template>
        
<script lang="ts" setup>
const emit = defineEmits(["changeTheme"]);
const theme = ref<string>("light");

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
    

