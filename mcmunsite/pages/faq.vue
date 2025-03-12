<template>
  <div class="pt-24 pb-24 min-h-[90vh] md:min-h-[91vh]">
    <h1
      class="text-6xl font-bold text-white drop-shadow-2xl text-center mx-auto mb-16"
    >
      Frequently Asked Questions
    </h1>

    <div class="max-w-5xl mx-auto shadow-lg rounded-lg"></div>
    <div class="max-w-5xl mx-auto shadow-lg rounded-lg px-3">
      <UAccordion
        color="white"
        variant="outline"
        size="xl"
        :ui="{ truncate: false }"
        :items="[
          {
            label: '1. How can attendees get in contact?',
            content:
              'For general inquiries, please reach out to the organizing committee via the Contact section of the website.',
          },
          {
            label: '2. How can MUN directors get in contact?',
            content:
              'MUN Directors can contact the Secretariat directly via the secretariat email: secretariatmcmun@gmail.com.',
          },
          {
            label:
              '3. How can I directly get in contact with members of the Secretariat?',
            content:
              'You can contact members of the Secretariat by referring to the official contact page on the MCMUN website or emailing secretariatmcmun@gmail.com.',
          },
          {
            label:
              '4. Does the MCMUN conference follow the Harvard or THIMUN Rules of Procedure?',
            content:
              'The MCMUN conference follows a custom set of Rules similar to THIMUN style. Detailed guidelines are will be provided at a a later date.',
          },
          {
            label: '5. When will MCMUN take place?',
            content:
              'MCMUN will take place from April 11th to April 13th, 2025.',
          },
          {
            label: '6. When will delegations be assigned?',
            content:
              'Delegations will be assigned 1 month before the conference at the absolute latest. Notifications will be sent to all registered participants.',
          },
          {
            label: '7. Will lodging be provided for attendees coming from outside of Ankara?',
            content:
              'We will not provide any lodging however delegates wishing for reccommendations can get in contact.',
          },
          {
            label: '8. What is the conference fee?',
            content:
              'Attendees wishing to get information about the conference fees can do so as a part of the the applicaton process or by directly getting contact with us.',
          },
          {
            label: '9. Will there be any certificates for attending MCMUN 2025?',
            content:
              'Yes, we will have certificates for attendees who fulfill certain requirements.',
          },
        ]"
      />
    </div>
    <div class="flex justify-center items-center mt-5 mx-auto text-center">
      <NuxtImg draggable="false" src="/logo_transparent.png" class="w-64" alt="Logo for the MCMUN (ODTÜ Koleji MUN) conference." />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "base",
});
useHead({
  title: "MCMUN - F.A.Q.",
});
</script>
