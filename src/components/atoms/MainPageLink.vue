<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    href: { type: String, default: 'https://res.cloudinary.com/dgsywmzb2/image/upload/v1755999385/curriculo-marcos_lopes.pdf' },
    to: { type: String, default: '' },
    label: { type: String, default: 'Ver currículo completo' },
    ariaLabel: { type: String, default: 'Abrir currículo completo em nova aba' },
    newTab: { type: Boolean, default: true }
});

const isRouter = computed(() => Boolean(props.to));
</script>

<template>
    <p class="lg:px-4 max-lg:my-15 group">
        <router-link v-if="isRouter" :to="props.to" :aria-label="props.ariaLabel"
            class="font-semibold cursor-pointer hover:text-highlight hover:underline transition-all duration-200">
            {{ props.label }}
            <i class="bi bi-arrow-right ml-1 group-hover:ml-3 transition-all duration-200" aria-hidden="true"></i>
        </router-link>

        <a v-else :href="props.href" :target="props.newTab ? '_blank' : undefined" rel="noopener noreferrer"
            :aria-label="props.ariaLabel" class="font-semibold cursor-pointer hover:text-highlight hover:underline transition-all duration-200">
            {{ props.label }}
            <i class="bi bi-arrow-right ml-1 group-hover:ml-3 transition-all duration-200" aria-hidden="true"></i>
        </a>
    </p>
</template>
