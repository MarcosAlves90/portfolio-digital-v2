<script setup lang="ts">
import ExperienceCard from '../molecules/ExperienceCard.vue';
import ProjectCard from '../molecules/ProjectCard.vue';

const projectMediariSkills = ['Nuxt', 'Tailwindcss', 'TypeScript'];
const projectMidNightSkills = ['React', 'Styled Components', 'JavaScript'];
const projectDiarioDeMariupolSkills = ['React', 'Tailwindcss', 'TypeScript'];

</script>

<template>
  <main class="p-0 w-full font-poppins flex">
    <div class="space-y-2 max-w-6xl w-full">
      <h1 class="text-5xl font-semibold">Marcos Lopes</h1>
      <h2 class="text-xl font-medium">Desenvolvedor Full Stack</h2>
      <p class="text-secondary max-w-xs w-full">Sou um desenvolvedor full-stack, designer gráfico e escritor que está sempre disposto a encarar desafios.</p>
      <ul class="space-y-2">
        <li class="cursor-pointer">SOBRE</li>
        <li class="cursor-pointer">EXPERIÊNCIA</li>
        <li class="cursor-pointer">PROJETOS</li>
      </ul>
    </div>
    <div class="space-y-12 max-w-6xl w-full">
      <p class="text-secondary">Profissional com experiência em desenvolvimento web, design gráfico e produção de conteúdo, atuando em projetos próprios, acadêmicos e freelances. Foco em soluções modernas, interfaces responsivas e integrações com serviços em nuvem. Formação técnica e superior em desenvolvimento de software, com domínio de tecnologias como JavaScript, Vue.js, React.js, Java, Python e metodologias ágeis.</p>
      
      <div class="space-y-2 group">
        <div class="transition-opacity opacity-100 group-hover:opacity-70 hover:opacity-100">
          <ExperienceCard
            period="2024-PRESENTE"
            title="Freelancer e Projetos Pessoais"
            description="Atuação em projetos próprios, acadêmicos e freelances, desenvolvendo soluções web modernas, interfaces responsivas e integrações com serviços em nuvem."
            :skills="['React.js', 'Vue.js', 'Tailwindcss', 'Styled Components','Firebase']"
            link="https://www.instagram.com/marcos.pilgrim"
          />
        </div>

        <div class="transition-opacity duration-200 opacity-100 group-hover:opacity-70 hover:opacity-100">
          <ExperienceCard
            period="2024-2026"
            title="Tecnólogo em Software - Fatec Mauá"
            description="Curso superior focado em desenvolvimento de sistemas multiplataforma, com ênfase em programação, engenharia de software, banco de dados e metodologias ágeis."
            :skills="['JavaScript', 'HTML & CSS', 'Java', 'Springboot','Python', 'C']"
            link="https://www.fatecmaua.com.br"
          />
        </div>

        <div class="transition-opacity duration-200 opacity-100 group-hover:opacity-70 hover:opacity-100">
          <ExperienceCard
            period="2022-2023"
            title="Técnico em Informática - Etec MCM"
            description="Formação técnica voltada para desenvolvimento web, lógica de programação, banco de dados e fundamentos de design."
            :skills="['JavaScript', 'HTML & CSS', 'Java']"
            link="https://etecmcm.cps.sp.gov.br"
          />
        </div>
      </div>

      <div class="px-4">
        <a
        href="https://res.cloudinary.com/dgsywmzb2/image/upload/v1755999385/curriculo-marcos_lopes.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="font-semibold cursor-pointer hover:text-highlight"
        >
          Ver currículo completo
        </a>
      </div>

      <div class="space-y-2 group">
        <div class="transition-opacity opacity-100 group-hover:opacity-70 hover:opacity-100">
          <ProjectCard
            title="Mediari Consultoria"
            description="Landing page da Mediari Consultoria desenvolvida com Nuxt."
            link="https://mediariconsultoria.com.br"
            imageSrc="https://res.cloudinary.com/dgsywmzb2/image/upload/v1755994599/mediari_zlzf1n.png"
            imageAlt="Screenshot da landing page da Mediari Consultoria"
            :skills="projectMediariSkills"
          />
        </div>

        <div class="transition-opacity opacity-100 group-hover:opacity-70 hover:opacity-100">
          <ProjectCard
            title="MidNight"
            description="Plataforma de fichas de RPG de mesa."
            link="https://tmwcse.vercel.app"
            imageSrc="https://res.cloudinary.com/dgsywmzb2/image/upload/v1755998111/midnight_mbwhbj.png"
            imageAlt="Screenshot da plataforma de fichas de RPG de mesa."
            :skills="projectMidNightSkills"
          />
        </div>

        <div class="transition-opacity opacity-100 group-hover:opacity-70 hover:opacity-100">
          <ProjectCard
            title="Diário de Mariupol"
            description="Landing page para o livro 'Diário de Mariupol'"
            link="https://diario-de-mariupol.vercel.app/"
            imageSrc="https://res.cloudinary.com/dgsywmzb2/image/upload/v1755998702/diario-de-mariupol_jal1g7.png"
            imageAlt="Screenshot da landing page para o livro 'Diário de Mariupol'"
            :skills="projectDiarioDeMariupolSkills"
          />
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped>

</style>