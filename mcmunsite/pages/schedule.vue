<template>
    <div class="pt-24 pb-24">
      <h1
        class="text-6xl font-bold text-white drop-shadow-2xl text-center mx-auto mb-8"
      >
        Conference Schedule
      </h1>
  
      <div class="max-w-5xl mx-auto shadow-lg rounded-lg">
        <UButton
          @click="downloadSchedule()"
          icon="i-heroicons-arrow-down-16-solid"
          size="xl"
          color="white"
          class="float-right"
          variant="soft"
          label="Download PDF"
          :trailing="false"
        />
      </div>
<div class="max-w-5xl w-full mx-auto shadow-lg rounded-lg border-4 border md:border-red-900">
  <div ref="scheduleCaptureArea" class="overflow-x-auto p-3 sm:p-6 bg-zinc-900 rounded-lg w-full">
    <!-- Day 1 -->
    <div class="mb-6 sm:mb-8 w-full">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 border-b border-white pb-2 w-full">11 April 2025</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-2 w-full">
        <div class="bg-zinc-800 rounded-lg p-4 md:col-span-1 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>16:00 - 17:45</span>
          </div>
          <div class="text-gray-300 mt-1">Registration and Reception</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 md:col-span-1 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>17:55 - 18:30</span>
          </div>
          <div class="text-gray-300 mt-1">Committees in Session</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 md:col-span-1 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>18:45 - 20:00</span>
          </div>
          <div class="text-gray-300 mt-1">Opening Ceremony</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 md:col-span-1 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>20:00 - 22:00</span>
          </div>
          <div class="text-gray-300 mt-1">Chair/Advisor Dinner</div>
        </div>
      </div>
    </div>

    <!-- Day 2 -->
    <div class="mb-6 sm:mb-8 w-full">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 border-b border-white pb-2 w-full">12 April 2025</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-2 w-full">
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>08:00 - 08:30</span>
          </div>
          <div class="text-gray-300 mt-1">Arrival</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>08:30 - 08:50</span>
          </div>
          <div class="text-gray-300 mt-1">Student Officer Briefing</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>09:00 - 10:30</span>
          </div>
          <div class="text-gray-300 mt-1">Committees in Session</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>10:30 - 11:00</span>
          </div>
          <div class="text-gray-300 mt-1">Coffee Break</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>11:00 - 12:30</span>
          </div>
          <div class="text-gray-300 mt-1">Committees in Session</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>12:30 - 13:30</span>
          </div>
          <div class="text-gray-300 mt-1">Lunch</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>13:30 - 15:00</span>
          </div>
          <div class="text-gray-300 mt-1">Committees in Session</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>15:00 - 15:15</span>
          </div>
          <div class="text-gray-300 mt-1">Coffee Break</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>15:15 - 16:45</span>
          </div>
          <div class="text-gray-300 mt-1">Committees in Session</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>16:45 - 17:00</span>
          </div>
          <div class="text-gray-300 mt-1">Coffee Break</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>17:00 - 18:40</span>
          </div>
          <div class="text-gray-300 mt-1">Committees in Session</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>19:20</span>
          </div>
          <div class="text-gray-300 mt-1">Shuttles Leave</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>19:30 - 22:00</span>
          </div>
          <div class="text-gray-300 mt-1">Social Event</div>
        </div>
      </div>
    </div>

    <!-- Day 3 -->
    <div class="mb-6 sm:mb-8 w-full">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 border-b border-white pb-2 w-full">13 April 2025</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-2 w-full">
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>08:00 - 08:30</span>
          </div>
          <div class="text-gray-300 mt-1">Arrival</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>08:30 - 08:50</span>
          </div>
          <div class="text-gray-300 mt-1">Student Officer Briefing</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>09:00 - 10:30</span>
          </div>
          <div class="text-gray-300 mt-1">Committees in Session</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>10:30 - 11:00</span>
          </div>
          <div class="text-gray-300 mt-1">Coffee Break</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>11:00 - 12:30</span>
          </div>
          <div class="text-gray-300 mt-1">Committees in Session</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>12:30 - 13:30</span>
          </div>
          <div class="text-gray-300 mt-1">Lunch</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>13:30 - 15:00</span>
          </div>
          <div class="text-gray-300 mt-1">Committees in Session</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>15:00 - 15:15</span>
          </div>
          <div class="text-gray-300 mt-1">Coffee Break</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>15:15 - 16:45</span>
          </div>
          <div class="text-gray-300 mt-1">Committees in Session</div>
        </div>
        <div class="bg-zinc-800 rounded-lg p-4 shadow-md w-full">
          <div class="font-bold text-white text-base sm:text-lg flex justify-between w-full">
            <span>17:00 - 18:15</span>
          </div>
          <div class="text-gray-300 mt-1">Closing Ceremony</div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  </template>
  
  <script setup lang="ts">
import html2canvas from "html2canvas";
  
  
  definePageMeta({
    layout: "base",
  });
  useHead({
    title: "MCMUN - Schedule",
  });
  const scheduleCaptureArea = ref<HTMLElement | null>(null);


  const downloadSchedule = async () => {
  try {
    const link = document.createElement('a');
    
    link.href = '/mcmunschedule.pdf';
    
    link.download = 'MCMUN25_Schedule.pdf';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  } catch (error) {
    console.error('Error downloading schedule:', error);
  }
};
  </script>