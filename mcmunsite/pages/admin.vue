<template>
  <div class="min-h-screen bg-zinc-900 flex items-center justify-center">
    <div class="md:bg-gray-800 p-8 rounded-lg md:shadow-xl w-full max-w-md">
      <h2 class="text-3xl font-bold text-center text-white mb-8">
        MCMUN Admin Panel
      </h2>

      <div class="space-y-4">
        <button
          v-if="!isLoggedIn"
          @click="login"
          class="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>Log In</span>
        </button>

        <button
          v-if="isLoggedIn"
          @click="logout"
          class="w-full py-3 px-6 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>Log Out</span>
        </button>

        <button
          @click="
            async () => {
              await navigateTo('/certificatecreator');
            }
          "
          :disabled="!isLoggedIn || !isAdmin"
          :class="[
            'w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2',
            isAdmin
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed',
          ]"
        >
          <span>Certificate Creator</span>
        </button>
      </div>

      <div v-if="isAdmin && isLoggedIn" class="mt-6 text-center text-green-400 text-sm">
        Logged in as Administrator
      </div>
      <div v-if="!isAdmin && isLoggedIn" class="mt-6 text-center text-yellow-400 text-sm">
        Logged in as a regular User. You do not have access to the Admin Panel.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const {
  data,
  signIn,
  signOut,
} = useAuth();

definePageMeta({
  layout: "base",
});
useHead({
  title: "MCMUN - Admin Panel",
});

// State
const isLoggedIn = ref(false);
const showCertCreator = ref(false);
const session = toRaw(data.value);
const isAdmin = ref(false);
onMounted(async () => {
  try {  if(session.user) {
    isLoggedIn.value = true;
    const adminStatus = await $fetch("/api/auth/checkadmin", {method: "POST", body: JSON.stringify({email: session.user.email})});
    if (adminStatus.isAdmin) {
      isAdmin.value = true;
    } else {
      isAdmin.value = false;
    }
  } else {
    isLoggedIn.value = false;
  }} catch (error) {
    isLoggedIn.value = false;
  }

});
// Methods
const login = () => {
  signIn("google");
  isLoggedIn.value = true;
};

const logout = () => {
  isLoggedIn.value = false;
  signOut();
};

const openCertificateCreator = () => {
  if (isLoggedIn.value) {
    showCertCreator.value = true;
  }
};

const closeCertificateCreator = () => {
  showCertCreator.value = false;
};
</script>
