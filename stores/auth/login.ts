import Swal from "sweetalert2";

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser(
      { username, password }: UserPayloadInterface,
      message_success: string,
      message_fail: string
    ) {
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

        Swal.fire({
          icon: "success",

          title: message_success,
          timer: 2000,
          showConfirmButton: false,
        });
        navigateTo("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: message_fail,
          timer: 2000,
          showConfirmButton: false,
        });
      }
    },
    logUserOut(message: string,yes:string,no:string) {
      Swal.fire({
        title: message,
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: no,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: yes,
      }).then((result) => {
        if (result.isConfirmed) {
          const token = useCookie("token"); // useCookie new hook in nuxt 3
          localStorage.clear();
          this.authenticated = false; // set authenticated  state value to false
          token.value = null; // clear the token cookie
          navigateTo("/auth/login");
        }
      });
    },
  },
});
