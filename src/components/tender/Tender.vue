<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import TenderList from "./TenderList.vue";
import { useRouter } from "vue-router";

const searchQuery = ref("");
const showMobileSearch = ref(false);
const router = useRouter();

function toggleMobileSearch() {
  showMobileSearch.value = !showMobileSearch.value;
}

const handleLogout = () => {
  localStorage.removeItem("isAuthenticated");
  router.push("/login");
};
</script>

<template>
  <div>
    <div class="flex items-center justify-between px-5 md:px-10 py-5 bg-blue-600 text-white relative">
      <!-- Title -->
      <h1 class="text-lg md:text-xl font-semibold">
        Tender Download System
      </h1>

      <!-- Search -->
      <div class="relative flex-1 md:flex-none mx-4">
        <!-- Mobile search icon -->
        <Icon
          icon="mdi:magnify"
          class="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer md:hidden w-10 h-8"
          @click="toggleMobileSearch"
        />

        <!-- Mobile input (dropdown style) -->
        <input
          v-if="showMobileSearch"
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="absolute -left-35 top-full mt-5 w-48 sm:w-64 px-10 py-2 rounded-full text-black bg-white border outline-none z-50 shadow-md"
        />

        <!-- Desktop input -->
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="border-1 outline-none pl-10 pr-3 py-1 rounded-full text-white hidden md:block w-full bg-blue-500 placeholder-white"
        />
      </div>

      <button
        @click="handleLogout"
        class="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition cursor-pointer"
      >
        Logout
      </button>
    </div>

    <TenderList :search="searchQuery" />
  </div>
</template>

