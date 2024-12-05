<template class="">
  <nav
    class="text-slate-200 z-[100] fixed w-full top-0 left-0"
    :class="navbarIsTransparent ? 'bg-transparent' : 'bg-zinc-800'"
  >
    <div
      class="container mx-auto flex justify-between items-center py-5 select-none"
    >
      <div
        class="text-xl font-bold flex items-center space-x-3 group hover:cursor-pointer ml-3 md:ml-0"
      >
        <img
          src="/logo_transparent.png"
          alt="MCMUN Logo"
          class="h-10 group-hover:text-gray-500"
        />
        <a href="#" class="group-hover:text-gray-500">MCMUN 2025</a>
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

  <section
    id="home"
    class="bg-gray-100 relative overflow-hidden lg:h-[66vh] sm:min-h-[90vh]"
  >
    <div
      id="hero"
      class="relative flex flex-col items-center justify-center text-center h-full"
    >
      <!-- Background Image Layer -->
      <div class="absolute inset-0 w-full h-full">
        <!-- Background Image -->
        <img
          src="/panel1.jpg"
          alt="Hero Background"
          class="w-full h-full object-cover lg:object-cover sm:object-fill z-0"
        />
        <!-- Gradient Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-black to-bg-gray-900 opacity-90"
        ></div>
      </div>

      <!-- Content Layer -->
      <div class="relative z-20">
        <!-- Text Content -->
        <div id="text" class="space-y-3">
          <h1 class="text-6xl font-bold text-white drop-shadow-2xl mt-48">
            MCMUN 2025
          </h1>
          <p class="text-lg text-white drop-shadow-2xl">
            From division to harmony: Uniting humanity at the crossroads of
            liberation and aggression.
          </p>
        </div>

        <button
          type="button"
          class="mt-20 inline-flex items-center px-16 py-5 bg-red-900 text-white font-medium rounded-xl shadow-sm hover:bg-red-600 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
        >
          <p class="underline-effect">Register Now</p>
        </button>

        <!-- Call to Action -->
        <div id="cta" class="flex flex-col items-center">
          <Countdown
            :date="new Date('April 11, 2025 16:00:00')"
            v-slot="{ days, hours, minutes, seconds }"
          >
            <div class="flex flex-col items-center">
              <div class="mt-6 flex items-center space-x-4">
                <div
                  class="w-20 h-20 p-2 bg-zinc-800 rounded-xl flex flex-col items-center justify-center"
                >
                  <h5 class="text-3xl font-semibold">{{ days }}</h5>
                  <p class="text-sm mt-1 text-gray-400">Days</p>
                </div>
                <div
                  class="w-20 h-20 p-2 bg-zinc-800 rounded-xl flex flex-col items-center justify-center"
                >
                  <h5 class="text-3xl font-semibold">{{ hours }}</h5>
                  <p class="text-sm mt-1 text-gray-400">Hours</p>
                </div>
                <div
                  class="w-20 h-20 p-2 bg-zinc-800 rounded-xl flex flex-col items-center justify-center"
                >
                  <h5 class="text-3xl font-semibold">{{ minutes }}</h5>
                  <p class="text-sm mt-1 text-gray-400">Minutes</p>
                </div>
                <div
                  class="w-20 h-20 p-2 bg-zinc-800 rounded-xl flex flex-col items-center justify-center"
                >
                  <h5 class="text-3xl font-semibold">{{ seconds }}</h5>
                  <p class="text-sm mt-1 text-gray-400">Seconds</p>
                </div>
              </div>
            </div>
          </Countdown>

          <div
            id="dates"
            class="flex items-center space-x-2 mt-3 font-semibold bg-zinc-800 rounded-xl p-2 mb-10 text-white"
          >
            <span>11 - 13 April 2025</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-zinc-900">
  <div class="text-container max-w-5xl mx-auto px-4">
    <h1 class="mt-10 title text-4xl font-semibold text-center text-gray-200" id="about">
      What is MCMUN?
    </h1>
    <p class="mt-6 text-lg text-gray-400 mx-4 sm:mx-36 justify-center text-justify pt-8">
      MCMUN is a renowned Model United Nations conference that was founded in
      2007 with the goal of simulating the operations of the United Nations. The
      event provides students with a chance to immerse themselves in global
      diplomacy and policymaking, gaining a deeper understanding of
      international relations and the challenges the world faces.
    </p>
    <p class="mt-4 text-lg text-gray-400 mx-4 sm:mx-36 justify-center text-justify pt-4">
      Every year, over <b class="font-semibold">600 students</b> from high
      schools around the world come together to debate pressing social,
      economic, and international issues. These students bring diverse
      perspectives and engage in intense discussions aimed at finding practical
      solutions to complex global problems, making the experience both enriching
      and impactful.
    </p>
    <p class="mt-4 text-lg text-gray-400 mx-4 sm:mx-36 mb-10 justify-center text-justify pt-4">
      Participants are assigned to <b class="font-semibold">committees</b> and
      <b class="font-semibold">commissions</b>, where they collaborate with
      their peers to address specific issues and come up with innovative
      solutions. The delegates are challenged to use their research, critical
      thinking, and negotiation skills to influence the outcomes of debates and
      create actionable resolutions.
    </p>
  </div>
</section>


  <footer>
    <div class="bg-gray-800 text-white">
      <!-- GDPR and Social Links -->
      <div class="bg-red-900 py-6">
        <div class="container mx-auto px-4">
          <div
            class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          >
            <!-- GDPR Links -->
            <nav class="text-sm flex-1 sm:justify-start flex">
              <ul class="flex space-x-4">
                <li>
                  <a class="hover:text-gray-300 hover:cursor-pointer"
                    >Terms &amp; Conditions</a
                  >
                </li>
                <li>
                  <a class="hover:text-gray-300 hover:cursor-pointer"
                    >Cookies</a
                  >
                </li>
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
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";

const mobileMenu = ref(null);
const isMobileMenuOpen = ref(false);
const activeSubmenuIndex = ref<number | null>(null);
const navbarIsTransparent = ref(true);
const scrollPosition = ref(0);
const handleScroll = () => {
  scrollPosition.value = window.scrollY;
};
watch(scrollPosition, (newValue, oldValue) => {
  if (newValue >= 200) {
    navbarIsTransparent.value = false;
  } else {
    navbarIsTransparent.value = true;
  }
});
onMounted(() => {
  // Add event listener on mount
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  // Remove event listener before component unmounts
  window.removeEventListener('scroll', handleScroll);
});


// Toggle logic for opening and closing submenus
const toggleSubmenu = (index: number) => {
  activeSubmenuIndex.value = activeSubmenuIndex.value === index ? null : index;
};

watch(isMobileMenuOpen, (newValue, oldValue) => {
  if (newValue === true) {
    navbarIsTransparent.value = false;
  } else {
    navbarIsTransparent.value = true;
  }
});

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
    },
  ],
];
</script>

<style scoped>
.underline-effect {
  position: relative;
  display: inline-block;
}

.underline-effect::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #ffffff; /* Change to desired underline color */
  transition: width 0.3s ease;
}

.underline-effect:hover::after {
  width: 100%;
}
</style>
