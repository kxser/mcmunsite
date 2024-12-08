<template>

<table class="min-w-full table-auto border-collapse border border-gray-200 rounded-lg overflow-hidden">
  <thead class="bg-gray-800 text-white">
    <tr>
      <th class="px-6 py-3 text-left text-sm font-medium">Date</th>
      <th class="px-6 py-3 text-left text-sm font-medium">Time</th>
      <th class="px-6 py-3 text-left text-sm font-medium">Event</th>
    </tr>
  </thead>
  <tbody class="text-gray-700">
    <!-- 11 Nisan - Cuma -->
    <tr class="bg-gray-100">
      <td class="px-6 py-4 font-semibold">11 Nisan - Cuma</td>
      <td class="px-6 py-4">16:00</td>
      <td class="px-6 py-4">Registration</td>
    </tr>
    <tr>
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">16:15</td>
      <td class="px-6 py-4">Music Performance</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">17:45</td>
      <td class="px-6 py-4">Registration Closes</td>
    </tr>
    <tr>
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">17:55 - 18:30</td>
      <td class="px-6 py-4">1st Session: All Committees</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">18:45 - 20:00</td>
      <td class="px-6 py-4">Opening Ceremony</td>
    </tr>
    <tr>
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">20:00 - 22:00</td>
      <td class="px-6 py-4">Chair Dinner</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">20:00 - 22:00</td>
      <td class="px-6 py-4">Advisor Dinner</td>
    </tr>
    
    <!-- 12 Nisan - Cumartesi -->
    <tr>
      <td class="px-6 py-4 font-semibold">12 Nisan - Cumartesi</td>
      <td class="px-6 py-4">08:30 - 08:50</td>
      <td class="px-6 py-4">Student Officer Briefing</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">09:00 - 10:30</td>
      <td class="px-6 py-4">2nd Session: All Committees</td>
    </tr>
    <tr>
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">10:30 - 11:00</td>
      <td class="px-6 py-4">Coffee Break</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">11:00 - 12:30</td>
      <td class="px-6 py-4">3rd Session: All Committees</td>
    </tr>
    <tr>
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">12:30 - 13:30</td>
      <td class="px-6 py-4">Lunch Break</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">13:30 - 15:00</td>
      <td class="px-6 py-4">4th Session: All Committees</td>
    </tr>
    <tr>
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">15:00 - 15:15</td>
      <td class="px-6 py-4">Coffee Break</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">15:15 - 16:45</td>
      <td class="px-6 py-4">5th Session</td>
    </tr>
    <tr>
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">16:45 - 17:00</td>
      <td class="px-6 py-4">Coffee Break</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">17:00 - 18:40</td>
      <td class="px-6 py-4">6th Session (Snack Distribution at 18:30)</td>
    </tr>
    <tr>
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">19:20</td>
      <td class="px-6 py-4">Bus Departure</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">19:30 - 22:00</td>
      <td class="px-6 py-4">Party</td>
    </tr>
    
    <!-- 13 Nisan - Pazar -->
    <tr>
      <td class="px-6 py-4 font-semibold">13 Nisan - Pazar</td>
      <td class="px-6 py-4">08:30 - 08:50</td>
      <td class="px-6 py-4">Student Officer Briefing</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">09:00 - 10:30</td>
      <td class="px-6 py-4">7th Session: All Committees</td>
    </tr>
    <tr>
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">10:30 - 11:00</td>
      <td class="px-6 py-4">Coffee Break → High School Amphitheater</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">11:00 - 12:30</td>
      <td class="px-6 py-4">8th Session: All Committees</td>
    </tr>
    <tr>
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">12:30 - 13:30</td>
      <td class="px-6 py-4">Lunch Break → Cafeteria</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">13:30 - 15:00</td>
      <td class="px-6 py-4">9th Session</td>
    </tr>
    <tr>
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">15:00 - 15:15</td>
      <td class="px-6 py-4">Coffee Break → High School Amphitheater (Cookies, Tea, and Coffee)</td>
    </tr>
    <tr class="bg-gray-100">
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">15:15 - 16:45</td>
      <td class="px-6 py-4">10th Session</td>
    </tr>
    <tr>
      <td class="px-6 py-4"></td>
      <td class="px-6 py-4">17:00 - 18:15</td>
      <td class="px-6 py-4">Closing Ceremony → Culture Hall</td>
    </tr>
  </tbody>
</table>

</template>