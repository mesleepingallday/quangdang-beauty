<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dịch Vụ Thẩm Mỹ
          </h1>
          <p class="text-lg text-gray-600">
            Khám phá các dịch vụ thẩm mỹ chuyên nghiệp với công nghệ hiện đại và đội ngũ bác sĩ giàu kinh nghiệm
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="service in services"
            :key="service.id"
            :to="`/dich-vu/${service.slug}`"
            class="service-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <!-- Service Image -->
            <div class="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <Icon :name="service.icon" class="w-16 h-16 text-primary" />
            </div>

            <!-- Service Content -->
            <div class="p-6">
              <h2 class="text-xl font-bold text-gray-900 mb-2">
                {{ service.name }}
              </h2>
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
              <div class="w-full text-center bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition-colors">
                Xem Chi Tiết
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <BookingCTA />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Dịch Vụ Thẩm Mỹ - Beauty Med Spa',
  description: 'Khám phá các dịch vụ thẩm mỹ chuyên nghiệp: Botox, Filler, IPL, Microneedling, HydraFacial và nhiều hơn nữa.',
  ogTitle: 'Dịch Vụ Thẩm Mỹ - Beauty Med Spa',
  ogDescription: 'Dịch vụ thẩm mỹ chuyên nghiệp với công nghệ hiện đại',
})

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

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>