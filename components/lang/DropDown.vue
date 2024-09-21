<script setup lang="ts">
const { locale } = useI18n();
const uniqueId = ref<string>(
  `language-selector-${Math.random().toString(36).substring(2, 9)}`
);

const changeLanguage = (event: any) => {
  if (process.client) {
    window.location.reload();
    const selectedLocale = event.target.value || "en";
    locale.value = selectedLocale;
    localStorage.setItem("locale", selectedLocale);
    document.querySelector("html").setAttribute("lang", selectedLocale);

    applyLanguageChange(selectedLocale);
  }
};

const initializeLanguage = () => {
  if (process.client) {
    const savedLocale = localStorage.getItem("locale") || "en";
    document.querySelector("html").setAttribute("lang", savedLocale);
    locale.value = savedLocale;
  }
};

onMounted(() => {
  if (process.client) {
    initializeLanguage();
    const languageSelector = document.getElementById(uniqueId.value);
    if (languageSelector) {
      languageSelector.addEventListener("change", changeLanguage);
    }
  }
});
</script>
<template>
  <ClientOnly>
    <div class="locale-changer">
      <label :for="uniqueId"></label>
      <select
        @change="changeLanguage"
        aria-label="Choose a language"
        v-model="locale"
        :id="uniqueId"
      >
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div>
  </ClientOnly>
</template>

