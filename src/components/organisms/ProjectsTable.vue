<script setup lang="ts">
import type { Project } from '@/data/types'
import { defineProps } from 'vue'

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
                    <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer"
                        class="sm:hidden cursor-pointer text-highlight hover:text-primary">
                        {{ project.title }}
                    </a>
                    <span v-else class="sm:hidden">{{ project.title }}</span>

                    <span class="hidden sm:inline">{{ project.title }}</span>
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
                        class="cursor-pointer text-highlight hover:text-primary">
                        {{ props.formatLink(project.link) }}
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
