<script setup lang="ts">
import CardBase from "@/components/templates/CardBase.vue";

const props = defineProps<{
  period: string;
  title: string;
  description: string;
  skills: string[];
  link?: string;
}>();
</script>

<template>
  <CardBase :link="props.link">
    <template #leading>
      <p class="text-sm min-w-30 text-tertiary" aria-label="Período">{{ props.period }}</p>
    </template>

    <div class="space-y-3">
      <div class="space-y-1">
        <h3
          class="font-medium lg:group-hover:text-highlight lg:group-focus:text-highlight transition-colors duration-200"
          :id="`experience-${props.title.replace(/\s+/g, '-').toLowerCase()}`"
        >
          {{ props.title }}
          <i
            class="bi bi-box-arrow-up-right ml-1 group-hover:ml-3 group-focus:ml-3 transition-all duration-200"
            aria-hidden="true"
          ></i>
        </h3>
        <p
          class="text-secondary text-sm transition-opacity duration-200 group-hover:opacity-95 group-focus:opacity-95"
          :aria-describedby="`experience-${props.title.replace(/\s+/g, '-').toLowerCase()}`"
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
