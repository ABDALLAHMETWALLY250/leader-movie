interface RegisterParams {
  username: string;
  password: string;
  email: string;
  name: string;
  image: File | null;
}

export const useRegisterStore = defineStore("register", {
  state: () => ({
    loading: false,
    err: "",
  }),
  actions: {
    async authenticateUserRegister({
      username,
      password,
      email,
      name,
      image,
    }: RegisterParams) {
      try {
        this.loading = true;

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("name", name);
        if (image) {
          formData.append("image", image);
        }

        const { data, pending, error } = await useFetch(
          "https://tarmeezacademy.com/api/v1/register",
          {
            method: "POST",
            body: formData,
          }
        );

        this.loading = pending.value;

        if (error.value) {
          throw new Error(error.value.message);
        }

        if (data.value) {
          this.err = "Success";
          navigateTo("/auth/login");
        } else {
          this.err = "failure";
        }
      } catch (err) {
        console.error("Registration error:", err);
      } finally {
        this.loading = false;
      }
    },
  },
});
