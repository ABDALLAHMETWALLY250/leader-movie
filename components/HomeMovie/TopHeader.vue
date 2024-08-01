<template >
  <div>
    <div class="flex items-center justify-between w-full">
      <div class="flex flex-col gap-3 title">
        <h1 class="text-4xl font-medium capitalize">
          <slot />
        </h1>
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