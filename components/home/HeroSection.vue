<template>
  <section class="hero-section relative bg-dark-bg py-20 lg:py-32 overflow-hidden">
    <!-- Background Glow Effects -->
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Hero Content -->
        <div class="space-y-6">
          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white leading-tight">
            Beauty Med Spa
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">Trung Tâm Thẩm Mỹ Uy Tín Hàng Đầu</span>
          </h1>
          
          <p class="text-lg lg:text-xl text-gray-300 font-sans">
            Đội ngũ bác sĩ chuyên nghiệp, công nghệ hiện đại, cam kết mang đến vẻ đẹp tự nhiên và an toàn cho bạn.
          </p>

          <!-- Trust Indicators -->
          <div class="flex flex-wrap gap-6 text-sm">
            <div class="flex items-center space-x-2 text-gray-300">
              <Icon name="heroicons:check-badge" class="w-6 h-6 text-primary-light" />
              <span class="font-medium">Chứng nhận Y khoa</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-300">
              <Icon name="heroicons:star" class="w-6 h-6 text-primary-light" />
              <span class="font-medium">10+ năm kinh nghiệm</span>
            </div>
            <div class="flex items-center space-x-2 text-gray-300">
              <Icon name="heroicons:users" class="w-6 h-6 text-primary-light" />
              <span class="font-medium">5000+ khách hàng</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <NuxtLink 
              to="/lien-he/dat-lich-hen"
              class="group relative px-8 py-4 bg-primary text-white rounded-lg font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span class="relative z-10">Đặt Lịch Ngay</span>
            </NuxtLink>
            <NuxtLink 
              to="/khuyen-mai"
              class="px-8 py-4 border border-white/20 text-white hover:bg-white/5 rounded-lg font-semibold transition-all hover:-translate-y-0.5"
            >
              Xem Khuyến Mãi
            </NuxtLink>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative hidden lg:block">
          <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-75 transition-opacity duration-500"></div>
            <!-- Placeholder for hero image -->
            <div class="w-full h-full bg-dark-surface flex items-center justify-center">
              <Icon name="heroicons:sparkles" class="w-32 h-32 text-primary-light opacity-50 animate-pulse" />
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
/* Scoped styles if needed */
</style>