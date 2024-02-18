<script setup>
import { ref, defineProps, defineEmits } from "vue";
import Staric from "./Staric.vue";
import InputError from "./InputError.vue";

const { title, name, options, value, isRequired, isDisabled } = defineProps([
  "title",
  "name",
  "options",
  "value",
  "isRequired",
  "isDisabled",
  "error"
]);

const selectedOption = ref(value || ''); 

const emit = defineEmits(["update:modelValue"]);

function handleSelectChange() {
  
  emit("update:modelValue", {
    property: name,
    value: selectedOption.value,
  });
}

</script>

<template>
  <div class="mt-4 flex flex-col">
    <label :for="name">{{ title }} <Staric /></label>
    <select
      :name="name"
      :disabled="isDisabled"
      v-model="selectedOption"
      @change="handleSelectChange"
      class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm py-2 focus:outline-none focus:border px-2 border"
    >
      <option value="" disabled selected>Select Category</option>
      <option v-for="(option, index) in options" :key="index" :value="option.name">{{ option.name }}</option>
    </select>
    <InputError :error="error" />
  </div>
</template>
