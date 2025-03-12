<template>
  <div class="">
    <div class="bg-zinc-900 p-6  rounded  max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-300 mb-6">Certificate Generation Tool Beta</h1>

      <div class="mb-6">
        <p class="text-yellow-400 mb-3">Please delete and rewrite the inputs of the textboxes before proceeding. Not doing so may cause unexpected errors.</p>
        <p class="mb-2 text-gray-300 text-sm">
          What is the title of the Certificate?
        </p>
        <UTextarea
          color="primary"
          variant="outline"
          v-model="certificateTitle"
        />
      </div>
      <div class="mb-6">
        <p class="mb-2 text-gray-300 text-sm">
          Enter the list of people you would like to generate certificates for.
          One person per line.
        </p>
        <UTextarea
          color="primary"
          variant="outline"
          v-model="certificateParticipants"
        />
      </div>

      <div class="mb-6">
        <p class="mb-2 text-gray-300 text-sm">
          Write the explanation for the certificate.
        </p>
        <UTextarea
          color="primary"
          variant="outline"
          v-model="certificateExplanation"
        />
      </div>

      <div class="flex justify-center mt-8">
        <UButton
          label="Submit"
          color="red"
          variant="solid"
          @click="startCreationProcess()"
        />
      </div>
    </div>
  </div>

  <div v-if="showCertificate">
    <div
        ref="captureArea"
      class=""
      style="width: 3508px; height: 2480px; font-family: 'PT Serif'"
    >
      <div
        class="relative w-[3508px] h-[2480px] border-[30px] border-black box-border"
      >
        <div
          class="absolute inset-0 bg-[url('/guilloche.jpg')] bg-cover bg-center"
        ></div>

        <div class="relative p-4">
          <h1
            class="text-black text-center mt-32 font-bold mx-auto"
            style="font-size: 100px"
          >
            MCMUN 2025
          </h1>
          <h1
            class="text-black text-center font-bold mx-auto"
            style="font-size: 150px"
          >
            {{ certificateTitle }}
          </h1>
          <div class="mt-64 w-full h-full rounded">
            <p class="text-center italic text-gray-600" style="font-size: 70px">
              Presented To
            </p>
            <h2
              class="text-center font-bold text-gray-800 my-4"
              style="font-size: 100px"
            >
              {{ currentCertificateParticipant }}
            </h2>
            <p
              class="text-center text-gray-700 mb-8 mx-64"
              style="font-size: 64px"
            >
{{ certificateExplanation }}
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const {

  data,
} = useAuth();
const session = toRaw(data.value);
if (session === null || session === undefined) {
  navigateTo("/");
};
const adminStatus = await $fetch("/api/auth/checkadmin", {method: "POST", body: JSON.stringify({email: session.user.email})});

if (!adminStatus.isAdmin) {
   navigateTo('/')
} 




import { ref, nextTick } from "vue";
import html2canvas from "html2canvas";


useHead({
  title: "MCMUN - Certificate Creator",
});

const certificateTitle = ref("Certificate of Participation");
const certificateParticipants = ref("");
const currentCertificateParticipant = ref("");
const certificateExplanation = ref(
  "In recognition of your outstanding performance and dedicated participation at the MCMUN 2025. Your contribution has set a benchmark for excellence. This activity shows active citizenship and strong critical thinking."
);
const showCertificate = ref(false);
const captureArea = ref(null);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const startCreationProcess = async () => {
    console.log("startCreationProcess");
  showCertificate.value = true;

  // Wait for the DOM to update and the certificate to render
  await nextTick();
  await nextTick();
  sleep(500);
  if (!captureArea.value) {
    console.error("Certificate area is not loaded.");
    return;
  }

  const participants = certificateParticipants.value.split("\n");

  for (const participant of participants) {
    currentCertificateParticipant.value = participant;
    await nextTick(); // Ensure the DOM updates before capturing
    await downloadCertificate();
  }
};

const downloadCertificate = async () => {
  if (!captureArea.value) {
    console.error("Capture area is not available.");
    return;
  }

  const canvas = await html2canvas(captureArea.value, { scale: 1 });
  const dataURL = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = dataURL;
  link.download = `certificate_${currentCertificateParticipant.value}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>
