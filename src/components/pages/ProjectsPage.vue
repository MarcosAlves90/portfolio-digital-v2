<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref, computed } from 'vue'
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

const searchTerm = ref('')

const filteredProjects = computed(() => {
  if (!searchTerm.value) {
    return projectsReverseSorted
  }

  const term = searchTerm.value.toLowerCase()
  return projectsReverseSorted.filter(project =>
    project.title.toLowerCase().includes(term) ||
    project.description.toLowerCase().includes(term) ||
    project.skills.some(skill => skill.toLowerCase().includes(term)) ||
    (project.company && project.company.toLowerCase().includes(term))
  )
})
</script>

<template>
  <main class="p-0 w-full font-poppins">
    <div class="max-w-6xl w-full">
      <div class="space-y-2 sticky py-8 md:py-12 lg:py-16 top-0">
          <div>
            <router-link
            to="/"
            class="font-semibold cursor-pointer text-highlight hover:text-primary text-sm md:text-base"
            >
              ← Marcos Lopes
            </router-link>
          </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold">Todos os Projetos</h1>
      </div>
    </div>

    <div class="max-w-6xl w-full pb-8 md:pb-10">
      <div class="mb-8">
        <div class="relative">
          <i class="bi bi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary"></i>
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Buscar projetos por nome, descrição, tecnologia ou empresa..."
            class="w-full pl-10 pr-4 py-3 bg-transparent border border-tertiary rounded-lg text-primary placeholder-secondary focus:outline-none focus:border-highlight focus:ring-1 focus:ring-highlight transition-colors duration-200"
          />
        </div>
      </div>

      <div class="space-y-12">
      <div class="space-y-12">
        <table v-if="filteredProjects.length > 0" class="w-full">
          <thead>
            <tr>
              <th>Ano</th>
              <th>Projeto</th>
              <th class="hidden lg:table-cell">Empresa</th>
              <th class="hidden lg:table-cell">Desenvolvido com</th>
              <th class="hidden sm:table-cell">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in filteredProjects" :key="project.title">
              <td class="text-tertiary">{{ project.year || 'N/A' }}</td>
              <td class="font-semibold">
                <!-- On small screens the link column is hidden, so make the title a link there -->
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="sm:hidden cursor-pointer text-highlight hover:text-primary"
                >
                  {{ project.title }}
                </a>
                <span v-else class="sm:hidden">{{ project.title }}</span>

                <!-- On small+ screens keep the plain title (existing behavior) -->
                <span class="hidden sm:inline">{{ project.title }}</span>
              </td>
              <td class="text-tertiary hidden lg:table-cell">{{ project.company }}</td>
              <td class="hidden lg:table-cell">
                <ul class="flex flex-wrap gap-2 text-sm">
                  <li v-for="skill in project.skills" :key="skill" class="bg-highlight/20 rounded-4xl px-2 text-highlight transition transform duration-150 ease-in-out hover:scale-105">{{ skill }}</li>
                </ul>
              </td>
              <td class="hidden sm:table-cell">
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

        <div v-else class="text-center py-12">
          <i class="bi bi-search text-4xl text-tertiary mb-4"></i>
          <p class="text-secondary">Nenhum projeto encontrado para "{{ searchTerm }}"</p>
          <p class="text-tertiary text-sm mt-2">Tente buscar por nome, tecnologia ou empresa</p>
        </div>
      </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
table {
  width: 100%;
}

table th, table td {
  text-align: left;
  padding: 1rem 0.5rem;
  min-height: 3rem;
  vertical-align: top;
}

th:nth-child(4) { width: 30%; }

tbody tr {
  border-bottom: 1px solid var(--color-tertiary);
}
</style>
