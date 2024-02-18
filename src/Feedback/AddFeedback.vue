<template>
  <App>
    <div
      class="w-full md:w-[800px] mx-auto mt-6 px-6 py-4 bg-white shadow-lg sm:rounded-lg"
    >
      <div class="w-full mt-6 px-6">
        <p
          v-for="(error, index) in errors"
          :key="index"
          class="text-red-500 text-sm"
        >
          {{ error.message }}
        </p>

        <form @submit.prevent="addFeedback">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            <InputField
              :title="'Title'"
              :placeholder="'Enter title'"
              type="title"
              name="title"
              id="title"
              :maxlength="150"
              isRequired="true"
              @update:modelValue="setInputValue"
              alreadyAccount="true"
              :error="error.title"
            />

            <Dropdown
              :title="'Category'"
              :options="categories"
              value=""
              @update:modelValue="setInputValue"
              name="category"
              :isRequired="true"
              :error="error.category"
            />
          </div>

          <label for="description" class="mt-4">Description<Staric/></label>
          <QuillEditor
              theme="snow"
              id="description"
              v-model:content="formObj.description"
              style="
                  min-height: 200px !important;
                  max-height: 200px;
              "
              contentType="html"
          />
          <InputError :error="error.description"/>

          <div class="flex items-center justify-end mt-4">
            <Btn :text="'Submit'" :isDisabled="isDisabled" />
          </div>
        </form>
      </div>
    </div>
  </App>
</template>
<script setup>
import App from "../Layouts/Dashboard/App.vue";
import Btn from "../components/GlobalCompnents/Btn.vue";
import InputField from "../components/GlobalCompnents/InputField.vue";
import Staric from "../components/GlobalCompnents/Staric.vue";
import InputError from "../components/GlobalCompnents/InputError.vue";
import Dropdown from "../components/GlobalCompnents/Dropdown.vue";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

let errors = ref([]);
let categories = ref([
  {
    id: 1,
    name: "Bug Report",
  },
  {
    id: 2,
    name: "Feature Request",
  },
  {
    id: 2,
    name: "Other Improvements",
  },
]);
let isDisabled = ref(false);

const formObj = ref({
  title: "",
  category: "",
  description: "",
});

const error = ref({
  title: "",
  category: "",
  description: "",
});

const errorProperty = ref({
  title: false,
  category: false,
  description: false,
});

function setInputValue(obj) {
  formObj.value[obj.property] = obj.value;
  console.log(formObj.value);
}

function addFeedback() {
  isDisabled.value = true;

  formObj.value.title
    ? ((error.value.title = ""), (errorProperty.value.title = false))
    : ((error.value.title = "Title is required"),
      (errorProperty.value.title = true));

  formObj.value.category
    ? ((error.value.category = ""), (errorProperty.value.category = false))
    : ((error.value.category = "Category is required"),
      (errorProperty.value.category = true));

  formObj.value.description
    ? ((error.value.description = ""),
      (errorProperty.value.description = false))
    : ((error.value.description = "Description is required"),
      (errorProperty.value.description = true));

  if (
    errorProperty.value.title ||
    errorProperty.value.category ||
    errorProperty.value.description
  ) {
    isDisabled.value = false;
    return false;
  }

  const headers = {
    Accept: "application/json",
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-origin": "*",
  };

  const token = JSON.parse(localStorage.getItem("user-token"));

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
    axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/add-feedback`,
        formObj.value,
        {
          headers: headers,
        }
      )
    .then((response) => {
      if (response.data.success) {
        router.push({ name: "feedback" });
      } else {
        isDisabled.value = false;
        errors.value = response.data.errors
      }
    });
}
</script>