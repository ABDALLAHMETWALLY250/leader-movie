<template>
  <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

