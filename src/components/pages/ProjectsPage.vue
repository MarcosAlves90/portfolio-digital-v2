<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { projectsReverseSorted } from '@/data/projects'

useHead({
  title: 'Projetos - Marcos Lopes',
  meta: [
    {
      name: 'description',
      content: 'Veja todos os projetos desenvolvidos por Marcos Lopes, incluindo detalhes sobre tecnologias utilizadas e links para os projetos.'
    }
  ]
})
</script>

<template>
  <main class="p-0 w-full font-poppins">
    <div class="max-w-6xl w-full">
      <div class="space-y-2 sticky py-12 md:py-16 top-0">
          <div>
            <router-link
            to="/"
            class="font-semibold cursor-pointer text-highlight hover:text-primary"
            >
              ← Marcos Lopes
            </router-link>
          </div>
        <h1 class="text-5xl font-semibold">Todos os Projetos</h1>
      </div>
    </div>

    <div class="space-y-12 max-w-6xl w-full py-6 md:py-8">
      <table class="w-full">
        <thead>
          <tr>
            <th>Ano</th>
            <th>Projeto</th>
            <th>Empresa</th>
            <th>Desenvolvido com</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projectsReverseSorted" :key="project.title">
            <td class="text-tertiary">{{ project.year || 'N/A' }}</td>
            <td>{{ project.title }}</td>
            <td class="text-tertiary">{{ project.company }}</td>
            <td>
              <ul class="flex flex-wrap gap-2 text-sm">
                <li v-for="skill in project.skills" :key="skill" class="bg-highlight/20 rounded-4xl px-2 text-highlight transition transform duration-150 ease-in-out hover:scale-105">{{ skill }}</li>
              </ul>
            </td>
            <td>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="cursor-pointer text-highlight hover:text-primary"
              >
                {{ (project.link).replace("https://", "").replace("www.", "").replace("marcosalves90.github.io/","") }}
              </a>
              <span v-else>N/A</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
table th, table td {
  text-align: left;
  padding: 1rem 0.5rem;
  min-height: 3rem;
}

tbody tr {
  border-bottom: 1px solid var(--color-tertiary);
}
</style>
