<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Về Chúng Tôi
          </h1>
          <p class="text-lg text-gray-600">
            Beauty Med Spa - Địa chỉ thẩm mỹ uy tín, đồng hành cùng vẻ đẹp tự nhiên của bạn
          </p>
        </div>
      </div>
    </section>

    <!-- About Story -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Câu Chuyện Của Chúng Tôi</h2>
              <div class="space-y-4 text-gray-600">
                <p>
                  Được thành lập từ năm 2010, Beauty Med Spa đã trở thành một trong những trung tâm thẩm mỹ uy tín hàng đầu tại Việt Nam. Với hơn 15 năm kinh nghiệm, chúng tôi tự hào đã đồng hành cùng hàng nghìn khách hàng trên hành trình tìm lại vẻ đẹp tự nhiên và sự tự tin.
                </p>
                <p>
                  Chúng tôi tin rằng vẻ đẹp thật sự đến từ sự tự tin và cân bằng giữa bên trong và bên ngoài. Vì vậy, mỗi liệu trình tại Beauty Med Spa không chỉ đơn thuần là cải thiện ngoại hình, mà còn là hành trình chăm sóc toàn diện cho sức khỏe và tinh thần của bạn.
                </p>
                <p>
                  Đội ngũ bác sĩ và chuyên gia của chúng tôi luôn cập nhật những công nghệ và kỹ thuật thẩm mỹ tiên tiến nhất, đồng thời đặt sự an toàn và hài lòng của khách hàng lên hàng đầu.
                </p>
              </div>
            </div>
            <div class="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl aspect-square flex items-center justify-center">
              <Icon name="heroicons:heart" class="w-32 h-32 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Mission -->
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="heroicons:sparkles" class="w-8 h-8 text-primary" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Sứ Mệnh</h3>
              <p class="text-gray-600 mb-4">
                Mang đến dịch vụ thẩm mỹ chất lượng cao nhất với công nghệ hiện đại, đội ngũ bác sĩ chuyên nghiệp và quy trình điều trị an toàn, giúp khách hàng tự tin với vẻ đẹp tự nhiên của mình.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center text-gray-600">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 mr-2" />
                  <span>An toàn tuyệt đối</span>
                </li>
                <li class="flex items-center text-gray-600">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 mr-2" />
                  <span>Chất lượng hàng đầu</span>
                </li>
                <li class="flex items-center text-gray-600">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 mr-2" />
                  <span>Dịch vụ tận tâm</span>
                </li>
              </ul>
            </div>

            <!-- Vision -->
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="heroicons:eye" class="w-8 h-8 text-purple-600" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Tầm Nhìn</h3>
              <p class="text-gray-600 mb-4">
                Trở thành trung tâm thẩm mỹ hàng đầu khu vực, được khách hàng tin tưởng và lựa chọn với tiêu chuẩn quốc tế về chất lượng dịch vụ, công nghệ và đạo đức nghề nghiệp.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center text-gray-600">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 mr-2" />
                  <span>Tiêu chuẩn quốc tế</span>
                </li>
                <li class="flex items-center text-gray-600">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 mr-2" />
                  <span>Công nghệ tiên tiến</span>
                </li>
                <li class="flex items-center text-gray-600">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-500 mr-2" />
                  <span>Đạo đức nghề nghiệp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Giá Trị Cốt Lõi</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:shield-check" class="w-10 h-10 text-primary" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">An Toàn</h3>
              <p class="text-gray-600">
                Sức khỏe và sự an toàn của khách hàng luôn là ưu tiên số một trong mọi quyết định
              </p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:heart" class="w-10 h-10 text-green-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Tận Tâm</h3>
              <p class="text-gray-600">
                Lắng nghe, thấu hiểu và đồng hành cùng khách hàng trên mọi bước đường
              </p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:star" class="w-10 h-10 text-purple-600" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Chất Lượng</h3>
              <p class="text-gray-600">
                Cam kết mang đến chất lượng dịch vụ tốt nhất với công nghệ và chuyên môn hàng đầu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">Con Số Ấn Tượng</h2>
          
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">15+</div>
              <div class="text-blue-200">Năm Kinh Nghiệm</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">10,000+</div>
              <div class="text-blue-200">Khách Hàng</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">98%</div>
              <div class="text-blue-200">Hài Lòng</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">20+</div>
              <div class="text-blue-200">Chuyên Gia</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Cơ Sở Vật Chất</h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white rounded-xl p-6 shadow-md">
              <Icon name="heroicons:building-office" class="w-12 h-12 text-primary mb-4" />
              <h3 class="text-xl font-bold text-gray-900 mb-2">Không Gian Hiện Đại</h3>
              <p class="text-gray-600">
                Thiết kế sang trọng, hiện đại với không gian rộng rãi, thoáng mát, mang lại cảm giác thoải mái và thư giãn
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md">
              <Icon name="heroicons:beaker" class="w-12 h-12 text-primary mb-4" />
              <h3 class="text-xl font-bold text-gray-900 mb-2">Phòng Điều Trị Cao Cấp</h3>
              <p class="text-gray-600">
                Trang bị đầy đủ thiết bị y tế hiện đại, đảm bảo quy trình vô trùng nghiêm ngặt
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md">
              <Icon name="heroicons:user-group" class="w-12 h-12 text-primary mb-4" />
              <h3 class="text-xl font-bold text-gray-900 mb-2">Phòng Chờ Tiện Nghi</h3>
              <p class="text-gray-600">
                Phòng chờ được bố trí thoải mái với đầy đủ tiện nghi, tạp chí và wifi miễn phí
              </p>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md">
              <Icon name="heroicons:lock-closed" class="w-12 h-12 text-primary mb-4" />
              <h3 class="text-xl font-bold text-gray-900 mb-2">Bảo Mật Thông Tin</h3>
              <p class="text-gray-600">
                Cam kết bảo mật tuyệt đối mọi thông tin và hình ảnh của khách hàng
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
  title: 'Về Chúng Tôi - Beauty Med Spa',
  description: 'Tìm hiểu về Beauty Med Spa - Trung tâm thẩm mỹ uy tín với hơn 15 năm kinh nghiệm, đội ngũ bác sĩ chuyên nghiệp và công nghệ hiện đại.',
  ogTitle: 'Về Chúng Tôi - Beauty Med Spa',
  ogDescription: 'Trung tâm thẩm mỹ uy tín hàng đầu Việt Nam',
})
</script>

<style scoped>
.text-primary {
  color: #0066cc;
}

.bg-primary {
  background-color: #0066cc;
}
</style>