<template>
  <div
    class="xl:grid xl:grid-cols-12 lg:grid lg:grid-cols-12 md:grid md:grid-cols-12"
  >
    <div class="col-span-1 sm-none">
      <LayoutSideBar @changeTheme="changeTheme" />
    </div>

    <LayoutNavBar @changeTheme="changeTheme" class="lb-none tb-none dk-none" />

    <div class="col-span-11">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts" >
const emit = defineEmits(["changeTheme"]);
const changeTheme = (Theme: string) => {
  emit("changeTheme", Theme);
};
</script>
    