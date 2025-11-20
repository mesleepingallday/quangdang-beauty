<template>
  <section class="hero-section relative bg-gradient-to-r from-blue-50 to-blue-100 py-20 lg:py-32">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Hero Content -->
        <div class="space-y-6">
          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Beauty Med Spa
            <span class="block text-primary">Trung Tâm Thẩm Mỹ Uy Tín Hàng Đầu</span>
          </h1>
          
          <p class="text-lg lg:text-xl text-gray-600">
            Đội ngũ bác sĩ chuyên nghiệp, công nghệ hiện đại, cam kết mang đến vẻ đẹp tự nhiên và an toàn cho bạn.
          </p>

          <!-- Trust Indicators -->
          <div class="flex flex-wrap gap-6 text-sm">
            <div class="flex items-center space-x-2">
              <Icon name="heroicons:check-badge" class="w-6 h-6 text-primary" />
              <span class="font-medium">Chứng nhận Y khoa</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="heroicons:star" class="w-6 h-6 text-primary" />
              <span class="font-medium">10+ năm kinh nghiệm</span>
            </div>
            <div class="flex items-center space-x-2">
              <Icon name="heroicons:users" class="w-6 h-6 text-primary" />
              <span class="font-medium">5000+ khách hàng</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <NuxtLink 
              to="/lien-he/dat-lich-hen"
              class="btn-primary bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-center font-semibold transition-colors inline-block"
            >
              Đặt Lịch Ngay
            </NuxtLink>
            <NuxtLink 
              to="/khuyen-mai"
              class="btn-secondary border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-center font-semibold transition-colors inline-block"
            >
              Xem Khuyến Mãi
            </NuxtLink>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative hidden lg:block">
          <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <!-- Placeholder for hero image -->
            <div class="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
              <Icon name="heroicons:sparkles" class="w-32 h-32 text-white opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section component
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
</style>