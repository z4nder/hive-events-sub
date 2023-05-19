<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-secondary-600 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32"
      >
        <h2
          class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Inscreva-se e ganhe um ebook gratuito sobre Git e GitHub.
        </h2>
        <p
          class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300"
        >
          Coloque seu email e receberá o ebook na hora, além de ser notificado
          sobre o evento no dia e ficar por dentro das novidades.
        </p>
        <form
          class="mx-auto mt-10 flex max-w-md gap-x-4"
          @submit.prevent="submit"
        >
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            v-model="subscribe.form.email"
            class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Seu email"
          />
          <button
            type="submit"
            class="flex-none rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            inscrever-me
          </button>
        </form>
        <svg
          viewBox="0 0 1024 1024"
          class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stop-color="#5C289A" />
              <stop offset="1" stop-color="#3B208A" stop-opacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(["onStore"]);
const subscribe = useSubscribe();

async function submit() {
  await subscribe.subscribe();
}
</script>
