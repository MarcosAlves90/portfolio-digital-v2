<script setup lang="ts">
import { computed } from 'vue';
import { optimizeCloudinaryUrl } from '../../utils/cloudinary';
import CardBase from '../templates/CardBase.vue';

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
        return optimizeCloudinaryUrl(props.imageSrc, { width: 800, quality: 60, dpr: 1 });
});
</script>

<template>
    <CardBase :link="props.link">
        <template #leading>
            <div class="w-38 aspect-[16/9] overflow-hidden rounded flex-shrink-0 bg-muted border-2 border-tertiary">
                <img :src="optimizedSrc" :alt="props.imageAlt ?? props.title" class="w-full h-full object-cover" />
            </div>
        </template>

        <div class="space-y-3">
            <div class="space-y-1">
                <h2 class="font-medium group-hover:text-highlight transition-colors duration-200">{{ props.title }}</h2>
                <p class="text-secondary text-sm transition-opacity duration-200 group-hover:opacity-95">{{ props.description }}</p>
            </div>
            <ul class="flex flex-wrap gap-2 text-sm">
                <li v-for="skill in props.skills" :key="skill" class="bg-highlight/20 rounded-4xl px-2 text-highlight transition transform duration-150 ease-in-out hover:scale-105">{{ skill }}</li>
            </ul>
        </div>
    </CardBase>
</template>

<style scoped>
.bg-muted {
        background-color: rgba(0, 0, 0, 0.03);
}
</style>
