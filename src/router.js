import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/components/pages/MainPage.vue";
import ProjectsPage from "@/components/pages/ProjectsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainPage,
    meta: {
      title: "Desenvolvedor Full Stack, Designer Gráfico e Escritor",
      description:
        "Marcos Lopes é um desenvolvedor full-stack, designer gráfico e escritor. Explore sua experiência, projetos e habilidades em desenvolvimento web.",
    },
  },
  {
    path: "/projetos",
    name: "Projects",
    component: ProjectsPage,
    meta: {
      title: "Todos os Projetos",
      description:
        "Veja todos os projetos desenvolvidos por Marcos Lopes, incluindo detalhes sobre tecnologias utilizadas e links para os projetos.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
