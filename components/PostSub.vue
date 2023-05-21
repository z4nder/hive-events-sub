<template>
  <div
    class="relative isolate overflow-hidden bg-secondary-600 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32"
  >
    <div
      class="flex flex-col items-center lg:flex-grow mx-auto max-w-7xl px-6 lg:px-8"
    >
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          🎉 Inscrito com sucesso
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-100">
          Obrigado por se inscrever. Agora, fique atento às seguintes
          informações:
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="flex flex-col"
          >
            <dt class="text-base font-semibold leading-7 text-white">
              <div
                class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-900"
              >
                <component
                  :is="feature.icon"
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd
              class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-100"
            >
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6" v-if="feature.href != '#'">
                <a
                  :href="feature.href"
                  class="text-sm font-semibold leading-6 text-secondary-900"
                  target="_blank"
                  >{{ feature.link }} <span aria-hidden="true">→</span></a
                >
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CalendarDaysIcon,
  BookOpenIcon,
  UsersIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Evento",
    description:
      "O evento acontecerá no dia 25/05/2023 as 19 horas, uma notificação será enviada por e-mail",
    href: "https://www.twitch.tv/z4nder212",
    link: "Será realizado na twitch",
    icon: CalendarDaysIcon,
  },
  {
    name: "Ebook",
    description:
      "O seu ebook já foi enviado por e-mail, caso não tenha recebido confira a caixa de spam.",
    href: "#",
    icon: BookOpenIcon,
    href: "https://hivecommunity.dev/docs/hive_git_github.pdf",
    link: "Acesse seu ebook",
  },
  {
    name: "Hive Community",
    description:
      "Esse evento é realizado pela Hive uma comunidade aberta para desenvolvedores de software.",
    href: "https://discord.gg/JspQr3GPve",
    link: "Venha fazer parte",
    icon: UsersIcon,
  },
];
</script>
