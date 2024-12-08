<template>

  <nav
    class="text-slate-200 z-[100] fixed w-full top-0 left-0"
    :class="navbarIsTransparent ? 'bg-transparent' : 'bg-zinc-800'"
  >
    <div
      class="container mx-auto flex justify-between items-center py-5 select-none"
    >
    
      <div
      >
      <NuxtLink to="/" class="text-xl font-bold flex items-center space-x-3 group hover:cursor-pointer ml-3 md:ml-0">
        <NuxtImg
            loading="lazy"
          src="/logo_transparent.png"
          alt="MCMUN Logo"
          class="h-10 group-hover:text-gray-500"
        />
        <a href="#" class="group-hover:text-gray-500 text-xl font-bold flex items-center">MCMUN 2025</a>
    </NuxtLink>
      </div>

    

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8 select-none">
        <!-- Conference Details Dropdown -->
        <li>
          <UDropdown
            mode="hover"
            :items="conferenceItems"
            :close-delay="300"
            :popper="{ placement: 'bottom' }"
            :ui="{
              width: 'w-48',
              ring: 'dark:ring-red-900  ring-red-900 ring-2',
              background: 'dark:bg-zinc-800',
              item: {
                padding: 'px-1.5 py-3',
                size: 'text-sm font-bold',
                active: 'bg-zinc-950 dark:bg-zinc-950 text-white',
              },
            }"
          >
            <div
              class="flex items-center justify-center space-x-1 w-full hover:text-gray-400 transition-colors"
            >
              <span class="text-lg">Conference Details</span>
            </div>
          </UDropdown>
        </li>

        <!-- Contact Dropdown -->
        <li>
          <UDropdown :popper="{ placement: 'bottom-start' }">
            <div class="hover:text-gray-400 text-lg transition-colors">
              Contact
            </div>
          </UDropdown>
        </li>

        <!-- Registration Dropdown -->
        <li>
          <UDropdown :popper="{ placement: 'bottom-start' }">
            <div class="hover:text-gray-400 text-lg transition-colors">
              Registrations
            </div>
          </UDropdown>
        </li>
      </ul>

      <!-- Mobile Hamburger Menu -->
      <div class="md:hidden flex items-center mr-2">
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="text-slate-200"
        >
          <Icon
            name="i-mdi-menu"
            class="size-8"
            dynamic
            v-if="!isMobileMenuOpen"
          />
          <Icon
            name="i-mdi-close"
            class="size-8"
            dynamic
            v-if="isMobileMenuOpen"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div ref="mobileMenu" v-auto-animate>
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-zinc-800 text-slate-200 p-5 space-y-4"
      >
        <!-- Conference Details Dropdown for Mobile -->
        <div @click="toggleSubmenu(0)" class="text-lg hover:text-gray-500">
          Conference Details
        </div>
        <div v-auto-animate>
          <ul v-if="activeSubmenuIndex === 0" class="space-y-2">
            <li
              v-for="subItem in conferenceItemsMobile[0]"
              :key="subItem.label"
            >
              <a
                @click="subItem.click"
                class="block text-sm text-gray-400 hover:text-white"
                >{{ subItem.label }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Contact Link (Regular Button for Mobile) -->
        <div class="space-y-2">
          <div class="text-lg hover:text-gray-500">Contact</div>
        </div>

        <!-- Registration Dropdown for Mobile -->
        <div class="text-lg hover:text-gray-500">Registration</div>
      </div>
    </div>
  </nav>


</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineProps, onBeforeUnmount } from "vue";
import autoAnimate from "@formkit/auto-animate";

// Define the scroll threshold prop (with a default value of 120)
const props = defineProps({
  scrollThreshold: {
    type: Number,
    default: 75,
  },
});

const mobileMenu = ref(null);
const isMobileMenuOpen = ref(false);
const activeSubmenuIndex = ref<number | null>(null);
const navbarIsTransparent = ref(true);
const scrollPosition = ref(0);

// Handle scroll event
const handleScroll = () => {
  scrollPosition.value = window.scrollY;
};

// Watch the scroll position and compare it with the threshold value
watch(scrollPosition, (newValue) => {
  if (newValue >= props.scrollThreshold) {
    navbarIsTransparent.value = false;
  } else {
    navbarIsTransparent.value = true;
  }
});

// Add and remove scroll event listener on mount and unmount
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Toggle logic for opening and closing submenus
const toggleSubmenu = (index: number) => {
  activeSubmenuIndex.value = activeSubmenuIndex.value === index ? null : index;
};

watch(isMobileMenuOpen, (newValue) => {
  if (newValue === true) {
    navbarIsTransparent.value = false;
  } else {
    navbarIsTransparent.value = true;
  }
});

// Separate arrays for desktop and mobile
const conferenceItems = [
  [
    { label: "SCHEDULE", click: () => navigateTo("/schedule") },
    { label: "VENUE", click: () => console.log("Edit") },
    { label: "F.A.Q.", click: () => console.log("Edit") },
  ],
  [
    { label: "WELCOME LETTER", click: () => console.log("Edit") },
    { label: "THEME LETTER", click: () => navigateTo("/themeletter") },
  ],
  [
    { label: "AGENDA ITEMS", click: () => console.log("Edit") },
  ],
];

const conferenceItemsMobile = [
  [
    { label: "SCHEDULE", click: () => navigateTo("/schedule") },
    { label: "VENUE", click: () => console.log("Edit") },
    { label: "F.A.Q.", click: () => console.log("Edit") },
    { label: "WELCOME LETTER", click: () => console.log("Edit") },
    { label: "THEME LETTER", click: () => navigateTo("/themeletter") },
    { label: "AGENDA ITEMS", click: () => console.log("Edit") },
  ],
];
</script>
