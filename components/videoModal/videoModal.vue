
<template>
  <div class="card flex justify-center">
    <Button @click="visible = true"> aa </Button>
    <Dialog
      v-model:visible="visible"
      modal
      header="Header"
      :style="{ width: '50vw' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      pt:mask:class="backdrop-blur-sm "
      pt:root:class="!border-0 !bg-transparent "
    >
      <p class="m-0">my Video</p>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>
