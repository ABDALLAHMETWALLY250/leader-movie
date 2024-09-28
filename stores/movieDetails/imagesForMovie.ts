export const useImagesForMovie = defineStore("imagesForMovie", {
  state: () => ({
    images: [],
  }),
  actions: {
    async getImages(id: number, language: string) {
      const api_key = "e62b5c7ac206f4ba1f5625e1433cef42";
      try {
        await fetch(
          `https://api.themoviedb.org/3/movie/${id}/images?api_key=${api_key}&language=${language}&include_image_language=en`
        ).then((res) =>
          res.json().then((data) => {
            this.images = data;
            // console.log(this.images, "images");
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
});
