<template>
  <App>
    <div
      v-if="isLoading"
      class="w-full h-[70vh] flex items-center justify-center"
    >
      <div class="loader"></div>
    </div>
    <div v-else-if="allFeedback.data.length > 0" class="flex flex-col">
      <router-link to="add-feedback" class="flex justify-end py-4">
        <Btn :text="'Add Feedback'" />
      </router-link>
      <div class="flex flex-row flex-wrap mb-4 gap-3 justify-center">
        <div
          v-for="(feedback, index) in allFeedback.data"
          :key="index"
          class="max-w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate"
            >
              {{ feedback.title }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
            {{ feedback.description.replace(/<[^>]+>/g, "") }}
          </p>
          <router-link
            :to="`/feedback-details/${feedback.id}`"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </router-link>
        </div>

        <!-- <div
          v-for="(feedback, index) in allFeedback.data"
          :key="index"
          class="rounded-lg p-6 border shadow-lg hover:scale-100 border-stroke w-full max-w-[250px] truncate h-full max-h-[250px] flex flex-col overflow-hidden bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark"
        >
        <router-link :to="`/feedback-details/${feedback.id}`">
            <h4
              class="text-title-md font-bold text-black dark:text-white truncate"
            >
              {{ feedback.title }}
            </h4>
            <span class="text-sm font-medium truncate">{{
              feedback.category
            }}</span
            >
            <span>{{ feedback.description.replace(/<[^>]+>/g, "") }}</span>
            <small>Posted at: {{ feedback.created_at }}</small>
        </router-link>
        </div> -->
      </div>
      <!-- pagination -->
      <div class="mb-14">
        <Pagination
          :links="allFeedback?.links"
          @pageurl="getFilteredData"
          :last_page="allFeedback?.last_page"
        />
      </div>
    </div>
    <div v-else>
      <router-link to="add-feedback" class="flex justify-end py-4">
        <Btn :text="'Add Feedback'" />
      </router-link>
      <div class="w-full h-[70vh] flex items-center justify-center">
        <div class="font-semibold">NO Feedback Available</div>
      </div>
    </div>
  </App>
</template>
<script setup>
import App from "../Layouts/Dashboard/App.vue";
import Btn from "../components/GlobalCompnents/Btn.vue";
import Pagination from "../components/GlobalCompnents/Pagination.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

let allFeedback = ref([]);
const token = ref(JSON.parse(localStorage.getItem("user-token")));
let isLoading = ref(true);

onMounted(() => {
  getAllFeedback();
});

function getAllFeedback() {
  const headers = {
    Accept: "application/json",
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  };

  if (token.value) {
    headers.Authorization = `Bearer ${token.value}`;
  }

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/get-all-feedback`, {
      headers: headers,
    })
    .then((response) => {
      allFeedback.value = response.data.data;
      isLoading.value = false;
    })
    .catch((error) => {
      console.error("Error fetching feedback:", error);
    });
}

function getFilteredData(url) {
  const headers = {
    Accept: "application/json",
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  };

  if (token.value) {
    headers.Authorization = `Bearer ${token.value}`;
  }
  console.log(url);
  axios
    .get(url, {
      headers: headers,
    })
    .then((response) => {
      allFeedback.value = response.data.data;
    });
}
</script>