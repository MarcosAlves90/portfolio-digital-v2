<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from 'vue-i18n';
import projectsData from "@/components/data/MainPageProjects";

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
        class="project-cards__card box-border w-full cursor-pointer overflow-hidden rounded-lg p-0.5 transition duration-100 hover:bg-second-background-secondary active:scale-90 max-lg:bg-second-background-secondary"
        @click="openPage(project.site)"
      >
        <img :src="project.images[0].src" :alt="project.name" class="w-full h-auto aspect-video object-cover rounded-sm" />
        <div class="project-cards__content text-[#f2e3d5] p-1 w-full box-border flex justify-center items-center flex-col text-center">
          <h2 class="text-lg mb-0.5 font-semibold max-xl:text-base">{{ project.name }}</h2>
          <p class="text-sm m-0 max-xl:text-xs">{{ project.smallDescription }}</p>
        </div>
      </div>
    </div>
  </div>
</template>