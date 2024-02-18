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
      <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr >
                      <th scope="col" class="px-6 py-3">
                          Title
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Description
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Submitted By
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(feedback, index) in allFeedback.data" :key="index" 
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 ">
                        {{ feedback.title }}
                      </th>
                      <td class="px-6 py-4">
                        {{ feedback.category   }}
                      </td>
                      <td class="px-6 py-4">
                        {{ feedback.description.replace(/<[^>]+>/g, "") }}
                      </td>
                      <td class="px-6 py-4">
                        {{ feedback.user.name }}
                      </td>
                      <td class="px-6 py-4">
                        <router-link
                        :to="`/feedback-details/${feedback.id}`"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Comments
                      </router-link>
                      </td>
                  </tr>
              </tbody>
          </table>
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