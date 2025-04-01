<template>

  <nav
    class="text-slate-200 z-[100] fixed w-full top-0 left-0"
    :class="navbarIsTransparent ? 'bg-transparent' : 'bg-zinc-800'"
  >
  <UAlert v-if="useRoute().path === '/'" icon="i-heroicons-megaphone" color="white">
    <template #title="{ title }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-html="title" />
    </template>

    <template #description>
      <p class="mx-auto text-center">Due to unforseen circumstances regarding the Ministry of Education, the conference has been postponed to October 2025. Please follow our Instagram for the latest updates.</p>
    </template>
  </UAlert>
    <div
      class="container mx-auto flex justify-between items-center py-5 select-none"
    >
    
      <div
      >
      <NuxtLink to="/" class="text-xl font-bold flex items-center space-x-3 group hover:cursor-pointer ml-3 md:ml-0">
        <NuxtImg
          draggable="false"
          src="/logo_transparent.png"
          alt="Logo for the MCMUN (ODTÜ Koleji MUN) conference."
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
            
            :mode="isTablet ? 'click' : 'hover'"
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
          <UDropdown :popper="{ placement: 'bottom-start' }" @click="contactFormIsOpen = true">
            <div class="hover:text-gray-400 text-lg transition-colors">
              Contact
            </div>
          </UDropdown>
        </li>

        <!-- Registration Dropdown -->
        <li>
          <UDropdown @click="() => { 
            if (isApplicationClosed()) {
              const toast = useToast();
              toast.add({
      title: 'Applications have closed.',
      description:
        '',
      color: 'red',
      timeout: 5000,
    });
              return;
            }
            navigateTo('/applicationredirect');
          }" :popper="{ placement: 'bottom-start' }">
            <div :class="[
              'text-lg transition-colors', 
              isApplicationClosed() ? 'cursor-not-allowed opacity-70' : 'hover:text-gray-400 cursor-pointer'
            ]">
              Apply Now!
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
          <ul v-if="activeSubmenuIndex === 0" class="space-y-2" @click="isMobileMenuOpen = false">
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
        <div @click="contactFormIsOpen = true; isMobileMenuOpen = false" class="space-y-2">
          
          <div class="text-lg hover:text-gray-500">Contact</div>
        </div>

        <!-- Registration Dropdown for Mobile -->
        <div 
          @click="() => { 
            if (isApplicationClosed()) {
              const toast = useToast();
              toast.add({
      title: 'Applications have closed.',
      description:
        '',
      color: 'red',
      timeout: 5000,
    });
              return;
            }
            navigateTo('/applicationredirect'); 
            isMobileMenuOpen = false 
          }" 
          :class="[
            'text-lg hover:text-gray-500', 
            isApplicationClosed() ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
          ]"
        >
          Apply Now!
        </div>
      </div>
    </div>
  </nav>

  <UModal v-model="contactFormIsOpen" prevent-close >
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800', overlay: {background:'bg-zinc-900'},background:'bg-zinc-900', wrapper: 'fixed inset-0 flex z-[999] '}">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Contact Us
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="contactFormIsOpen = false; " />
          </div>
        </template>
        <div class="space-y-4">
          <UInput color="gray" variant="outline" placeholder="Name" v-model="contactFormNameAndSurname"/>        
          <UInput color="gray" variant="outline" placeholder="E-Mail" v-model="contactFormEmail"/>

          <UInput color="gray" variant="outline" placeholder="Subject" v-model="contactFormSubject"/>
          <UTextarea color="gray" variant="outline" placeholder="Your inquiry..." v-model="contactFormInquiry"/></div>
          <div class="mt-4"><Turnstile ref="TurnstileRef" id="contactTurnstile"/></div>
          
          <UButton @click="async ()=> (await sendContactForm())" color="red" variant="solid" label="Send Form" size="md" class="mt-5" icon="i-heroicons-envelope-16-solid" />

      </UCard>
    </UModal>


</template>
  
<script setup>
import { ref, onMounted, watch, defineProps, onBeforeUnmount } from "vue";
import autoAnimate from "@formkit/auto-animate";
import { isApplicationClosed } from "~/composables/isApplicationClosed";
const toast = useToast();
const { isTablet } = useDevice()




const props = defineProps({
  scrollThreshold: {
    type: Number,
    default: 75,
  },
});

async function sendContactForm() {
  const contactFormObject = {
    nameAndSurname: contactFormNameAndSurname.value,
    email: contactFormEmail.value,
    subject: contactFormSubject.value,
    inquiry: contactFormInquiry.value,
    cfToken: TurnstileRef.value.token
  };

  const response = await $fetch('/api/sendmail', {
    method: 'POST',
    body: contactFormObject,
    headers: {
      'Content-Type': 'application/json'
    }
  });



  if (!response.success) {
    contactFormEmail.value = "";
    contactFormInquiry.value = "";
    contactFormIsOpen.value = false;
    contactFormSubject.value = "";
    contactFormNameAndSurname.value = "";
    TurnstileRef.value.reset();
    toast.add({
      title: 'Error sending contact request!',
      description: 'An error occurred while sending your inquiry. This may be related to captcha issues on your end. Please try again.',
      color: 'red',
      timeout: 5000,
    });
    return;
  }

  contactFormEmail.value = "";
  contactFormInquiry.value = "";
  contactFormIsOpen.value = false;
  contactFormSubject.value = "";
  contactFormNameAndSurname.value = "";
  TurnstileRef.value.reset();

  toast.add({
      title: 'Contact request successfully sent!',

      description: 'Your inquiry has been successfully sent to our team. We will get back to you as soon as possible.',
      color: 'green',
      timeout: 5000,
    });
}

const mobileMenu = ref(null);
const isMobileMenuOpen = ref(false);
const activeSubmenuIndex = ref(null);
const navbarIsTransparent = ref(true);
const scrollPosition = ref(0);
const contactFormIsOpen = ref(false);

const contactFormNameAndSurname = ref("");
const contactFormEmail = ref("");
const contactFormSubject = ref("");
const contactFormInquiry = ref("");
const TurnstileRef = ref(null);

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
const toggleSubmenu = (index) => {
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
    { label: "SCHEDULE", click: () => (navigateTo("/schedule")) },
    { label: "F.A.Q.", click: () => navigateTo("/faq") },
    { label: "ORGANIZATION STAFF", click: () => navigateTo("/staff") },
  ],
  [
    { label: "WELCOME LETTER", click: () => navigateTo("/welcomeletter") },
    { label: "THEME LETTER", click: () => navigateTo("/themeletter") },
  ],
  [
    { label: "AGENDA ITEMS", click: () => navigateTo("/agenda") },
  ],
];

const conferenceItemsMobile = [
  [
    { label: "SCHEDULE", click: () => navigateTo("/schedule") },
    { label: "F.A.Q.", click: () => navigateTo("/faq") },
    { label: "ORGANIZATION STAFF", click: () => navigateTo("/staff") },
    { label: "WELCOME LETTER", click: () => navigateTo("/welcomeletter") },
    { label: "THEME LETTER", click: () => navigateTo("/themeletter") },
    { label: "AGENDA ITEMS", click: () => navigateTo("/agenda")},
  ],
];
</script>
