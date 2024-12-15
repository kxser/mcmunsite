<script setup>
import { ref } from 'vue';
import VueTurnstile from 'vue-turnstile';

// Runtime config for the site key
const siteKey = useRuntimeConfig().public.turnstileSiteKey;

// Ref for token (exposed to parent)
const token = ref('');

// Create a reference to the Turnstile component instance
const turnstileRef = ref(null);

// Function to reset the Turnstile widget
const reset = () => {
  if (turnstileRef.value) {
    turnstileRef.value.reset();
    token.value = ''; // Clear the token on reset
  }
};
defineExpose({ token, reset });

</script>
<template>
  <div>
    <VueTurnstile 
      ref="turnstileRef"
      :site-key="siteKey" 
      v-model="token" 
      appearance="execute"
    />
  </div>
</template>
