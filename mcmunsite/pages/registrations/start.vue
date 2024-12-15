<template>
  <Navbar />
  <div class="pt-24 pb-100">
    <h1
      class="text-5xl sm:text-5xl font-bold text-white drop-shadow-2xl text-center mx-auto mb-24"
    >
      Registrations
    </h1>

    <div
      class="max-w-3xl mx-auto space-y-4 shadow-lg flex flex-col justify-center px-3"
    >
      <button
        @click="
          async () =>
            await navigateTo('https://forms.gle/fvDDg6yxEr5w6pPx6', {
              external: true,
              open: {
                target: '_blank',
              },
            })
        "
        type="button"
        class="items-center px-16 py-5 bg-red-900 text-white font-medium rounded-xl shadow-sm hover:bg-red-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
      >
        <p class="underline-effect">Student Officer Applications</p>
      </button>
      <button
        @click="
          async () =>
            await navigateTo('https://forms.gle/iUpdzVMGGApzSroA7', {
              external: true,
              open: {
                target: '_blank',
              },
            })
        "
        type="button"
        class="items-center px-16 py-5 bg-red-900 text-white font-medium rounded-xl shadow-sm hover:bg-red-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
      >
        <p class="underline-effect">School Applications</p>
      </button>
      <button
        @click="
          async () =>
            await navigateTo('https://forms.gle/DxHUfEVKwGf5gQ5TA', {
              external: true,
              open: {
                target: '_blank',
              },
            })
        "
        type="button"
        class="items-center px-16 py-5 bg-red-900 text-white font-medium rounded-xl shadow-sm hover:bg-red-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
      >
        <p class="underline-effect">Individual Applications</p>
      </button>
    </div>

    <div class="mb-32"></div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "MCMUN - Registrations",
});
</script>
