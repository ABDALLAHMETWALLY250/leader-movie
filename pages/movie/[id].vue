<template >
  <div>
    <h1>{{ Route.params.id }}</h1>
  </div>
</template>
<script setup>
const locale = useI18n();
const Route = useRoute();
</script>
<style lang="">
</style>