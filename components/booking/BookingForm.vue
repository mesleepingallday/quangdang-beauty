<template>
  <div class="booking-form bg-white rounded-2xl shadow-xl p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Đặt Lịch Hẹn</h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Service Selection -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Dịch vụ <span class="text-red-500">*</span>
        </label>
        <select 
          v-model="formData.serviceId" 
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">-- Chọn dịch vụ --</option>
          <option v-for="service in services" :key="service.id" :value="service.id">
            {{ service.name }}
          </option>
        </select>
      </div>

      <!-- Customer Name -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Họ và tên <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="formData.customerName" 
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

      <!-- Date -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Ngày hẹn <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="formData.preferredDate" 
          type="date" 
          required
          :min="minDate"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <!-- Time -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Giờ hẹn <span class="text-red-500">*</span>
        </label>
        <select 
          v-model="formData.preferredTime" 
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">-- Chọn giờ --</option>
          <option v-for="time in timeSlots" :key="time" :value="time">
            {{ time }}
          </option>
        </select>
      </div>

      <!-- Message -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Ghi chú (không bắt buộc)
        </label>
        <textarea 
          v-model="formData.message" 
          rows="4"
          placeholder="Nhập ghi chú hoặc yêu cầu đặc biệt..."
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button 
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="!isSubmitting">Đặt Lịch Ngay</span>
        <span v-else>Đang xử lý...</span>
      </button>

      <!-- Success/Error Message -->
      <div v-if="submitMessage" :class="submitSuccess ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'" class="p-4 rounded-lg">
        {{ submitMessage }}
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const formData = ref({
  serviceId: '',
  customerName: '',
  phone: '',
  email: '',
  preferredDate: '',
  preferredTime: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitMessage = ref('')

const services = [
  { id: '1', name: 'Tiêm Botox' },
  { id: '2', name: 'Tiêm Filler' },
  { id: '3', name: 'Trị Liệu IPL' },
  { id: '4', name: 'Microneedling' },
  { id: '5', name: 'HydraFacial' },
  { id: '6', name: 'Chăm Sóc Da Chuyên Sâu' }
]

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
]

const minDate = computed(() => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
})

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    const response = await $fetch('/api/booking', {
      method: 'POST',
      body: formData.value
    })
    
    submitSuccess.value = true
    submitMessage.value = response.message || 'Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.'
    
    // Reset form after successful submission
    formData.value = {
      serviceId: '',
      customerName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: '',
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
      submitMessage.value = 'Có lỗi xảy ra. Vui lòng thử lại sau hoặc liên hệ hotline: +84 123 456 789'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.focus\:ring-primary:focus {
  --tw-ring-color: #0066cc;
}

.bg-primary {
  background-color: #0066cc;
}

.bg-primary-dark {
  background-color: #0052a3;
}
</style>