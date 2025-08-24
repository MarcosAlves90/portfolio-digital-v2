<script setup lang="ts">
const props = defineProps<{
    link?: string
}>()
</script>

<template>
    <a v-if="props.link" :href="props.link" target="_blank" rel="noopener noreferrer"
        class="flex gap-6 p-4 hover:bg-highlight/10 rounded cursor-pointer group no-underline transition-all duration-200 ease-in-out transform hover:scale-[1.01]">
        <div class="w-full max-w-38 flex-shrink-0 flex items-start justify-start">
            <slot name="leading" />
        </div>
        <slot />
    </a>

    <div v-else
        class="flex gap-6 p-4 hover:bg-highlight/10 rounded cursor-pointer group transition-all duration-200 ease-in-out transform hover:scale-[1.01]">
        <div class="w-full max-w-38 flex-shrink-0 flex items-center justify-center">
            <slot name="leading" />
        </div>
        <slot />
    </div>
</template>