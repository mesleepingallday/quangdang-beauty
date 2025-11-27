<template>
  <!-- Backdrop -->
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isVisible"
      class="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      @click="$emit('close')"
    >
      <!-- Mobile Menu Panel -->
      <Transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-if="isVisible"
          class="absolute right-0 top-0 bg-dark-bg/95 backdrop-blur-xl w-full max-w-sm h-full shadow-2xl border-l border-white/10 overflow-y-auto"
          @click.stop
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <!-- Close Button -->
          <div class="sticky top-0 bg-dark-bg/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex justify-between items-center z-10">
            <span class="text-xl font-display font-bold text-white">Menu</span>
            <button
              @click="$emit('close')"
              class="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close menu"
            >
              <Icon name="heroicons:x-mark" class="w-6 h-6" />
            </button>
          </div>

          <!-- Mobile Nav Items -->
          <nav class="px-4 py-6 space-y-2" role="navigation" aria-label="Mobile navigation">
            <template v-for="item in navItems" :key="item.href">
              <!-- Accordion Item (with children) -->
              <MobileAccordion
                v-if="item.children && item.children.length > 0"
                :item="item"
                @navigate="$emit('close')"
              />
              
              <!-- Regular Nav Item -->
              <NuxtLink
                v-else
                :to="item.href"
                class="block py-3 px-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                :aria-current="$route.path === item.href ? 'page' : undefined"
                @click="$emit('close')"
              >
                {{ item.label }}
              </NuxtLink>
            </template>

            <!-- Mobile Booking Button -->
            <div class="pt-6 mt-6 border-t border-white/10">
              <NuxtLink
                to="/lien-he/dat-lich-hen"
                class="group relative block w-full px-6 py-3 rounded-lg bg-primary text-white text-center font-semibold overflow-hidden shadow-lg shadow-primary/25"
                @click="$emit('close')"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span class="relative z-10">Đặt Lịch Ngay</span>
              </NuxtLink>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types'

defineProps<{
  navItems: NavItem[]
}>()

const emit = defineEmits<{
  close: []
}>()

const isVisible = ref(true)

// Prevent body scroll when menu is open
onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Active link styling */
nav a.router-link-active {
  @apply bg-primary/10 text-primary font-semibold;
}
</style>