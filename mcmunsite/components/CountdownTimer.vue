<template>
    <Countdown :date="date" v-slot="{ days, hours, minutes, seconds }">
      <div class="p-8 bg-red-900 flex flex-col items-center rounded-3xl border">
        <h4 class="text-2xl font-semibold">{{ text }}</h4>
        <div class="mt-6 flex items-center space-x-4">
          <div class="w-20 h-20 p-2 bg-zinc-800 rounded-xl flex flex-col items-center justify-center">
            <h5 class="text-3xl font-semibold">{{ days }}</h5>
            <p class="text-sm mt-1 text-gray-400">Days</p>
          </div>
          <div class="w-20 h-20 p-2 bg-zinc-800 rounded-xl flex flex-col items-center justify-center">
            <h5 class="text-3xl font-semibold">{{ hours }}</h5>
            <p class="text-sm mt-1 text-gray-400">Hours</p>
          </div>
          <div class="w-20 h-20 p-2 bg-zinc-800 rounded-xl flex flex-col items-center justify-center">
            <h5 class="text-3xl font-semibold">{{ minutes }}</h5>
            <p class="text-sm mt-1 text-gray-400">Minutes</p>
          </div>
          <div class="w-20 h-20 p-2 bg-zinc-800 rounded-xl flex flex-col items-center justify-center">
            <h5 class="text-3xl font-semibold">{{ seconds }}</h5>
            <p class="text-sm mt-1 text-gray-400">Seconds</p>
          </div>
        </div>
      </div>
    </Countdown>
  </template>
  
  <script setup>
  defineProps({
    date: {
      type: Date,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  /* Add your styles here if needed */
  </style>
  