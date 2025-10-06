<script setup lang="ts">
import type { Project } from '@/data/types'

const props = defineProps<{
    projects: Project[]
    formatLink: (link?: string) => string
}>()
</script>

<template>
    <table v-if="projects.length > 0" class="w-full" role="table">
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
            <tr v-for="(project, index) in projects" :key="`${project.title}-${project.year || 'na'}-${index}`">
                <td class="text-tertiary">{{ project.year || 'N/A' }}</td>
                <td class="font-semibold">
                    <template v-if="project.link">
                        <!-- Link visível apenas em telas pequenas (coluna de link está oculta) -->
                        <a
                            :href="project.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center group cursor-pointer text-highlight hover:text-primary sm:hidden"
                            :aria-label="`Abrir ${project.title} (abre em nova aba)`"
                        >
                            <span>{{ project.title }}</span>
                            <i class="bi bi-box-arrow-up-right ml-2 group-hover:ml-4 transition-all duration-200" aria-hidden="true"></i>
                        </a>

                        <!-- Texto puro (visível em sm+), para evitar duplicidade quando há link -->
                        <span class="hidden sm:inline">{{ project.title }}</span>
                    </template>
                    <template v-else>
                        <span>{{ project.title }}</span>
                    </template>
                </td>
                <td class="text-tertiary hidden lg:table-cell">{{ project.company }}</td>
                <td class="hidden lg:table-cell">
                    <ul class="flex flex-wrap gap-2 text-sm">
                        <li v-for="skill in project.skills" :key="skill"
                            class="bg-highlight/20 rounded-4xl px-2 text-highlight transition transform duration-150 ease-in-out hover:scale-105">
                            {{ skill }}</li>
                    </ul>
                </td>
                <td class="hidden sm:table-cell">
                    <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center group cursor-pointer text-highlight hover:text-primary">
                        <span>{{ props.formatLink(project.link) }}</span>
                        <i class="bi bi-box-arrow-up-right ml-2 group-hover:ml-4 group-focus:ml-4 transition-all duration-200" aria-hidden="true"></i>
                    </a>
                    <span v-else>N/A</span>
                </td>
            </tr>
        </tbody>
    </table>

    <div v-else class="text-center py-12" role="status" aria-live="polite">
        <i class="bi bi-search text-4xl text-tertiary mb-4" aria-hidden="true"></i>
        <p class="text-secondary">Nenhum projeto encontrado</p>
        <p class="text-tertiary text-sm mt-2">Tente buscar por nome, tecnologia ou empresa</p>
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
