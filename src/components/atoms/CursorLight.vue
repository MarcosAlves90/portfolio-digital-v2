<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'

/**
 * CursorLight Component
 * Creates an interactive light effect that follows the cursor
 * Optimized for performance with smooth animations and responsive design
 */

// Configuration constants
const CONFIG = {
    EASING_FACTOR: 0.36,
    DESKTOP_BREAKPOINT: 1024,
    LIGHT_RADIUS_DESKTOP: '80rem',
    LIGHT_RADIUS_MOBILE: '36rem',
    ANIMATION_DURATION: 16, // ~60fps
} as const

// SSR-safe environment check
const IS_SSR = typeof window === 'undefined'

// Type definitions
interface Position {
    x: number
    y: number
}

interface CursorState {
    current: Position
    target: Position
    animationId: number | null
}

// Reactive state
const isActive = ref(false)
const isAnimating = ref(false)

// Runtime state (initialized safely)
let cursorState: CursorState = {
    current: { x: 0, y: 0 },
    target: { x: 0, y: 0 },
    animationId: null
}

// Computed properties for responsive design
const lightRadius = computed(() =>
    window.innerWidth >= 640 ? CONFIG.LIGHT_RADIUS_DESKTOP : CONFIG.LIGHT_RADIUS_MOBILE
)

/**
 * Updates CSS custom properties for cursor position
 * @param x - Horizontal position in pixels
 * @param y - Vertical position in pixels
 */
function updateCSSVariables(x: number, y: number): void {
    if (IS_SSR) return

    const root = document.documentElement.style
    root.setProperty('--mouse-x', `${x}px`)
    root.setProperty('--mouse-y', `${y}px`)
}

/**
 * Handles pointer move events with optimized performance
 * @param event - PointerEvent from mouse/touch/pen
 */
function handlePointerMove(event: PointerEvent): void {
    // Prevent unnecessary updates if animation is not active
    if (!isAnimating.value) return

    cursorState.target.x = event.clientX
    cursorState.target.y = event.clientY
}

/**
 * Smooth animation loop using requestAnimationFrame
 * Implements easing for natural cursor following
 */
function animateCursor(): void {
    if (IS_SSR || !isAnimating.value) return

    // Smooth easing interpolation
    cursorState.current.x += (cursorState.target.x - cursorState.current.x) * CONFIG.EASING_FACTOR
    cursorState.current.y += (cursorState.target.y - cursorState.current.y) * CONFIG.EASING_FACTOR

    updateCSSVariables(cursorState.current.x, cursorState.current.y)
    cursorState.animationId = requestAnimationFrame(animateCursor)
}

/**
 * Initializes cursor tracking with center position fallback
 */
function initializeCursor(): void {
    if (IS_SSR || cursorState.animationId !== null) return

    try {
        // Initialize at center to prevent jarring initial movement
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2

        cursorState.current = { x: centerX, y: centerY }
        cursorState.target = { x: centerX, y: centerY }

        updateCSSVariables(centerX, centerY)

        // Add event listener with passive flag for better performance
        window.addEventListener('pointermove', handlePointerMove, {
            passive: true,
            capture: false
        })

        isAnimating.value = true
        cursorState.animationId = requestAnimationFrame(animateCursor)
    } catch (error) {
        console.warn('CursorLight: Failed to initialize cursor tracking', error)
    }
}

/**
 * Cleans up cursor tracking and animation
 */
function cleanupCursor(): void {
    if (IS_SSR) return

    try {
        window.removeEventListener('pointermove', handlePointerMove)

        if (cursorState.animationId !== null) {
            cancelAnimationFrame(cursorState.animationId)
            cursorState.animationId = null
        }

        isAnimating.value = false
    } catch (error) {
        console.warn('CursorLight: Failed to cleanup cursor tracking', error)
    }
}

/**
 * Handles media query changes for responsive behavior
 * @param event - MediaQueryListEvent from breakpoint changes
 */
function handleMediaQueryChange(event: MediaQueryListEvent): void {
    const shouldBeActive = event.matches
    isActive.value = shouldBeActive

    if (shouldBeActive) {
        initializeCursor()
    } else {
        cleanupCursor()
    }
}

/**
 * Checks if user prefers reduced motion
 * @returns boolean indicating if animations should be reduced
 */
function prefersReducedMotion(): boolean {
    if (IS_SSR) return false

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Media query management
let mediaQuery: MediaQueryList | null = null

// Lifecycle hooks
onMounted(() => {
    if (IS_SSR) {
        isActive.value = false
        return
    }

    // Respect user's motion preferences
    if (prefersReducedMotion()) {
        isActive.value = false
        return
    }

    mediaQuery = window.matchMedia(`(min-width: ${CONFIG.DESKTOP_BREAKPOINT}px)`)

    // Add modern event listener for responsive behavior
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Initialize based on current breakpoint
    handleMediaQueryChange({ matches: mediaQuery.matches } as MediaQueryListEvent)
})

onUnmounted(() => {
    if (!mediaQuery) return

    // Cleanup media query listener using modern API
    mediaQuery.removeEventListener('change', handleMediaQueryChange)

    cleanupCursor()
})
</script>

<template>
    <!--
    CursorLight Component
    Renders an interactive light effect that follows cursor movement
    Only active on desktop screens for optimal performance
    -->
    <div v-if="isActive" class="cursor-light" :class="{ 'cursor-light--animating': isAnimating }" aria-hidden="true"
        role="presentation" />
</template>

<style scoped>
/* CursorLight Component Styles */

/* Base cursor light effect */
.cursor-light {
    /* Fixed positioning for global coverage */
    position: fixed;
    inset: 0;

    /* Prevent interaction with content */
    pointer-events: none;
    z-index: 0;

    /* Blend mode for light effect */
    mix-blend-mode: screen;

    /* Smooth transitions for state changes */
    transition: opacity 0.3s ease-in-out;

    /* Desktop gradient - larger radius for immersive effect */
    background: radial-gradient(80rem 80rem at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(150, 200, 255, 0.12) 0%,
            rgba(100, 160, 255, 0.06) 12%,
            rgba(80, 140, 255, 0.02) 30%,
            transparent 60%);
}

/* Animation state modifier */
.cursor-light--animating {
    /* Ensure full opacity when animating */
    opacity: 1;
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
    .cursor-light {
        /* Completely hide when motion is reduced */
        display: none !important;
    }
}

/* Tablet and mobile optimizations */
@media (max-width: 1024px) {
    .cursor-light {
        /* Smaller radius for mobile performance */
        background: radial-gradient(60rem 60rem at var(--mouse-x, 50%) var(--mouse-y, 50%),
                rgba(150, 200, 255, 0.08) 0%,
                rgba(100, 160, 255, 0.04) 20%,
                transparent 50%);
    }
}

/* Mobile specific optimizations */
@media (max-width: 640px) {
    .cursor-light {
        /* Minimal effect for small screens */
        background: radial-gradient(36rem 36rem at var(--mouse-x, 50%) var(--mouse-y, 50%),
                rgba(150, 200, 255, 0.08) 0%,
                rgba(100, 160, 255, 0.03) 25%,
                transparent 45%);
    }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    .cursor-light {
        /* Reduce opacity in high contrast mode */
        opacity: 0.5;
    }
}

/* Print styles - hide interactive elements */
@media print {
    .cursor-light {
        display: none !important;
    }
}
</style>
