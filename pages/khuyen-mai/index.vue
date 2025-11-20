<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-pink-50 to-red-50 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <span class="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔥 ưu đãi HOT
          </span>
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Khuyến Mãi Đặc Biệt
          </h1>
          <p class="text-lg text-gray-600">
            Đừng bỏ lỡ các chương trình khuyến mãi hấp dẫn dành riêng cho bạn
          </p>
        </div>
      </div>
    </section>

    <!-- Promotions Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="promotion in promotions"
            :key="promotion.id"
            :to="`/khuyen-mai/${promotion.slug}`"
            class="promotion-card bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
          >
            <!-- Discount Badge -->
            <div class="absolute top-4 right-4 z-10">
              <span class="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {{ promotion.discount }}
              </span>
            </div>

            <!-- Status Badge -->
            <div v-if="promotion.status" class="absolute top-4 left-4 z-10">
              <span 
                :class="promotion.status === 'new' ? 'bg-green-500' : 'bg-blue-500'"
                class="text-white px-3 py-1 rounded-full text-xs font-semibold"
              >
                {{ promotion.status === 'new' ? '🆕 Mới' : '⭐ Hot' }}
              </span>
            </div>

            <!-- Promotion Image -->
            <div class="aspect-video bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center relative">
              <Icon name="heroicons:gift" class="w-20 h-20 text-white opacity-80" />
            </div>

            <!-- Promotion Content -->
            <div class="p-6">
              <h2 class="text-xl font-bold text-gray-900 mb-2">
                {{ promotion.title }}
              </h2>
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ promotion.description }}
              </p>

              <!-- Promotion Details -->
              <div class="space-y-2 mb-4">
                <div class="flex items-center text-sm text-gray-600">
                  <Icon name="heroicons:clock" class="w-4 h-4 mr-2" />
                  <span>Còn lại: <strong class="text-red-600">{{ promotion.timeLeft }}</strong></span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <Icon name="heroicons:tag" class="w-4 h-4 mr-2" />
                  <span>{{ promotion.serviceCount }} dịch vụ áp dụng</span>
                </div>
              </div>

              <!-- CTA -->
              <div class="w-full text-center bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 rounded-lg font-medium transition-all">
                Xem Chi Tiết
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Special Offers -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          Chương Trình Đặc Biệt
        </h2>
        
        <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <!-- New Customer Offer -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="heroicons:user-plus" class="w-8 h-8 text-primary" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Khách Hàng Mới</h3>
            <p class="text-gray-600 mb-4">
              Giảm ngay 20% cho tất cả dịch vụ khi đăng ký thành viên mới
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-sm text-gray-600">
                <Icon name="heroicons:check-circle-solid" class="w-5 h-5 text-green-500 mr-2" />
                <span>Áp dụng cho tất cả dịch vụ</span>
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <Icon name="heroicons:check-circle-solid" class="w-5 h-5 text-green-500 mr-2" />
                <span>Tư vấn miễn phí</span>
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <Icon name="heroicons:check-circle-solid" class="w-5 h-5 text-green-500 mr-2" />
                <span>Tích điểm thưởng</span>
              </li>
            </ul>
            <NuxtLink 
              to="/lien-he/dat-lich-hen"
              class="block w-full text-center bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Đăng Ký Ngay
            </NuxtLink>
          </div>

          <!-- Loyalty Program -->
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="heroicons:star" class="w-8 h-8 text-purple-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Khách Hàng Thân Thiết</h3>
            <p class="text-gray-600 mb-4">
              Tích điểm và nhận ưu đãi đặc biệt cho khách hàng thường xuyên
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-sm text-gray-600">
                <Icon name="heroicons:check-circle-solid" class="w-5 h-5 text-green-500 mr-2" />
                <span>Tích điểm mọi dịch vụ</span>
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <Icon name="heroicons:check-circle-solid" class="w-5 h-5 text-green-500 mr-2" />
                <span>Ưu đãi sinh nhật</span>
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <Icon name="heroicons:check-circle-solid" class="w-5 h-5 text-green-500 mr-2" />
                <span>Quà tặng đặc biệt</span>
              </li>
            </ul>
            <NuxtLink 
              to="/lien-he"
              class="block w-full text-center border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Tìm Hiểu Thêm
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
useSeoMeta({
  title: 'Khuyến Mãi Đặc Biệt - Beauty Med Spa',
  description: 'Khám phá các chương trình khuyến mãi hấp dẫn tại Beauty Med Spa. Giảm giá lên đến 40% cho các dịch vụ thẩm mỹ chuyên nghiệp.',
  ogTitle: 'Khuyến Mãi Đặc Biệt - Beauty Med Spa',
  ogDescription: 'Ưu đãi hấp dẫn cho dịch vụ thẩm mỹ',
})

const promotions = [
  {
    id: '1',
    slug: 'goi-combo-botox-filler',
    title: 'Combo Botox + Filler Đặc Biệt',
    description: 'Tiết kiệm 30% khi đặt combo Botox và Filler. Áp dụng cho khách hàng mới và khách hàng cũ.',
    discount: '-30%',
    timeLeft: '3 ngày 5 giờ',
    serviceCount: 2,
    status: 'hot'
  },
  {
    id: '2',
    slug: 'hydrafacial-uu-dai',
    title: 'HydraFacial Đặc Biệt',
    description: 'Giảm 25% cho dịch vụ HydraFacial + Tặng mặt nạ cao cấp trị giá 500k.',
    discount: '-25%',
    timeLeft: '5 ngày 12 giờ',
    serviceCount: 1,
    status: 'new'
  },
  {
    id: '3',
    slug: 'cham-soc-da-mua-he',
    title: 'Gói Chăm Sóc Da Mùa Hè',
    description: 'Gói chăm sóc da toàn diện cho mùa hè với giá ưu đãi chỉ 1.5 triệu.',
    discount: '-40%',
    timeLeft: '7 ngày 8 giờ',
    serviceCount: 3,
    status: 'hot'
  },
  {
    id: '4',
    slug: 'tri-lieu-ipl-giam-gia',
    title: 'Trị Liệu IPL Siêu Ưu Đãi',
    description: 'Giảm 35% cho 3 buổi trị liệu IPL, loại bỏ sắc tố và tàn nhang hiệu quả.',
    discount: '-35%',
    timeLeft: '10 ngày',
    serviceCount: 1,
    status: 'new'
  },
  {
    id: '5',
    slug: 'microneedling-uu-dai',
    title: 'Microneedling Giảm Giá',
    description: 'Gói 5 buổi Microneedling giảm 30%, cải thiện sẹo rỗ và làm đều màu da.',
    discount: '-30%',
    timeLeft: '6 ngày',
    serviceCount: 1,
    status: 'hot'
  },
  {
    id: '6',
    slug: 'goi-tre-hoa-toan-dien',
    title: 'Gói Trẻ Hóa Toàn Diện',
    description: 'Kết hợp nhiều liệu trình trẻ hóa với giá ưu đãi đặc biệt chỉ 5 triệu.',
    discount: '-45%',
    timeLeft: '15 ngày',
    serviceCount: 5,
    status: 'new'
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