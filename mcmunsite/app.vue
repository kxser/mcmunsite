<template>

  <div class="min-h-screen bg-zinc-900">
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
    { 
      name: "description", 
      content: "MCMUN 2025 (METU College Model United Nations) is a premier Model United Nations conference, fostering global diplomacy and leadership for high school students." 
    },
    {
      name: "keywords",
      content: "MCMUN 2025, METU College Model United Nations, MUN 2025, Model UN, International Diplomacy, Student Leadership, Global Conference"
    }, 
    { 
      name: "robots", 
      content: "index, follow" 
    },
    { 
      property: "og:description", 
      content: "Participate in MCMUN 2025 to engage in thought-provoking debates and diplomatic simulations at METU College." 
    },
    { 
      property: "og:type", 
      content: "website" 
    },
    { 
      property: "og:image", 
      content: "https://mcmun.com.tr" // Replace with the actual URL of the MCMUN 2025 preview image
    },
    { 
      property: "og:url", 
      content: "https://mcmun.com.tr" 
    }
  ],
  link: [
    { 
      rel: "canonical", 
      href: "https://mcmun.com.tr" 
    }
  ]
});
</script>



<style>

</style>

