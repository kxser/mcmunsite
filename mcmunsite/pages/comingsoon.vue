<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  error: Object 
});
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
    <img src="/logo_transparent.png" class="w-3/6 sm:w-1/6 mt-20" alt="MCMUN LOGO" />
    <h1 class="font-bold md:text-9xl text-center text-7xl text-white mt-8">Coming Soon...</h1>
    <button
      @click="handleError"
      class="mt-24 px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-blue-300 transition flex items-center space-x-2"
    >
      <span>Go back</span>
      <UIcon name="i-heroicons-arrow-right-circle-20-solid" class="size-6 inline-block" />
    </button>
  </div>
</template>
