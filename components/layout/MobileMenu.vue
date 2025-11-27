<template>
  <!-- Backdrop -->
  <Transition name="backdrop">
    <div
      v-if="isVisible"
      class="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm"
      @click="$emit('close')"
    >
      <!-- Mobile Menu Panel -->
      <Transition name="slide">
        <div
          v-if="isVisible"
          class="absolute right-0 top-0 bg-white w-4/5 max-w-sm h-full shadow-2xl overflow-y-auto"
          @click.stop
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <!-- Close Button -->
          <div class="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center z-10">
            <span class="text-xl font-bold text-primary">Menu</span>
            <button
              @click="$emit('close')"
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
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
                class="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                :aria-current="$route.path === item.href ? 'page' : undefined"
                @click="$emit('close')"
              >
                {{ item.label }}
              </NuxtLink>
            </template>

            <!-- Mobile Booking Button -->
            <div class="pt-6 mt-6 border-t border-gray-200">
              <NuxtLink
                to="/lien-he/dat-lich-hen"
                class="btn-primary block w-full px-6 py-3 rounded-lg bg-primary text-white text-center font-semibold hover:bg-primary-dark transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                @click="$emit('close')"
              >
                Đặt Lịch Ngay
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
.text-primary {
  color: #0066cc;
}

.bg-primary {
  background-color: #0066cc;
}

.bg-primary-dark {
  background-color: #0052a3;
}

/* Backdrop transitions */
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 300ms ease-in-out;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

/* Slide transitions */
.slide-enter-active,
.slide-leave-active {
  transition: transform 300ms ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* Active link styling */
nav a.router-link-active {
  @apply bg-blue-50 text-primary font-semibold;
}
</style>