<script setup lang="ts">
import type { Project } from "@/data/types";

const props = defineProps<{
  projects: Project[];
  formatLink: (link?: string) => string;
}>();
</script>

<template>
  <table v-if="projects.length > 0" class="w-full" role="table" aria-label="Tabela de projetos">
    <thead>
      <tr>
        <th scope="col">Ano</th>
        <th scope="col">Projeto</th>
        <th scope="col" class="hidden lg:table-cell">Empresa</th>
        <th scope="col" class="hidden lg:table-cell">Desenvolvido com</th>
        <th scope="col" class="hidden sm:table-cell">Link</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(project, index) in projects" :key="`${project.title}-${project.year || 'na'}-${index}`" role="row">
        <td role="cell" class="text-tertiary" data-label="Ano">{{ project.year || "N/A" }}</td>
        <td role="cell" class="font-semibold" data-label="Projeto">
          <template v-if="project.link">
            <!-- Link visível apenas em telas pequenas (coluna de link está oculta) -->
            <a :href="project.link" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center group cursor-pointer text-highlight hover:text-primary sm:hidden relative"
              :aria-label="`Abrir ${project.title} (abre em nova aba)`" :title="project.description">
              <span>{{ project.title }}</span>
              <i class="bi bi-box-arrow-up-right ml-2 transform transition-transform duration-200 group-hover:translate-x-2 group-focus:translate-x-2"
                aria-hidden="true"></i>
            </a>

            <!-- Texto puro (visível em sm+), para evitar duplicidade quando há link -->
            <span class="hidden sm:inline relative cursor-help" :title="project.description">{{ project.title }}</span>
          </template>
          <template v-else>
            <span class="relative cursor-help" :title="project.description">{{
              project.title
            }}</span>
          </template>
        </td>
        <td role="cell" class="text-tertiary hidden lg:table-cell" data-label="Empresa">
          {{ project.company }}
        </td>
        <td role="cell" class="hidden lg:table-cell" data-label="Tecnologias">
          <ul class="flex flex-wrap gap-2 text-sm" role="list">
            <li v-for="skill in project.skills" :key="skill" role="listitem"
              class="bg-highlight/20 rounded-4xl px-2 text-highlight transition transform duration-150 ease-in-out hover:scale-105">
              {{ skill }}
            </li>
          </ul>
        </td>
        <td role="cell" class="hidden sm:table-cell" data-label="Link">
          <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center group cursor-pointer text-highlight hover:text-primary"
            :aria-label="`Ir para ${project.title}`">
            <span>{{ props.formatLink(project.link) }}</span>
            <i class="bi bi-box-arrow-up-right ml-2 transform transition-transform duration-200 group-hover:translate-x-2 group-focus:translate-x-2"
              aria-hidden="true"></i>
          </a>
          <span v-else>N/A</span>
        </td>
      </tr>
    </tbody>
  </table>

  <div v-else class="text-center py-12" role="status" aria-live="polite">
    <i class="bi bi-search text-4xl text-tertiary mb-4" aria-hidden="true"></i>
    <p class="text-secondary">Nenhum projeto encontrado</p>
    <p class="text-tertiary text-sm mt-2">
      Tente buscar por nome, tecnologia ou empresa
    </p>
  </div>
</template>

<style scoped>
table th,
table td {
  text-align: left;
  padding: 1rem 0.5rem;
  min-height: 3rem;
  vertical-align: top;
}

th:nth-child(4) {
  width: 30%;
}

tbody tr {
  border-bottom: 1px solid var(--color-tertiary);
}
</style>
