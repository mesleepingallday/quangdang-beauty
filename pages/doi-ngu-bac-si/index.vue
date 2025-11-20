<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Đội Ngũ Bác Sĩ Chuyên Nghiệp
          </h1>
          <p class="text-lg text-gray-600">
            Đội ngũ bác sĩ giàu kinh nghiệm, được đào tạo chuyên sâu trong và ngoài nước, tận tâm mang đến kết quả tốt nhất cho bạn
          </p>
        </div>
      </div>
    </section>

    <!-- Doctors Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="doctor in doctors"
            :key="doctor.id"
            :to="`/doi-ngu-bac-si/${doctor.slug}`"
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
              <!-- Featured Badge -->
              <div v-if="doctor.featured" class="absolute top-4 left-4 bg-yellow-400 rounded-full px-3 py-1 shadow-lg">
                <span class="text-xs font-semibold text-gray-900">⭐ Nổi bật</span>
              </div>
            </div>

            <!-- Doctor Content -->
            <div class="p-6">
              <h2 class="text-xl font-bold text-gray-900 mb-1">
                {{ doctor.name }}
              </h2>
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

              <!-- Specialties -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="specialty in doctor.specialties" 
                  :key="specialty"
                  class="px-2 py-1 bg-blue-50 text-primary text-xs rounded-full"
                >
                  {{ specialty }}
                </span>
              </div>

              <!-- CTA -->
              <div class="w-full text-center border-2 border-primary text-primary hover:bg-primary hover:text-white py-2 rounded-lg font-medium transition-colors">
                Xem Hồ Sơ Đầy Đủ
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Doctors -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Tại Sao Chọn Đội Ngũ Bác Sĩ Của Chúng Tôi?
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="heroicons:academic-cap" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Đào Tạo Chuyên Sâu</h3>
              <p class="text-gray-600">
                Tất cả bác sĩ đều được đào tạo chuyên sâu tại các trường y khoa uy tín trong và ngoài nước
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="heroicons:star" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Kinh Nghiệm Phong Phú</h3>
              <p class="text-gray-600">
                Hơn 10 năm kinh nghiệm thực tiễn với hàng ngàn ca điều trị thành công
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="heroicons:shield-check" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Chứng Chỉ Quốc Tế</h3>
              <p class="text-gray-600">
                Sở hữu các chứng chỉ chuyên môn quốc tế về thẩm mỹ da và điều trị laser
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="heroicons:heart" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Tận Tâm Với Khách Hàng</h3>
              <p class="text-gray-600">
                Luôn lắng nghe và tư vấn tận tình, đặt sức khỏe và sự hài lòng của khách hàng lên hàng đầu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <BookingCTA />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Đội Ngũ Bác Sĩ - Beauty Med Spa',
  description: 'Gặp gỡ đội ngũ bác sĩ chuyên nghiệp với kinh nghiệm phong phú trong lĩnh vực thẩm mỹ da và điều trị laser tại Beauty Med Spa.',
  ogTitle: 'Đội Ngũ Bác Sĩ Chuyên Nghiệp - Beauty Med Spa',
  ogDescription: 'Đội ngũ bác sĩ giàu kinh nghiệm, được đào tạo chuyên sâu',
})

const doctors = [
  {
    id: '1',
    slug: 'bs-nguyen-van-a',
    name: 'BS. Nguyễn Văn A',
    title: 'Bác Sĩ Trưởng - Chuyên Khoa Da Liễu',
    specialization: 'Chuyên sâu về Botox, Filler và các liệu trình trẻ hóa da',
    experience: 15,
    featured: true,
    qualifications: [
      'Bác sĩ Chuyên khoa II Da liễu',
      'Chứng chỉ Thẩm mỹ Da quốc tế (AAAM)',
      'Đào tạo tại Hàn Quốc và Mỹ'
    ],
    specialties: ['Botox', 'Filler', 'Trẻ hóa']
  },
  {
    id: '2',
    slug: 'bs-tran-thi-b',
    name: 'BS. Trần Thị B',
    title: 'Bác Sĩ Chuyên Khoa - Thẩm Mỹ Da',
    specialization: 'Chuyên gia về IPL, Laser và điều trị sắc tố da',
    experience: 10,
    featured: true,
    qualifications: [
      'Bác sĩ Chuyên khoa I Da liễu',
      'Chứng chỉ Laser & IPL quốc tế',
      'Hơn 5000 ca điều trị thành công'
    ],
    specialties: ['IPL', 'Laser', 'Sắc tố']
  },
  {
    id: '3',
    slug: 'bs-le-van-c',
    name: 'BS. Lê Văn C',
    title: 'Bác Sĩ Chuyên Khoa - Thẩm Mỹ',
    specialization: 'Chuyên về Microneedling và các liệu trình chăm sóc da',
    experience: 8,
    featured: false,
    qualifications: [
      'Bác sĩ Đa khoa - Chuyên Da liễu',
      'Chứng chỉ Microneedling chuyên sâu',
      'Đào tạo tại Singapore'
    ],
    specialties: ['Microneedling', 'Chăm sóc da']
  },
  {
    id: '4',
    slug: 'bs-pham-thi-d',
    name: 'BS. Phạm Thị D',
    title: 'Bác Sĩ Chuyên Khoa - Da Liễu',
    specialization: 'Chuyên điều trị mụn, sẹo và các vấn đề về da',
    experience: 12,
    featured: false,
    qualifications: [
      'Bác sĩ Chuyên khoa I Da liễu',
      'Chứng chỉ điều trị mụn chuyên sâu',
      'Thạc sĩ Y khoa'
    ],
    specialties: ['Điều trị mụn', 'Sẹo rỗ', 'Da nhạy cảm']
  },
  {
    id: '5',
    slug: 'bs-hoang-van-e',
    name: 'BS. Hoàng Văn E',
    title: 'Bác Sĩ - Thẩm Mỹ Da',
    specialization: 'Chuyên về công nghệ RF và HIFU nâng cơ',
    experience: 7,
    featured: false,
    qualifications: [
      'Bác sĩ Đa khoa',
      'Chứng chỉ RF & HIFU',
      'Đào tạo tại Thái Lan'
    ],
    specialties: ['RF', 'HIFU', 'Nâng cơ']
  },
  {
    id: '6',
    slug: 'bs-nguyen-thi-f',
    name: 'BS. Nguyễn Thị F',
    title: 'Bác Sĩ Tư Vấn - Thẩm Mỹ Da',
    specialization: 'Chuyên tư vấn và chăm sóc da sau điều trị',
    experience: 6,
    featured: false,
    qualifications: [
      'Bác sĩ Đa khoa',
      'Chứng chỉ Tư vấn Thẩm mỹ',
      'Chuyên gia chăm sóc da'
    ],
    specialties: ['Tư vấn', 'Chăm sóc da', 'Dưỡng da']
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