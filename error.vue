<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
    <button @click="handleError" aria-label="error">Clear errors</button>
  </div>
</template>
