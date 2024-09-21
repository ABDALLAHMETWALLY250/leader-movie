<script lang="ts" setup>
import { useAuthStore } from "../../stores/auth/login";

const loginStore = useAuthStore();

const userLogin = reactive({
  username: "",
  password: "",
});

const showPassword = ref<boolean>(false);

const appearpass = () => {
  showPassword.value = !showPassword.value;
};

const errors = reactive({
  username: "",
  password: "",
});

const toast = ref<boolean>(false);
const validateInputs = () => {
  errors.username = userLogin.username ? "" : "Valid username is required.";

  errors.password = userLogin.password ? "" : "Password is required.";
  return !Object.values(errors).some((error) => error !== "");
};
const login = (message_success: string, message_fail: string) => {
  if (validateInputs()) {
    loginStore.authenticateUser(userLogin, message_success, message_fail);
  }
};
</script>


<template>
  <form
    @submit.prevent="
      login($t('Login_Success'), $t('username_or_password_are_incorrect'))
    "
    class="container mx-auto px-11 sm:mt-32 relative"
  >
    <div class="mb-6">
      <!-- {{ loginStore.err }} -->
      <h5 class="xl:text-4xl md:text-4xl lg:text-4xl text-3xl font-bold mb-3">
        {{ $t("login") }}
      </h5>
      <span class="text-gray-500 capitalize">
        {{ $t("Please_enter_your_information_to_login") }}
      </span>
    </div>
    <!-- username Input -->
    <div class="relative z-0 w-full mb-5 xl:mt-20 lg:mt-20 md:mt-20 group">
      <input
        type="text"
        aria-label="floating_username"
        id="floating_username"
        v-model="userLogin.username"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_username"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >{{ $t("username") }}</label
      >
      <span v-if="errors.username" class="text-red-500 text-sm">{{
        errors.username
      }}</span>
    </div>

    <!-- Password Input -->
    <div class="relative z-0 w-full mb-5 group">
      <input
        :type="showPassword ? 'text' : 'password'"
        aria-label="floating_password"
        id="floating_password"
        v-model="userLogin.password"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_password"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >{{ $t("Password") }}</label
      >
      <span v-if="errors.password" class="text-red-500 text-sm">{{
        errors.password
      }}</span>

      <span class="absolute top-3 right-5" @click="appearpass">
        <i v-if="!showPassword" class="pi pi-eye"></i>
        <i v-else class="pi pi-eye-slash"></i>
      </span>
    </div>

    <button
      aria-label="login"
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {{ $t("login") }}
    </button>

    <!-- if you not have account -->
    <p
      class="text-sm font-light text-gray-500 dark:text-gray-400 mt-4 text-center"
    >
      {{ $t("not_have_account") }}
      <NuxtLink
        to="/auth/register"
        class="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >{{ $t("Register_here") }}</NuxtLink
      >
    </p>
  </form>
</template>

