<template>
  <div class="pt-24 pb-24">
    <h1
      class="text-6xl font-bold text-white drop-shadow-2xl text-center mx-auto mb-8"
    >
      Welcome Letter
    </h1>

    <div
      class="max-w-3xl mx-auto md:p-12 p-6 bg-white shadow-lg rounded-lg border-4 border md:border-red-900" id="my-node"
    >
      <div class="space-y-8 text-justify select-none">
        <div class="mb-8"></div>
        <p class="text-lg font-serif text-gray-800 leading-relaxed">
          Esteemed Delegates, Distinguished Guests, and Dear Directors,
        </p>
        <p class="text-lg font-serif text-gray-800 leading-relaxed indent-4">
          On behalf of the Secretariat and the organizing committee, it is our
          great pleasure to welcome you to the 8th Annual Session of MCMUN,
          which will take place in Ankara, Türkiye, from April 11th to 13th. We
          are thrilled to have such a talented and diverse group of participants
          joining us to engage in this enriching and collaborative experience.
          Together, we aim to foster understanding, critical thinking, and
          cooperation among future leaders.
        </p>
        <p class="text-lg font-serif text-gray-800 leading-relaxed indent-4">
          Between 2019 and 2023, unforeseen global challenges, including the
          COVID-19 pandemic and the devastating 2023 Turkey-Syria Earthquakes,
          prevented us from organizing MCMUN. Last year's secretaries general
          held the 7th annual and left this esteemed legacy to us. As the
          current secretaries-general, our journey began in middle school with
          Junior Model UN, and now we can say that we are thrilled to host such
          a prestigious event.
        </p>
        <p class="text-lg font-serif text-gray-800 leading-relaxed indent-4">
          In consideration of the recent events happening around the world, our
          secretariat and organization team chose
          <span class="font-semibold italic text-gray-900"
            >"Aggression vs Liberation: The Dilemma"</span
          >
          as the theme of this year's conference. In accordance with this
          matter, we hope to discuss the acts of governments and communities
          regarding the matter of humanitarian and war crimes that are being
          committed, while emphasizing the importance of global unity in
          addressing issues such as international security, humanitarian law,
          ethnicity, integrity, and unanimity. We are confident that through
          your research, preparation, and dynamic debates, you will explore
          these topics with creativity and mindfulness.
        </p>
        <p class="text-lg font-serif text-gray-800 leading-relaxed indent-4">
          Throughout the conference, you will have the privilege of engaging
          with peers from diverse backgrounds, critically examining your
          perspectives, and cultivating competencies that will prove invaluable
          across all your future endeavors. Whether you are an experienced MUN
          participant or stepping into this world for the first time, we
          encourage you to approach this experience with an open mind, and with
          respect towards diverse opinions.
        </p>
        <p
          class="text-lg font-serif text-gray-800 leading-relaxed mb-24 indent-4"
        >
          We would like to extend our heartfelt gratitude to our advisors,
          sponsors, and our organization team whose invaluable support has made
          this conference possible. We hope not only will you leave MCMUN with
          new perspectives and skills but also with lasting memories and
          friendships.
        </p>
        <p class="text-lg font-serif text-gray-800 leading-relaxed">
          Warm regards,
        </p>
      </div>
      <div class="mb-20"></div>
      <div class="flex justify-between items-center mt-6 relative mb-24">
        <div class="text-lg font-serif text-gray-800 relative">
          <p class="font-semibold">Damla Karamercan</p>
          <p>Secretary General</p>
          <p>_____________</p>
          <!-- Signature SVG -->
          <NuxtImg
            src="/damla.svg"
            alt="Damla Signature"
            class="absolute -bottom-3 right-4  rotate-13  w-128 red-900"
          />
        </div>
        <!-- First Signature Section -->
        <div class="text-lg font-serif text-gray-800 relative">
          <p class="font-semibold">Asya Göymen</p>
          <p>Secretary General</p>
          <p>_____________</p>
          <!-- Signature SVG -->
          <NuxtImg
            src="/asia.svg"
            alt="Asya Signature"
            class="absolute -bottom-5 left-10 rotate-12 w-12 h-auto"
          />
        </div>

        <!-- Second Signature Section -->
      </div>
    </div>
  </div>
</template>

<script setup>
import * as htmlToImage from 'html-to-image';
definePageMeta({
  layout: "base",
});
useHead({
  title: "MCMUN - Welcome Letter",
});



</script>
