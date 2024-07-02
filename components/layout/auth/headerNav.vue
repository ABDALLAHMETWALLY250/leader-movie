<template>
  <nav class="border-black border-b-2 fixed w-full z-10 bg-white">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2"
    >
      <nuxt-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="~/assets/images/logo.png" class="w-14" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Leader Movie</span
        >
      </nuxt-link>
      <div class="locale-changer">
        <select v-model="$i18n.locale">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </div>
    </div>
  </nav>
</template>
      
      <script lang="ts" setup>
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
      
  <style scoped lang="scss">
.text-blue-700 {
  color: #1d4ed8;
}
</style>
      