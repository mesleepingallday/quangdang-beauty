<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Dịch Vụ Của Chúng Tôi
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Khám phá các dịch vụ thẩm mỹ chuyên nghiệp với công nghệ hiện đại
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="service-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <!-- Service Image -->
          <div class="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <Icon :name="service.icon" class="w-16 h-16 text-primary" />
          </div>

          <!-- Service Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ service.name }}
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ service.description }}
            </p>

            <!-- Service Details -->
            <div class="flex items-center justify-between text-sm mb-4">
              <span class="text-gray-500">
                <Icon name="heroicons:clock" class="w-4 h-4 inline mr-1" />
                {{ service.duration }}
              </span>
              <span class="font-semibold text-primary">
                {{ formatPrice(service.priceFrom) }}+
              </span>
            </div>

            <!-- CTA -->
            <NuxtLink 
              :to="`/dich-vu/${service.slug}`"
              class="block w-full text-center bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition-colors"
            >
              Tìm Hiểu Thêm
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- View All Services Button -->
      <div class="text-center mt-12">
        <NuxtLink 
          to="/dich-vu"
          class="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Xem Tất Cả Dịch Vụ
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    id: '1',
    slug: 'tiem-botox',
    name: 'Tiêm Botox',
    description: 'Giảm nếp nhăn, trẻ hóa làn da hiệu quả với công nghệ Botox an toàn, được FDA chứng nhận.',
    icon: 'heroicons:sparkles',
    duration: '30-45 phút',
    priceFrom: 2000000
  },
  {
    id: '2',
    slug: 'tiem-filler',
    name: 'Tiêm Filler',
    description: 'Làm đầy khuôn mặt, tạo khối tự nhiên với Filler chất lượng cao từ Hàn Quốc, Mỹ.',
    icon: 'heroicons:face-smile',
    duration: '45-60 phút',
    priceFrom: 3000000
  },
  {
    id: '3',
    slug: 'tri-lieu-ipl',
    name: 'Trị Liệu IPL',
    description: 'Điều trị sắc tố, tàn nhang, mạch máu bằng công nghệ IPL thế hệ mới.',
    icon: 'heroicons:sun',
    duration: '30-45 phút',
    priceFrom: 1500000
  },
  {
    id: '4',
    slug: 'microneedling',
    name: 'Microneedling',
    description: 'Kích thích collagen tự nhiên, cải thiện sẹo rỗ, làm đều màu da hiệu quả.',
    icon: 'heroicons:arrow-path',
    duration: '60-90 phút',
    priceFrom: 2500000
  },
  {
    id: '5',
    slug: 'hydrafacial',
    name: 'HydraFacial',
    description: 'Làm sạch sâu, cấp ẩm, nuôi dưỡng da với công nghệ HydraFacial độc quyền.',
    icon: 'heroicons:beaker',
    duration: '45-60 phút',
    priceFrom: 1800000
  },
  {
    id: '6',
    slug: 'cham-soc-da',
    name: 'Chăm Sóc Da Chuyên Sâu',
    description: 'Liệu trình chăm sóc da toàn diện, phù hợp với từng loại da và tình trạng.',
    icon: 'heroicons:heart',
    duration: '60-90 phút',
    priceFrom: 1200000
  }
]

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}
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

.border-primary {
  border-color: #0066cc;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>