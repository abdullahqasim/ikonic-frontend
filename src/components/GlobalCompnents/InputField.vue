<script setup>
import { ref, onMounted } from "vue";
import Staric from "./Staric.vue";
import InputError from "./InputError.vue";
const props = defineProps([
  "title",
  "placeholder",
  "type",
  "name",
  "id",
  "modelValue",
  "alreadyAccount",
  "max",
  "isRequired",
  "isDisabled",
  "value",
  "maxlength",
  "error"
]);

defineEmits(["update:modelValue"]);

let disabledPastDate = ref();

const input = ref(null);


</script>

<template>
  <div class="mt-4 flex flex-col">
      <label :for="id">{{title}}<Staric/></label>
      <input
        :max="max"
        :maxlength="maxlength"
        :type="type"
        :name="name"
        :id="id"
        :value="value"
        :disabled="isDisabled"
        class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm py-2 focus:outline-none focus:border px-2 border"
        :placeholder="placeholder"
        @input="
          $emit('update:modelValue', {
            property: $event.target.name,
            value: $event.target.value
          })
        "
        ref="input"
      />
      <InputError :error="error"/>
    </div>
</template>
