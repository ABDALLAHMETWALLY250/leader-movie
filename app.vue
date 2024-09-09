<template>
  <div :id="newTheme" :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <NuxtRouteAnnouncer />
    <NuxtLayout @changeTheme="changeTheme">
      <div v-if="!loading">
        <NuxtPage />
      </div>
      <div class="w-full h-screen flex items-center justify-center text-3xl font-bold">
      Loading ....
      </div>
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
  const loading  = ref(true)
const newTheme = ref<string>("");

const changeTheme = (Theme: string) => {
  newTheme.value = Theme;
};
onMounted(() => {
  newTheme.value = localStorage.getItem("theme") || "light";

   setTimeout(loading.value = false, 5000);
});
</script>
