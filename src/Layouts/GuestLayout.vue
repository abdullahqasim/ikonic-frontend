<script setup>

</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">

        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md sm:rounded-lg"
        >
        <div class="flex justify-center">
            <router-link to="/">
                <img src="src/assets/images/ikonic.jpeg" class="w-32 h-32 fill-current rounded-full hover:rotate-90 duration-500 -mt-24 border-[10px] border-white" alt="">
            </router-link>
        </div>
        <div class="w-full sm:max-w-md mt-6 px-6">
            <slot />
        </div>
        </div>
    </div>
</template>
