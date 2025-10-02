<script setup>
import { ref, computed, watch, onMounted } from "vue";
import TenderCard from "./TenderCard.vue";
import tendersData from "../../data/tender.js";

const props = defineProps({
  search: String,
});

const tenders = ref([]);
const error = ref(null);
const loading = ref(true);

async function loadTenders() {
  try {
    loading.value = true;
    error.value = null;

    const data = (await import("../../data/tender.js")).default;

    if (!Array.isArray(data)) throw new Error("Invalid tender data format");

    tenders.value = data;
  } catch (err) {
    console.error(err);
    error.value = "Failed to load tenders. Please try again later.";
  } finally {
    loading.value = false;
  }
}

onMounted(loadTenders);

// Pagination
const currentPage = ref(1);
const perPage = 12;

const filteredTenders = computed(() => {
  if (!props.search) return tenders.value;
  return tenders.value.filter(
    t =>
      t.title.toLowerCase().includes(props.search.toLowerCase()) ||
      t.description.toLowerCase().includes(props.search.toLowerCase())
  );
});

watch(() => props.search, () => {
  currentPage.value = 1;
});

const totalPages = computed(() => Math.ceil(filteredTenders.value.length / perPage));

const paginatedTenders = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return filteredTenders.value.slice(start, end);
});

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}
</script>

<template>
  <div class="p-5 lg:p-6">
    <p v-if="loading" class="text-center text-gray-500">Loading tenders...</p>
    <p v-else-if="error" class="text-center text-red-500 font-semibold">{{ error }}</p>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <TenderCard v-for="t in paginatedTenders" :key="t.id" :tender="t" />
    </div>

    <!-- Pagination -->
    <div v-if="!loading && !error && filteredTenders.length > 0" class="flex justify-center mt-6 gap-4">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer">
        Previous
      </button>
      <span class="self-center">Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 cursor-pointer">
        Next
      </button>
    </div>

    <p v-if="!loading && !error && filteredTenders.length === 0" class="text-center text-gray-500 mt-6">
      No tenders found for "{{ props.search }}"
    </p>
  </div>
</template>
