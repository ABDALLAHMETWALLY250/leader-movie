<template >
  <div>
    <h1>{{ Route.params.id }}</h1>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const Route = useRoute();
</script>
<style lang="">
</style>