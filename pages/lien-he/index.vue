<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p class="text-lg text-gray-600">
            Đừng ngại liên hệ với chúng tôi để được tư vấn miễn phí về các dịch vụ thẩm mỹ phù hợp
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Liên Hệ Trực Tiếp
          </h2>
          
          <div class="grid md:grid-cols-3 gap-6 mb-16">
            <!-- Phone -->
            <a 
              href="tel:+84123456789"
              class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center border-2 border-transparent hover:border-primary"
            >
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:phone" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Hotline</h3>
              <p class="text-2xl font-bold text-primary mb-2">0123 456 789</p>
              <p class="text-sm text-gray-600">Tư vấn miễn phí 24/7</p>
            </a>

            <!-- Zalo -->
            <a 
              href="#"
              class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center border-2 border-transparent hover:border-primary"
            >
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="mdi:chat" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Zalo / WhatsApp</h3>
              <p class="text-2xl font-bold text-primary mb-2">0123 456 789</p>
              <p class="text-sm text-gray-600">Chat trực tuyến nhanh chóng</p>
            </a>

            <!-- Email -->
            <a 
              href="mailto:info@beautymedspa.vn"
              class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center border-2 border-transparent hover:border-primary"
            >
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:envelope" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p class="text-lg font-semibold text-primary mb-2">info@beautymedspa.vn</p>
              <p class="text-sm text-gray-600">Phản hồi trong 24h</p>
            </a>
          </div>

          <!-- Contact Form -->
          <div class="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
              Gửi Tin Nhắn Cho Chúng Tôi
            </h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <!-- Name -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên <span class="text-red-500">*</span>
                  </label>
                  <input 
                    v-model="formData.name" 
                    type="text" 
                    required
                    placeholder="Nhập họ và tên"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <!-- Phone -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại <span class="text-red-500">*</span>
                  </label>
                  <input 
                    v-model="formData.phone" 
                    type="tel" 
                    required
                    placeholder="0912345678"
                    pattern="[0-9]{10}"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <!-- Email -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Email <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="formData.email" 
                  type="email" 
                  required
                  placeholder="email@example.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <!-- Subject -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Chủ đề <span class="text-red-500">*</span>
                </label>
                <select 
                  v-model="formData.subject" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">-- Chọn chủ đề --</option>
                  <option value="consultation">Tư vấn dịch vụ</option>
                  <option value="pricing">Hỏi về giá</option>
                  <option value="booking">Đặt lịch hẹn</option>
                  <option value="complaint">Khiếu nại</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Nội dung <span class="text-red-500">*</span>
                </label>
                <textarea 
                  v-model="formData.message" 
                  rows="5"
                  required
                  placeholder="Nhập nội dung tin nhắn..."
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Gửi Tin Nhắn</span>
                <span v-else>Đang gửi...</span>
              </button>

              <!-- Success/Error Message -->
              <div v-if="submitMessage" :class="submitSuccess ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'" class="p-4 rounded-lg">
                {{ submitMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Location & Hours -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Địa Chỉ & Giờ Làm Việc
          </h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Address -->
            <div class="bg-white rounded-xl p-8 shadow-lg">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:map-pin" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Địa Chỉ</h3>
                  <p class="text-gray-600">
                    123 Đường ABC, Phường XYZ<br>
                    Quận 1, TP. Hồ Chí Minh<br>
                    Việt Nam
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:building-office" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">Tòa Nhà</h3>
                  <p class="text-gray-600">
                    Tầng 5, Tòa nhà ABC Tower<br>
                    (Gần công viên 30/4)
                  </p>
                </div>
              </div>
            </div>

            <!-- Working Hours -->
            <div class="bg-white rounded-xl p-8 shadow-lg">
              <div class="flex items-start space-x-4 mb-6">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:clock" class="w-6 h-6 text-primary" />
                </div>
                <div class="flex-grow">
                  <h3 class="text-xl font-bold text-gray-900 mb-4">Giờ Làm Việc</h3>
                  <div class="space-y-2">
                    <div class="flex justify-between">
                      <span class="text-gray-600">Thứ 2 - Thứ 6:</span>
                      <span class="font-semibold text-gray-900">8:00 - 20:00</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Thứ 7:</span>
                      <span class="font-semibold text-gray-900">8:00 - 18:00</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Chủ Nhật:</span>
                      <span class="font-semibold text-gray-900">9:00 - 17:00</span>
                    </div>
                  </div>
                  <p class="text-sm text-red-600 mt-4">
                    * Nghỉ các ngày lễ, Tết
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">
            Bản Đồ Chỉ Đường
          </h2>
          
          <div class="bg-gray-200 rounded-2xl overflow-hidden shadow-xl" style="height: 500px;">
            <!-- Placeholder for Google Maps -->
            <div class="w-full h-full flex items-center justify-center">
              <div class="text-center">
                <Icon name="heroicons:map-pin" class="w-24 h-24 text-gray-400 mx-auto mb-4" />
                <p class="text-xl font-semibold text-gray-700 mb-2">123 Đường ABC, Quận 1, TP.HCM</p>
                <p class="text-gray-600">Google Maps sẽ được tích hợp tại đây</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
            Câu Hỏi Thường Gặp
          </h2>
          
          <div class="space-y-4">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index"
              class="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ faq.question }}</h3>
              <p class="text-gray-600">{{ faq.answer }}</p>
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
  title: 'Liên Hệ - Beauty Med Spa',
  description: 'Liên hệ với Beauty Med Spa để được tư vấn miễn phí về các dịch vụ thẩm mỹ. Hotline: 0123 456 789 - Email: info@beautymedspa.vn',
  ogTitle: 'Liên Hệ - Beauty Med Spa',
  ogDescription: 'Liên hệ để được tư vấn miễn phí',
})

const formData = ref({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData.value
    })
    
    submitSuccess.value = true
    submitMessage.value = response.message || 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.'
    
    // Reset form after successful submission
    formData.value = {
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  } catch (error: any) {
    submitSuccess.value = false
    
    // Handle validation errors
    if (error.statusCode === 400 && error.data) {
      const errors = error.data.map((err: any) => err.message).join(', ')
      submitMessage.value = `Vui lòng kiểm tra lại thông tin: ${errors}`
    } else {
      submitMessage.value = 'Có lỗi xảy ra. Vui lòng thử lại sau hoặc gọi hotline: 0123 456 789'
    }
  } finally {
    isSubmitting.value = false
  }
}

const faqs = [
  {
    question: 'Làm thế nào để đặt lịch hẹn?',
    answer: 'Bạn có thể đặt lịch qua hotline 0123 456 789, Zalo, hoặc điền form đặt lịch trên website. Chúng tôi sẽ xác nhận lịch hẹn trong vòng 24h.'
  },
  {
    question: 'Có cần đặt cọc khi đặt lịch không?',
    answer: 'Không cần đặt cọc. Bạn chỉ cần đến đúng giờ hẹn. Nếu không thể đến, vui lòng thông báo trước ít nhất 24h.'
  },
  {
    question: 'Có bãi đỗ xe không?',
    answer: 'Có, chúng tôi có bãi đỗ xe miễn phí cho khách hàng tại tầng hầm của tòa nhà.'
  },
  {
    question: 'Có hỗ trợ thanh toán trả góp không?',
    answer: 'Có, chúng tôi hỗ trợ thanh toán qua thẻ tín dụng với nhiều gói trả góp 0% lãi suất.'
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

.focus\:ring-primary:focus {
  --tw-ring-color: #0066cc;
}
</style>