<template>
  <nav class="hidden lg:flex items-center space-x-6 xl:space-x-8" role="navigation" aria-label="Main navigation">
    <template v-for="item in navItems" :key="item.href">
      <!-- Dropdown Menu Item -->
      <DropdownMenu
        v-if="item.children && item.children.length > 0"
        :item="item"
      />
      
      <!-- Regular Nav Item -->
      <NuxtLink
        v-else
        :to="item.href"
        class="nav-item text-sm xl:text-base text-gray-700 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 whitespace-nowrap"
        :aria-current="isCurrentPage(item.href) ? 'page' : undefined"
      >
        {{ item.label }}
      </NuxtLink>
    </template>
    
    <!-- Booking CTA -->
    <NuxtLink
      to="/lien-he/dat-lich-hen"
      class="btn-primary px-4 xl:px-6 py-2 text-sm xl:text-base rounded-lg bg-primary text-white hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 whitespace-nowrap"
    >
      Đặt Lịch Ngay
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types'

const props = defineProps<{
  navItems: NavItem[]
}>()

const route = useRoute()

const isCurrentPage = (href: string) => {
  return route.path === href
}
</script>

<style scoped>
.nav-item {
  @apply relative;
}

.nav-item::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200;
}

.nav-item:hover::after {
  @apply w-full;
}

.nav-item.router-link-active::after {
  @apply w-full;
}

.nav-item.router-link-active {
  @apply text-primary font-semibold;
}
</style>