<template>
  <Navbar />
  <div class="pt-24 pb-100">
    <h1
      class="text-5xl sm:text-5xl font-bold text-white drop-shadow-2xl text-center mx-auto mb-24"
    ></h1>

    <div class="mb-32"></div>
  </div>
</template>

<script setup lang="ts">
await navigateTo(
  "https://docs.google.com/forms/d/e/1FAIpQLScSk5rGf-be80iHa8V1sUeyB3izui-magR5a9sjszklB00bHg/viewform?usp=header",
  {
    external: true,
  }
);
useHead({
  title: "MCMUN - Registrations",
});
</script>
