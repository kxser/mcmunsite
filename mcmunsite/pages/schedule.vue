<template>
  <div class="pt-24 pb-24">
    <h1
      class="text-6xl font-bold text-white drop-shadow-2xl text-center mx-auto mb-8"
    >
      Conference Schedule
    </h1>

  <div
      class="max-w-5xl mx-auto  shadow-lg rounded-lg"
    >    <UButton
    @click="(async ()=> await navigateTo('https://metucollegemun.b-cdn.net/MCMUN%20Schedule.pdf', { external: true,   open: {
    target: '_blank',} }))"
    icon="i-heroicons-arrow-down-16-solid"
    size="xl"
    color="white"
    class="float-right"
    variant="soft"
    label="Download PDF"
    :trailing="false"
  /></div>
    <div
      class="max-w-5xl mx-auto  shadow-lg rounded-lg border-4 border md:border-red-900"
    >

    <NuxtImg
      src="/schedule.png"
      alt="Conference Schedule"
      class="w-full h-auto" />
      
      
    </div>
    
  </div>

</template>

<script setup lang="ts">
await navigateTo("/comingsoon");


definePageMeta({
  layout: "base",
});
useHead({
    title: "MCMUN - Schedule",
});
</script>
