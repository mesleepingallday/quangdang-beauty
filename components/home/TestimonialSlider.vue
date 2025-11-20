<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Khách Hàng Nói Gì Về Chúng Tôi
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          class="testimonial-card bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <!-- Rating -->
          <div class="flex items-center mb-4">
            <div class="flex space-x-1">
              <Icon 
                v-for="i in 5" 
                :key="i"
                name="heroicons:star-solid" 
                :class="i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'"
                class="w-5 h-5"
              />
            </div>
            <span class="ml-2 text-sm font-medium text-gray-600">
              {{ testimonial.rating }}.0
            </span>
          </div>

          <!-- Comment -->
          <p class="text-gray-700 mb-6 line-clamp-4">
            "{{ testimonial.comment }}"
          </p>

          <!-- Customer Info -->
          <div class="flex items-center space-x-3 border-t border-gray-200 pt-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
              <Icon name="heroicons:user" class="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">{{ testimonial.customerName }}</h4>
              <p class="text-sm text-gray-600">{{ testimonial.service }}</p>
            </div>
            <div v-if="testimonial.verified" class="ml-auto">
              <Icon name="heroicons:check-badge-solid" class="w-6 h-6 text-blue-500" title="Đã xác thực" />
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">5000+</div>
          <div class="text-gray-600">Khách Hàng</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">98%</div>
          <div class="text-gray-600">Hài Lòng</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">15+</div>
          <div class="text-gray-600">Năm Kinh Nghiệm</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-primary mb-2">4.9/5</div>
          <div class="text-gray-600">Đánh Giá</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    id: '1',
    customerName: 'Chị Lan Anh',
    rating: 5,
    comment: 'Tôi rất hài lòng với dịch vụ tiêm Botox tại đây. Bác sĩ tư vấn tận tình, quy trình chuyên nghiệp. Kết quả vượt mong đợi, trông trẻ hơn 5 tuổi.',
    service: 'Tiêm Botox',
    verified: true
  },
  {
    id: '2',
    customerName: 'Chị Minh Tâm',
    rating: 5,
    comment: 'Đội ngũ nhân viên thân thiện, cơ sở vật chất hiện đại. Làm HydraFacial xong da mịn màng, sáng khỏe hẳn lên. Chắc chắn sẽ quay lại!',
    service: 'HydraFacial',
    verified: true
  },
  {
    id: '3',
    customerName: 'Anh Tuấn Anh',
    rating: 5,
    comment: 'Lần đầu đi spa mà cảm thấy rất thoải mái. Bác sĩ giải thích kỹ về liệu trình, không ép buộc. Giá cả hợp lý, chất lượng tuyệt vời.',
    service: 'Trị Liệu IPL',
    verified: true
  },
  {
    id: '4',
    customerName: 'Chị Thu Hà',
    rating: 5,
    comment: 'Đã thử nhiều nơi nhưng chỉ có ở đây tôi thấy hiệu quả thật sự. Microneedling giúp sẹo mụn mờ đi rõ rệt. Cảm ơn đội ngũ rất nhiều!',
    service: 'Microneedling',
    verified: true
  },
  {
    id: '5',
    customerName: 'Chị Phương Anh',
    rating: 5,
    comment: 'Phòng khám sạch sẽ, thiết bị hiện đại. Quy trình làm việc chuyên nghiệp từ tư vấn đến chăm sóc sau điều trị. Rất đáng tin cậy!',
    service: 'Tiêm Filler',
    verified: true
  },
  {
    id: '6',
    customerName: 'Chị Ngọc Mai',
    rating: 5,
    comment: 'Tôi rất ấn tượng với sự tận tâm của bác sĩ. Luôn follow up sau điều trị, hỏi thăm tình hình. Dịch vụ 5 sao, giá cả hợp lý.',
    service: 'Chăm Sóc Da',
    verified: true
  }
]
</script>

<style scoped>
.text-primary {
  color: #0066cc;
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>