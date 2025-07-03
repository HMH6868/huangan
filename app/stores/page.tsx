import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Navigation, Star, Wifi, Car, CreditCard, Coffee } from "lucide-react"
import Image from "next/image"

export default function StoresPage() {
  const stores = [
    {
      name: "HN Tea Nguyễn Huệ Flagship",
      address: "123 Đường Nguyễn Huệ, Quận 1, TP.HCM",
      phone: "028-xxxx-xxxx",
      hours: "6:00 - 23:00",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.9,
      reviews: 1250,
      features: ["Wifi miễn phí", "Không gian VIP", "Chỗ ngồi 100+", "Live Music"],
      specialty: "Flagship Store",
      isNew: false,
    },
    {
      name: "HN Tea Lê Lợi Premium",
      address: "456 Đường Lê Lợi, Quận 1, TP.HCM",
      phone: "028-yyyy-yyyy",
      hours: "6:30 - 23:30",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.8,
      reviews: 980,
      features: ["Drive-thru", "Giao hàng 24/7", "Thanh toán QR", "Parking miễn phí"],
      specialty: "Drive-thru",
      isNew: false,
    },
    {
      name: "HN Tea Hoàn Kiếm Heritage",
      address: "789 Phố Hàng Bài, Hoàn Kiếm, Hà Nội",
      phone: "024-xxxx-xxxx",
      hours: "7:00 - 22:30",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.9,
      reviews: 1100,
      features: ["View hồ Gươm", "Không gian cổ điển", "Trà ceremony", "Art gallery"],
      specialty: "Heritage Store",
      isNew: false,
    },
    {
      name: "HN Tea Cầu Giấy Student Hub",
      address: "321 Đường Cầu Giấy, Cầu Giấy, Hà Nội",
      phone: "024-yyyy-yyyy",
      hours: "6:00 - 24:00",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.7,
      reviews: 850,
      features: ["Study space", "Giá sinh viên", "Sạc điện thoại", "Group booking"],
      specialty: "Student Friendly",
      isNew: false,
    },
    {
      name: "HN Tea Hải Châu Seaside",
      address: "654 Đường Trần Phú, Hải Châu, Đà Nẵng",
      phone: "0236-xxxx-xxxx",
      hours: "7:00 - 22:00",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.8,
      reviews: 720,
      features: ["View biển", "Outdoor seating", "Fresh seafood tea", "Sunset view"],
      specialty: "Seaside Experience",
      isNew: true,
    },
    {
      name: "HN Tea Sơn Trà Mountain View",
      address: "987 Đường Võ Nguyên Giáp, Sơn Trà, Đà Nẵng",
      phone: "0236-yyyy-yyyy",
      hours: "6:30 - 23:00",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.9,
      reviews: 650,
      features: ["View núi", "Garden seating", "Mountain tea blend", "Yoga space"],
      specialty: "Mountain Retreat",
      isNew: true,
    },
  ]

  const cities = [
    { name: "TP. Hồ Chí Minh", count: 18, color: "from-red-500 to-red-600", icon: "🏙️" },
    { name: "Hà Nội", count: 15, color: "from-blue-500 to-blue-600", icon: "🏛️" },
    { name: "Đà Nẵng", count: 10, color: "from-green-500 to-green-600", icon: "🏖️" },
    { name: "Cần Thơ", count: 7, color: "from-purple-500 to-purple-600", icon: "🌾" },
  ]

  const getFeatureIcon = (feature: string) => {
    if (feature.includes("Wifi")) return <Wifi className="w-4 h-4" />
    if (feature.includes("Drive-thru") || feature.includes("Parking")) return <Car className="w-4 h-4" />
    if (feature.includes("QR") || feature.includes("thanh toán")) return <CreditCard className="w-4 h-4" />
    return <Coffee className="w-4 h-4" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <MapPin className="w-4 h-4 mr-2 text-gold-400" />
              <span className="text-sm font-medium">Premium Store Network</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Hệ Thống
              <span className="block text-transparent bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text">
                Cửa Hàng
              </span>
            </h1>
            <p className="text-xl text-navy-100 leading-relaxed">
              Khám phá mạng lưới cửa hàng HN Tea trên toàn quốc với những trải nghiệm độc đáo
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              <span className="text-transparent bg-gradient-to-r from-gold-500 to-gold-400 bg-clip-text">50+</span> Cửa
              Hàng Cao Cấp
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              HN Tea có mặt tại các thành phố lớn với những không gian độc đáo và dịch vụ chuyên nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {cities.map((city, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader className="pb-2">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${city.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{city.icon}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-navy-900">{city.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-gold-600 mb-1">{city.count}</p>
                  <p className="text-gray-600">cửa hàng</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Store List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gold-100 rounded-full mb-6">
              <Star className="w-4 h-4 mr-2 text-gold-600" />
              <span className="text-gold-800 font-medium">Premium Locations</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">Danh Sách Cửa Hàng</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mỗi cửa hàng HN Tea đều mang một câu chuyện và trải nghiệm riêng biệt
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {stores.map((store, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-cream-100 to-cream-200 overflow-hidden">
                    <Image
                      src={store.image || "/placeholder.svg"}
                      alt={store.name}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-gold-500 text-white text-xs font-semibold rounded-full">
                      {store.specialty}
                    </span>
                    {store.isNew && (
                      <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">New</span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                      <span className="text-sm font-semibold text-gray-800">{store.rating}</span>
                      <span className="text-xs text-gray-600">({store.reviews})</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-navy-900">{store.name}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-1 text-gold-500 flex-shrink-0" />
                      <span className="text-gray-600">{store.address}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gold-500" />
                        <span className="text-gray-600">{store.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold-500" />
                        <span className="text-gray-600">{store.hours}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy-900 mb-3">Tiện Ích Đặc Biệt:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {store.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 px-3 py-2 bg-gold-50 text-gold-800 text-sm rounded-lg border border-gold-200"
                        >
                          {getFeatureIcon(feature)}
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <Navigation className="w-4 h-4 mr-2" />
                      Chỉ Đường
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-2 border-gold-400 text-gold-600 hover:bg-gold-50 bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Gọi Ngay
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Info */}
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
              Gia nhập hệ thống nhượng quyền HN Tea với mô hình kinh doanh đã được chứng minh thành công và hỗ trợ toàn
              diện từ A-Z
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-gold-400 mb-2">500M+</div>
                <p className="text-navy-100">Vốn đầu tư từ</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-gold-400 mb-2">6 tháng</div>
                <p className="text-navy-100">Thời gian hoàn vốn</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
                <p className="text-navy-100">Hỗ trợ vận hành</p>
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
