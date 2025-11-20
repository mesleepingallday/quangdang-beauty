<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Layout for standard pages with header and footer
console.log('Default layout script running')
console.log('Attempting to render AppHeader and AppFooter components')
</script>

<style scoped>
/* Layout-specific styles */
</style>