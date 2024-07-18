<template>
  <div
    class="xl:grid xl:grid-cols-12 lg:grid lg:grid-cols-12 md:grid md:grid-cols-12"
  >
    <div class="col-span-1 sm-none">
      <LayoutSideBar />
    </div>

    <LayoutNavBar class="lb-none tb-none dk-none" />

    <div class="col-span-11">
      <div class="content w-full">
        <slot />
      </div>
    </div>
  </div>
</template>
    
    <script lang="ts" setup>
</script>
    
    <style scoped lang="scss">
/* Add any additional styles here if needed */
.text-blue-700 {
  color: #1d4ed8;
}
</style>
    