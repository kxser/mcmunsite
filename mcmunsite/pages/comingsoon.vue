<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  error: Object 
});
const { isTablet } = useDevice()
definePageMeta({
  layout: "base",
});
useHead({
  title: "MCMUN - Coming Soon",
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template class="bg-zinc-800">
  <div class="flex flex-col items-center min-h-screen bg-zinc-900">
    <img src="/logo_transparent.png" class="w-3/6 sm:w-1/6 mt-20" alt="Logo for the MCMUN (ODTÜ Koleji MUN) conference." />
    <h1 class="font-bold md:text-9xl text-center text-7xl text-white mt-8">Coming Soon...</h1>
    <p v-if="!isTablet" class="text-xl mx-auto md:w-2/6 w-5/6 text-gray-500 font-medium  mt-8 ">More info regarding the contents of this page may be attached to the email you have received after filling the initial application form.</p>
    <button
      @click="handleError"
      class="mt-16 px-6 py-3 bg-gray-100 mb-16 text-gray-900 font-bold rounded-xl hover:bg-blue-300 transition flex items-center space-x-2"
    >
      <span>Go back</span>
      <UIcon name="i-heroicons-arrow-right-circle-20-solid" class="size-6 inline-block" />
    </button>
  </div>
</template>
