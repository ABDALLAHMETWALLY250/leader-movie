<script setup lang="ts">
import { videoMoviesStore } from "~/stores/Viedeos/videoMovies";

const videoModal = videoMoviesStore();

const { locale } = useI18n();

const props = defineProps({
  media_type: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const fetcVideo = () => {
  videoModal.getVideoMovies(locale.value, props.id);
  console.log("444");
};

onMounted(() => {
  fetcVideo();
});
</script>

<template>
  <div class="my-6">
    <TabView>
      <TabPanel header="Header II">
        <p class="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit,
          sed quia non numquam eius modi.
        </p>
      </TabPanel>

      <TabPanel header="videos" @tab-click="fetcVideo">
        <div
          class="container mx-auto xl:px-32 lg:px-32 md:px-20 sm:px-10 my-6 h-96 overflow-auto"
        >
          <ul
            class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 col-span-12 gap-4 my-4"
          >
            <li v-for="i in videoModal.videoMovies" :key="i" class="w-full">
              <iframe
                :src="`https://www.youtube.com/embed/${i.key}`"
                frameborder="0"
                allowfullscreen
                class="w-full h-96"
              ></iframe>
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel header="Header III">
        <p class="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus.
        </p>
      </TabPanel>
    </TabView>
  </div>
</template>
