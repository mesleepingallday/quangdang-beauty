<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tin Tức & Blog
          </h1>
          <p class="text-lg text-gray-600">
            Cập nhật tin tức làm đẹp, xu hướng thẩm mỹ và mẹo chăm sóc da
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="post in blogPosts"
            :key="post.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <!-- Post Image -->
            <div class="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <Icon :name="post.icon" class="w-16 h-16 text-primary" />
            </div>

            <!-- Post Content -->
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full">
                  {{ post.category }}
                </span>
                <span class="text-xs text-gray-500">
                  {{ formatDate(post.date) }}
                </span>
              </div>
              
              <h2 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {{ post.title }}
              </h2>
              
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ post.excerpt }}
              </p>

              <!-- Read More Link -->
              <NuxtLink 
                :to="post.slug"
                class="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
              >
                <span>Đọc thêm</span>
                <Icon name="heroicons:arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          Danh Mục Tin Tức
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <NuxtLink
            v-for="category in categories"
            :key="category.href"
            :to="category.href"
            class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <Icon :name="category.icon" class="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ category.name }}</h3>
            <p class="text-sm text-gray-600">{{ category.count }} bài viết</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <BookingCTA />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Tin Tức & Blog - Beauty Med Spa',
  description: 'Tin tức làm đẹp, xu hướng thẩm mỹ, mẹo chăm sóc da và câu hỏi thường gặp từ chuyên gia.',
  ogTitle: 'Tin Tức & Blog - Beauty Med Spa',
  ogDescription: 'Cập nhật tin tức làm đẹp và xu hướng thẩm mỹ mới nhất',
})

const blogPosts = [
  {
    id: '1',
    slug: '/tin-tuc/xu-huong-tham-my-2024',
    title: 'Xu Hướng Thẩm Mỹ 2024: Tự Nhiên Là Chìa Khóa',
    excerpt: 'Khám phá những xu hướng làm đẹp hot nhất năm 2024, tập trung vào vẻ đẹp tự nhiên và bền vững.',
    category: 'Xu Hướng',
    date: new Date('2024-01-15'),
    icon: 'heroicons:sparkles'
  },
  {
    id: '2',
    slug: '/tin-tuc/cham-soc-da-mua-kho',
    title: 'Bí Quyết Chăm Sóc Da Hiệu Quả Mùa Khô',
    excerpt: 'Hướng dẫn chi tiết cách chăm sóc và bảo vệ làn da khỏe mạnh trong thời tiết khô hanh.',
    category: 'Mẹo Chăm Sóc',
    date: new Date('2024-01-10'),
    icon: 'heroicons:heart'
  },
  {
    id: '3',
    slug: '/tin-tuc/botox-vs-filler',
    title: 'Botox Hay Filler: Lựa Chọn Nào Phù Hợp Với Bạn?',
    excerpt: 'So sánh chi tiết giữa Botox và Filler để giúp bạn đưa ra quyết định đúng đắn.',
    category: 'Tin Tức',
    date: new Date('2024-01-05'),
    icon: 'heroicons:beaker'
  },
  {
    id: '4',
    slug: '/tin-tuc/cau-hoi-ve-hydrafacial',
    title: 'Top 10 Câu Hỏi Thường Gặp Về HydraFacial',
    excerpt: 'Giải đáp những thắc mắc phổ biến nhất về liệu trình HydraFacial từ chuyên gia.',
    category: 'FAQ',
    date: new Date('2024-01-01'),
    icon: 'heroicons:question-mark-circle'
  },
  {
    id: '5',
    slug: '/tin-tuc/cong-nghe-microneedling',
    title: 'Công Nghệ Microneedling: Làm Mới Làn Da Từ Bên Trong',
    excerpt: 'Tìm hiểu về công nghệ Microneedling và cách thức hoạt động để cải thiện làn da.',
    category: 'Tin Tức',
    date: new Date('2023-12-28'),
    icon: 'heroicons:arrow-path'
  },
  {
    id: '6',
    slug: '/tin-tuc/meo-chong-lao-hoa',
    title: '5 Mẹo Chống Lão Hóa Da Hiệu Quả Tại Nhà',
    excerpt: 'Những bí quyết đơn giản nhưng hiệu quả để duy trì làn da trẻ trung và khỏe mạnh.',
    category: 'Mẹo Chăm Sóc',
    date: new Date('2023-12-25'),
    icon: 'heroicons:sun'
  }
]

const categories = [
  {
    name: 'Tin Tức Làm Đẹp',
    href: '/tin-tuc/tin-tuc-lam-dep',
    icon: 'heroicons:newspaper',
    count: 12
  },
  {
    name: 'Mẹo Chăm Sóc Da',
    href: '/tin-tuc/meo-cham-soc-da',
    icon: 'heroicons:heart',
    count: 8
  },
  {
    name: 'Xu Hướng Thẩm Mỹ',
    href: '/tin-tuc/xu-huong-tham-my',
    icon: 'heroicons:sparkles',
    count: 6
  },
  {
    name: 'Câu Hỏi Thường Gặp',
    href: '/tin-tuc/faq',
    icon: 'heroicons:question-mark-circle',
    count: 15
  }
]

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}
</script>

<style scoped>
.text-primary {
  color: #0066cc;
}

.text-primary-dark {
  color: #0052a3;
}

.bg-primary {
  background-color: #0066cc;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>