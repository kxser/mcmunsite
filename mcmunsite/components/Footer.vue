<template>
  <footer class="select-none">
    <div class="bg-gray-800 text-white">
      <div class="bg-red-900 py-6">
        <div class="container mx-auto px-4">
          <div
            class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          >
            <div
              class="text-sm text-left flex-1 sm:justify-start flex flex-col"
            >
              <p>© MCMUN 2025, All rights reserved.</p>
              <p class="text-xs text-slate-400">
                Developed by
                <span
                  aria-label="developer"
                  class="underline hover:text-gray-100 transition-colors hover:cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                  @click="
                    async () =>
                      await navigateTo(
                        'https://www.linkedin.com/in/d-alan-ritter-441403348/',
                        { external: true }
                      )
                  "
                >
 
                  Derin Alan Ritter
                </span>

              </p>
              <span class="underline text-xs text-slate-400 hover:text-gray-100 transition-colors hover:cursor-pointer " @click="async () => await navigateTo('/admin')">
                  Admin Dashboard
                  </span>
              
            </div>
            <div class="flex gap-4 justify-center flex-1">
              <a
                href="https://www.tiktok.com/@metucollegemun"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="tiktok"
                class="hover:text-gray-400"
              >
                <Icon name="i-lineicons-tiktok" class="size-8" dynamic />
              </a>
              <a
                href="https://www.instagram.com/metucollegemun/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                class="hover:text-gray-400"
              >
                <Icon name="i-mdi-instagram" class="size-8" dynamic />
              </a>
            </div>
            <nav class="text-sm flex-1 sm:justify-end flex">
              <ul class="flex space-x-4">
                <li>
                  <p
                    class="hover:text-gray-300 hover:cursor-pointer"
                    @click="termsAndConditionsIsOpen = true"
                  >
                    Terms &amp; Conditions
                  </p>
                </li>
                <li>
                  <p
                    @click="cookieNotifierIsOpen = true"
                    class="hover:text-gray-300 hover:cursor-pointer"
                  >
                    Cookies
                  </p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <USlideover
    v-model="cookieNotifierIsOpen"
    :ui="{
      overlay: { background: 'bg-zinc-900' },
      background: 'bg-zinc-900',
      wrapper: 'fixed inset-0 flex z-[999] ',
    }"
  >
    <div class="p-4 flex-1 bg-zinc-900">
      <UButton
        color="gray"
        variant="ghost"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10"
        square
        padded
        @click="cookieNotifierIsOpen = false"
      />
      <section
        class="px-6 py-12 max-w-4xl mx-auto max-h-[100vh] select-none overflow-y-auto"
      >
        <div class="overflow-y-auto">
          <h1 class="text-3xl font-bold text-center mb-6">Cookie Policy</h1>

          <p class="text-lg mb-4">
            This Cookie Policy explains how [Company Name] ("we", "our", "us")
            uses cookies and similar technologies on our website and services
            ("Website") in compliance with the General Data Protection
            Regulation (GDPR) (EU) 2016/679 and the Turkish Personal Data
            Protection Law (KVKK) No. 6698. By accessing or using our Website,
            you consent to the use of cookies as outlined in this policy.
          </p>

          <h2 class="text-2xl font-semibold mt-6 mb-4">1. Use of Cookies</h2>
          <p class="text-lg mb-4">
            We use cookies, which are small text files placed on your device, to
            enhance the functionality of the Website, improve user experience,
            analyze site usage, and deliver targeted advertisements. Cookies may
            be set by us (first-party cookies) or by third parties with whom we
            collaborate (third-party cookies). The cookies we use may be
            necessary for the performance of the Website, for security purposes,
            for statistical analysis, or to provide personalized content and
            advertisements.
          </p>

          <h2 class="text-2xl font-semibold mt-6 mb-4">
            2. Categories of Cookies
          </h2>
          <p class="text-lg mb-4">
            We may use the following categories of cookies:
          </p>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">
              <strong>Strictly Necessary Cookies:</strong> These cookies are
              essential for the operation of our Website and cannot be disabled.
              They are typically set in response to actions made by you, such as
              setting your privacy preferences, logging in, or completing forms.
            </li>
            <li class="mb-2">
              <strong>Performance Cookies:</strong> These cookies collect
              anonymous information on how visitors use our Website, enabling us
              to improve its functionality and user experience.
            </li>
            <li class="mb-2">
              <strong>Functionality Cookies:</strong> These cookies allow us to
              remember your preferences, such as your language choice or region,
              and provide more personalized content and services.
            </li>
            <li class="mb-2">
              <strong>Targeting/Advertising Cookies:</strong> These cookies are
              used to deliver personalized advertisements, and to track your
              browsing habits across different websites in order to serve more
              relevant ads.
            </li>
            <li>
              <strong>Third-Party Cookies:</strong> We may also allow third
              parties to place cookies on your device. These third parties may
              use cookies to track your online activities, serve advertisements,
              or provide other services (e.g., social media integrations,
              analytics).
            </li>
          </ul>

          <h2 class="text-2xl font-semibold mt-6 mb-4">
            3. Consent and Control
          </h2>
          <p class="text-lg mb-4">
            By using our Website, you acknowledge and agree that we may place
            cookies on your device as described in this policy. You have the
            right to control and manage the use of cookies. However, as we do
            not provide a cookie consent management tool on our Website, you may
            disable or block cookies through your browser settings. If you
            choose to disable cookies, certain features of the Website may not
            function as intended.
          </p>
          <p class="text-lg mb-4">
            Please note that disabling cookies may impact your ability to use
            some parts of the Website or may result in a suboptimal experience.
          </p>

          <h2 class="text-2xl font-semibold mt-6 mb-4">
            4. Third-Party Cookies
          </h2>
          <p class="text-lg mb-4">
            The Website may include content from third parties (such as embedded
            videos, social media buttons, or advertisements) that may set
            cookies on your device. We do not control the cookies set by these
            third parties and are not responsible for their practices. These
            third parties may collect personal data about you, and you should
            review their privacy and cookie policies for more information about
            their data processing practices.
          </p>

          <h2 class="text-2xl font-semibold mt-6 mb-4">
            5. Legal Basis for Processing (GDPR)
          </h2>
          <p class="text-lg mb-4">
            In accordance with the GDPR, the legal basis for processing your
            personal data through cookies is your consent, which you provide
            when you access and use the Website. You may withdraw your consent
            at any time by blocking or deleting cookies via your browser
            settings.
          </p>

          <h2 class="text-2xl font-semibold mt-6 mb-4">
            6. Data Protection Rights (GDPR & KVKK)
          </h2>
          <p class="text-lg mb-4">
            Under the GDPR and KVKK, you have the following rights in relation
            to your personal data:
          </p>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">The right to access your personal data.</li>
            <li class="mb-2">
              The right to request the correction of inaccurate or incomplete
              data.
            </li>
            <li class="mb-2">
              The right to request the deletion of your personal data ("right to
              be forgotten").
            </li>
            <li class="mb-2">
              The right to restrict or object to the processing of your personal
              data.
            </li>
            <li>The right to data portability.</li>
          </ul>
          <p class="text-lg mb-4">
            To exercise these rights, or if you have any questions or concerns
            about the processing of your personal data, please contact us using
            the contact details below.
          </p>

          <h2 class="text-2xl font-semibold mt-6 mb-4">
            7. Changes to This Cookie Policy
          </h2>
          <p class="text-lg mb-4">
            We reserve the right to update or amend this Cookie Policy at any
            time. Any changes to this policy will be posted on this page, with
            the date of the most recent revision indicated at the top. We
            encourage you to review this policy periodically to stay informed
            about how we use cookies and how your data is processed.
          </p>
        </div>
      </section>
    </div>
  </USlideover>
  <USlideover
    v-model="termsAndConditionsIsOpen"
    :ui="{
      overlay: { background: 'bg-zinc-900' },
      background: 'bg-zinc-900',
      wrapper: 'fixed inset-0 flex z-[999] ',
    }"
  >
    <div class="p-4 flex-1 bg-zinc-900">
      <UButton
        color="gray"
        variant="ghost"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10"
        square
        padded
        @click="termsAndConditionsIsOpen = false"
      />
      <section
        class="px-6 py-12 max-w-4xl mx-auto max-h-[100vh] select-none overflow-y-auto"
      >
        <div class="overflow-y-auto">
          <h1 class="text-3xl font-bold text-center mb-6">
            Terms and Conditions Agreement
          </h1>

          <p class="text-lg mb-4">
            This agreement outlines the general terms and conditions for using
            the mcmun.com.tr website, as well as any associated services and
            products. This contract is legally binding between you and the
            operator of the website. By accessing and using the website and its
            services, you confirm that you have read, understood, and agreed to
            abide by these terms. If you are entering into this agreement on
            behalf of an organization or legal entity, you confirm that you have
            the authority to bind that entity to these terms, and the terms
            "User," "you," or "your" will apply to the entity. If you do not
            have such authority, or if you do not agree with the terms of this
            agreement, you must not access or use the website or services. You
            understand that this agreement is a legally binding contract between
            you and the website operator, even though it is electronic and does
            not require a physical signature.
          </p>

          <h2 class="text-2xl font-semibold mt-6 mb-4">
            1. Account Registration and Security
          </h2>
          <p class="text-lg mb-4">
            When you create an account on our website, you are responsible for
            securing your account and for any actions that occur under it. You
            should monitor your account regularly and inform us immediately if
            you notice any unauthorized use or security breaches. We may review
            new accounts before allowing access to our services. Providing false
            or misleading information during registration may lead to account
            termination. We are not liable for any damages resulting from your
            actions or omissions. If we find that you have violated this
            agreement or engaged in behavior that harms our reputation, we may
            suspend or delete your account. If your account is deleted for these
            reasons, you may not be able to register again, and we may block
            your email address and IP address to prevent further access.
          </p>

          <h2 class="text-2xl font-semibold mt-6 mb-4">
            2. Third-Party Links and Resources
          </h2>
          <p class="text-lg mb-4">
            Our website and services may contain links to third-party websites
            or applications. However, we do not endorse, sponsor, or affiliate
            with these third-party resources unless explicitly stated. We do not
            evaluate or guarantee the quality, services, or content provided by
            these third parties, and we are not responsible for any consequences
            arising from your interaction with them. You should review the legal
            terms and conditions of any third-party websites you visit via links
            from our website. Accessing such external resources is at your own
            risk.
          </p>

          <h2 class="text-2xl font-semibold mt-6 mb-4">3. Severability</h2>
          <p class="text-lg mb-4">
            The rights and restrictions set forth in this agreement are valid
            only to the extent they comply with applicable laws and are intended
            to remain enforceable. If any provision of this agreement is found
            to be unlawful, invalid, or unenforceable by a court of competent
            jurisdiction, the remaining provisions will still be in full effect.
            The parties intend that the unenforceable provision will be modified
            to reflect the original intent as closely as possible.
          </p>

          <h2 class="text-2xl font-semibold mt-6 mb-4">
            4. Modifications to the Agreement
          </h2>
          <p class="text-lg mb-4">
            We reserve the right to update or change this agreement at any time,
            with such changes becoming effective upon the publication of the
            updated version on our website. When updates occur, we will indicate
            the revised date at the bottom of this page. By continuing to use
            the website and services after these changes, you consent to the
            updated terms.
          </p>

          <h2 class="text-2xl font-semibold mt-6 mb-4">
            5. Agreement Acknowledgment
          </h2>
          <p class="text-lg mb-4">
            By accessing and using the website and services, you acknowledge
            that you have read and agree to the terms and conditions outlined in
            this agreement. If you do not agree with any part of this agreement,
            you are not permitted to access or use the website or services.
          </p>
        </div>
      </section>
    </div>
  </USlideover>
</template>

<script setup lang="ts">
const cookieNotifierIsOpen = ref(false);
const termsAndConditionsIsOpen = ref(false);
</script>
