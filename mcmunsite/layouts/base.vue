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



</script>
