<script setup lang="ts">
const props = defineProps<{
  link?: string;
  reverse?: boolean;
}>();
</script>

<template>
  <a
    v-if="props.link"
    :href="props.link"
    target="_blank"
    rel="noopener noreferrer"
    class="group gap-2 flex transform cursor-pointer rounded no-underline transition-all duration-200 ease-in-out lg:hover:scale-[1.01] lg:hover:bg-highlight/10 max-lg:flex-col lg:gap-6 lg:p-4"
    :class="{ 'max-lg:flex-col-reverse': props.reverse }"
    role="article"
  >
    <div class="w-full max-w-38 flex-shrink-0 flex items-start justify-start" role="img-container">
      <slot name="leading" />
    </div>
    <slot />
  </a>

  <div
    v-else
    class="group gap-2 flex transform cursor-pointer rounded transition-all duration-200 ease-in-out lg:hover:scale-[1.01] lg:hover:bg-highlight/10 max-lg:flex-col lg:gap-6 lg:p-4"
    role="article"
  >
    <div class="w-full max-w-38 flex-shrink-0 flex items-center justify-center" role="img-container">
      <slot name="leading" />
    </div>
    <slot />
  </div>
</template>
