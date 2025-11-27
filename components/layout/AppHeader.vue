<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between gap-8">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex-shrink-0 group"
          aria-label="Beauty Med Spa - Trang chủ"
        >
          <img
            src="/logo.svg"
            alt="Beauty Med Spa Logo"
            class="h-24 transition-transform duration-200 group-hover:scale-105"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <DesktopNav :nav-items="navItems" />

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle menu"
          :aria-expanded="isMobileMenuOpen"
        >
          <Icon name="heroicons:bars-3" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <MobileMenu
        v-if="isMobileMenuOpen"
        :nav-items="navItems"
        @close="closeMobileMenu"
      />
    </nav>
  </header>
</template>

<script setup lang="ts">
import type { NavItem } from "~/types";

const isMobileMenuOpen = ref(false);

const navItems: NavItem[] = [
  {
    label: "Dịch Vụ",
    href: "/dich-vu",
    children: [
      { label: "Tiêm Botox", href: "/dich-vu/tiem-botox" },
      { label: "Tiêm Filler", href: "/dich-vu/tiem-filler" },
      { label: "Trị Liệu IPL", href: "/dich-vu/tri-lieu-ipl" },
      { label: "Microneedling", href: "/dich-vu/microneedling" },
      { label: "HydraFacial", href: "/dich-vu/hydrafacial" },
      { label: "Chăm Sóc Da", href: "/dich-vu/cham-soc-da" },
    ],
  },
  {
    label: "Khuyến Mãi",
    href: "/khuyen-mai",
  },
  {
    label: "Đội Ngũ Bác Sĩ",
    href: "/doi-ngu-bac-si",
  },
  {
    label: "Công Nghệ",
    href: "/cong-nghe",
  },
  {
    label: "Tin Tức",
    href: "/tin-tuc",
    children: [
      { label: "Tin Tức Làm Đẹp", href: "/tin-tuc/tin-tuc-lam-dep" },
      { label: "Mẹo Chăm Sóc Da", href: "/tin-tuc/meo-cham-soc-da" },
      { label: "Xu Hướng Thẩm Mỹ", href: "/tin-tuc/xu-huong-tham-my" },
      { label: "Câu Hỏi Thường Gặp", href: "/tin-tuc/faq" },
    ],
  },
  {
    label: "Về Chúng Tôi",
    href: "/ve-chung-toi",
    children: [
      { label: "Giới Thiệu", href: "/ve-chung-toi" },
      { label: "Câu Chuyện", href: "/ve-chung-toi#cau-chuyen" },
      { label: "Sứ Mệnh & Tầm Nhìn", href: "/ve-chung-toi#su-menh" },
      { label: "Giá Trị Cốt Lõi", href: "/ve-chung-toi#gia-tri" },
      { label: "Cơ Sở Vật Chất", href: "/ve-chung-toi#co-so" },
    ],
  },
  {
    label: "Liên Hệ",
    href: "/lien-he",
    children: [
      { label: "Thông Tin Liên Hệ", href: "/lien-he" },
      { label: "Đặt Lịch Hẹn", href: "/lien-he/dat-lich-hen" },
    ],
  },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
.btn-primary {
  @apply inline-block font-semibold;
}

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
