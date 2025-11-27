<template>
  <div 
    class="relative"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Dropdown Trigger -->
    <button
      :id="`dropdown-trigger-${item.label}`"
      type="button"
      class="nav-item flex items-center gap-1 text-sm xl:text-base text-gray-700 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded whitespace-nowrap"
      :aria-expanded="isOpen"
      :aria-haspopup="true"
      :aria-controls="`dropdown-menu-${item.label}`"
      @click="toggleDropdown"
      @keydown.escape="closeDropdown"
      @keydown.down.prevent="focusFirstItem"
    >
      <span>{{ item.label }}</span>
      <Icon
        name="heroicons:chevron-down"
        class="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Dropdown Menu -->
    <Transition
      name="dropdown"
      @after-leave="onAfterLeave"
    >
      <div
        v-if="isOpen"
        :id="`dropdown-menu-${item.label}`"
        class="absolute top-full left-0 mt-2 min-w-[240px] bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
        role="menu"
        :aria-labelledby="`dropdown-trigger-${item.label}`"
        @keydown.escape="closeDropdown"
        @keydown.tab="handleTab"
      >
        <NuxtLink
          v-for="(child, index) in item.children"
          :key="child.href"
          :to="child.href"
          :ref="el => dropdownItems[index] = el as any"
          class="dropdown-item block px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors focus:outline-none focus:bg-gray-50 focus:text-primary"
          role="menuitem"
          :tabindex="isOpen ? 0 : -1"
          @click="closeDropdown"
          @keydown.down.prevent="focusNextItem(index)"
          @keydown.up.prevent="focusPreviousItem(index)"
        >
          <div class="flex items-center gap-2">
            <Icon 
              v-if="child.icon" 
              :name="child.icon" 
              class="w-4 h-4"
            />
            <span>{{ child.label }}</span>
          </div>
          <p 
            v-if="child.description" 
            class="text-xs text-gray-500 mt-1"
          >
            {{ child.description }}
          </p>
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types'

const props = defineProps<{
  item: NavItem
}>()

const isOpen = ref(false)
const dropdownItems = ref<Array<HTMLElement | null>>([])
let hoverTimeout: NodeJS.Timeout | null = null

const handleMouseEnter = () => {
  // Debounce hover to prevent accidental triggers
  hoverTimeout = setTimeout(() => {
    isOpen.value = true
  }, 300)
}

const handleMouseLeave = () => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
    hoverTimeout = null
  }
  isOpen.value = false
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const onAfterLeave = () => {
  // Reset dropdown items refs
  dropdownItems.value = []
}

// Keyboard navigation
const focusFirstItem = () => {
  if (!isOpen.value) {
    isOpen.value = true
  }
  nextTick(() => {
    dropdownItems.value[0]?.focus()
  })
}

const focusNextItem = (currentIndex: number) => {
  const nextIndex = (currentIndex + 1) % (props.item.children?.length || 0)
  dropdownItems.value[nextIndex]?.focus()
}

const focusPreviousItem = (currentIndex: number) => {
  const prevIndex = currentIndex === 0 
    ? (props.item.children?.length || 1) - 1 
    : currentIndex - 1
  dropdownItems.value[prevIndex]?.focus()
}

const handleTab = (e: KeyboardEvent) => {
  if (!e.shiftKey && !e.defaultPrevented) {
    // Tab forward - close dropdown
    closeDropdown()
  }
}

// Close dropdown when clicking outside
onClickOutside(
  computed(() => document.querySelector(`#dropdown-trigger-${props.item.label}`)?.parentElement),
  () => {
    closeDropdown()
  }
)

// Cleanup timeout on unmount
onUnmounted(() => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
  }
})
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

/* Dropdown transitions */
.dropdown-enter-active {
  transition: all 200ms ease-out;
}

.dropdown-leave-active {
  transition: all 150ms ease-in;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* Dropdown item active state */
.dropdown-item.router-link-active {
  @apply bg-blue-50 text-primary;
}
</style>