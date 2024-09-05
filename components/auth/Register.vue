<template>
  <form
    @submit.prevent="register"
    class="container mx-auto px-8 relative py-28"
  >
    <h5 class="xl:text-4xl md:text-4xl lg:text-4xl text-3xl font-bold mb-3">
      {{ $t("register") }}
    </h5>
    <span class="text-gray-500 capitalize">{{
      $t("Please_enter_your_information_to_registe")
    }}</span>

    <!-- image -->
    <div
      class="relative flex items-center justify-center my-5"
      v-if="userRegister.profile_image_url"
    >
      <img
        :src="userRegister.profile_image_url"
        alt="Uploaded Image"
        class="w-32 h-32 rounded-full object-cover"
      />

      <button
        aria-label="delete"
        @click="deleteImage"
        class="rounded-full trasg_btn"
        title="Delete Image"
      >
        <i class="pi pi-trash text-red-600"></i>
      </button>
    </div>

    <div v-else class="flex items-center justify-center w-full my-5">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center px-12 py-6 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-5000 dark:hover:bg-bray-800 dark:border-gray-600 dark:hover:border-white 0 dark:bg-slate-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <i class="pi pi-camera"></i>
        </div>
        <input
          id="dropzone-file"
          type="file"
          class="hidden"
          @change="onFileChange"
          accept="image/*"
          required
        />
      </label>
    </div>
    <!-- image -->

    <!-- email & password -->
    <div class="flex w-full mt-4 sm-flex-col flex-col">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          v-model="userRegister.email"
          @blur="validateEmail"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          aria-label="Email address"
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >{{ $t("Email") }}</label
        >
        <span
          v-if="errors.email"
          class="text-red-500 text-sm"
          aria-live="polite"
          >{{ errors.email }}</span
        >
      </div>
      <div class="z-0 w-full mb-5 group relative">
        <input
          :type="showPassword ? 'text' : 'password'"
          name="floating_password"
          id="floating_password"
          v-model="userRegister.password"
          @blur="validatePassword"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          aria-label="Password"
        />
        <label
          for="floating_password"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >{{ $t("Password") }}</label
        >
        <span
          v-if="errors.password"
          class="text-red-500 text-sm"
          aria-live="polite"
          >{{ errors.password }}</span
        >
        <span class="absolute top-3 right-5" @click="appearpass">
          <i v-if="!showPassword" class="pi pi-eye"></i>
          <i v-else class="pi pi-eye-slash"></i>
        </span>
      </div>
    </div>
    <!-- email & password -->

    <!-- username & name -->
    <div class="grid md:grid-cols-1">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_username"
          id="floating_username"
          v-model="userRegister.username"
          @blur="validateUsername"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          aria-label="User Name"
        />
        <label
          for="floating_username"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >{{ $t("username") }}</label
        >
        <span
          v-if="errors.username"
          class="text-red-500 text-sm"
          aria-live="polite"
          >{{ errors.username }}</span
        >
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_name"
          id="floating_name"
          v-model="userRegister.name"
          @blur="validateName"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          aria-label="Name"
        />
        <label
          for="floating_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >{{ $t("Name") }}</label
        >
        <span
          v-if="errors.name"
          class="text-red-500 text-sm"
          aria-live="polite"
          >{{ errors.name }}</span
        >
      </div>
    </div>
    <!-- username & name -->

    <button
      name="register"
      type="submit"
      aria-label="Register"
      class="text-white mb-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:border-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
    >
      {{ $t("register") }}
    </button>

    <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
      {{ $t("already_have_account") }}
      <NuxtLink
        to="/auth/login"
        class="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >{{ $t("login") }}</NuxtLink
      >
    </p>
  </form>
</template>

<script lang="ts" setup>
import { useRegisterStore } from "../../stores/auth/register";
const registerStore = useRegisterStore();
const userRegister = ref({
  username: "",
  password: "",
  email: "",

  name: "",
  image: null as File | null,
  profile_image_url: "",
});

const showPassword = ref(false);

const errors = reactive({
  username: "",
  password: "",
  email: "",
  name: "",
});

const appearpass = () => {
  showPassword.value = !showPassword.value;
};

const toast = ref(false);

const validateInputs = () => {
  return (
    validateUsername() &&
    validatePassword() &&
    validateEmail() &&
    validateName()
  );
};

const validateUsername = () => {
  errors.username = userRegister.value.username ? "" : "Username is required.";
  return !errors.username;
};

const validatePassword = () => {
  errors.password = userRegister.value.password ? "" : "Password is required.";
  return !errors.password;
};

const validateEmail = () => {
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userRegister.value.email)
    ? ""
    : "Valid email is required.";
  return !errors.email;
};

const validateName = () => {
  errors.name = userRegister.value.name ? "" : "Name is required.";
  return !errors.name;
};

const onFileChange = (event?: any) => {
  const file = event.target.files[0];
  if (file) {
    userRegister.value.image = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === "string") {
        userRegister.value.profile_image_url = e.target.result;
      }
    };
    reader.readAsDataURL(file);
  }
};

const deleteImage = () => {
  userRegister.value.image = null;
  userRegister.value.profile_image_url = "";
};

const register = async () => {
  if (validateInputs()) {
    await registerStore
      .authenticateUserRegister({
        username: userRegister.value.username,
        password: userRegister.value.password,
        email: userRegister.value.email,
        name: userRegister.value.name,
        image: userRegister.value.image,
      })
      .then(() => {
        toast.value = true;
        setTimeout(() => {
          toast.value = false;
        }, 3000);
      });
  }
};
</script>
  