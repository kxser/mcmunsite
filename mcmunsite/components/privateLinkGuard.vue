<template>
    <div>
      <UModal
        v-model="personalLinkModalIsOpen"
        prevent-close
        class="select-none"
        :ui="{ overlay: { background: 'bg-zinc-900' }, wrapper: 'z-[999]' }"
      >
        <UCard
          :ui="{
            ring: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
            background: 'bg-zinc-900',
            body: { base: '' },
          }"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="font-semibold leading-6 text-gray-900 text-white">
                {{ route.query.id ? `ID: ${route.query.id}` : "Link" }}
              </h3>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="personalLinkModalIsOpen = false"
              />
            </div>
          </template>
  
          <div class="mx-auto">
            <p>
              The link to this page is intended solely for your personal use.
              Please refrain from sharing it with anyone other than the designated
              recipients. Any unauthorized sharing of this link may be considered
              grounds for exclusion from participation in the MCMUN 2025
              Conference. After some time the contents of this page may be public.
            </p>
  
            <p class="italic mt-12 text-gray-200">
              Bu sayfanın bağlantısı yalnızca sizin kişisel kullanımınız için
              paylaşılmıştır. Lütfen bu bağlantıyı, belirlenmiş alıcılar dışında
              kimseyle paylaşmayınız. Bağlantının yetkisiz paylaşımı, MCMUN 2025
              Konferansı'na katılımınızın engellenmesi için gerekçe olarak
              değerlendirilebilir. Belirenen bir süre ardından bu sayfanın
              içerikleri herkese açık hale getirilebilir.
            </p>
          </div>
        </UCard>
      </UModal>
    </div>
  </template>
  
  <script setup lang="ts">
  const personalLinkModalIsOpen = ref(false);
  const route = useRoute();
  if (route.query.show !== "1") {
    await navigateTo("/comingsoon");
  } else {
    if (route.query.pl === "1") {
      const fp = await getFP();
      const keyValidity = await $fetch("/api/checkPrivateLinkId", {
        method: "POST",
        body: JSON.stringify({
          id: route.query.id,
          fp: fp,
        }),
      });
      if (!(keyValidity as { valid: boolean; message: string }).valid) {
        await navigateTo("/comingsoon");
      }
  
      personalLinkModalIsOpen.value = true;
    } else if (route.query.pl === "0") {
      personalLinkModalIsOpen.value = false;
    }
  }

  </script>
  