<template >
  <div class="container mx-auto">
    <h1>{{ $t("hello") }}</h1>
    <h1>{{ $t("title") }}</h1>
  </div>
  <!--  -->
  <LangDropDown />
  <!--  -->
</template>
<script setup>
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});
</script>
