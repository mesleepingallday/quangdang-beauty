<template>
  <section class="py-16 bg-gradient-to-b from-blue-50 to-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          🔥 ưu đãi HOT
        </span>
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Khuyến Mãi Tuần Này
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Đừng bỏ lỡ các ưu đãi hấp dẫn trong tuần này
        </p>
      </div>

      <!-- Promotions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="promotion in promotions" 
          :key="promotion.id"
          class="promotion-card bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
        >
          <!-- Discount Badge -->
          <div class="absolute top-4 right-4 z-10">
            <span class="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              {{ promotion.discount }}
            </span>
          </div>

          <!-- Promotion Image -->
          <div class="aspect-video bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center relative">
            <Icon name="heroicons:gift" class="w-20 h-20 text-white opacity-80" />
          </div>

          <!-- Promotion Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ promotion.title }}
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-2">
              {{ promotion.description }}
            </p>

            <!-- Countdown Timer -->
            <div class="bg-gray-50 rounded-lg p-3 mb-4">
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">
                  <Icon name="heroicons:clock" class="w-4 h-4 inline mr-1" />
                  Còn lại:
                </span>
                <span class="font-semibold text-red-600">
                  {{ promotion.timeLeft }}
                </span>
              </div>
            </div>

            <!-- CTA -->
            <NuxtLink 
              :to="`/khuyen-mai/${promotion.slug}`"
              class="block w-full text-center bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 rounded-lg font-medium transition-all"
            >
              Nhận Ưu Đãi Ngay
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- View All Promotions Button -->
      <div class="text-center mt-12">
        <NuxtLink 
          to="/khuyen-mai"
          class="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Xem Tất Cả Khuyến Mãi
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const promotions = [
  {
    id: '1',
    slug: 'goi-combo-botox-filler',
    title: 'Combo Botox + Filler',
    description: 'Tiết kiệm 30% khi đặt combo Botox và Filler. Áp dụng cho khách hàng mới.',
    discount: '-30%',
    timeLeft: '3 ngày 5 giờ'
  },
  {
    id: '2',
    slug: 'hydrafacial-uu-dai',
    title: 'HydraFacial Đặc Biệt',
    description: 'Giảm 25% cho dịch vụ HydraFacial + Tặng mặt nạ cao cấp trị giá 500k.',
    discount: '-25%',
    timeLeft: '5 ngày 12 giờ'
  },
  {
    id: '3',
    slug: 'cham-soc-da-mua-he',
    title: 'Chăm Sóc Da Mùa Hè',
    description: 'Gói chăm sóc da toàn diện cho mùa hè với giá ưu đãi chỉ 1.5 triệu.',
    discount: '-40%',
    timeLeft: '7 ngày 8 giờ'
  }
]
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

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>