<template>
  <div id="forums" class="min-w-full select-none">
    <div id="forum-bg" class="relative py-48 border-b-8 border-red-900">
      <NuxtImg
        :src="backgroundImageSrc"
        alt="Background Image"
        class="absolute top-0 left-0 w-full h-full blur-sm object-cover"
        lazy
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-black to-bg-gray-900 opacity-60"
      ></div>
      <div class="container mx-auto text-center relative z-10">
        <h1 class="text-5xl font-bold text-white drop-shadow-2xl">
          {{ selected }} 
        </h1>
      </div>
    </div>

    <div class="text-container max-w-5xl mx-auto px-4 select-none">
      <div class="md:w-2/6 mt-3">
        <USelectMenu
          size="xl"
          padding="xl"
          color="gray"
          variant="outline"
          v-model="selected"
          :options="people"
          :uiMenu="{
            option: { active: 'bg-red-900', color: 'text-white' },
            background: 'bg-red-900',
          }"
          :ui="{}"
        />
      </div>

      <h1
        class="mt-10 title text-4xl font-semibold text-center text-gray-200"
        id="forum-description"
      >
        Overview
      </h1>
      <hr
        class="w-48 my-8 h-1 mx-auto bg-gray-100 border-0 rounded md:my-6 dark:bg-gray-700"
      />
      <p
        class="mt-4 text-lg text-gray-400 mx-4 sm:mx-8 justify-center text-justify"
      >
        {{ description }}
      </p>
      <h1
        class="mt-10 title text-4xl font-semibold text-center text-gray-200"
        id="forum-description"
      >
        Agenda Items
      </h1>
      <hr
        class="w-48 h-1 mx-auto my-8 bg-gray-100 border-0 rounded md:my-6 dark:bg-gray-700"
      />
      <ul class="list-disc">
        <li
          class="mt-4 md:text-2xl text-xl font-bold text-gray-400 mx-4 sm:mx-8 justify-center break-words list-inside"
        >
          <div class="inline">{{ agendaItem.firstItem.name }}</div>
          <div>
            <UButton
              @click="
                toast.add({
                  title: 'Study Guides Unavailable',
                  description:
                    'Study guides will be available soon, once prepared by the student officers.',
                  color: 'yellow',
                  timeout: 5000,
                })
              "
              icon="i-heroicons-arrow-down-circle-16-solid"
              size="sm"
              color="black"
              variant="solid"
              label="Study Guide"
              class="mt-2"
              :trailing="true"
            />
          </div>
        </li>
        <li
          class="mt-4 md:text-2xl font-bold text-xl text-gray-400 mx-4 sm:mx-8 justify-center break-words list-inside"
        >
          <div class="inline">{{ agendaItem.secondItem.name }}</div>
          <div>
            <UButton
              @click="
                toast.add({
                  title: 'Study Guides Unavailable',
                  description:
                    'Study guides will be available soon, once prepared by the student officers.',
                  color: 'yellow',
                  timeout: 5000,
                })
              "
              icon="i-heroicons-arrow-down-circle-16-solid"
              size="sm"
              color="black"
              variant="solid"
              label="Study Guide"
              class="mt-2"
              :trailing="true"
            />
          </div>
        </li>
      </ul>
      <div class="mb-24"></div>
    </div>
  </div>
</template>

<script setup>


import { ref, computed } from "vue";
const toast = useToast();
definePageMeta({
  layout: "base",
});

useHead({
  title: "MCMUN - Agenda Items",
});

//@click="(async ()=> await navigateTo(agendaItem.secondItem.studyGuide, { external: true,   open: {
//    target: '_blank',} }))"
const people = [
  "GA1 DISEC",
  "GA2 ECOFIN",
  "GA4 SPECPOL",
  "GA6 LEGAL",
  "NATO",
  "UNHRC",
  "UNSC",
  "ECOSOC",
];
const selected = ref(people[0]);

