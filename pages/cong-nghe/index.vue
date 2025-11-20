<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Công Nghệ Hiện Đại
          </h1>
          <p class="text-lg text-gray-600">
            Trang bị đầy đủ các thiết bị và công nghệ thẩm mỹ tiên tiến nhất, đảm bảo an toàn và hiệu quả cao nhất cho khách hàng
          </p>
        </div>
      </div>
    </section>

    <!-- Technologies Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="tech in technologies" 
            :key="tech.id"
            class="tech-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <!-- Tech Image -->
            <div class="aspect-video bg-gradient-to-br from-purple-100 to-blue-200 flex items-center justify-center relative">
              <Icon :name="tech.icon" class="w-20 h-20 text-white" />
              <!-- Certification Badge -->
              <div v-if="tech.certified" class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                ✓ Chứng nhận
              </div>
            </div>

            <!-- Tech Content -->
            <div class="p-6">
              <h2 class="text-xl font-bold text-gray-900 mb-2">
                {{ tech.name }}
              </h2>
              <p class="text-sm text-primary font-medium mb-3">
                {{ tech.origin }}
              </p>
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ tech.description }}
              </p>

              <!-- Features -->
              <div class="space-y-2 mb-4">
                <div 
                  v-for="(feature, index) in tech.features.slice(0, 3)" 
                  :key="index"
                  class="flex items-center space-x-2 text-sm text-gray-600"
                >
                  <Icon name="heroicons:check-circle-solid" class="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{{ feature }}</span>
                </div>
              </div>

              <!-- Applications -->
              <div class="mb-4">
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="app in tech.applications" 
                    :key="app"
                    class="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full"
                  >
                    {{ app }}
                  </span>
                </div>
              </div>

              <!-- CTA -->
              <NuxtLink 
                to="/lien-he/dat-lich-hen"
                class="block w-full text-center bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition-colors"
              >
                Tư Vấn Chi Tiết
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Chứng Nhận & Giải Thưởng
          </h2>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div 
              v-for="cert in certifications" 
              :key="cert.id"
              class="flex flex-col items-center text-center"
            >
              <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <Icon name="heroicons:shield-check" class="w-12 h-12 text-primary" />
              </div>
              <h3 class="font-semibold text-gray-900 mb-1">{{ cert.name }}</h3>
              <p class="text-sm text-gray-600">{{ cert.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Safety Standards -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Tiêu Chuẩn An Toàn
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Icon name="heroicons:shield-check" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Thiết Bị Chính Hãng</h3>
              <p class="text-gray-700">
                100% thiết bị chính hãng được nhập khẩu từ Mỹ, Hàn Quốc, EU với đầy đủ giấy tờ chứng nhận
              </p>
            </div>

            <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Icon name="heroicons:beaker" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Vô Trùng Y Tế</h3>
              <p class="text-gray-700">
                Tuân thủ nghiêm ngặt quy trình vô trùng y tế, đảm bảo an toàn tuyệt đối cho khách hàng
              </p>
            </div>

            <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <Icon name="heroicons:cog" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Bảo Trì Định Kỳ</h3>
              <p class="text-gray-700">
                Thiết bị được bảo trì và hiệu chuẩn định kỳ theo đúng tiêu chuẩn của nhà sản xuất
              </p>
            </div>

            <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <Icon name="heroicons:academic-cap" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Đào Tạo Chuyên Môn</h3>
              <p class="text-gray-700">
                Bác sĩ được đào tạo bài bản về sử dụng thiết bị trực tiếp từ nhà sản xuất
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
  title: 'Công Nghệ Hiện Đại - Beauty Med Spa',
  description: 'Trang bị đầy đủ các thiết bị và công nghệ thẩm mỹ tiên tiến nhất như Laser CO2, IPL, HIFU, RF Microneedling với chứng nhận FDA, CE.',
  ogTitle: 'Công Nghệ Hiện Đại - Beauty Med Spa',
  ogDescription: 'Công nghệ thẩm mỹ tiên tiến, an toàn và hiệu quả',
})

const technologies = [
  {
    id: '1',
    name: 'Laser CO2 Fractional',
    origin: 'Hoa Kỳ',
    description: 'Công nghệ laser phân đoạn CO2 thế hệ mới, điều trị hiệu quả sẹo rỗ, nếp nhăn và trẻ hóa da',
    icon: 'heroicons:bolt',
    certified: true,
    features: [
      'FDA Approved',
      'An toàn cho da châu Á',
      'Thời gian hồi phục ngắn'
    ],
    applications: ['Sẹo rỗ', 'Nếp nhăn', 'Trẻ hóa']
  },
  {
    id: '2',
    name: 'IPL Quantum',
    origin: 'Israel',
    description: 'Hệ thống IPL đa năng, điều trị sắc tố, tàn nhang, mạch máu và nám da',
    icon: 'heroicons:light-bulb',
    certified: true,
    features: [
      'CE Certified',
      'Không đau, không xâm lấn',
      'Kết quả nhanh chóng'
    ],
    applications: ['Tàn nhang', 'Nám', 'Mạch máu']
  },
  {
    id: '3',
    name: 'HIFU Ultrasound',
    origin: 'Hàn Quốc',
    description: 'Công nghệ sóng siêu âm tập trung cường độ cao, nâng cơ không xâm lấn',
    icon: 'heroicons:signal',
    certified: true,
    features: [
      'Không phẫu thuật',
      'Kéo dài 12-18 tháng',
      'Kết quả tự nhiên'
    ],
    applications: ['Nâng cơ', 'Trẻ hóa', 'V-line']
  },
  {
    id: '4',
    name: 'RF Microneedling',
    origin: 'Hàn Quốc',
    description: 'Kết hợp sóng RF và kim microneedle, kích thích collagen hiệu quả gấp đôi',
    icon: 'heroicons:cpu-chip',
    certified: true,
    features: [
      'Công nghệ kép độc đáo',
      'Hiệu quả cao gấp 2 lần',
      'An toàn tuyệt đối'
    ],
    applications: ['Sẹo', 'Lỗ chân lông', 'Săn chắc']
  },
  {
    id: '5',
    name: 'Cryo Therapy',
    origin: 'Nhật Bản',
    description: 'Công nghệ điều trị lạnh, giúp se khít lỗ chân lông và làm dịu da',
    icon: 'heroicons:beaker',
    certified: true,
    features: [
      'Công nghệ Nhật Bản',
      'Không gây đau',
      'Làm dịu tức thì'
    ],
    applications: ['Se khít', 'Làm dịu', 'Chống viêm']
  },
  {
    id: '6',
    name: 'Oxygen Therapy',
    origin: 'Hoa Kỳ',
    description: 'Liệu pháp oxy áp lực cao, cung cấp dưỡng chất sâu cho da',
    icon: 'heroicons:sparkles',
    certified: true,
    features: [
      'Cấp ẩm chuyên sâu',
      'Tăng sinh collagen',
      'Làm sáng da'
    ],
    applications: ['Cấp ẩm', 'Dưỡng da', 'Làm sáng']
  }
]

const certifications = [
  {
    id: '1',
    name: 'FDA',
    description: 'Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ'
  },
  {
    id: '2',
    name: 'CE Mark',
    description: 'Chứng nhận Châu Âu'
  },
  {
    id: '3',
    name: 'ISO 9001',
    description: 'Tiêu chuẩn Quản lý Chất lượng'
  },
  {
    id: '4',
    name: 'Bộ Y Tế VN',
    description: 'Chứng nhận Bộ Y tế Việt Nam'
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

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>