<template>
  <div class="locale-changer">
    <select @change="changeLanguage" v-model="locale">
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLanguage = (event) => {
  locale.value = event.target.value;
  window.location.reload();
  localStorage.setItem("locale", event.target.value);
};
onMounted(() => {
  locale.value = localStorage.getItem("locale");
  // console.log(locale.value);
});
</script>

<style lang="">
</style>
