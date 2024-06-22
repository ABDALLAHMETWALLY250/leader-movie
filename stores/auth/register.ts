// Define the Register interface correctly
interface RegisterParams {
  username: string;
  password: string;
  email: string;
  phone: string;
  name: string;
  profile_image: string;
}

export const useRegisterStore = defineStore("register", {
  state: () => ({
    loading: false,
  }),
  actions: {
    async authenticateUserRegister({
      username,
      password,
      email,
      phone,
      name,
      profile_image,
    }: RegisterParams) {
      try {
        const { data, pending, error } = await useFetch(
          "https://tarmeezacademy.com/api/v1/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username,
              password,
              email,
              phone,
              name,
              profile_image,
            }),
          }
        );

        this.loading = pending.value;

        if (error.value) {
          throw new Error(error.value.message);
        }

        if (data.value) {
          console.log("Register done", data.value);
          alert("Register done");
        } else {
          alert("Register failed");
        }
      } catch (err) {
        console.error("Registration error:", err);
        alert("Register failed");
      } finally {
        this.loading = false;
      }
    },
  },
});
