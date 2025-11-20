<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Đặt Lịch Hẹn
          </h1>
          <p class="text-lg text-gray-600">
            Điền thông tin dưới đây để đặt lịch tư vấn và trải nghiệm dịch vụ của chúng tôi
          </p>
        </div>
      </div>
    </section>

    <!-- Booking Form Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Hoặc Liên Hệ Trực Tiếp
          </h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <!-- Phone -->
            <a 
              href="tel:+84123456789"
              class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
            >
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:phone" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Gọi Ngay</h3>
              <p class="text-gray-600">+84 123 456 789</p>
              <p class="text-sm text-gray-500 mt-2">T2-T7: 8:00 - 20:00</p>
            </a>

            <!-- Zalo -->
            <a 
              href="#"
              class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
            >
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="mdi:chat" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Chat Zalo</h3>
              <p class="text-gray-600">Tư vấn trực tuyến</p>
              <p class="text-sm text-gray-500 mt-2">Phản hồi nhanh 24/7</p>
            </a>

            <!-- Email -->
            <a 
              href="mailto:info@beautymedspa.vn"
              class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center"
            >
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:envelope" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Email</h3>
              <p class="text-gray-600">info@beautymedspa.vn</p>
              <p class="text-sm text-gray-500 mt-2">Phản hồi trong 24h</p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section (Placeholder) -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">
            Địa Chỉ Phòng Khám
          </h2>
          
          <div class="bg-gray-200 rounded-2xl overflow-hidden" style="height: 400px;">
            <!-- Placeholder for Google Maps -->
            <div class="w-full h-full flex items-center justify-center">
              <div class="text-center">
                <Icon name="heroicons:map-pin" class="w-16 h-16 text-gray-400 mx-auto mb-2" />
                <p class="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Đặt Lịch Hẹn - Beauty Med Spa',
  description: 'Đặt lịch tư vấn và trải nghiệm dịch vụ thẩm mỹ chuyên nghiệp tại Beauty Med Spa. Liên hệ ngay để được tư vấn miễn phí.',
  ogTitle: 'Đặt Lịch Hẹn - Beauty Med Spa',
  ogDescription: 'Đặt lịch tư vấn miễn phí với bác sĩ chuyên nghiệp',
})
</script>

<style scoped>
.text-primary {
  color: #0066cc;
}
</style>