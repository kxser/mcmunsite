<template>
  <div class="">
    <Navbar />
    <section name="content" class="container min-w-full">
      <slot />
    </section>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
const pageSecurityIsEnabled = useRuntimeConfig().public.pageSecurityIsEnabled;

if (pageSecurityIsEnabled === "1") {
  disableContextMenu();
  disableDevTools();
}

defineOgImageComponent('NuxtSeo', {
  title: 'MCMUN',
  description: 'METU College Model United Nations 2025',
  theme: '#ff0000',
  colorMode: 'dark',
})


</script>
