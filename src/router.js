import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/pages/MainPage.vue'
import ProjectsPage from '@/components/pages/ProjectsPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainPage
    },
    {
        path: '/projetos',
        name: 'Projects',
        component: ProjectsPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
