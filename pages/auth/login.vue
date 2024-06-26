<template >
  <div class="login">
    <div
      class="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 w-full h-full"
    >
      <!-- image -->
      <div class="image">
        <img
          src="https://tse1.mm.bing.net/th?id=OIG1.6yegaAA1pehQF3sDAPs1&pid=ImgGn"
          alt="image Login"
        />
        <div class="description sm-none">
          <div class="circle">
            <img src="~/assets/images/logo.png" alt="Logo" />
          </div>
          <h4>Welcome in Leader movie</h4>
          <span class="text-gray-500"
            >Discover the latest reviews, news, and exclusive content on
            Leader-Movie, your go-to source for all things cinema.</span
          >
        </div>
      </div>
      <div class="description lb-none dk-none tb-none">
        <div class="circle">
          <img src="~/assets/images/logo.png" alt="Logo" />
        </div>
        <h4>Welcome in Leader movie</h4>
        <span class="text-gray-500"
          >Discover the latest reviews, news, and exclusive content on
          Leader-Movie, your go-to source for all things cinema.</span
        >
      </div>
      <!-- image -->

      <div class="flex items-center w-full login_form">
        <AuthLogin />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>