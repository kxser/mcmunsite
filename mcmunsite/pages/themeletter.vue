<template>
  <div class="pt-24 pb-24">
    <h1
      class="text-6xl font-bold text-white drop-shadow-2xl text-center mx-auto mb-8"
    >
      Theme Letter
    </h1>

    <div
      class="max-w-3xl mx-auto md:p-12 p-6 bg-white shadow-lg rounded-lg border-4 border md:border-red-900"
    >
      <div class="space-y-8 text-justify select-none">
        <div class="mb-8"></div>
        <p class="text-lg font-serif text-gray-800 leading-relaxed indent-4">
          Swaying through the pillars of history and civilization, we face a
          profound dilemma. As we get closer to the present and everything it
          holds, the harsh realities of today highlight the pressing need for
          lawfulness and the integration of ethics into society’s perceptions
          more than ever. Courts, international law, boards, and legislation
          were ideally created and imagined based on sole decisions between good
          and bad. At its core, decision-making is a fundamental responsibility
          and an elementary trait of humanity that obliterates neglect and
          corruption when it’s based on ideas about the preservation and
          sacredness of human life.
        </p>
        <p class="text-lg font-serif text-gray-800 leading-relaxed indent-4">
          Humans crave a sense of identity, belonging, and above all, freedom.
          However, as we battle with the concepts of sovereignty and autonomy,
          the violation of the rights of those we exclude from our identity and
          society cannot be easily ignored. Liberation, as a natural human
          response to oppression, suffers when people and their rights are
          reduced to mere aspects of identity, ethnicity, race, or religion, as
          this can only bring harm. Consequently, the core idea of "Human
          Rights" is to unite nations under the welcoming embrace of the
          international community, not to separate them.
        </p>
        <p class="text-lg font-serif text-gray-800 leading-relaxed indent-4">
          Taking that into consideration, it becomes our obligation to uphold
          morality, united under the principle that conserves our core humanity:
          The ethical discourse on human rights and the political outlooks
          linked with international security. Neglecting cases where
          humanitarian law is gravely violated today is neglecting this very
          legacy that was left in our hands by our forefathers.
        </p>
        <p
          class="text-lg font-serif text-gray-800 leading-relaxed mb-24 indent-4"
        >
          This conference, framed by the theme
          <span class="font-semibold italic text-gray-900"
            >Aggression or Liberation: The Dilemma</span
          >, seeks to ensure and regulate the rights of self-determination
          without infringing upon others’ basic human rights, with a special
          focus on integrity and unanimity.
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

<script setup lang="ts">
definePageMeta({
  layout: "base",
});
useHead({
  title: "MCMUN - Theme Letter",
});
</script>
