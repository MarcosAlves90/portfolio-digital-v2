<script setup lang="ts">
import { ref, computed } from "vue";
import { BadgeDollarSign, UsersRound, BookOpenText } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import projectsData from "@/data/MainPageProjects";

const { t } = useI18n();

const projects = ref(projectsData);

const translatedProjects = computed(() => {
  return projects.value.map(project => ({
    ...project,
    smallDescription: t(project.smallDescription)
  }));
});

const openPage = (url: string): void => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
</script>

<template>
  <div class="project-cards w-full max-w-80">
    <div class="project-cards__list grid grid-cols-4 gap-0.5 max-lg:grid-cols-3 max-md:grid-cols-2 max-520:!grid-cols-1" data-aos="fade-up">
      <div
        v-for="(project, index) in translatedProjects"
        :key="index"
        class="project-cards__card box-border relative w-full cursor-pointer overflow-hidden rounded-lg p-0.5 transition duration-100 hover:bg-second-background-secondary active:scale-90 max-lg:bg-second-background-secondary"
        @click="openPage(project.site)"
      >
        <img :src="project.images[0].src" :alt="project.name" class="w-full h-auto aspect-video object-cover rounded-sm" />
        <div class="project-cards__content text-[#f2e3d5] p-1 w-full box-border flex justify-center items-center flex-col text-center">
          <h2 class="text-lg mb-0.5 font-semibold max-xl:text-base">{{ project.name }}</h2>
          <p class="text-sm m-0 max-xl:text-xs">{{ project.smallDescription }}</p>
        </div>
        <div class="project-cards__tag group absolute top-1 rounded-sm left-1 h-2.5 w-2.5 bg-highlight flex items-center justify-center" v-if="project.type">
          <BadgeDollarSign v-if="project.type === 'commercial'" class="w-1.5 h-1.5 text-[#f2e3d5]" />
          <UsersRound v-else-if="project.type === 'social'" class="w-1.5 h-1.5 text-[#f2e3d5]" />
          <BookOpenText v-else-if="project.type === 'educational'" class="w-1.5 h-1.5 text-[#f2e3d5]" />
          <span
            class="absolute left-full top-1/2 -translate-y-1/2 ml-1 px-1.5 py-0.5 rounded bg-highlight font-bold text-xs text-[#f2e3d5] opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10 transition-opacity"
          >
            {{
              t(`message.projectTypes.${project.type}`)
            }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>