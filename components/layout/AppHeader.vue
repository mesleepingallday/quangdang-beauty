<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="text-2xl font-bold text-primary">
            Beauty Med Spa
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.href"
            :to="item.href"
            class="text-gray-700 hover:text-primary transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
          
          <!-- Booking CTA -->
          <NuxtLink 
            to="/lien-he/dat-lich-hen" 
            class="btn-primary px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            Đặt Lịch Ngay
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          <Icon name="heroicons:bars-3" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <MobileMenu 
        v-if="isMobileMenuOpen" 
        :nav-items="navItems"
        @close="closeMobileMenu"
      />
    </nav>
  </header>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types'

const isMobileMenuOpen = ref(false)

const navItems: NavItem[] = [
  { label: 'Trang Chủ', href: '/' },
  { label: 'Dịch Vụ', href: '/dich-vu' },
  { label: 'Khuyến Mãi', href: '/khuyen-mai' },
  { label: 'Đội Ngũ Bác Sĩ', href: '/doi-ngu-bac-si' },
  { label: 'Công Nghệ', href: '/cong-nghe' },
  { label: 'Tin Tức', href: '/tin-tuc' },
  { label: 'Về Chúng Tôi', href: '/ve-chung-toi' },
  { label: 'Liên Hệ', href: '/lien-he' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.btn-primary {
  @apply inline-block font-semibold;
}

.text-primary {
  color: #0066cc;
}

.bg-primary {
  background-color: #0066cc;
}

.bg-primary-dark {
  background-color: #0052a3;
}
</style>