<template>
  <div class="sidebar">
    <aside class="h-screen border-2 px-3 bg-gray-100" id="sidebar">
      <nuxt-link
        aria-label="Go to homepage"
        v-tooltip.left="{
          value: $t('home'),
          pt: {
            arrow: {
              style: {
                borderBottomColor: 'var(--p-primary-color)',
              },
            },
            text: '!bg-primary !text-primary-contrast !font-medium !text-sm !px-2 !py-1 !rounded',
          },
        }"
        to="/"
        active-class="active"
      >
        <i class="pi pi-home text-3xl"></i>
      </nuxt-link>

      <nuxt-link
        aria-label="tv_shows"
        v-tooltip.left="{
          value: $t('tv_shows'),
          pt: {
            arrow: {
              style: {
                borderBottomColor: 'var(--p-primary-color)',
              },
            },
            text: '!bg-primary !text-primary-contrast !font-medium !text-sm !px-2 !py-1 !rounded',
          },
        }"
        to="/tv-show"
        active-class="active"
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

      <nuxt-link
        aria-label="Movies"
        v-tooltip.left="{
          value: $t('Movies'),
          pt: {
            arrow: {
              style: {
                borderBottomColor: 'var(--p-primary-color)',
              },
            },
            text: '!bg-primary !text-primary-contrast !font-medium !text-sm !px-2 !py-1 !rounded',
          },
        }"
        to="/movies"
        active-class="active"
      >
        <i class="pi pi-video text-3xl"></i>
      </nuxt-link>

      <ModalSearch />

      <LangDropDown />

      <div class="flex items-center">
        <ThemeChangeTheme @changeTheme="changeTheme" />
      </div>

      <Avatar />
    </aside>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["changeTheme"]);
const changeTheme = (newTheme: string) => {
  emit("changeTheme", newTheme);
};
</script>

<style lang="scss" scoped>
</style>
