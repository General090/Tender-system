<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const router = useRouter();

const username = ref("");
const password = ref("");
const usernameError = ref("");
const passwordError = ref("");
const generalError = ref("");
const loading = ref(false);

const handleLogin = () => {
  usernameError.value = "";
  passwordError.value = "";
  generalError.value = "";


  if (!username.value) {
    usernameError.value = "Username is required";
  }
  if (!password.value) {
    passwordError.value = "Password is required";
  }

  if (usernameError.value || passwordError.value) {
    return;
  }

  loading.value = true;

  setTimeout(() => {
    if (username.value === "admin" && password.value === "password") {
      toast.success("Login successful");
      localStorage.setItem("isAuthenticated", "true");
      router.push("/tenders");
    } else {
      toast.error("Invalid username or password", { autoClose: 5000 });
    }
    loading.value = false;
  }, 1500);
};
</script>

<template>
  <div>
    <nav
      class="flex items-center justify-between bg-blue-600 px-5 md:px-6 py-4 shadow-md sticky top-0"
    >
      <h1 class="text-white text-lg md:text-xl font-semibold tracking-wide">
        Tender Download System
      </h1>
      <button
        @click="$router.push('/login')"
        class="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition cursor-pointer"
      >
        Login
      </button>
    </nav>

    <div class="flex items-center justify-center my-25 md:my-50 lg:my-15">
      <form
        @submit.prevent="handleLogin"
        class="bg-blue-600 rounded-md p-5 mx-5 lg:w-[30%] w-full md:w-[70%] h-[70vh] md:h-[50vh] lg:h-[70vh] flex flex-col justify-center"
      >
        <h1 class="font-bold text-2xl text-center text-white mb-5">
          Sign in to your account
        </h1>

        <p class="text-center text-sm text-blue-100 mb-5">
            <span class="block">Username: <strong>admin</strong></span>
            <span class="block">Password: <strong>password</strong></span>
        </p>


        <div class="flex flex-col mb-4">
          <label for="username" class="text-white">Username:</label>
          <input
            v-model="username"
            type="text"
            class="mt-2 outline-none border-2 border-white rounded-md pl-2 py-1"
            required
          />
          <p v-if="usernameError" class="text-red-400 text-sm mt-1">
            {{ usernameError }}
          </p>
        </div>

        <div class="flex flex-col mb-4">
          <label for="password" class="text-white">Password:</label>
          <input
            v-model="password"
            type="password"
            class="mt-2 outline-none border-2 border-white rounded-md pl-2 py-1"
            required
          />
          <p v-if="passwordError" class="text-red-400 text-sm mt-1">
            {{ passwordError }}
          </p>
        </div>

        <button
          type="submit"
          class="bg-white text-blue-600 w-full py-2 rounded-md cursor-pointer flex justify-center items-center"
          :disabled="loading"
        >
          <span v-if="loading" class="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent mr-2"></span>
          {{ loading ? "Logging in..." : "Login" }}
        </button>
      </form>
    </div>
  </div>
</template>
