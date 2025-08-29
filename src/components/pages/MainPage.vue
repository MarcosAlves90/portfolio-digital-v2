<script setup lang="ts">
import ExperienceCard from '@/components/molecules/ExperienceCard.vue';
import ProjectCard from '@/components/molecules/ProjectCard.vue';
import { useHead } from '@vueuse/head'
import { experiences } from '@/data/experiences';
import { projectsMainPage } from '@/data/projects';

useHead({
  title: 'Marcos Lopes - Desenvolvedor Full Stack',
  meta: [
    {
      name: 'description',
      content: 'Marcos Lopes é um desenvolvedor full-stack, designer gráfico e escritor. Explore sua experiência, projetos e habilidades em desenvolvimento web.'
    }
  ]
})
</script>

<template>
  <main class="p-0 w-full font-poppins flex">

    <div class="max-w-6xl w-full">
      <div class="space-y-2 sticky py-12 md:py-16 top-0 ">
        <h1 class="text-5xl font-semibold">Marcos Lopes</h1>
        <h2 class="text-xl font-medium">Desenvolvedor Full Stack</h2>
        <p class="text-secondary max-w-xs w-full">Sou um desenvolvedor full-stack, designer gráfico e escritor que está sempre disposto a encarar desafios.</p>
        <ul class="space-y-5 mt-15 font-semibold text-sm">
          <li class="text-tertiary">
            <span class="inline-flex items-center space-x-3 cursor-pointer group transition-colors duration-200">
              <span class="inline-block h-[1px] w-10 bg-tertiary rounded transition-all duration-200 group-hover:w-15 group-hover:bg-primary"></span>
              <span class="transition-colors duration-200 group-hover:text-primary">SOBRE</span>
            </span>
          </li>

          <li class="text-tertiary">
            <span class="inline-flex items-center space-x-3 cursor-pointer group transition-colors duration-200">
              <span class="inline-block h-[1px] w-10 bg-tertiary rounded transition-all duration-200 group-hover:w-15 group-hover:bg-primary"></span>
              <span class="transition-colors duration-200 group-hover:text-primary">EXPERIÊNCIA</span>
            </span>
          </li>

          <li class="text-tertiary">
            <span class="inline-flex items-center space-x-3 cursor-pointer group transition-colors duration-200">
              <span class="inline-block h-[1px] w-10 bg-tertiary rounded transition-all duration-200 group-hover:w-15 group-hover:bg-primary"></span>
              <span class="transition-colors duration-200 group-hover:text-primary">PROJETOS</span>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="space-y-12 max-w-6xl w-full py-12 md:py-16">
      <p class="text-secondary">Profissional com experiência em desenvolvimento web, design gráfico e produção de conteúdo, atuando em projetos próprios, acadêmicos e freelances. Foco em soluções modernas, interfaces responsivas e integrações com serviços em nuvem. Formação técnica e superior em desenvolvimento de software, com domínio de tecnologias como JavaScript, Vue.js, React.js, Java, Python e metodologias ágeis.</p>
    
      <div class="space-y-2 group">
        <div
          v-for="(experience, i) in experiences"
          :key="`${experience.title}-${i}`"
          class="transition-opacity duration-200 opacity-100 group-hover:opacity-70 hover:opacity-100"
        >
          <ExperienceCard
            :period="experience.period"
            :title="experience.title"
            :description="experience.description"
            :skills="experience.skills"
            :link="experience.link"
          />
        </div>
      </div>

      <div class="px-4">
        <a
          href="https://res.cloudinary.com/dgsywmzb2/image/upload/v1755999385/curriculo-marcos_lopes.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir currículo completo em nova aba"
          class="font-semibold cursor-pointer hover:text-highlight"
        >
          Ver currículo completo
        </a>
      </div>

      <div class="space-y-2 group">
        <div
          v-for="(project, j) in projectsMainPage"
          :key="`${project.title}-${j}`"
          class="transition-opacity duration-200 opacity-100 group-hover:opacity-70 hover:opacity-100"
        >
          <ProjectCard
            :title="project.title"
            :description="project.description"
            :link="project.link"
            :imageSrc="project.imageSrc"
            :imageAlt="project.imageAlt"
            :skills="project.skills"
          />
        </div>
      </div>

      <div class="px-4">
        <router-link
          to="/projetos"
          aria-label="Ver todos os projetos"
          class="font-semibold cursor-pointer hover:text-highlight"
        >
          Ver todos os projetos
        </router-link>
      </div>
    </div>
  </main>
</template>
