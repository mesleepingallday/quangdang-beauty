<template>
  <section class="py-16 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Công Nghệ Hiện Đại
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Trang bị công nghệ thẩm mỹ tiên tiến nhất, đảm bảo an toàn và hiệu quả cao
        </p>
      </div>

      <!-- Technologies Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="tech in technologies" 
          :key="tech.id"
          class="tech-card bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
        >
          <!-- Icon -->
          <div class="mb-4">
            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
              <Icon :name="tech.icon" class="w-8 h-8 text-primary" />
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-lg font-bold text-gray-900 mb-2">
            {{ tech.name }}
          </h3>
          <p class="text-sm text-gray-600 mb-3">
            {{ tech.description }}
          </p>

          <!-- Features -->
          <div class="space-y-1 mb-4">
            <div 
              v-for="(feature, index) in tech.features" 
              :key="index"
              class="flex items-center justify-center space-x-1 text-xs text-gray-500"
            >
              <Icon name="heroicons:check-circle-solid" class="w-4 h-4 text-green-500" />
              <span>{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications Section -->
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">
          Chứng Nhận & Giải Thưởng
        </h3>
        <div class="flex flex-wrap justify-center items-center gap-8">
          <div 
            v-for="cert in certifications" 
            :key="cert.id"
            class="flex flex-col items-center"
          >
            <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-2">
              <Icon name="heroicons:shield-check" class="w-10 h-10 text-primary" />
            </div>
            <span class="text-sm font-medium text-gray-700">{{ cert.name }}</span>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <NuxtLink 
          to="/cong-nghe"
          class="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Tìm Hiểu Thêm Về Công Nghệ
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const technologies = [
  {
    id: '1',
    name: 'Laser CO2 Fractional',
    description: 'Công nghệ laser thế hệ mới',
    icon: 'heroicons:bolt',
    features: ['FDA Approved', 'An toàn', 'Hiệu quả cao']
  },
  {
    id: '2',
    name: 'IPL Quantum',
    description: 'Trị liệu ánh sáng đa năng',
    icon: 'heroicons:light-bulb',
    features: ['CE Certified', 'Không đau', 'Nhanh chóng']
  },
  {
    id: '3',
    name: 'Ultrasound HIFU',
    description: 'Nâng cơ siêu âm tập trung',
    icon: 'heroicons:signal',
    features: ['Không xâm lấn', 'Kéo dài', 'Tự nhiên']
  },
  {
    id: '4',
    name: 'RF Microneedling',
    description: 'Kết hợp sóng RF & kim',
    icon: 'heroicons:cpu-chip',
    features: ['Công nghệ kép', 'Hiệu quả x2', 'An toàn']
  }
]

const certifications = [
  { id: '1', name: 'FDA Approved' },
  { id: '2', name: 'CE Mark' },
  { id: '3', name: 'ISO 9001' },
  { id: '4', name: 'Bộ Y Tế VN' }
]
</script>

<style scoped>
.text-primary {
  color: #0066cc;
}

.bg-primary {
  background-color: #0066cc;
}

.border-primary {
  border-color: #0066cc;
}
</style>