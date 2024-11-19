<template>
  <nav class="bg-zinc-800 text-slate-200">
    <div class="container mx-auto flex justify-between items-center py-5 select-none">
      <!-- Increased padding -->
      <div class="text-xl font-bold flex items-center space-x-3 group hover:cursor-pointer">
        <!-- Added 'group' class -->
        <img src="/logo_transparent.png" alt="MCMUN Logo" class="h-10 group-hover:text-gray-500" />
        <!-- Image color change on hover -->
        <a href="#" class="group-hover:text-gray-500">MCMUN 2025</a>
        <!-- Text color change on hover -->
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8 select-none">
        <li>
          <UDropdown mode="hover" :items="conferenceItems" :close-delay="300" :popper="{ placement: 'bottom' }"
            :ui="{ width: 'w-48', ring: 'dark:ring-red-900  ring-red-900 ring-2', background: 'dark:bg-zinc-800', item: { padding: 'px-1.5 py-3', size: 'text-sm font-bold', active: 'bg-zinc-950 dark:bg-zinc-950 text-white' } }">
            <div class="flex items-center justify-center space-x-1 w-full hover:text-gray-400 ">
              <span class="text-lg">Conference Details</span>
            </div>
          </UDropdown>
        </li>
        <li>
          <UDropdown :items="conferenceItems" :popper="{ placement: 'bottom-start' }">
            <div class="hover:text-gray-500 text-lg">Contact</div>
          </UDropdown>
        </li>
        <li>
          <UDropdown mode="hover" :items="registrationItems" :close-delay="300" :popper="{ placement: 'bottom' }"
            :ui="{ width: 'w-48', ring: 'dark:ring-red-900  ring-red-900 ring-2', background: 'dark:bg-zinc-800', item: { padding: 'px-1.5 py-3', size: 'text-sm font-bold', active: 'bg-zinc-950 dark:bg-zinc-950 text-white' } }">
            <div class="flex items-center justify-center space-x-1 w-full hover:text-gray-400">
              <span class="text-lg">Registration</span>
            </div>
          </UDropdown>
        </li>
      </ul>

      <!-- Mobile Hamburger Menu -->
      <div class="md:hidden flex items-center">
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-slate-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-zinc-800 text-slate-200 p-5 space-y-4">
      <div v-for="(item, index) in conferenceItems" :key="index">
        <div @click="item.forEach(subItem => subItem.click())" class="text-lg hover:text-gray-500">
          Conference Details
        </div>
        <ul v-if="index === 0" class="space-y-2">
          <li v-for="subItem in item" :key="subItem.label">
            <a @click="subItem.click" class="block text-sm text-gray-400 hover:text-white">{{ subItem.label }}</a>
          </li>
        </ul>
      </div>

      <div class="space-y-2">
        <div class="text-lg hover:text-gray-500">Contact</div>
      </div>

      <div class="space-y-2">
        <div class="text-lg hover:text-gray-500">Registration</div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const conferenceItems = [
  [
    {
      label: "SCHEDULE",
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "VENUE",
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "F.A.Q.",
      click: () => {
        console.log("Edit");
      },
    },
  ],
  [
    {
      label: "WELCOME LETTER",
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "THEME LETTER",
      click: () => {
        console.log("Edit");
      },
    },
  ],
  [
    {
      label: "AGENDA ITEMS",
      click: () => {
        console.log("Edit");
      },
    },
  ],
];

const registrationItems = [
  [
    {
      label: "INDIVIDUAL DELEGATE",
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "STUDENT OFFICER",
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "SCHOOL APPLICATION",
      click: () => {
        console.log("Edit");
      },
    },
  ],
];
</script>

<style scoped>
/* Add any additional styles here */
</style>
