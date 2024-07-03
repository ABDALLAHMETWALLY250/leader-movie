interface UserPayloadInterface {
  username: string;
  password: string;
  email: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({
      username,
      password,
      email,
    }: UserPayloadInterface) {
      // useFetch from nuxt 3

      try {
        const { data, pending }: any = await useFetch(
          "https://tarmeezacademy.com/api/v1/login",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: {
              username,
              password,
              email,
            },
          }
        );
        this.loading = pending;

        if (data.value) {
          const token = useCookie("token"); // useCookie new hook in nuxt 3
          token.value = data?.value?.token; // set token to cookie
          localStorage.setItem("token", data?.value?.token);
          localStorage.setItem("user", JSON.stringify(data.value?.user));
          this.authenticated = true; // set authenticated  state value to true
          navigateTo("/");
        }
      } catch (e) {
        console.log(e, "a7ooooooooooooooo");
        alert(e);
        this.loading = false;
      }
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      localStorage.clear();
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
  },
});
