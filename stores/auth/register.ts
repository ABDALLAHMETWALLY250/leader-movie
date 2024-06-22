interface Register {
  (
    name: string,
    email: string,
    password: string,
    usename: string,
    phone: string,
    profile_image: string
  ): Promise<void>;
}

export const useRegisterStore = defineStore("register", {
  state: () => ({}),
  actions: {
    async authenticateUserRegister({
      username,
      password,
      email,
      phone,
      name,
      profile_image,
    }: Register) {
      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch(
        "https://tarmeezacademy.com/api/v1/register",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            username,
            password,
            email,
            phone,
            name,
            profile_image,
          },
        }
      );
      this.loading = pending;

      if (data.value) {
        // const token = useCookie("token"); // useCookie new hook in nuxt 3
        // token.value = data?.value?.token; // set token to cookie
        // this.authenticated = true; // set authenticated  state value to true
        console.log("register done", data.value);
        alert("register done");
      } else {
        alert("register failed");
      }
    },
  },
});
