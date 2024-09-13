<template >
  <div class="">
    <div class="flex items-center justify-between w-full top-header">
      <div class="flex flex-col gap-3 title">
        <h3 class="text-3xl font-medium capitalize">
          <slot />
        </h3>
        <div class="border-top"></div>
      </div>
      <nuxt-link :to="`/${path}`">
        <p
          class="font-normal capitalize hover:underline transition-all duration-300"
        >
          {{ $t("view_all") }}
        </p>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(["path"]);
</script>
<style lang="">
</style>