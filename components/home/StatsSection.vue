<template>
  <section 
    ref="statsRef" 
    class="stats-section py-16 bg-gray-50"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.id"
          class="stat-card text-center transform transition-all duration-1000 ease-out"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="text-4xl font-bold text-primary mb-2">
            {{ displayValues[stat.id] }}
          </div>
          <div class="text-gray-600">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Stats configuration with formatters
const stats = [
  {
    id: 'customers',
    target: 5000,
    label: 'Khách Hàng',
    formatFn: (n: number) => `${Math.round(n)}+`
  },
  {
    id: 'satisfaction',
    target: 98,
    label: 'Hài Lòng',
    formatFn: (n: number) => `${Math.round(n)}%`
  },
  {
    id: 'experience',
    target: 15,
    label: 'Năm Kinh Nghiệm',
    formatFn: (n: number) => `${Math.round(n)}+`
  },
  {
    id: 'rating',
    target: 4.9,
    label: 'Đánh Giá',
    formatFn: (n: number) => `${n.toFixed(1)}/5`
  }
]

// Refs
const statsRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

// Display values - reactive object to hold current counter values
const displayValues = reactive<Record<string, string>>({
  customers: '0',
  satisfaction: '0',
  experience: '0',
  rating: '0'
})

// Create counter instances - must be done inside setup()
const counters: Record<string, ReturnType<typeof useCountAnimation>> = {}

stats.forEach(stat => {
  const counter = useCountAnimation(stat.target, {
    duration: 2000,
    formatFn: stat.formatFn
  })
  counters[stat.id] = counter
  
  // Watch for counter updates
  watch(
    () => counter.displayValue.value,
    (newValue) => {
      displayValues[stat.id] = newValue
    }
  )
})

/**
 * Start all counter animations
 */
const startAnimations = () => {
  stats.forEach(stat => {
    const counter = counters[stat.id]
    if (counter) {
      counter.start()
    }
  })
}

/**
 * Setup Intersection Observer to trigger animation on scroll
 */
const setupObserver = () => {
  if (!statsRef.value) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
          startAnimations()
          
          // Disconnect observer after first trigger
          if (observer) {
            observer.disconnect()
          }
        }
      })
    },
    {
      threshold: 0.2, // Trigger when 20% visible
      rootMargin: '0px'
    }
  )

  observer.observe(statsRef.value)
}

// Lifecycle hooks
onMounted(() => {
  setupObserver()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.text-primary {
  color: #0066cc;
}

.stat-card {
  opacity: 0;
  transform: translateY(2rem);
}

.stats-section.is-visible .stat-card {
  opacity: 1;
  transform: translateY(0);
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  .stat-card {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  
  .stats-section.is-visible .stat-card {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>