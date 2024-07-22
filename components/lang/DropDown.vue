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
  window.location.reload();
  const selectedLocale = event.target.value || "en";
  locale.value = selectedLocale;
  localStorage.setItem("locale", selectedLocale);
  document.querySelector("html").setAttribute("lang", selectedLocale);

  applyLanguageChange(selectedLocale);
};

const initializeLanguage = () => {
  const savedLocale = localStorage.getItem("locale") || "en";
  document.querySelector("html").setAttribute("lang", savedLocale);
  locale.value = savedLocale;
};

onMounted(() => {
  initializeLanguage();
  const languageSelector = document.getElementById("language-selector");
  if (languageSelector) {
    languageSelector.addEventListener("change", changeLanguage);
  }
});
</script>

<style lang="">
</style>
