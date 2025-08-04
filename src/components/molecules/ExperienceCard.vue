<template>
  <a
    v-if="link"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="flex gap-6 p-4 hover:bg-highlight/10 rounded cursor-pointer group no-underline"
  >
    <p class="text-sm min-w-30">{{ period }}</p>
    <div class="space-y-3">
      <div class="space-y-1">
        <h2 class="font-medium group-hover:text-highlight">{{ title }}</h2>
        <p class="text-secondary text-sm">{{ description }}</p>
      </div>
      <ul class="flex flex-wrap gap-2 text-sm">
        <li v-for="skill in skills" :key="skill" class="bg-highlight/20 rounded-4xl px-2 text-highlight">{{ skill }}</li>
      </ul>
    </div>
  </a>
  <div
    v-else
    class="flex gap-6 p-4 hover:bg-highlight/10 rounded cursor-pointer group"
  >
    <p class="text-sm min-w-30">{{ period }}</p>
    <div class="space-y-3">
      <div class="space-y-1">
        <h2 class="font-medium group-hover:text-highlight">{{ title }}</h2>
        <p class="text-secondary text-sm">{{ description }}</p>
      </div>
      <ul class="flex flex-wrap gap-2 text-sm">
        <li v-for="skill in skills" :key="skill" class="bg-highlight/20 rounded-4xl px-2 text-highlight">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  period: string
  title: string
  description: string
  skills: string[]
  link?: string
}>()
</script>
