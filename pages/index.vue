<template>
  <nav class="bg-zinc-800 text-slate-200">
    <div class="container mx-auto flex justify-between items-center py-5 select-none">
      <div class="text-xl font-bold flex items-center space-x-3 group hover:cursor-pointer ml-3 md:ml-0">
        <img src="/logo_transparent.png" alt="MCMUN Logo" class="h-10 group-hover:text-gray-500" />
        <a href="#" class="group-hover:text-gray-500">MCMUN 2025</a>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8 select-none">
        <!-- Conference Details Dropdown -->
        <li>
          <UDropdown mode="hover" :items="conferenceItems" :close-delay="300" :popper="{ placement: 'bottom' }"
            :ui="{ width: 'w-48', ring: 'dark:ring-red-900  ring-red-900 ring-2', background: 'dark:bg-zinc-800', item: { padding: 'px-1.5 py-3', size: 'text-sm font-bold', active: 'bg-zinc-950 dark:bg-zinc-950 text-white' } }">
            <div class="flex items-center justify-center space-x-1 w-full hover:text-gray-400 transition-colors">
              <span class="text-lg">Conference Details</span>
            </div>
          </UDropdown>
        </li>

        <!-- Contact Dropdown -->
        <li>
          <UDropdown :popper="{ placement: 'bottom-start' }">
            <div class="hover:text-gray-400 text-lg transition-colors">Contact</div>
          </UDropdown>
        </li>

        <!-- Registration Dropdown -->
        <li>
          <UDropdown mode="hover" :items="registrationItems" :close-delay="300" :popper="{ placement: 'bottom' }"
            :ui="{ width: 'w-48', ring: 'dark:ring-red-900  ring-red-900 ring-2', background: 'dark:bg-zinc-800', item: { padding: 'px-1.5 py-3', size: 'text-sm font-bold', active: 'bg-zinc-950 dark:bg-zinc-950 text-white' } }">
            <div class="flex items-center justify-center space-x-1 w-full hover:text-gray-400 transition-colors">
              <span class="text-lg">Registration</span>
            </div>
          </UDropdown>
        </li>
      </ul>

      <!-- Mobile Hamburger Menu -->
      <div class="md:hidden flex items-center mr-2">
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-slate-200">
          <Icon name="i-mdi-menu" class="size-8" dynamic v-if="!isMobileMenuOpen"/>
          <Icon name="i-mdi-close" class="size-8" dynamic v-if="isMobileMenuOpen" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div ref="mobileMenu" v-auto-animate>
      <div v-if="isMobileMenuOpen" class="md:hidden bg-zinc-800 text-slate-200 p-5 space-y-4" >
        
        <!-- Conference Details Dropdown for Mobile -->
        <div @click="toggleSubmenu(0)" class="text-lg hover:text-gray-500" >
          Conference Details
        </div>
        <div v-auto-animate>
        <ul v-if="activeSubmenuIndex === 0" class="space-y-2">
          <li v-for="subItem in conferenceItemsMobile[0]" :key="subItem.label">
            <a @click="subItem.click" class="block text-sm text-gray-400 hover:text-white">{{ subItem.label }}</a>
          </li>
        </ul>
      </div>

        <!-- Contact Link (Regular Button for Mobile) -->
        <div class="space-y-2">
          <div class="text-lg hover:text-gray-500">Contact</div>
        </div>

        <!-- Registration Dropdown for Mobile -->
        <div @click="toggleSubmenu(1)" class="text-lg hover:text-gray-500">
          Registration
        </div>
        <div v-auto-animate>
        <ul v-if="activeSubmenuIndex === 1" class="space-y-2">
          <li v-for="subItem in registrationItems[0]" :key="subItem.label">
            <a @click="subItem.click" class="block text-sm text-gray-400 hover:text-white">{{ subItem.label }}</a>
          </li>
        </ul>
      </div>
        
      </div>
    </div>
  </nav>

  <footer>
  <div class="bg-gray-800 text-white">
    <!-- GDPR and Social Links -->
    <div class="bg-red-900 py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <!-- GDPR Links -->
          <nav class="text-sm flex-1 sm:justify-start flex">
            <ul class="flex space-x-4">
              <li><a class="hover:text-gray-300 hover:cursor-pointer">Terms &amp; Conditions</a></li>
              <li><a class="hover:text-gray-300 hover:cursor-pointer">Cookies</a></li>
            </ul>
          </nav>

          <!-- Social Links -->
          <div class="flex gap-4 justify-center flex-1">
            <a
              href="https://www.facebook.com/rimun.official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="hover:text-gray-400"
            >
              <Icon name="i-lineicons-tiktok" class="size-8" dynamic />
            </a>
            <a
              href="https://www.instagram.com/_rimun/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="hover:text-gray-400"
            >
              <Icon name="i-mdi-instagram" class="size-8" dynamic />
            </a>
          </div>

          <!-- Copyright Info -->
          <div class="text-sm text-right flex-1 sm:justify-end flex flex-col">
            <p>© MCMUN 2025, All rights reserved</p>
            <p class="text-xs text-slate-400">
              Developed by
              <a
                aria-label="developer"
                class="underline hover:text-gray-100 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                Derin Alan Ritter
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import autoAnimate from "@formkit/auto-animate";

const mobileMenu = ref(null);
const isMobileMenuOpen = ref(false);
const activeSubmenuIndex = ref<number | null>(null);

// Toggle logic for opening and closing submenus
const toggleSubmenu = (index: number) => {
  activeSubmenuIndex.value = activeSubmenuIndex.value === index ? null : index;
};

// Separate arrays for desktop and mobile
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

const conferenceItemsMobile = [
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
    {
      label: "AGENDA ITEMS",
      click: () => {
        console.log("Edit");
      },
    }
]];


const registrationItems = [
  [
    {
      label: "INDIVIDUAL DELEGATE",
      click: () => { console.log("Individual Delegate clicked"); },
    },
    {
      label: "STUDENT OFFICER",
      click: () => { console.log("Student Officer clicked"); },
    },
    {
      label: "SCHOOL APPLICATION",
      click: () => { console.log("School Application clicked"); },
    },
  ],
];


</script>
