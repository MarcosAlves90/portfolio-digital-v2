<script setup lang="ts">
import { computed } from "vue";
import { optimizeCloudinaryUrl } from "@/utils/cloudinary";
import CardBase from "@/components/templates/CardBase.vue";

const props = defineProps<{
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  skills: string[];
  link?: string;
}>();

const optimizedSrc = computed(() => {
  if (!props.imageSrc) return props.imageSrc;
  return optimizeCloudinaryUrl(props.imageSrc, {
    width: 800,
    quality: 60,
    dpr: 1,
  });
});
</script>

<template>
  <CardBase :link="props.link" :reverse="true">
    <template #leading>
      <div
        class="w-38 aspect-[16/9] overflow-hidden rounded flex-shrink-0 bg-muted border-2 border-tertiary"
        role="img"
        :aria-label="props.imageAlt ?? props.title"
      >
        <img
          :src="optimizedSrc"
          :alt="props.imageAlt ?? props.title"
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover"
        >
      </div>
    </template>

    <div class="space-y-3">
      <div class="space-y-1">
        <h3
          :id="`project-${props.title.replace(/\s+/g, '-').toLowerCase()}`"
          class="font-medium lg:group-hover:text-highlight lg:group-focus:text-highlight transition-colors duration-200"
        >
          {{ props.title }}
          <i
            class="bi bi-box-arrow-up-right ml-1 group-hover:ml-3 group-focus:ml-3 transition-all duration-200"
            aria-hidden="true"
          />
        </h3>
        <p
          class="text-secondary text-sm transition-opacity duration-200 group-hover:opacity-95 group-focus:opacity-95"
          :aria-describedby="`project-${props.title.replace(/\s+/g, '-').toLowerCase()}`"
        >
          {{ props.description }}
        </p>
      </div>
      <ul class="flex flex-wrap gap-2 text-sm" role="list" aria-label="Tecnologias utilizadas">
        <li
          v-for="skill in props.skills"
          :key="skill"
          role="listitem"
          class="bg-highlight/20 rounded-4xl px-2 text-highlight transition transform duration-150 ease-in-out"
        >
          {{ skill }}
        </li>
      </ul>
    </div>
  </CardBase>
</template>

<style scoped>
.bg-muted {
  background-color: rgba(0, 0, 0, 0.03);
}
</style>
