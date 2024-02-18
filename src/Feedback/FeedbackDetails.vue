<template>
  <App>
    <div
    v-if="isLoading"
    class="w-full h-[70vh] flex items-center justify-center"
    >
        <div class="loader"></div>
    </div>
    <div v-else
      class="w-full md:w-[800px] mx-auto mt-6 px-6 py-4 bg-white shadow-lg sm:rounded-lg"
    >
      <div class="w-full mt-6 px-6 flex flex-col space-y-4">
        <h1 class="font-bold capitalize">{{ feedback?.data?.title }}</h1>
        <h2 class="capitalize font-semibold">{{ feedback?.data?.category }}</h2>
        <p>{{ feedback?.data?.description.replace(/<[^>]+>/g, "") }}</p>
        <small v-if="feedback?.data?.created_at" class="flex justify-end"
          >Posted On
          {{ formatDate(feedback?.data?.created_at) }}</small
        >
        <!-- comments -->
        <div class="bg-gray-100 p-6 rounded-lg">
          <h2 class="text-lg font-bold mb-4">Comments</h2>
          <div class="flex flex-col space-y-4">
            <div v-for="(comment, index) in feedback?.data?.comments" :key="index" class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-lg font-bold">{{ comment?.user?.name }}</h3>
              <p class="text-gray-700 text-sm mb-2">Posted on {{formatDate(comment?.created_at) }}</p>
              <p class="text-gray-700">
                {{comment.comment}}
              </p>
            </div>
            <form class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-lg font-bold mb-2">Leave your comment here</h3>
              
              <form @submit.prevent="addComment">
                <div class="mb-4">
                  <TextArea
                      :key="componentKey"
                      :title="'Comment'"
                      :maxlength="200"
                      :value="userComment"
                      @update:modelValue="setInputValue"
                      name="comment"
                      id="comment"
                      :error="error.comment"
                  />
                <p v-for="(error, index) in errors" :key="index" class="text-red-500 text-sm"> {{ error.message }}</p>

                </div>
                
                <Btn
                    class="float-right"
                    :text="'submit'"
                    :isDisabled="isDisabled"
                />
            </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  </App>
</template>
  <script setup>
import App from "../Layouts/Dashboard/App.vue";
import TextArea from "../components/GlobalCompnents/TextArea.vue";
import Btn from "../components/GlobalCompnents/Btn.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const props = defineProps(["id"]);

const router = useRouter();

let errors = ref([]);
let feedback = ref();
let userComment = ref();
let isDisabled = ref(false);
let componentKey = ref(1);
let isLoading = ref(true)

const formObj = ref({
  feedback_id: props.id,
  comment: "",
});

const error = ref({
  comment: "",
});

const errorProperty = ref({
  comment: false,
});

const token = ref(JSON.parse(localStorage.getItem("user-token")));

onMounted(() => {
  getFeedback();
});
function setInputValue(obj) {
  formObj.value[obj.property] = obj.value;
  console.log(formObj.value);
}

function getFeedback() {

  const headers = {
    Accept: "application/json",
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-origin": "*",
  };


  if (token.value) {
    headers.Authorization = `Bearer ${token.value}`;
  }
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/get-feedback/${props.id}`, {
      headers: headers,
    })
    .then((response) => {
      feedback.value = response.data;
      isLoading.value = false;
    });
}

function addComment() {
  isDisabled.value = true;
  formObj.value.comment ? (error.value.comment = '', errorProperty.value.comment = false) : (error.value.comment = 'Comment is required', errorProperty.value.comment = true);

    if (errorProperty.value.comment) {
        isDisabled.value = false;
        return false
    }

  const headers = {
    Accept: "application/json",
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-origin": "*",
  };


  if (token.value) {
    headers.Authorization = `Bearer ${token.value}`;
  }
  axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/add-comment`,
        formObj.value,
        {
          headers: headers,
        }
      )
    .then((response) => {
        if(response.data.success){
            getFeedback();
            isDisabled.value = false;
            componentKey.value += 1;
            formObj.value.comment = '';
        }else{
            errors.value = response.data.errors
        }
    });
}

function formatDate(dateTimeString) {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Date(dateTimeString).toLocaleDateString("en-US", options);
}
</script>