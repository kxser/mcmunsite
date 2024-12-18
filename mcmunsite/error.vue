<script setup>
import { defineProps } from 'vue';
disableDevTools();
const props = defineProps({
  error: Object 
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template class="bg-zinc-800">
  <div class="flex flex-col items-center min-h-screen bg-zinc-900">
    <img src="/logo_transparent.png" class="w-3/6 sm:w-1/6 mt-20" alt="MCMUN LOGO" />
    <h1 style="font-size: 11rem" class="font-bold text-white">{{ error.statusCode }}</h1>
    <div class="flex items-center space-x-1 mt-4">
      <p class="text-xl text-gray-300">An error occured.</p>
      <UPopover>
        <UButton color="white" variant="soft" trailing-icon="i-heroicons-chevron-down-20-solid" />
        <template #error>
          <div class="p-4  bg-white border text-gray-900">
            {{ error.statusMessage }}
          </div>
        </template>
      </UPopover>
    </div>
    <button
      @click="handleError"
      class="mt-6 px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-blue-300 transition flex items-center space-x-2"
    >
      <span>Go back</span>
      <UIcon name="i-heroicons-arrow-right-circle-20-solid" class="size-6 inline-block" />
    </button>
  </div>
</template>
