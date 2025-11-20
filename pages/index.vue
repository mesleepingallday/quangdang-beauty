<template>
  <div>
    <HeroSection />
    <PromotionCards />
    <ServiceGrid />
    <DoctorTeam />
    <TechnologyShowcase />
    <TestimonialSlider />
    <BookingCTA />
  </div>
</template>

<script setup lang="ts">
// Homepage with all main sections
console.log('Index page script running')
console.log('Attempting to render home components')

useSeoMeta({
  title: 'Beauty Med Spa - Trung Tâm Thẩm Mỹ Uy Tín Hàng Đầu',
  description: 'Trung tâm thẩm mỹ uy tín với đội ngũ bác sĩ chuyên nghiệp, công nghệ hiện đại. Chuyên về Botox, Filler, IPL, Microneedling, HydraFacial.',
  ogTitle: 'Beauty Med Spa - Trung Tâm Thẩm Mỹ Uy Tín',
  ogDescription: 'Trung tâm thẩm mỹ uy tín với đội ngũ bác sĩ chuyên nghiệp, công nghệ hiện đại',
  ogImage: '/og-image.jpg',
  ogType: 'website'
})

console.log('SEO meta configured')
</script>

<style scoped>
/* Homepage-specific styles */
</style>