<template>
  <div class="rounded-[8px] flex justify-center">
    <button type="submit" :disabled="isDisabled" class="inline-flex items-center px-6 py-4 bg-black dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-black dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150">
      {{ text }}
    </button>
  </div>
</template>

<script setup>
  defineProps(["text","isDisabled"])
</script>








