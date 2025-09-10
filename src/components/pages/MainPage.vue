<script setup lang="ts">
import ExperienceCard from '@/components/molecules/ExperienceCard.vue';
import ProjectCard from '@/components/molecules/ProjectCard.vue';
import MainPageLink from '@/components/atoms/MainPageLink.vue';
import { useHead } from '@vueuse/head'
import { experiences } from '@/data/experiences';
import { projectsMainPage } from '@/data/projects';

useHead({
  title: 'Marcos Lopes',
  meta: [
    {
      name: 'description',
      content: 'Marcos Lopes é um desenvolvedor full-stack, designer gráfico e escritor. Explore sua experiência, projetos e habilidades em desenvolvimento web.'
    }
  ]
})

// Smooth scroll helper — usa querySelector para ser mais flexível
const scrollTo = (id: string) => {
  const el = document.querySelector<HTMLElement>(`#${id}`);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<template>
  <main class="p-0 w-full font-poppins flex flex-col lg:flex-row">

    <!-- Lateral: informações iniciais e navegação -->
    <aside class="w-full lg:max-w-6xl lg:w-full" aria-label="Introdução do autor">
      <header class="space-y-2 py-12 lg:py-16 lg:sticky lg:top-0 flex flex-col lg:h-screen justify-between">
        <div class="space-y-3 max-lg:mb-10">
          <h1 class="text-3xl lg:text-5xl font-semibold">Marcos Lopes</h1>
          <h2 class="text-lg lg:text-xl font-medium">Desenvolvedor Full Stack</h2>
          <p class="text-secondary lg:max-w-xs w-full">Sou um desenvolvedor full-stack, designer gráfico e escritor que
            está
            sempre disposto a encarar desafios.</p>

          <nav aria-label="Navegação da página">
            <ul class="space-y-5 mt-10 lg:mt-15 font-semibold text-sm">
              <li class="text-tertiary">
                <a href="#sobre" @click.prevent="scrollTo('sobre')"
                  class="inline-flex items-center space-x-3 group transition-colors duration-200">
                  <span
                    class="inline-block h-[1px] w-10 bg-tertiary rounded transition-all duration-200 group-hover:w-15 group-hover:bg-primary"></span>
                  <span class="transition-colors duration-200 group-hover:text-primary">SOBRE</span>
                </a>
              </li>

              <li class="text-tertiary">
                <a href="#experiencia" @click.prevent="scrollTo('experiencia')"
                  class="inline-flex items-center space-x-3 group transition-colors duration-200">
                  <span
                    class="inline-block h-[1px] w-10 bg-tertiary rounded transition-all duration-200 group-hover:w-15 group-hover:bg-primary"></span>
                  <span class="transition-colors duration-200 group-hover:text-primary">EXPERIÊNCIA</span>
                </a>
              </li>

              <li class="text-tertiary">
                <a href="#projetos" @click.prevent="scrollTo('projetos')"
                  class="inline-flex items-center space-x-3 group transition-colors duration-200">
                  <span
                    class="inline-block h-[1px] w-10 bg-tertiary rounded transition-all duration-200 group-hover:w-15 group-hover:bg-primary"></span>
                  <span class="transition-colors duration-200 group-hover:text-primary">PROJETOS</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <nav aria-label="Redes sociais">
          <ul class="flex items-center space-x-3" role="list">
            <li>
              <a href="https://github.com/MarcosAlves90" target="_blank" rel="noopener noreferrer" title="GitHub"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-tertiary/10 text-secondary hover:bg-tertiary/20 hover:text-primary transition-colors">
                <span class="sr-only">GitHub</span>
                <i class="bi bi-github text-lg" aria-hidden="true"></i>
              </a>
            </li>

            <!-- Substitua os hrefs abaixo pelas suas URLs reais -->
            <li>
              <a href="https://wa.me/5511949273886" target="_blank" rel="noopener noreferrer" title="WhatsApp"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-tertiary/10 text-secondary hover:bg-tertiary/20 hover:text-primary transition-colors">
                <span class="sr-only">WhatsApp</span>
                <i class="bi bi-whatsapp text-lg" aria-hidden="true"></i>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/marcos.pilgrim" target="_blank" rel="noopener noreferrer" title="Instagram"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-tertiary/10 text-secondary hover:bg-tertiary/20 hover:text-primary transition-colors">
                <span class="sr-only">Instagram</span>
                <i class="bi bi-instagram text-lg" aria-hidden="true"></i>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/marcosalveslopesjunior" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-tertiary/10 text-secondary hover:bg-tertiary/20 hover:text-primary transition-colors">
                <span class="sr-only">LinkedIn</span>
                <i class="bi bi-linkedin text-lg" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </aside>

    <!-- Conteúdo principal: seções semânticas -->
    <div class="space-y-8 lg:space-y-12 w-full py-8 lg:py-16">
      <section id="sobre" class="lg:px-4" aria-labelledby="sobre-heading">
        <h3 id="sobre-heading" class="max-lg:uppercase lg:sr-only font-semibold pb-6">Sobre</h3>
        <p class="text-secondary">Profissional com experiência em desenvolvimento web, design gráfico e produção de
          conteúdo, atuando em projetos próprios, acadêmicos e freelances. Foco em soluções modernas, interfaces
          responsivas e integrações com serviços em nuvem. Formação técnica e superior em desenvolvimento de software,
          com domínio de tecnologias como JavaScript, Vue.js, React.js, Java, Python e metodologias ágeis.</p>
      </section>

      <section id="experiencia" class="space-y-2 group" aria-labelledby="experiencia-heading">
        <h3 id="experiencia-heading" class="max-lg:uppercase lg:sr-only font-semibold pb-6">Experiência</h3>
        <div class="max-lg:space-y-10">
          <article v-for="(experience, i) in experiences" :key="`${experience.title}-${i}`"
            class="transition-opacity duration-200 opacity-100 lg:group-hover:opacity-70 lg:hover:opacity-100">
            <ExperienceCard :period="experience.period" :title="experience.title" :description="experience.description"
              :skills="experience.skills" :link="experience.link" />
          </article>
        </div>
      </section>

      <MainPageLink />

      <section id="projetos" class="space-y-2 group" aria-labelledby="projetos-heading">
        <h3 id="projetos-heading" class="max-lg:uppercase lg:sr-only font-semibold pb-6">Projetos</h3>
        <div class="max-lg:space-y-10">
          <article v-for="(project, j) in projectsMainPage" :key="`${project.title}-${j}`"
            class="transition-opacity duration-200 opacity-100 lg:group-hover:opacity-70 lg:hover:opacity-100">
            <ProjectCard :title="project.title" :description="project.description" :link="project.link"
              :imageSrc="project.imageSrc" :imageAlt="project.imageAlt" :skills="project.skills" />
          </article>
        </div>
      </section>

      <MainPageLink to="/projetos" label="Ver todos os projetos" aria-label="Ver todos os projetos" />
    </div>
  </main>
</template>
