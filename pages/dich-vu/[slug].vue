<template>
  <div v-if="service">
    <!-- Service Hero -->
    <section class="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <!-- Service Image -->
            <div class="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center">
              <Icon :name="service.icon" class="w-32 h-32 text-white" />
            </div>

            <!-- Service Info -->
            <div>
              <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {{ service.name }}
              </h1>
              <p class="text-lg text-gray-600 mb-6">
                {{ service.description }}
              </p>

              <!-- Service Details -->
              <div class="space-y-3 mb-6">
                <div class="flex items-center space-x-3">
                  <Icon name="heroicons:clock" class="w-6 h-6 text-primary" />
                  <span class="text-gray-700">Thời gian: <strong>{{ service.duration }}</strong></span>
                </div>
                <div class="flex items-center space-x-3">
                  <Icon name="heroicons:currency-dollar" class="w-6 h-6 text-primary" />
                  <span class="text-gray-700">Giá: <strong class="text-primary">{{ formatPrice(service.priceFrom) }}+</strong></span>
                </div>
              </div>

              <!-- CTA -->
              <NuxtLink 
                to="/lien-he/dat-lich-hen"
                class="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Đặt Lịch Ngay
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Benefits -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Lợi Ích Của Dịch Vụ</h2>
            <div class="grid md:grid-cols-2 gap-4">
              <div 
                v-for="(benefit, index) in service.benefits" 
                :key="index"
                class="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg"
              >
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">{{ benefit }}</span>
              </div>
            </div>
          </div>

          <!-- Process -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Quy Trình Thực Hiện</h2>
            <div class="space-y-4">
              <div 
                v-for="(step, index) in service.process" 
                :key="index"
                class="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg"
              >
                <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  {{ index + 1 }}
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{{ step.title }}</h3>
                  <p class="text-gray-600">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Câu Hỏi Thường Gặp</h2>
            <div class="space-y-4">
              <div 
                v-for="(faq, index) in service.faqs" 
                :key="index"
                class="border border-gray-200 rounded-lg p-6"
              >
                <h3 class="font-semibold text-gray-900 mb-2">{{ faq.question }}</h3>
                <p class="text-gray-600">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Services -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Dịch Vụ Liên Quan</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <NuxtLink
            v-for="related in relatedServices"
            :key="related.slug"
            :to="`/dich-vu/${related.slug}`"
            class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
          >
            <Icon :name="related.icon" class="w-12 h-12 text-primary mb-4" />
            <h3 class="font-bold text-gray-900 mb-2">{{ related.name }}</h3>
            <p class="text-sm text-gray-600">{{ related.shortDesc }}</p>
          </NuxtLink>
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

// Mock service data - in real app, this would come from CMS or API
const serviceData: Record<string, any> = {
  'tiem-botox': {
    name: 'Tiêm Botox',
    slug: 'tiem-botox',
    description: 'Giảm nếp nhăn, trẻ hóa làn da hiệu quả với công nghệ Botox an toàn, được FDA chứng nhận.',
    icon: 'heroicons:sparkles',
    duration: '30-45 phút',
    priceFrom: 2000000,
    benefits: [
      'Giảm nếp nhăn trên trán, giữa hai mày',
      'Làm mờ chân chim ở đuôi mắt',
      'Nâng cơ mặt tự nhiên',
      'Kết quả bền lâu 4-6 tháng',
      'An toàn, không xâm lấn',
      'Không thời gian nghỉ dưỡng'
    ],
    process: [
      {
        title: 'Tư vấn & Thăm khám',
        description: 'Bác sĩ thăm khám, đánh giá tình trạng da và tư vấn phương án điều trị phù hợp'
      },
      {
        title: 'Vệ sinh & Chuẩn bị',
        description: 'Làm sạch vùng da cần điều trị và đánh dấu các điểm tiêm'
      },
      {
        title: 'Thực hiện tiêm',
        description: 'Bác sĩ tiêm Botox chính xác vào các vị trí đã xác định'
      },
      {
        title: 'Chăm sóc sau tiêm',
        description: 'Hướng dẫn chăm sóc và hẹn tái khám sau 2 tuần'
      }
    ],
    faqs: [
      {
        question: 'Tiêm Botox có đau không?',
        answer: 'Quá trình tiêm rất nhanh và ít gây đau. Chúng tôi sử dụng kim tiêm siêu mảnh và có thể bôi kem tê nếu bạn lo ngại về cảm giác đau.'
      },
      {
        question: 'Kết quả Botox kéo dài bao lâu?',
        answer: 'Thông thường kết quả kéo dài từ 4-6 tháng. Sau đó bạn có thể tiêm lại để duy trì hiệu quả.'
      },
      {
        question: 'Có tác dụng phụ không?',
        answer: 'Botox được FDA chứng nhận an toàn. Một số tác dụng phụ nhẹ có thể xảy ra như bầm tím, sưng nhẹ nhưng sẽ biến mất sau vài ngày.'
      }
    ]
  },
  'tiem-filler': {
    name: 'Tiêm Filler',
    slug: 'tiem-filler',
    description: 'Làm đầy khuôn mặt, tạo khối tự nhiên với Filler chất lượng cao từ Hàn Quốc, Mỹ.',
    icon: 'heroicons:face-smile',
    duration: '45-60 phút',
    priceFrom: 3000000,
    benefits: [
      'Làm đầy rãnh mũi má',
      'Nâng cằm V-line',
      'Bổ sung thể tích má',
      'Tạo khối tự nhiên',
      'Kết quả ngay lập tức',
      'Bền lâu 12-18 tháng'
    ],
    process: [
      {
        title: 'Tư vấn chuyên sâu',
        description: 'Đánh giá cấu trúc khuôn mặt và thiết kế phương án phù hợp'
      },
      {
        title: 'Chuẩn bị',
        description: 'Vệ sinh và đánh dấu các vùng cần điều trị'
      },
      {
        title: 'Tiêm Filler',
        description: 'Tiêm chính xác với kỹ thuật chuyên nghiệp'
      },
      {
        title: 'Massage định hình',
        description: 'Định hình và massage để Filler phân bố đều'
      }
    ],
    faqs: [
      {
        question: 'Filler và Botox khác nhau thế nào?',
        answer: 'Botox giảm nếp nhăn động bằng cách làm giãn cơ, còn Filler làm đầy thể tích và tạo khối cho khuôn mặt.'
      },
      {
        question: 'Tiêm Filler có an toàn không?',
        answer: 'Rất an toàn khi thực hiện bởi bác sĩ có chuyên môn. Chúng tôi chỉ sử dụng Filler chính hãng có chứng nhận.'
      }
    ]
  }
}

const service = computed(() => serviceData[slug] || null)

const relatedServices = computed(() => {
  const all = [
    { slug: 'tiem-botox', name: 'Tiêm Botox', icon: 'heroicons:sparkles', shortDesc: 'Giảm nếp nhăn hiệu quả' },
    { slug: 'tiem-filler', name: 'Tiêm Filler', icon: 'heroicons:face-smile', shortDesc: 'Tạo khối tự nhiên' },
    { slug: 'hydrafacial', name: 'HydraFacial', icon: 'heroicons:beaker', shortDesc: 'Làm sạch & cấp ẩm' }
  ]
  return all.filter(s => s.slug !== slug).slice(0, 3)
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}

// SEO
useSeoMeta({
  title: `${service.value?.name} - Beauty Med Spa`,
  description: service.value?.description,
  ogTitle: `${service.value?.name} - Beauty Med Spa`,
  ogDescription: service.value?.description,
})
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
</style>