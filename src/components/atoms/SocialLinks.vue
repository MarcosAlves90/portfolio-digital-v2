<script lang="ts">
export interface SocialLink {
  href: string;
  icon: string;
  label: string;
  title: string;
  isExternal?: boolean;
}

export const defaultSocialLinks: SocialLink[] = [
  {
    href: "https://github.com/MarcosAlves90",
    icon: "bi-github",
    label: "GitHub",
    title: "GitHub",
    isExternal: true,
  },
  {
    href: "https://wa.me/5511949273886",
    icon: "bi-whatsapp",
    label: "WhatsApp",
    title: "WhatsApp",
    isExternal: true,
  },
  {
    href: "https://www.instagram.com/marcos.pilgrim",
    icon: "bi-instagram",
    label: "Instagram",
    title: "Instagram",
    isExternal: true,
  },
  {
    href: "https://www.linkedin.com/in/marcosalveslopesjunior",
    icon: "bi-linkedin",
    label: "LinkedIn",
    title: "LinkedIn",
    isExternal: true,
  },
  {
    href: "mailto:marcos.a.lopes7701@gmail.com",
    icon: "bi-envelope-fill",
    label: "Email",
    title: "Enviar email",
    isExternal: false,
  },
];
</script>

<script setup lang="ts">
withDefaults(
  defineProps<{
    links?: SocialLink[];
  }>(),
  {
    links: () => defaultSocialLinks,
  },
);
</script>

<template>
  <nav aria-label="Redes sociais">
    <ul class="flex items-center space-x-3" role="list">
      <li v-for="link in links" :key="link.href" class="max-sm:w-full">
        <a
          :href="link.href"
          :title="link.title"
          :target="link.isExternal ? '_blank' : undefined"
          :rel="link.isExternal ? 'noopener noreferrer' : undefined"
          class="w-full sm:w-10 h-10 flex items-center justify-center rounded sm:rounded-full bg-tertiary/10 text-secondary hover:bg-tertiary/20 hover:text-primary transition-colors"
        >
          <span class="sr-only">{{ link.label }}</span>
          <i :class="`bi ${link.icon} text-lg`" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>
