<script setup lang="ts">
const newTheme = ref<string>("");

const changeTheme = (Theme: string) => {
  newTheme.value = Theme;
};

onMounted(() => {
  newTheme.value = localStorage.getItem("theme") || "light";
});
</script>


<template>
  <div :id="newTheme" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <NuxtRouteAnnouncer />
    <NuxtLayout @changeTheme="changeTheme">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

