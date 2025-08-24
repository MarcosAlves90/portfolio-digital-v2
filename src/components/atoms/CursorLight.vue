<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

// runtime-initialized to be SSR-safe
let pos = { x: 0, y: 0 }
let target = { x: 0, y: 0 }
let raf: number | null = null

function setCSS(x: number, y: number) {
    document.documentElement.style.setProperty('--mouse-x', `${x}px`)
    document.documentElement.style.setProperty('--mouse-y', `${y}px`)
}

function onMove(e: PointerEvent) {
    // PointerEvent unifica mouse/touch/pen
    target.x = e.clientX
    target.y = e.clientY
}

function animate() {
    // easing responsivo (mais alto = mais responsivo)
    pos.x += (target.x - pos.x) * 0.36
    pos.y += (target.y - pos.y) * 0.36
    setCSS(pos.x, pos.y)
    raf = requestAnimationFrame(animate)
}

onMounted(() => {
    // inicializa posição central no cliente (evita acesso a window em SSR)
    pos.x = window.innerWidth / 2
    pos.y = window.innerHeight / 2
    target.x = pos.x
    target.y = pos.y

    setCSS(pos.x, pos.y)
    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(animate)
})

onUnmounted(() => {
    window.removeEventListener('pointermove', onMove)
    if (raf !== null) cancelAnimationFrame(raf)
})
</script>

<template>
    <div class="cursor-light" aria-hidden="true" />
</template>

<style scoped>
.cursor-light {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    mix-blend-mode: screen;
    /* raio ainda maior para efeito amplo */
    background: radial-gradient(80rem 80rem at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(150, 200, 255, 0.12) 0%,
            rgba(100, 160, 255, 0.06) 12%,
            rgba(80, 140, 255, 0.02) 30%,
            transparent 60%);
}

@media (prefers-reduced-motion: reduce) {
    .cursor-light {
        display: none;
    }
}

@media (max-width: 640px) {
    .cursor-light {
        background: radial-gradient(36rem 36rem at var(--mouse-x, 50%) var(--mouse-y, 50%),
                rgba(150, 200, 255, 0.08) 0%,
                rgba(100, 160, 255, 0.03) 25%,
                transparent 45%);
    }
}
</style>
