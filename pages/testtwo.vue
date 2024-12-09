<template>
  <div id="forums" class="min-w-full">

    <div id="forum-bg" class="relative py-48 border-b-8 border-red-900">
      <img src="/committees/disec.png" alt="Background" class="absolute top-0 left-0 w-full h-full blur-sm object-cover" />
      <div class="container mx-auto text-center relative z-10">
        <h1 class="text-5xl font-bold text-white">GA1 DISEC</h1>
        
      </div>
    </div>
    
    <div class="text-container max-w-5xl mx-auto px-4">
      <USelectMenu v-model="selected" :options="people"  />
  <h1 class="mt-10 title text-4xl font-semibold text-center text-gray-200" id="forum-description">
    Overview
  </h1>
  <hr class="w-48 my-8 h-1 mx-auto  bg-gray-100 border-0 rounded md:my-6 dark:bg-gray-700">
  <p class="mt-4 text-lg text-gray-400 mx-4 sm:mx-8 justify-center text-justify">
    The General Assembly First Committee (GA1) on Disarmament and International Security (DISEC) is one of the six main committees of the United Nations General Assembly. It is tasked with addressing a wide range of issues related to global security, disarmament, and the prevention of armed conflict. DISEC plays a pivotal role in promoting international cooperation and dialogue on matters such as nuclear disarmament, arms control, and the peaceful use of outer space. In this forum, member states come together to debate, negotiate, and adopt resolutions aimed at enhancing global peace and stability, striving to reduce the threats posed by weapons and military conflict to ensure a safer world for future generations.
  </p>
  <h1 class="mt-10 title text-4xl font-semibold text-center text-gray-200" id="forum-description">
    Agenda Items
  </h1>
  <hr class="w-48 h-1 mx-auto my-8 bg-gray-100 border-0 rounded md:my-6 dark:bg-gray-700">
  
    <ul class="list-disc">
  <li class="mt-4 md:text-2xl text-xl  text-gray-400 mx-4 sm:mx-8 justify-center  break-words list-inside">Discussing the active terrorist/insurgent groups in Pakistan and Southeast Asia </li>
  <li class="mt-4 md:text-2xl text-xl text-gray-400 mx-4 sm:mx-8 justify-center break-words list-inside">Debating the impact of cyber warfare in the 21st century </li>
</ul>
<div class="mb-24"></div>
</div>


  </div>
</template>

<script setup>
definePageMeta({
  layout: 'base'
})

const people = ['GA1 DISEC', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']

const selected = ref(people[0])
</script>
