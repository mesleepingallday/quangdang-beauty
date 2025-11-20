<template>
  <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center text-white">
        <!-- Heading -->
        <h2 class="text-3xl lg:text-5xl font-bold mb-6">
          Sẵn Sàng Bắt Đầu Hành Trình Làm Đẹp?
        </h2>
        <p class="text-lg lg:text-xl mb-8 text-blue-100">
          Đặt lịch tư vấn miễn phí ngay hôm nay và nhận ưu đãi đặc biệt cho khách hàng mới
        </p>

        <!-- Contact Options -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <!-- Phone -->
          <a 
            href="tel:+84123456789"
            class="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:scale-105"
          >
            <Icon name="heroicons:phone" class="w-10 h-10 mx-auto mb-3" />
            <div class="font-semibold mb-1">Gọi Ngay</div>
            <div class="text-sm text-blue-100">+84 123 456 789</div>
          </a>

          <!-- WhatsApp/Zalo -->
          <a 
            href="#"
            class="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:scale-105"
          >
            <Icon name="mdi:chat" class="w-10 h-10 mx-auto mb-3" />
            <div class="font-semibold mb-1">Chat Zalo</div>
            <div class="text-sm text-blue-100">Tư vấn trực tuyến</div>
          </a>

          <!-- Email -->
          <a 
            href="mailto:info@beautymedspa.vn"
            class="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:scale-105"
          >
            <Icon name="heroicons:envelope" class="w-10 h-10 mx-auto mb-3" />
            <div class="font-semibold mb-1">Email</div>
            <div class="text-sm text-blue-100">info@beautymedspa.vn</div>
          </a>
        </div>

        <!-- Main CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/lien-he/dat-lich-hen"
            class="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 inline-block"
          >
            Đặt Lịch Hẹn Ngay
          </NuxtLink>
          <NuxtLink 
            to="/lien-he"
            class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 inline-block"
          >
            Liên Hệ Tư Vấn
          </NuxtLink>
        </div>

        <!-- Special Offer Badge -->
        <div class="mt-8 inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold animate-pulse">
          🎁 Giảm 20% cho khách hàng mới - Chỉ trong tháng này!
        </div>

        <!-- Working Hours -->
        <div class="mt-10 text-sm text-blue-100">
          <Icon name="heroicons:clock" class="w-5 h-5 inline mr-2" />
          Thứ 2 - Thứ 7: 8:00 - 20:00 | Chủ Nhật: 9:00 - 17:00
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Booking CTA section
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>