<template >
  <div v-if="movies.length > 0">
    <ul>
      <p class="my-2 font-bold text-2xl text-center Movie">
        {{ $t("Movies") }}
      </p>
      <li
        v-for="movie in movies"
        :key="movie.id"
        class="mb-4 flex items-center"
      >
        <nuxt-link
          :to="`/movie/${movie.id}`"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row card_Movie relative"
        >
          <img
            v-if="movie.poster_path || movie.backdrop_path"
            class="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-48 md:rounded-none md:rounded-s-lg"
            :src="`
                https://image.tmdb.org/t/p/w500/${
                  movie.poster_path || movie.backdrop_path
                }
              `"
            :alt="movie.title || movie.name || movie.original_name"
          />
          <img
            v-else
            class="object-cover w-full rounded-t-lg h-96 md:h-72 md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://i.pravatar.cc/500"
            :alt="movie.title || movie.name || movie.original_name"
          />
          <div class="flex flex-col justify-between px-4 leading-normal">
            <div class="">
              <h5 class="mb-2 text-2xl font-bold tracking-tight">
                {{ movie.title || movie.name || movie.original_name }}
              </h5>
              <p class="mb-3 font-normal overview">
                {{ movie.overview }}
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
                  movie.release_date
                    ? movie.release_date
                    : new Date().getDate() +
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
                : {{ (movie.vote_average * 10).toFixed(1) }} %
              </p>
              <span
                class="px-2 py-1 ms-2 text-md text-center bg-gray-400 rounded-lg w-14"
              >
                {{ movie.media_type }}
              </span>
            
            </div>
          </div>
          <button class="absolute top-2 mx-2 p-1 bg-gray-700 rounded-lg">
            <svg
              class="w-6 h-6 hover:text-red-500 text-white hover:fill-red-500 cursor-pointer tranbsition-all duration-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"
              />
            </svg>
          </button>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
defineProps({
  movies: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="">
</style>