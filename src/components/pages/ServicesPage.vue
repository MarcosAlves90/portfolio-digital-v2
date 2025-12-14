<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { useSEO, generateBreadcrumbSchema } from "@/composables/useSEO";
import CommonLink from "@/components/atoms/CommonLink.vue";
import { serviceCategories } from "@/data/services";

useSEO({
  title: "Serviços e Preços",
  description:
    "Confira os serviços de desenvolvimento web, aplicativos e software oferecidos por Marcos Lopes. Soluções personalizadas com preços competitivos.",
  canonicalPath: "/servicos",
});

// Adiciona breadcrumb schema
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(
        generateBreadcrumbSchema([
          {
            name: "Home",
            url: "https://marcospilgrim.com.br/",
          },
          {
            name: "Serviços",
            url: "https://marcospilgrim.com.br/servicos",
          },
        ])
      ),
    },
  ],
});
</script>

<template>
  <main class="p-0 w-full font-poppins">
    <div class="max-w-6xl w-full">
      <div class="space-y-2 sticky py-8 md:py-12 lg:py-16 top-0">
        <nav aria-label="Voltar para página inicial">
          <CommonLink
            to="/"
            label="Marcos Lopes"
            aria-label="Voltar para a página inicial"
            icon-position="left"
            icon-class="bi bi-arrow-left"
            wrapper-class="mb-5"
            link-class="font-semibold cursor-pointer group hover:text-highlight hover:underline transition-all duration-200 inline-flex items-center text-sm md:text-base"
          />
        </nav>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Serviços e Preços
        </h1>
      </div>
    </div>

    <div class="max-w-6xl w-full pb-8 md:pb-10">
      <div class="space-y-20 pb-20">
        <section
          v-for="(category, cIndex) in serviceCategories"
          :key="cIndex"
          class="space-y-8"
        >
          <div class="flex items-center space-x-4 border-b border-highlight/10 pb-4">
            <i :class="['bi text-3xl text-highlight', category.icon]" />
            <div>
              <h2 class="text-2xl md:text-3xl font-bold text-primary">
                {{ category.title }}
              </h2>
              <p class="text-secondary text-sm md:text-base mt-1">
                {{ category.description }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article
              v-for="(tier, tIndex) in category.tiers"
              :key="tIndex"
              class="relative flex flex-col bg-highlight/5 rounded-xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              :class="[
                tier.recommended 
                  ? 'border-highlight shadow-lg shadow-highlight/10 scale-105 md:scale-105 z-10' 
                  : 'border-highlight/10 hover:border-highlight/30'
              ]"
            >
              <div v-if="tier.recommended" class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-highlight text-background text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Recomendado
              </div>

              <h3 class="text-xl font-bold text-primary mb-2">
                {{ tier.name }}
              </h3>
              <p class="text-secondary text-sm mb-6 min-h-10">
                {{ tier.description }}
              </p>
              
              <div class="mb-6">
                <span class="block text-xs text-tertiary uppercase mb-1">Investimento</span>
                <span class="text-2xl font-bold text-highlight">{{ tier.price }}</span>
              </div>

              <ul class="space-y-3 mb-8 grow">
                <li v-for="(feature, fIndex) in tier.features" :key="fIndex" class="flex items-start text-tertiary text-sm">
                  <i class="bi bi-check-lg text-highlight mr-2 text-lg leading-none" />
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <a
                :href="`mailto:contato@marcospilgrim.com.br?subject=Orçamento: ${category.title} - ${tier.name}`"
                class="w-full inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-lg transition-colors duration-200"
                :class="[
                  tier.recommended
                    ? 'bg-highlight text-background hover:bg-highlight/90 border-transparent'
                    : 'bg-transparent text-highlight border-highlight hover:bg-highlight/10'
                ]"
              >
                Solicitar Orçamento
              </a>
            </article>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
