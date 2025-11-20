<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-pink-50 to-red-50 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Discount Badge -->
          <span class="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-lg font-bold mb-4">
            {{ promotion.discount }}
          </span>
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {{ promotion.title }}
          </h1>
          <p class="text-lg text-gray-600">
            {{ promotion.description }}
          </p>
          
          <!-- Countdown Timer -->
          <div class="mt-6 inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg">
            <Icon name="heroicons:clock" class="w-5 h-5 text-red-500 mr-2" />
            <span class="text-gray-900 font-semibold">Còn lại: <span class="text-red-600">{{ promotion.timeLeft }}</span></span>
          </div>
        </div>
      </div>
    </section>

    <!-- Promotion Details -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Promotion Image -->
            <div class="bg-gradient-to-br from-pink-100 to-purple-200 rounded-2xl aspect-square flex items-center justify-center">
              <Icon name="heroicons:gift" class="w-40 h-40 text-white" />
            </div>

            <!-- Promotion Info -->
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Chi Tiết Ưu Đãi</h2>
              
              <div class="space-y-6">
                <!-- Discount Info -->
                <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <div class="flex items-center mb-2">
                    <Icon name="heroicons:tag" class="w-5 h-5 text-red-600 mr-2" />
                    <h3 class="font-bold text-gray-900">Mức Giảm Giá</h3>
                  </div>
                  <p class="text-2xl font-bold text-red-600">{{ promotion.discount }}</p>
                </div>

                <!-- Services -->
                <div>
                  <div class="flex items-center mb-3">
                    <Icon name="heroicons:sparkles" class="w-5 h-5 text-primary mr-2" />
                    <h3 class="font-bold text-gray-900">Dịch Vụ Áp Dụng</h3>
                  </div>
                  <ul class="space-y-2">
                    <li v-for="service in promotion.services" :key="service" class="flex items-center text-gray-600">
                      <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 mr-2" />
                      <span>{{ service }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Terms -->
                <div>
                  <div class="flex items-center mb-3">
                    <Icon name="heroicons:information-circle" class="w-5 h-5 text-primary mr-2" />
                    <h3 class="font-bold text-gray-900">Điều Kiện & Điều Khoản</h3>
                  </div>
                  <ul class="space-y-2">
                    <li v-for="term in promotion.terms" :key="term" class="flex items-start text-gray-600 text-sm">
                      <span class="text-primary mr-2">•</span>
                      <span>{{ term }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Validity Period -->
                <div class="bg-blue-50 p-4 rounded-lg">
                  <div class="flex items-center mb-2">
                    <Icon name="heroicons:calendar" class="w-5 h-5 text-primary mr-2" />
                    <h3 class="font-bold text-gray-900">Thời Gian Áp Dụng</h3>
                  </div>
                  <p class="text-gray-600">{{ promotion.validPeriod }}</p>
                </div>

                <!-- CTA Button -->
                <NuxtLink 
                  to="/lien-he/dat-lich-hen"
                  class="block w-full text-center bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Đặt Lịch Ngay - Nhận Ưu Đãi
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Use -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Cách Nhận Ưu Đãi
          </h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white rounded-xl p-6 text-center shadow-md">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 class="font-bold text-gray-900 mb-2">Đặt Lịch Hẹn</h3>
              <p class="text-gray-600 text-sm">
                Liên hệ qua hotline hoặc đặt lịch trực tuyến
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 text-center shadow-md">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 class="font-bold text-gray-900 mb-2">Tư Vấn Miễn Phí</h3>
              <p class="text-gray-600 text-sm">
                Bác sĩ tư vấn và xác nhận ưu đãi
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 text-center shadow-md">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 class="font-bold text-gray-900 mb-2">Nhận Ưu Đãi</h3>
              <p class="text-gray-600 text-sm">
                Thực hiện dịch vụ và nhận giảm giá
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Promotions -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Khuyến Mãi Khác
          </h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <NuxtLink
              v-for="related in relatedPromotions"
              :key="related.id"
              :to="`/khuyen-mai/${related.slug}`"
              class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div class="aspect-video bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center relative">
                <Icon name="heroicons:gift" class="w-16 h-16 text-white" />
                <div class="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {{ related.discount }}
                </div>
              </div>
              <div class="p-4">
                <h3 class="font-bold text-gray-900 mb-2">{{ related.title }}</h3>
                <p class="text-gray-600 text-sm line-clamp-2">{{ related.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <BookingCTA />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// In a real app, this would fetch from an API or CMS
const promotion = {
  slug: slug,
  title: 'Combo Botox + Filler Đặc Biệt',
  description: 'Tiết kiệm 30% khi đặt combo Botox và Filler. Áp dụng cho khách hàng mới và khách hàng cũ.',
  discount: '-30%',
  timeLeft: '3 ngày 5 giờ',
  services: [
    'Tiêm Botox vùng trán, đuôi mắt',
    'Tiêm Filler má, cằm hoặc mũi',
    'Tư vấn miễn phí trước và sau điều trị'
  ],
  terms: [
    'Áp dụng cho khách hàng đặt lịch trong thời gian khuyến mãi',
    'Không áp dụng đồng thời với các chương trình khác',
    'Sản phẩm sử dụng chính hãng với đầy đủ tem chống giả',
    'Bảo hành kết quả theo quy định',
    'Có thể hủy/đổi lịch trước 24h không mất phí'
  ],
  validPeriod: 'Từ 01/01/2025 đến 31/01/2025',
  image: ''
}

const relatedPromotions = [
  {
    id: '2',
    slug: 'hydrafacial-uu-dai',
    title: 'HydraFacial Đặc Biệt',
    description: 'Giảm 25% cho dịch vụ HydraFacial + Tặng mặt nạ cao cấp',
    discount: '-25%'
  },
  {
    id: '3',
    slug: 'tri-lieu-ipl-giam-gia',
    title: 'Trị Liệu IPL Siêu Ưu Đãi',
    description: 'Giảm 35% cho 3 buổi trị liệu IPL',
    discount: '-35%'
  },
  {
    id: '4',
    slug: 'microneedling-uu-dai',
    title: 'Microneedling Giảm Giá',
    description: 'Gói 5 buổi Microneedling giảm 30%',
    discount: '-30%'
  }
]

useSeoMeta({
  title: `${promotion.title} - Beauty Med Spa`,
  description: promotion.description,
  ogTitle: `${promotion.title} - Beauty Med Spa`,
  ogDescription: promotion.description,
})
</script>

<style scoped>
.text-primary {
  color: #0066cc;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>