<template >
  <div class="">
    <div class="xl:h-[70vh] h-[55vh] w-full relative">
      <slot name="imageBanner" />

      <div
        class="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden bg-fixed"
      >
        <div
          class="flex flex-col gap-3 justify-center h-full"
          style="background-color: rgba(0, 0, 0, 0.3)"
        >
          <div class="container mx-auto xl:px-28 px-4">
            <slot name="contentBanner" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

