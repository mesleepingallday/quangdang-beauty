<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10"
    :class="[
      isScrolled ? 'bg-dark-bg/80 backdrop-blur-xl shadow-lg shadow-primary/5' : 'bg-transparent'
    ]"
  >
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between gap-8">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex-shrink-0 group relative"
          aria-label="Beauty Med Spa - Trang chủ"
        >
          <div class="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src="/logo.svg"
            alt="Beauty Med Spa Logo"
            class="h-12 relative z-10 transition-transform duration-300 group-hover:scale-105"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <DesktopNav :nav-items="navItems" />

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle menu"
          :aria-expanded="isMobileMenuOpen"
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
const { navItems } = useNavigation()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Holographic effect */
header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
  pointer-events: none;
  z-index: -1;
}
</style>