// Updated dynamic descriptions for each option
const descriptions = {
  "GA1 DISEC":
    "The General Assembly First Committee (GA1) on Disarmament and International Security (DISEC) is one of the six main committees of the United Nations General Assembly. It is tasked with addressing a wide range of issues related to global security, disarmament, and the prevention of armed conflict. DISEC plays a pivotal role in promoting international cooperation and dialogue on matters such as nuclear disarmament, arms control, and the peaceful use of outer space. In this forum, member states come together to debate, negotiate, and adopt resolutions aimed at enhancing global peace and stability, striving to reduce the threats posed by weapons and military conflict to ensure a safer world for future generations.",
  "GA2 ECOFIN":
    "The General Assembly Second Committee (GA2) on Economic and Financial Affairs (ECOFIN) is responsible for deliberating and formulating policies related to global economic growth, sustainable development, and financial stability. ECOFIN addresses critical issues such as international trade, economic inequality, the eradication of poverty, and the promotion of sustainable development goals (SDGs). It also focuses on fostering cooperation between nations to tackle economic challenges, improve financial transparency, and strengthen global partnerships for development. By bringing together member states, ECOFIN aims to create a more equitable and resilient global economic system.",
  "GA3 SOCHUM":
    "The General Assembly Third Committee (GA3) on Social, Humanitarian, and Cultural Issues (SOCHUM) is dedicated to addressing matters that affect the promotion and protection of fundamental human rights and freedoms around the world. This committee examines issues related to human rights abuses, humanitarian crises, social development, and the rights of specific groups, including women, children, and indigenous peoples. SOCHUM collaborates with key bodies such as the Office of the High Commissioner for Human Rights (OHCHR) to advance international standards and mechanisms for safeguarding human dignity and fostering social justice.",
  "GA4 SPECPOL":
    "The General Assembly Fourth Committee (GA4) on Special Political and Decolonization (SPECPOL) addresses a diverse array of political and decolonization-related matters. It focuses on issues such as decolonization, peacekeeping operations, Palestinian rights, and the use of outer space for peaceful purposes. SPECPOL also examines topics like mine action, atomic radiation, and questions concerning information dissemination. The committee serves as a forum for member states to work toward resolving political disputes and supporting the self-determination of peoples in non-self-governing territories, promoting peace and stability on a global scale.",
  "GA6 LEGAL":
    "The General Assembly Sixth Committee (GA6) on Legal Matters serves as the primary forum for addressing international legal issues and promoting the rule of law at both the global and national levels. GA6 discusses topics such as international treaties, the development of international law, accountability mechanisms, and the codification of customary legal norms. It also addresses issues like counter-terrorism, international criminal justice, and the protection of diplomatic privileges. Through its work, GA6 seeks to strengthen the international legal framework and ensure its equitable application across all member states.",
  NATO: "The North Atlantic Treaty Organization (NATO) is an intergovernmental military alliance established in 1949 to ensure the collective defense of its member states. Comprising countries from North America and Europe, NATO operates on the principle that an attack on one member is considered an attack on all. Beyond its military role, NATO also engages in crisis management, cooperative security, and the promotion of democratic values. In addressing contemporary security challenges, NATO works to counter threats such as terrorism, cyber warfare, and hybrid conflicts, while fostering stability and peace in the transatlantic region.",
  UNHRC:
    "The United Nations Human Rights Council (UNHRC) is a principal body within the United Nations system tasked with promoting and protecting human rights globally. Composed of 47 member states, the council addresses violations of human rights and recommends strategies to prevent future abuses. UNHRC also examines thematic issues such as freedom of expression, the rights of minorities, and the impact of climate change on human rights. Through its Universal Periodic Review (UPR) mechanism and special procedures, the council works collaboratively with states and civil society to advance human dignity and justice worldwide.",
  UNSC: "The United Nations Security Council (UNSC) is the premier body of the United Nations responsible for maintaining international peace and security. Comprised of 15 members, including five permanent members with veto power, the UNSC has the authority to take decisive action on global security matters. This includes imposing sanctions, authorizing peacekeeping missions, and approving the use of force when necessary. The UNSC plays a critical role in conflict resolution and prevention, addressing issues such as armed conflicts, terrorism, and weapons proliferation to safeguard global stability.",
  ECOSOC:
    "The United Nations Economic and Social Council (ECOSOC) is a central platform for fostering international cooperation on economic, social, and environmental issues. As one of the principal organs of the UN, ECOSOC coordinates the efforts of specialized agencies, funds, and programs to achieve sustainable development goals (SDGs) and address global challenges such as poverty, inequality, and climate change. ECOSOC serves as a bridge between policy-making and action, facilitating dialogue among governments, civil society, and the private sector to promote inclusive and sustainable development worldwide.",
};

