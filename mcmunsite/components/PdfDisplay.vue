<template>
    <!-- Dynamic parent container -->
    <div :class="parentClass" class="relative">
      <!-- Loading indicator -->
      <div class="absolute inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-80 z-0">
        <span class=" text-lg text-white font-medium">Loading...</span>
      </div>
  
      <!-- Responsive iframe -->
      <iframe 
        :src="src" 
        class="w-full h-full absolute inset-0 z-15 border-none"
        frameborder="0" 
        allowfullscreen>
      </iframe>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
      parentClass: {
        type: String,
        default: '',
      },
    },
  };
  </script>
  
  <style scoped>
  iframe {
    border: none;
  }
  </style>
  