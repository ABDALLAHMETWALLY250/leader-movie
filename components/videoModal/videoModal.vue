<template>
  <div class="search_modal">
    <button class="has-tooltip" @click="showModal = true">
      <svg
        class="w-12 h-12 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <transition name="modal">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-filter backdrop-blur-sm z-10"
      >
        <div class="bg-white p-8 rounded-lg shadow-lg w-3/4 search">
          <h2 class="text-2xl mb-4">{{ $t("search") }}</h2>
          <input
            type="text"
            class="w-full p-2 border rounded mb-4"
            :placeholder="$t('search')"
          />
          <h5 class="my-5 text-center font-medium capitalize text-base">
            {{ $t("No_search_result") }}
          </h5>
          <button
            @click="showModal = false"
            class="bg-sky-800 text-white p-2 rounded"
          >
            {{ $t("close") }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
  
  <script setup lang="ts">
const showModal = ref(false);

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    showModal.value = false;
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscapeKey);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscapeKey);
});
</script>
  