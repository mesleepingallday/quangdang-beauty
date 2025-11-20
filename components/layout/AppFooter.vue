<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-white text-xl font-bold mb-4">Beauty Med Spa</h3>
          <p class="text-sm mb-4">
            Trung tâm thẩm mỹ uy tín với đội ngũ bác sĩ chuyên nghiệp và công nghệ hiện đại.
          </p>
          <div class="flex space-x-4">
            <a href="#" aria-label="Facebook" class="hover:text-white transition-colors">
              <Icon name="mdi:facebook" class="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" class="hover:text-white transition-colors">
              <Icon name="mdi:instagram" class="w-6 h-6" />
            </a>
            <a href="#" aria-label="YouTube" class="hover:text-white transition-colors">
              <Icon name="mdi:youtube" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Liên Kết Nhanh</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/dich-vu" class="hover:text-white transition-colors">Dịch Vụ</NuxtLink></li>
            <li><NuxtLink to="/khuyen-mai" class="hover:text-white transition-colors">Khuyến Mãi</NuxtLink></li>
            <li><NuxtLink to="/doi-ngu-bac-si" class="hover:text-white transition-colors">Đội Ngũ Bác Sĩ</NuxtLink></li>
            <li><NuxtLink to="/tin-tuc" class="hover:text-white transition-colors">Tin Tức</NuxtLink></li>
            <li><NuxtLink to="/ve-chung-toi" class="hover:text-white transition-colors">Về Chúng Tôi</NuxtLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-semibold mb-4">Dịch Vụ Nổi Bật</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/dich-vu/tiem-botox" class="hover:text-white transition-colors">Tiêm Botox</NuxtLink></li>
            <li><NuxtLink to="/dich-vu/tiem-filler" class="hover:text-white transition-colors">Tiêm Filler</NuxtLink></li>
            <li><NuxtLink to="/dich-vu/tri-lieu-ipl" class="hover:text-white transition-colors">Trị Liệu IPL</NuxtLink></li>
            <li><NuxtLink to="/dich-vu/microneedling" class="hover:text-white transition-colors">Microneedling</NuxtLink></li>
            <li><NuxtLink to="/dich-vu/hydrafacial" class="hover:text-white transition-colors">HydraFacial</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-semibold mb-4">Liên Hệ</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start space-x-2">
              <Icon name="heroicons:map-pin" class="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>123 Đường ABC, Quận 1, TP.HCM</span>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="heroicons:phone" class="w-5 h-5 flex-shrink-0" />
              <a href="tel:+84123456789" class="hover:text-white transition-colors">
                +84 123 456 789
              </a>
            </li>
            <li class="flex items-center space-x-2">
              <Icon name="heroicons:envelope" class="w-5 h-5 flex-shrink-0" />
              <a href="mailto:info@beautymedspa.vn" class="hover:text-white transition-colors">
                info@beautymedspa.vn
              </a>
            </li>
            <li class="flex items-start space-x-2">
              <Icon name="heroicons:clock" class="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span>T2-T7: 8:00 - 20:00<br>CN: 9:00 - 17:00</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
        <p>&copy; {{ currentYear }} Beauty Med Spa. All rights reserved.</p>
        <div class="mt-2 space-x-4">
          <NuxtLink to="/privacy-policy" class="hover:text-white transition-colors">
            Chính Sách Bảo Mật
          </NuxtLink>
          <span>|</span>
          <NuxtLink to="/terms-of-service" class="hover:text-white transition-colors">
            Điều Khoản Sử Dụng
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* Footer-specific styles */
</style>