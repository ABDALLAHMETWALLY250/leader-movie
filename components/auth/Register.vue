<template>
  <form @submit.prevent="register" class="container mx-auto px-8 py-3 relative">
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
        @click="deleteImage"
        class="rounded-full trasg_btn"
        title="Delete Image"
      >
        <svg
          class="w-6 h-6 text-gray-800 dark:text-red-500"
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
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>
      </button>
    </div>

    <div v-else class="flex items-center justify-center w-full my-5">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center px-12 py-6 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-5000 dark:hover:bg-bray-800 dark:border-gray-600 dark:hover:border-white 0 dark:bg-slate-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 4.586A2 2 0 0 1 8.914 4h6.172a2 2 0 0 1 1.414.586L17.914 6H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.086L7.5 4.586ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
              clip-rule="evenodd"
            />
          </svg>
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
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="password"
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
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:border-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
    >
      {{ $t("register") }}
    </button>

    <p
      class="text-sm font-light text-gray-500 dark:text-gray-400 mt-4 text-center"
    >
      {{ $t("already_have_account") }}
      <NuxtLink
        to="/auth/login"
        class="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >{{ $t("login") }}</NuxtLink
      >
    </p>
  </form>
  <ToastSuccess v-if="registerStore.err == 'Success'">
    {{ $t("Register_Success") }}
  </ToastSuccess>

  <ToastFaield v-else-if="registerStore.err == 'failure'">
    {{ $t("Password_or_userName_are_exist_before") }}
  </ToastFaield>
</template>

<script lang="ts" setup>
import { useRegisterStore } from "../../stores/auth/register";
const registerStore = useRegisterStore();
const userRegister = ref({
  username: "",
  password: "",
  email: "",

  name: "",
  profile_image: null as File | null,
  profile_image_url: "",
});

const errors = reactive({
  username: "",
  password: "",
  email: "",

  name: "",
});

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
    userRegister.value.profile_image = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === "string") {
        userRegister.value.profile_image_url = e.target.result;
        localStorage.setItem("profile_image_url", e.target.result);
      }
    };
    reader.readAsDataURL(file);
  }
};

const deleteImage = () => {
  userRegister.value.profile_image = null;
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
        profile_image: userRegister.value.profile_image,
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
  