const backgroundImages = {
  "GA1 DISEC": "/committees/disec.jpg",
  "GA2 ECOFIN": "/committees/ecofin.jpg",
  "GA3 SOCHUM": "/committees/sochum.jpg",
  "GA4 SPECPOL": "/committees/specpol.jpg",
  "GA6 LEGAL": "/committees/legal.jpg",
  NATO: "/committees/nato.jpg",
  UNHRC: "/committees/unhrc.jpg",
  UNSC: "/committees/unsc.jpg",
  ECOSOC: "/committees/ecosoc.jpg",
};
const agendaItems = {
  "GA1 DISEC": {
    firstItem: {
      name: "Discussing the active terrorist/insurgent groups in Pakistan and Southeast Asia",
      studyGuide: "https://google.com",
    },
    secondItem: {
      name: "Cyber warfare in the 21st century",
      studyGuide: "",
    },
  },
  "GA2 ECOFIN": {
    firstItem: {
      name: "Assessing the efficacy of restrictive financial measures (sanctions) in curbing Russia's actions and alleviating the crisis in Ukraine",
      studyGuide: "",
    },
    secondItem: {
      name: "Auditing the economic implications of civil conflicts, with particular attention to Myanmar",
      studyGuide: "",
    },
  },
  "GA4 SPECPOL": {
    firstItem: {
      name: "Examining the sovereignty of the remaining territories as a result of International conflicts",
      studyGuide: "",
    },
    secondItem: {
      name: "Contemplating the revision of Peacekeeping Operation models around the world with a specific emphasis on MINUSMA (United Nations Multidimensional Integrated Stabilization Mission in Mali)",
      studyGuide: "",
    },
  },
  "GA6 LEGAL": {
    firstItem: {
      name: "Extending and revising proscription laws against terrorist organizations in developed and developing countries",
      studyGuide: "",
    },
    secondItem: {
      name: "Creating a global framework for the regulation of unmanned aerial vehicles (UAVs)",
      studyGuide: "",
    },
  },
  NATO: {
    firstItem: {
      name: "The future of NATO’s member countries’ and allies’ Cyber Security exercises",
      studyGuide: "",
    },
    secondItem: {
      name: "Limiting Russia’s possession and exploitation of nuclear facilities",
      studyGuide: "",
    },
  },
  UNHRC: {
    firstItem: {
      name: "Examining invasive settlement activities affecting the rights of the refugees",
      studyGuide: "",
    },
    secondItem: {
      name: "Expressing concerns over the mistreatment of Uyghur Turks",
      studyGuide: "",
    },
  },
  UNSC: {
    firstItem: {
      name: "Situation in Nagorno-Karabakh (Armenia-Azerbaijan)",
      studyGuide: "",
    },
    secondItem: {
      name: "The situation in Balochistan",
      studyGuide: "",
    },
  },
  ECOSOC: {
    firstItem: {
      name: "The situation in the Sahel region: fostering adaptability and viable alternatives alongside tackling needs, risks, and vulnerabilities",
      studyGuide: "",
    },
    secondItem: {
      name: "Rebuilding and strengthening infrastructure in post-conflict zones. Reconstructing infrastructure for resilient essential services during and following protracted conflict: A conceptual framework",
      studyGuide: "",
    },
  },
};

// Computed property for the current description
const description = computed(() => descriptions[selected.value]);
const backgroundImageSrc = computed(() => backgroundImages[selected.value]);
const agendaItem = computed(() => agendaItems[selected.value]);
</script>
