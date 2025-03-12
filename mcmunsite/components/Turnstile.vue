<script setup>
import { ref, onMounted, watch } from 'vue';
import VueTurnstile from 'vue-turnstile';

// Runtime config for the site key
const siteKey = useRuntimeConfig().public.turnstileSiteKey;

// Ref for token (exposed to parent)
const token = ref('');

// Create a reference to the Turnstile component instance
const turnstileRef = ref(null);

// Ref for controlling skeleton visibility
const showSkeleton = ref(true);

// Ref for the container element
const containerRef = ref(null);

// Track the size of the container
const containerSize = ref({ width: 0, height: 20 });
//

// Function to reset the Turnstile widget
const reset = () => {
  if (turnstileRef.value) {
    turnstileRef.value.reset();
    token.value = ''; // Clear the token on reset
  }
};

defineExpose({ token, reset });

onMounted(() => {
  // Watch for size changes in the container
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      if (height > containerSize.value.height) {
        console.log("A")
        console.log(height)
        showSkeleton.value = false; // Disable the skeleton when size increases
      }
      console.log("B")
      containerSize.value = { width, height };
    }
  });

  if (containerRef.value) {
    resizeObserver.observe(containerRef.value);
  }
});
</script>

<template>
  <div>
    <!-- Skeleton Loader -->
     <div v-if="showSkeleton">
      <UProgress animation="elastic" />
      <USkeleton  class="h-14 w-full" />
      <p>Captcha is loading...</p>
     </div>
    
    
    <!-- Container for Turnstile -->
    <div ref="containerRef">
      <VueTurnstile
        ref="turnstileRef"
        :site-key="siteKey"
        v-model="token"
        appearance="execute"
      />
    </div>
  </div>
</template>
