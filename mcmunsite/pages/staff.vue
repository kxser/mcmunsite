<template class="select-none">
  <div class="pt-24 pb-24 select-none">
    <h1
      class="md:text-6xl text-5xl font-bold text-white drop-shadow-2xl text-center mx-auto mb-8"
    >
      Organization Staff
    </h1>
    <div class="z-[999]">
      <UModal v-model="modalIsOpen" class="z-[999]">
        <UCard
          class="select-none"
          :ui="{
            ring: '',
            divide: 'divide-y divide-`gray-100 dark:divide-gray-800',
            overlay: { background: 'bg-zinc-900' },
            background: 'bg-zinc-900',
            wrapper: 'fixed inset-0 flex z-[999] ',
          }"
        >
          <NuxtImg
            draggable="false"
            :src="`/staff/${currentImageIndex}.webp`"
            class="w-full h-auto border-gray-800 rounded-xl object-fit"
            alt="Staff Image"
          />
          <p class="mt-2 mb-6 justify">
            {{ categoryMembers[currentImageIndex] }}
          </p>

          <p class="mt-2 justify">
            {{ categoryDescriptions[currentImageIndex] }}
          </p>
        </UCard>
      </UModal>
    </div>

    <div v-show="loading" class="fixed inset-0 flex items-center justify-center z-[998]">
      <div class="absolute inset-0 bg-black opacity-95"></div>
      <div class="relative z-10 text-white text-center p-4 rounded-lg">
      <Icon name="i-svg-spinners-3-dots-fade" dynamic class="size-32" />
      <h1 class="text-3xl text-bold">Please wait while the images load.</h1>
    </div>
    </div>

    <div ref="watchedDiv">
      <ClientOnly fallbackTag="span">
        <div
          class="flex flex-col items-center justify-center md:py-12 md:px-32 px-5 py-5"
        >
          <div>
            <p class="text-gray-200 py-3 text-xs">
              You may click on the individual tiles to get more information
              about the images.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <NuxtImg
              lazy
              draggable="false"
              v-for="index in 10"
              :key="index"
              :src="`/staff/${index}.webp`"
              class="w-full h-auto border-2 border-gray-800 rounded-lg p-1 roundex-xl object-fit hover:scale-105 transition-transform duration-300 cursor-pointer"
              alt="Staff Image"
              @click="openModal(index)"
            />
          </div>
        </div>
        <Comments />
        <template #fallback>
          <UProgress class="px-32" size="2xl" animation="swing" />
          <div class="px-32">
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const modalIsOpen = ref(false);
const loading = ref(true);
const currentImageIndex = ref(1);
const watchedDiv = ref(null);
let previousHeight = 0;
let resizeObserver;

function openModal(index) {
  currentImageIndex.value = index;
  modalIsOpen.value = true;
}

onMounted(() => {
  resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const newHeight = entry.contentRect.height;
      if (newHeight > previousHeight * 2) {
        loading.value = false;
      }
      previousHeight = newHeight;
      console.log("Size changed:", entry.contentRect);
    }
  });

  if (watchedDiv.value) {
    resizeObserver.observe(watchedDiv.value);
  }
});

onBeforeUnmount(() => {
  if (watchedDiv.value && resizeObserver) {
    resizeObserver.unobserve(watchedDiv.value);
  }
});


const categoryDescriptions = {
  1: "The Secretaries General are the pillars of an MUN Conference. They are responsible for coordinating and holding the elements of a conference together, creating an organization as a team that is unforgettable, educational and above all; worth every second of your precious time.",
  2: "The Deputy Generals are the perfectionists, the ones who present a helping hand to get everything done clearly, concisely and precisely.",
  3: `I am indescribably proud to serve as your President of the General Assembly, a position which I dreamed of being in, ever since last year's conference, and one which I believe is crucial for the conference as a whole. I sincerely hope that we will not just meet, but exceed all of your expectations for MCMUN'25. See you in April!`,
  4: "As Heads of Advisors, we make sure that everything runs smoothly between the advisors and the organizing team. We work together to guide the advisors so that they can assist delegates with things like research, speeches, and understanding the rules of MUN. We’re also here to maintain a clear communication as well as solving any issues that may come up while making sure everyone feels prepared and confident. Our goal is to create a supportive and productive environment for everyone involved.",
  5: "The I.T. department is responsible for the technical infrastructure of the conference. We are here to ensure that the conference runs smoothly and that all participants have a seamless experience.",
  6: "The finance department is responsible for the financial management of the conference. This includes budgeting, financial planning, and ensuring that all financial transactions are conducted smoothly and efficiently. They say money isn’t happiness… It is.",
  7: "The Head of Admins is responsible for managing the bread and butter of the conference, our lovely admins.",
  8: "The External Relations team is responsible for establishing and maintaining relationships with external organizations, sponsors, and partners. We are here to ensure that the conference is well-publicized and that all participants have a positive experience.",
  9: "The PR team is the bridge between our MUN conference and the world beyond, handling everything from inviting schools and responding to applications to keeping everyone informed. Basically, if you’re here, it’s probably because we made sure you knew about it!",
  10: "The Press team is a group of independent yet intertwined people, where different thoughts and ideas come together. In fact, what keeps this team together is open-mindedness and imagination. With this, we hope to give you content that will shine a light on the conference as a whole.",
};

const categoryMembers = {
  1: "Damla Çiçek Karamercan, Asya Göymen",
  2: "Eylül Pamukçu, Dora Yalçınkaya, Yiğit Alan",
  3: `Civan Erdoğan `,
  4: "Ceyda Işıklar, Defne Demir, Asude Zeynep Yılmaz",
  5: "Derin Alan Ritter",
  6: "Arda Konuk",
  7: "Egehan Güre",
  8: "Arda Konuk, Deniz Efe Aydın, Deniz Bilge Baykan",
  9: "Nice Uğur, Zeynep Naz Dikmen, Elif Girgin, Zeynep Gedikli, Ceyda Işıklar, Asya Topal, Doğa Aksoy",
  10: "Defne Altınova, Defne Bizkevelci, Duru Bizkevelci, Dora Gülen",
};
definePageMeta({
  layout: "base",
});

useHead({
  title: "MCMUN - Organization Staff",
});
</script>
