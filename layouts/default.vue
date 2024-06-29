<template>
  <div class="grid grid-cols-12">
    <div class="col-span-1">
      <LayoutSideBar class="sm-none" />
      <LayoutNavBar class="lb-none tb-none dk-none" />
    </div>
    <div class="col-span-11">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
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
    