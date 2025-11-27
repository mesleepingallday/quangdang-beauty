<template>
  <div 
    class="relative group"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Dropdown Trigger -->
    <button
      :id="`dropdown-trigger-${item.label}`"
      type="button"
      class="nav-item flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
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
        class="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="isOpen"
        :id="`dropdown-menu-${item.label}`"
        class="absolute top-full left-0 mt-4 w-[320px] bg-dark-bg/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden z-50 p-2"
        role="menu"
        :aria-labelledby="`dropdown-trigger-${item.label}`"
        @keydown.escape="closeDropdown"
        @keydown.tab="handleTab"
      >
        <div class="grid gap-1">
          <NuxtLink
            v-for="(child, index) in item.children"
            :key="child.href"
            :to="child.href"
            :ref="el => dropdownItems[index] = el as any"
            class="group/item block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus:bg-white/5"
            role="menuitem"
            :tabindex="isOpen ? 0 : -1"
            @click="closeDropdown"
            @keydown.down.prevent="focusNextItem(index)"
            @keydown.up.prevent="focusPreviousItem(index)"
          >
            <div class="flex items-start gap-3">
              <div v-if="child.icon" class="mt-1 text-primary/70 group-hover/item:text-primary transition-colors">
                <Icon :name="child.icon" class="w-5 h-5" />
              </div>
              <div>
                <div class="text-sm font-medium text-white group-hover/item:text-primary transition-colors">
                  {{ child.label }}
                </div>
                <p 
                  v-if="child.description" 
                  class="text-xs text-white/50 mt-0.5 line-clamp-2"
                >
                  {{ child.description }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
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
  if (hoverTimeout) clearTimeout(hoverTimeout)
  isOpen.value = true
}

const handleMouseLeave = () => {
  hoverTimeout = setTimeout(() => {
    isOpen.value = false
  }, 200)
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

// Keyboard navigation
const focusFirstItem = () => {
  if (!isOpen.value) isOpen.value = true
  nextTick(() => dropdownItems.value[0]?.focus())
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
  if (!e.shiftKey && !e.defaultPrevented) closeDropdown()
}

onClickOutside(
  computed(() => document.querySelector(`#dropdown-trigger-${props.item.label}`)?.parentElement),
  () => closeDropdown()
)

onUnmounted(() => {
  if (hoverTimeout) clearTimeout(hoverTimeout)
})
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
.nav-item[aria-expanded="true"]::after {
  width: 100%;
  opacity: 1;
}
</style>