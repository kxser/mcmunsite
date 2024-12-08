<template class="">
  <Navbar />

  <section
    id="home"
    class="select-none bg-gray-100 relative overflow-hidden lg:h-[66vh] sm:min-h-[90vh]"
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
  <section class="bg-zinc-900 select-none">
  <div class="text-container max-w-5xl mx-auto px-4">
    <h1 class="mt-10 title text-4xl font-semibold text-center text-gray-200" id="about">
      What is MCMUN?
    </h1>
    <hr class="w-48 h-1 mx-auto mt-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
    <p class="mt-4 text-lg text-gray-400 mx-4 sm:mx-36 justify-center text-justify ">
      MCMUN is a renowned <b class="font-semibold underline decoration-red-600 decoration-2">Model United Nations conference</b> that was founded in
      2007 with the goal of simulating the operations of the United Nations. The
      event provides students with a chance to immerse themselves in global
      diplomacy and policymaking, gaining a deeper understanding of
      international relations and the challenges the world faces.
    </p>
    <p class="mt-4 text-lg text-gray-400 mx-4 sm:mx-36 justify-center text-justify pt-4">
      Every year, over <b class="font-semibold underline decoration-red-600 decoration-2">180 students</b> with backgrounds from all around the world come together to debate pressing social,
      economic, and international issues. These students bring diverse
      perspectives and engage in intense discussions aimed at finding practical
      solutions to complex global problems, making the experience both enriching
      and impactful.
    </p>
    <p class="mt-4 text-lg text-gray-400 mx-4 sm:mx-36 mb-10 justify-center text-justify pt-4">
      Participants are assigned to <b class="font-semibold underline decoration-red-600 decoration-2">committees</b> with
      <b class="font-semibold underline decoration-red-600 decoration-2">a variety of agenda items</b>, where they collaborate with
      their peers to address specific issues and come up with innovative
      solutions. The delegates are challenged to use their research, critical
      thinking, and negotiation skills to influence the outcomes of debates and
      create actionable resolutions.
    </p>
  </div>
</section>
<section class="bg-zinc-900">
  <div class="text-container max-w-5xl mx-auto px-4 mt-10">
    <h1 class="mt-10 title text-4xl font-semibold text-center text-gray-200" id="about">
      Meet our Sponsors
    </h1>
    <hr class="w-48 h-1 mx-auto mt-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 ">
    
  </div>
</section>



<Footer />

</template>

<script setup lang="ts">
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


