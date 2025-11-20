<template>
  <div class="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" @click="$emit('close')">
    <div class="bg-white w-4/5 h-full p-6 overflow-y-auto" @click.stop>
      <!-- Close Button -->
      <div class="flex justify-end mb-6">
        <button @click="$emit('close')" aria-label="Close menu">
          <Icon name="heroicons:x-mark" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Nav Items -->
      <nav class="flex flex-col space-y-4">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          class="text-lg font-medium text-gray-700 hover:text-primary py-2"
          @click="$emit('close')"
        >
          {{ item.label }}
        </NuxtLink>

        <!-- Mobile Booking Button -->
        <NuxtLink
          to="/lien-he/dat-lich-hen"
          class="btn-primary mt-4 px-6 py-3 rounded-lg bg-primary text-white text-center"
          @click="$emit('close')"
        >
          Đặt Lịch Ngay
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavItem } from '~/types'

defineProps<{
  navItems: NavItem[]
}>()

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.text-primary {
  color: #0066cc;
}

.bg-primary {
  background-color: #0066cc;
}
</style>