<template>
  <div class="mobile-accordion">
    <!-- Accordion Trigger -->
    <button
      :id="`accordion-trigger-${item.label}`"
      type="button"
      class="w-full flex items-center justify-between py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
      :aria-expanded="isOpen"
      :aria-controls="`accordion-content-${item.label}`"
      @click="toggleAccordion"
    >
      <span>{{ item.label }}</span>
      <Icon 
        name="heroicons:chevron-down" 
        class="w-5 h-5 transition-transform duration-250"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Accordion Content -->
    <Transition
      name="accordion"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="isOpen"
        :id="`accordion-content-${item.label}`"
        class="accordion-content overflow-hidden"
        role="region"
        :aria-labelledby="`accordion-trigger-${item.label}`"
      >
        <div class="pl-6 pr-4 py-2 space-y-1">
          <NuxtLink
            v-for="child in item.children"
            :key="child.href"
            :to="child.href"
            class="block py-2.5 px-4 text-base text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            @click="$emit('navigate')"
          >
            <div class="flex items-center gap-2">
              <Icon 
                v-if="child.icon" 
                :name="child.icon" 
                class="w-4 h-4"
              />
              <span>{{ child.label }}</span>
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

const emit = defineEmits<{
  navigate: []
}>()

const isOpen = ref(false)

const toggleAccordion = () => {
  isOpen.value = !isOpen.value
}

// Animation hooks for height transition
const onEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = '0'
}

const onAfterEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = `${element.scrollHeight}px`
  setTimeout(() => {
    element.style.height = 'auto'
  }, 250)
}

const onLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = `${element.scrollHeight}px`
  // Force reflow
  element.offsetHeight
  element.style.height = '0'
}

const onAfterLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = ''
}
</script>

<style scoped>
.accordion-content {
  transition: height 250ms ease-in-out;
}

/* Active link styling */
.accordion-content a.router-link-active {
  @apply bg-blue-50 text-primary font-semibold;
}
</style>