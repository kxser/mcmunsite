<template>

  <div class="min-h-screen bg-zinc-800">
    <noscript>
      <div  class="fixed inset-0 bg-white z-50">
      <div class="flex flex-col items-center min-h-screen bg-gray-950">
    <h1 style="font-size: 6rem" class="font-bold text-white">Javascript was not able to be loaded.</h1>
    <div class="flex items-center space-x-1 ">
      <p class="text-xl text-gray-300">Please switch to a browser that has Javascript support or enable it in your current one.</p>
    </div>
  </div>
  </div>
    </noscript>
    <NuxtLoadingIndicator />
     <Suspense>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Suspense>
    <UNotifications />
  </div>
</template>

<script setup lang="ts">

const userState = useState<any>("userState", () => null);
provide("userState", userState); // No need for type here since it's already in useState

useHead({
  meta: [
    { name: "description", content: "desc" },
    {
      name: "keywords",
      content: "",
    }, 
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "Sample Name" },
    { property: "og:description", content: "desc" },
    { property: "og:type", content: "website" },
    // Add more Open Graph tags for images, URLs, etc. as needed
  ],
  // Consider adding a canonical link if applicable
});
</script>


