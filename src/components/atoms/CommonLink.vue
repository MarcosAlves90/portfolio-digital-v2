<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    href: { type: String, default: '' },
    to: { type: String, default: '' },
    label: { type: String, default: '' },
    ariaLabel: { type: String, default: '' },
    newTab: { type: Boolean, default: true },
    // Customization props (kept minimal and explicit)
    iconPosition: { type: String as () => 'right' | 'left', default: 'right' },
    iconClass: { type: String, default: '' },
    wrapperClass: { type: String, default: 'lg:px-4 max-lg:my-15' },
    linkClass: { type: String, default: 'font-semibold cursor-pointer group hover:text-highlight hover:underline transition-all duration-200' },
    textClass: { type: String, default: '' }
});

const isRouter = computed(() => Boolean(props.to));

const computedIconClass = computed(() => {
    // default icon when not provided
    const base = props.iconClass || 'bi bi-arrow-right'
    const margin = props.iconPosition === 'left' ? 'mr-2 group-hover:mr-3' : 'ml-2 group-hover:ml-3'
    return `${base} ${margin} transition-all duration-200`.trim()
})
</script>

<template>
    <p :class="props.wrapperClass">
        <router-link v-if="isRouter" :to="props.to" :aria-label="props.ariaLabel" :class="props.linkClass">
            <i v-if="props.iconPosition === 'left'" :class="computedIconClass" aria-hidden="true"></i>
            <span :class="props.textClass">{{ props.label }}</span>
            <i v-if="props.iconPosition === 'right'" :class="computedIconClass" aria-hidden="true"></i>
        </router-link>

        <a v-else :href="props.href" :target="props.newTab ? '_blank' : undefined" rel="noopener noreferrer"
            :aria-label="props.ariaLabel" :class="props.linkClass">
            <i v-if="props.iconPosition === 'left'" :class="computedIconClass" aria-hidden="true"></i>
            <span :class="props.textClass">{{ props.label }}</span>
            <i v-if="props.iconPosition === 'right'" :class="computedIconClass" aria-hidden="true"></i>
        </a>
    </p>
</template>
