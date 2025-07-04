import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Navigation, Star, Wifi, Car, CreditCard, Coffee, Users, Calendar } from "lucide-react"
import Image from "next/image"

export default function StoresPage() {
  const mainStore = {
    name: "HN Tea Flagship Store",
    address: "123 Đường Nguyễn Huệ, Quận 1, TP.HCM",
    phone: "028-xxxx-xxxx",
    hours: "7:00 - 22:00",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    reviews: 1250,
    features: [
      { name: "Wifi miễn phí", icon: Wifi },
      { name: "Không gian VIP", icon: Users },
      { name: "Chỗ ngồi 80+", icon: Coffee },
      { name: "Parking miễn phí", icon: Car },
      { name: "Thanh toán QR", icon: CreditCard },
      { name: "Giao hàng tận nơi", icon: Navigation },
    ],
    specialty: "Flagship Store",
    description: "Cửa hàng đầu tiên và lớn nhất của HN Tea với không gian sang trọng, hiện đại và đầy đủ tiện nghi.",
    highlights: [
      "Không gian 200m² với thiết kế hiện đại",
      "Khu vực VIP riêng biệt cho khách hàng thân thiết",
      "Menu đầy đủ với hơn 50 loại đồ uống",
      "Đội ngũ barista chuyên nghiệp được đào tạo bài bản",
      "Phục vụ từ 7:00 sáng đến 22:00 tối hàng ngày",
    ],
  }

  const operatingHours = [
    { day: "Thứ 2 - Thứ 6", hours: "7:00 - 22:00" },
    { day: "Lễ Tết", hours: "8:00 - 21:00" },
  ]

  const expansionPlans = [
    { location: "Quận 3, TP.HCM", timeline: "Q2 2024", status: "Đang khảo sát" },
    { location: "Quận 7, TP.HCM", timeline: "Q3 2024", status: "Đang tìm mặt bằng" },
    { location: "Hà Nội", timeline: "Q4 2024", status: "Lên kế hoạch" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <MapPin className="w-4 h-4 mr-2 text-gold-400" />
              <span className="text-sm font-medium">Our Premium Location</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Cửa Hàng
              <span className="block text-transparent bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text">
                HN Tea
              </span>
            </h1>
            <p className="text-xl text-navy-100 leading-relaxed">
              Khám phá không gian trà sữa cao cấp đầu tiên của chúng tôi tại trung tâm Sài Gòn
            </p>
          </div>
        </div>
      </section>

      {/* Main Store Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Store Hero Card */}
            <Card className="mb-16 overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-cream-100 to-cream-200 overflow-hidden">
                    <Image
                      src={mainStore.image || "/placeholder.svg"}
                      alt={mainStore.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-gold-500 text-white text-sm font-semibold rounded-full">
                      {mainStore.specialty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
                      <span className="text-lg font-bold text-gray-800">{mainStore.rating}</span>
                      <span className="text-sm text-gray-600">({mainStore.reviews} đánh giá)</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">{mainStore.name}</h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{mainStore.description}</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 mt-1 text-gold-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{mainStore.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gold-500" />
                      <span className="text-gray-700 font-medium">{mainStore.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gold-500" />
                      <span className="text-gray-700 font-medium">Mở cửa: {mainStore.hours}</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3">
                      <Navigation className="w-4 h-4 mr-2" />
                      Chỉ Đường
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-2 border-gold-400 text-gold-600 hover:bg-gold-50 bg-transparent py-3"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Gọi Ngay
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Store Features */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Tiện Ích Đặc Biệt</h3>
                <div className="grid grid-cols-2 gap-4">
                  {mainStore.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gold-50 rounded-xl border border-gold-200 hover:bg-gold-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-navy-800">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Điểm Nổi Bật</h3>
                <ul className="space-y-3">
                  {mainStore.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Operating Hours */}
            <Card className="mb-16 border-0 bg-gradient-to-br from-navy-50 to-gold-50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-navy-900 flex items-center justify-center gap-2">
                  <Clock className="w-6 h-6 text-gold-500" />
                  Giờ Hoạt Động
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="font-semibold text-navy-800 mb-2">{schedule.day}</div>
                      <div className="text-2xl font-bold text-gold-600">{schedule.hours}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gold-100 rounded-full mb-6">
              <Calendar className="w-4 h-4 mr-2 text-gold-600" />
              <span className="text-gold-800 font-medium">Kế Hoạch Mở Rộng</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Sắp Có Thêm
              <span className="block text-transparent bg-gradient-to-r from-gold-500 to-gold-400 bg-clip-text">
                Cửa Hàng Mới
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chúng tôi đang lên kế hoạch mở rộng để phục vụ khách hàng tốt hơn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {expansionPlans.map((plan, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-navy-900">{plan.location}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-gold-600">{plan.timeline}</div>
                    <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {plan.status}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Franchise */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">
              Quan Tâm Đến
              <span className="block text-transparent bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text">
                Nhượng Quyền?
              </span>
            </h3>
            <p className="text-xl text-navy-100 mb-8 leading-relaxed">
              Gia nhập cùng HN Tea để mở rộng thương hiệu trà sữa cao cấp ra toàn quốc. Chúng tôi đang tìm kiếm những
              đối tác uy tín để cùng phát triển.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-gold-400 mb-2">300M+</div>
                <p className="text-navy-100">Vốn đầu tư từ</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-gold-400 mb-2">8-12 tháng</div>
                <p className="text-navy-100">Thời gian hoàn vốn</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-gold-400 mb-2">100%</div>
                <p className="text-navy-100">Hỗ trợ setup</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-navy-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
              >
                Tìm Hiểu Nhượng Quyền
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-white/5 px-8 py-6 text-lg font-semibold"
              >
                Liên Hệ Tư Vấn
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
