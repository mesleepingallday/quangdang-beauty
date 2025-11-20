<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Đội Ngũ Bác Sĩ Chuyên Nghiệp
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Đội ngũ bác sĩ giàu kinh nghiệm, được đào tạo chuyên sâu trong và ngoài nước
        </p>
      </div>

      <!-- Doctors Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="doctor in doctors" 
          :key="doctor.id"
          class="doctor-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <!-- Doctor Image -->
          <div class="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
            <div class="w-full h-full flex items-center justify-center">
              <Icon name="heroicons:user-circle" class="w-40 h-40 text-primary opacity-30" />
            </div>
            <!-- Experience Badge -->
            <div class="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
              <span class="text-sm font-semibold text-primary">{{ doctor.experience }}+ năm</span>
            </div>
          </div>

          <!-- Doctor Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-1">
              {{ doctor.name }}
            </h3>
            <p class="text-primary font-medium mb-3">
              {{ doctor.title }}
            </p>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              {{ doctor.specialization }}
            </p>

            <!-- Qualifications -->
            <div class="space-y-2 mb-4">
              <div 
                v-for="(qualification, index) in doctor.qualifications.slice(0, 2)" 
                :key="index"
                class="flex items-start space-x-2 text-sm text-gray-600"
              >
                <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{{ qualification }}</span>
              </div>
            </div>

            <!-- CTA -->
            <NuxtLink 
              :to="`/doi-ngu-bac-si/${doctor.slug}`"
              class="block w-full text-center border-2 border-primary text-primary hover:bg-primary hover:text-white py-2 rounded-lg font-medium transition-colors"
            >
              Xem Hồ Sơ
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- View All Doctors Button -->
      <div class="text-center mt-12">
        <NuxtLink 
          to="/doi-ngu-bac-si"
          class="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Gặp Gỡ Toàn Bộ Đội Ngũ
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const doctors = [
  {
    id: '1',
    slug: 'bs-nguyen-van-a',
    name: 'BS. Nguyễn Văn A',
    title: 'Bác Sĩ Trưởng - Chuyên Khoa Da Liễu',
    specialization: 'Chuyên sâu về Botox, Filler và các liệu trình trẻ hóa da',
    experience: 15,
    qualifications: [
      'Bác sĩ Chuyên khoa II Da liễu',
      'Chứng chỉ Thẩm mỹ Da quốc tế (AAAM)',
      'Đào tạo tại Hàn Quốc và Mỹ'
    ]
  },
  {
    id: '2',
    slug: 'bs-tran-thi-b',
    name: 'BS. Trần Thị B',
    title: 'Bác Sĩ Chuyên Khoa - Thẩm Mỹ Da',
    specialization: 'Chuyên gia về IPL, Laser và điều trị sắc tố da',
    experience: 10,
    qualifications: [
      'Bác sĩ Chuyên khoa I Da liễu',
      'Chứng chỉ Laser & IPL quốc tế',
      'Hơn 5000 ca điều trị thành công'
    ]
  },
  {
    id: '3',
    slug: 'bs-le-van-c',
    name: 'BS. Lê Văn C',
    title: 'Bác Sĩ Chuyên Khoa - Thẩm Mỹ',
    specialization: 'Chuyên về Microneedling và các liệu trình chăm sóc da',
    experience: 8,
    qualifications: [
      'Bác sĩ Đa khoa - Chuyên Da liễu',
      'Chứng chỉ Microneedling chuyên sâu',
      'Đào tạo tại Singapore'
    ]
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

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>