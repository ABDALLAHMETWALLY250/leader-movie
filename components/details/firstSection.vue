<template>
  <div class="container mx-auto xl:px-32">
    <div class="grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 gap-6">
      <div class="xl:col-span-4 lg:col-span-5 md:col-span-6">
        <slot name="image" />
      </div>
      <div class="xl:col-span-8 lg:col-span-6 md:col-span-6">
        <div class="flex flex-col gap-6 items-start h-full">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>
  