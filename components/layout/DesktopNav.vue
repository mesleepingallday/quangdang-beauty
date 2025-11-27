<template>
  <nav class="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
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
        class="nav-item text-sm font-medium text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
        :aria-current="isCurrentPage(item.href) ? 'page' : undefined"
      >
        {{ item.label }}
      </NuxtLink>
    </template>
    
    <!-- Booking CTA -->
    <NuxtLink
      to="/lien-he/dat-lich-hen"
      class="group relative px-6 py-2.5 overflow-hidden rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <span class="relative z-10">Đặt Lịch Ngay</span>
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
  position: relative;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 1px;
  background: theme('colors.primary.DEFAULT');
  transition: all 0.3s ease;
  transform: translateX(-50%);
  opacity: 0;
}

.nav-item:hover::after,
.nav-item.router-link-active::after {
  width: 100%;
  opacity: 1;
}

.nav-item.router-link-active {
  @apply text-white;
}
</style>