<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-8 items-center">
            <!-- Doctor Image -->
            <div class="lg:col-span-1">
              <div class="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl">
                <Icon name="heroicons:user-circle" class="w-64 h-64 text-primary opacity-30" />
                <!-- Experience Badge -->
                <div class="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                  <span class="text-lg font-bold text-primary">{{ doctor.experience }}+ năm</span>
                </div>
              </div>
            </div>

            <!-- Doctor Info -->
            <div class="lg:col-span-2">
              <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                {{ doctor.name }}
              </h1>
              <p class="text-2xl text-primary font-semibold mb-4">
                {{ doctor.title }}
              </p>
              <p class="text-lg text-gray-600 mb-6">
                {{ doctor.specialization }}
              </p>

              <!-- Quick Stats -->
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="bg-white rounded-lg p-4 text-center shadow-md">
                  <div class="text-3xl font-bold text-primary mb-1">{{ doctor.experience }}+</div>
                  <div class="text-sm text-gray-600">Năm kinh nghiệm</div>
                </div>
                <div class="bg-white rounded-lg p-4 text-center shadow-md">
                  <div class="text-3xl font-bold text-primary mb-1">{{ doctor.successCases }}+</div>
                  <div class="text-sm text-gray-600">Ca thành công</div>
                </div>
                <div class="bg-white rounded-lg p-4 text-center shadow-md">
                  <div class="text-3xl font-bold text-primary mb-1">{{ doctor.certifications }}</div>
                  <div class="text-sm text-gray-600">Chứng chỉ</div>
                </div>
              </div>

              <!-- CTA Button -->
              <NuxtLink 
                to="/lien-he/dat-lich-hen"
                class="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold transition-colors shadow-lg"
              >
                Đặt Lịch Tư Vấn
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Biography -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Giới Thiệu</h2>
          <div class="prose prose-lg max-w-none">
            <p class="text-gray-600 leading-relaxed mb-4">
              {{ doctor.bio }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Qualifications -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Trình Độ & Chứng Chỉ</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div 
              v-for="(qualification, index) in doctor.qualificationsList" 
              :key="index"
              class="bg-white rounded-xl p-6 shadow-md"
            >
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:academic-cap" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">{{ qualification.title }}</h3>
                  <p class="text-gray-600 text-sm">{{ qualification.institution }}</p>
                  <p class="text-gray-500 text-xs mt-1">{{ qualification.year }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialties -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Chuyên Môn</h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div 
              v-for="specialty in doctor.specialtiesList" 
              :key="specialty.name"
              class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center"
            >
              <Icon :name="specialty.icon" class="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 class="font-bold text-gray-900 mb-2">{{ specialty.name }}</h3>
              <p class="text-gray-600 text-sm">{{ specialty.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Kinh Nghiệm Làm Việc</h2>
          
          <div class="space-y-6">
            <div 
              v-for="(experience, index) in doctor.experienceTimeline" 
              :key="index"
              class="bg-white rounded-xl p-6 shadow-md relative pl-12"
            >
              <div class="absolute left-6 top-6 w-3 h-3 bg-primary rounded-full"></div>
              <div class="absolute left-7 top-12 bottom-6 w-0.5 bg-blue-200" v-if="index < doctor.experienceTimeline.length - 1"></div>
              
              <div class="flex items-start justify-between mb-2">
                <h3 class="font-bold text-gray-900">{{ experience.position }}</h3>
                <span class="text-sm text-gray-500">{{ experience.period }}</span>
              </div>
              <p class="text-primary font-medium mb-2">{{ experience.institution }}</p>
              <p class="text-gray-600 text-sm">{{ experience.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards & Achievements -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Giải Thưởng & Thành Tựu</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div 
              v-for="(award, index) in doctor.awards" 
              :key="index"
              class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 flex items-start space-x-4"
            >
              <Icon name="heroicons:trophy" class="w-8 h-8 text-yellow-600 flex-shrink-0" />
              <div>
                <h3 class="font-bold text-gray-900 mb-1">{{ award.title }}</h3>
                <p class="text-gray-600 text-sm">{{ award.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Dịch Vụ Liên Quan</h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <NuxtLink
              v-for="service in relatedServices"
              :key="service.slug"
              :to="`/dich-vu/${service.slug}`"
              class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div class="aspect-video bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
                <Icon name="heroicons:sparkles" class="w-16 h-16 text-white" />
              </div>
              <div class="p-4">
                <h3 class="font-bold text-gray-900 mb-2">{{ service.name }}</h3>
                <p class="text-gray-600 text-sm line-clamp-2">{{ service.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <BookingCTA />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

// In a real app, this would fetch from an API or CMS
const doctor = {
  slug: slug,
  name: 'BS. Nguyễn Văn A',
  title: 'Bác Sĩ Trưởng - Chuyên Khoa Da Liễu',
  specialization: 'Chuyên sâu về Botox, Filler và các liệu trình trẻ hóa da',
  experience: 15,
  successCases: 5000,
  certifications: 12,
  bio: 'Bác sĩ Nguyễn Văn A là một trong những chuyên gia hàng đầu trong lĩnh vực thẩm mỹ da tại Việt Nam. Với hơn 15 năm kinh nghiệm và được đào tạo bài bản tại các trường y khoa uy tín trong và ngoài nước, bác sĩ A đã mang lại niềm tin và sự hài lòng cho hàng nghìn khách hàng. Bác sĩ luôn cập nhật những kỹ thuật và công nghệ mới nhất, đồng thời đặt sự an toàn và hiệu quả của khách hàng lên hàng đầu.',
  qualificationsList: [
    {
      title: 'Bác sĩ Chuyên khoa II Da liễu',
      institution: 'Đại học Y Hà Nội',
      year: '2015'
    },
    {
      title: 'Chứng chỉ Thẩm mỹ Da quốc tế (AAAM)',
      institution: 'American Academy of Aesthetic Medicine',
      year: '2018'
    },
    {
      title: 'Chứng chỉ Botox & Filler',
      institution: 'Allergan Medical Institute',
      year: '2017'
    },
    {
      title: 'Đào tạo Laser & IPL',
      institution: 'Seoul Laser Academy, Hàn Quốc',
      year: '2019'
    }
  ],
  specialtiesList: [
    {
      name: 'Tiêm Botox',
      icon: 'heroicons:beaker',
      description: 'Xóa nếp nhăn, nâng cơ mặt'
    },
    {
      name: 'Tiêm Filler',
      icon: 'heroicons:sparkles',
      description: 'Tạo khối, điều chỉnh gương mặt'
    },
    {
      name: 'Trẻ Hóa Da',
      icon: 'heroicons:star',
      description: 'Laser, IPL, Microneedling'
    }
  ],
  experienceTimeline: [
    {
      position: 'Bác Sĩ Trưởng Khoa Da Liễu',
      institution: 'Beauty Med Spa',
      period: '2018 - Hiện tại',
      description: 'Phụ trách toàn bộ các dịch vụ thẩm mỹ da, đào tạo đội ngũ bác sĩ trẻ'
    },
    {
      position: 'Bác Sĩ Chuyên Khoa',
      institution: 'Bệnh viện Da liễu TP.HCM',
      period: '2015 - 2018',
      description: 'Điều trị các bệnh lý da, nghiên cứu thẩm mỹ da'
    },
    {
      position: 'Bác Sĩ Nội Trú',
      institution: 'Bệnh viện Đại học Y Hà Nội',
      period: '2010 - 2015',
      description: 'Đào tạo chuyên sâu về da liễu và thẩm mỹ'
    }
  ],
  awards: [
    {
      title: 'Bác sĩ xuất sắc năm 2023',
      year: '2023'
    },
    {
      title: 'Giải thưởng Thẩm mỹ Da tiêu biểu',
      year: '2022'
    },
    {
      title: 'Chứng nhận chuyên gia Botox & Filler',
      year: '2021'
    },
    {
      title: 'Nghiên cứu khoa học xuất sắc',
      year: '2020'
    }
  ]
}

const relatedServices = [
  {
    slug: 'tiem-botox',
    name: 'Tiêm Botox',
    description: 'Xóa nếp nhăn, trẻ hóa làn da hiệu quả'
  },
  {
    slug: 'tiem-filler',
    name: 'Tiêm Filler',
    description: 'Tạo khối, điều chỉnh gương mặt tự nhiên'
  },
  {
    slug: 'tri-lieu-ipl',
    name: 'Trị Liệu IPL',
    description: 'Điều trị sắc tố, tàn nhang, nám da'
  }
]

useSeoMeta({
  title: `${doctor.name} - Đội Ngũ Bác Sĩ - Beauty Med Spa`,
  description: `${doctor.title} với ${doctor.experience} năm kinh nghiệm. ${doctor.specialization}`,
  ogTitle: `${doctor.name} - Beauty Med Spa`,
  ogDescription: doctor.title,
})
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

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>