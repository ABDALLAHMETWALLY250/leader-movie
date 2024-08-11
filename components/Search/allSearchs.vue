<template>
  <div v-if="allSearchs.length > 0">
    <ul>
      <p class="my-2 font-bold text-2xl text-center Movie">
        {{ $t("allSearchs") }}
      </p>
      <li
        v-for="item in allSearchs"
        :key="item.id"
        class="mb-4 flex items-center"
      >
        <div
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row card_Movie relative"
        >
          <img
            v-if="item?.backdrop_path || item?.poster_path"
            class="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-48 md:rounded-none md:rounded-s-lg"
            :src="`https://image.tmdb.org/t/p/w500/${
              item?.backdrop_path || item?.poster_path
            }`"
            :alt="item?.name || item?.title"
          />

          <img
            v-else
            class="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://i.pravatar.cc/500"
            :alt="item?.name || item?.title"
          />
          
          <div class="flex flex-col justify-between px-4 leading-normal">
            <NuxtLink :to="`/movie/${item.id}`" class="">
              <h5 class="mb-2 text-2xl font-bold tracking-tight">
                {{ item?.title || item.name }}
              </h5>
              <p class="mb-3 font-normal overview">
                {{ item?.overview || defaultOverView }}
              </p>
              <p class="flex items-center my-2">
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                  />
                </svg>
                :
                {{
                  item?.release_date ||
                  item?.first_air_date ||
                  new Date().getDate() +
                    "-" +
                    (new Date().getMonth() + 1) +
                    "-" +
                    new Date().getFullYear()
                }}
              </p>
              <p class="flex items-center my-2">
                <svg
                  class="w-5 h-5 dark:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                :
                {{ (item.vote_average || 0 * 10).toFixed(1) }}
                %
              </p>
              <span
                class="px-2 py-1 ms-2 text-md text-center bg-gray-400 rounded-lg w-14"
              >
                {{ item.media_type }}
              </span>
            </NuxtLink>
            <ButtonsCardButtons
              :id="item?.id"
              :media_type="item?.media_type"
              :Data="item"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
  <script setup lang="ts">
const defaultOverView = computed(() => {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";
});
defineProps(["allSearchs"]);
</script>
  <style lang="">
</style>