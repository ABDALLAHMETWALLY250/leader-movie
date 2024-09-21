
<template>
  <div class="search_modal">
    <nuxt-link
      v-tooltip.left="{
        value: $t('search'),
        pt: {
          arrow: {
            style: {
              borderBottomColor: 'var(--p-primary-color)',
            },
          },
          text: '!bg-primary !text-primary-contrast !font-medium !text-sm !px-2 !py-1 !rounded',
        },
      }"
      to="/search"
      activeClass="active"
      aria-label="search"
    >
      <i class="pi pi-search text-xl font-bold"></i>
    </nuxt-link>
  </div>
</template>

