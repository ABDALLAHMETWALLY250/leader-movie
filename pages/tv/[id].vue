<template >
  <div class="">
    {{ Route.params.id }}
  </div>
</template>
<script setup lang="ts">
const locale = useI18n();

const Route = useRoute();
</script>
<style lang="">
</style>