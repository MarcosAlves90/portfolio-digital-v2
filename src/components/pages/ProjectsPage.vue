<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Projetos - Marcos Lopes',
  meta: [
    {
      name: 'description',
      content: 'Veja todos os projetos desenvolvidos por Marcos Lopes, incluindo detalhes sobre tecnologias utilizadas e links para os projetos.'
    }
  ]
})
</script>

<template>
  <main class="p-0 w-full font-poppins">
    <div class="max-w-6xl w-full">
      <div class="space-y-2 sticky py-12 md:py-16 top-0">
          <div>
            <router-link
            to="/"
            class="font-semibold cursor-pointer text-highlight hover:text-primary"
            >
              ← Marcos Lopes
            </router-link>
          </div>
        <h1 class="text-5xl font-semibold">Todos os Projetos</h1>
      </div>
    </div>

    <div class="space-y-12 max-w-6xl w-full py-6 md:py-8">
      <table class="w-full">
        <thead>
          <tr>
            <th>Ano</th>
            <th>Projeto</th>
            <th>Data</th>
            <th>Desenvolvido com</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped>
table th, table td {
  text-align: left;
}
</style>
