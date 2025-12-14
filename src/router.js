import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/components/pages/MainPage.vue";
import ProjectsPage from "@/components/pages/ProjectsPage.vue";
import ServicesPage from "@/components/pages/ServicesPage.vue";

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
  {
    path: "/servicos",
    name: "Services",
    component: ServicesPage,
    meta: {
      title: "Serviços e Preços",
      description:
        "Confira os serviços de desenvolvimento web, aplicativos e software oferecidos por Marcos Lopes.",
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
