import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, MapPin, Phone, Award, Heart, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"

export default function HomePage() {
  const featuredProducts = [
    {
      name: "Signature Milk Tea",
      description: "Trà sữa đặc biệt với công thức bí mật",
      price: "45.000đ",
      originalPrice: "55.000đ",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      badge: "Bestseller",
    },
    {
      name: "Premium Matcha Latte",
      description: "Matcha Nhật Bản nguyên chất",
      price: "52.000đ",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      badge: "Premium",
    },
    {
      name: "Royal Golden Tea",
      description: "Trà hoàng gia với lá vàng thực",
      price: "68.000đ",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      badge: "Luxury",
    },
  ]

  const features = [
    {
      icon: Award,
      title: "Chất Lượng Cao Cấp",
      description: "Nguyên liệu nhập khẩu từ các vùng trà nổi tiếng thế giới",
    },
    {
      icon: Heart,
      title: "Pha Chế Thủ Công",
      description: "Mỗi ly được pha chế tỉ mỉ bởi barista chuyên nghiệp",
    },
    {
      icon: Sparkles,
      title: "Trải Nghiệm Đặc Biệt",
      description: "Không gian sang trọng, dịch vụ chu đáo",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/50 to-transparent"></div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Sparkles className="w-4 h-4 mr-2 text-gold-400" />
                <span className="text-sm font-medium">Trải nghiệm đẳng cấp</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Nghệ Thuật
                  <span className="block text-transparent bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text pb-2 pt-2">
                    Trà Sữa
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-navy-100 leading-relaxed max-w-lg">
                  Khám phá hương vị tinh tế từ những ly trà sữa được pha chế thủ công với tình yêu và sự tỉ mỉ
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-navy-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
                >
                  <Link href="/menu">Khám Phá Thực Đơn</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-white/5 px-8 py-6 text-lg font-semibold"
                >
                  <Link href="/stores">Tìm Cửa Hàng</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-navy-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <Image
                  src="/logo.webp"
                  alt={`${siteConfig.name} Premium`}
                  width={200}
                  height={200}
                  className="mx-auto rounded-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-white to-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gold-100 rounded-full mb-6">
              <Star className="w-4 h-4 mr-2 text-gold-600" />
              <span className="text-gold-800 font-medium">Sản Phẩm Đặc Biệt</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Bộ Sưu Tập
              <span className="block text-transparent bg-gradient-to-r from-gold-500 to-gold-400 bg-clip-text mt-2 pb-3">
                Signature
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những sáng tạo độc đáo được yêu thích nhất tại {siteConfig.name}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-cream-100 to-cream-200 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.badge === "Bestseller"
                          ? "bg-gold-500 text-white"
                          : product.badge === "Premium"
                            ? "bg-navy-600 text-white"
                            : "bg-purple-500 text-white"
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                      <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-navy-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gold-600">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Xem Chi Tiết
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Tại Sao Chọn
              <span className="block text-transparent bg-gradient-to-r from-gold-500 to-gold-400 bg-clip-text mt-2 p-3">
                {siteConfig.name}?
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-gold-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Trải Nghiệm
              <span className="block text-transparent bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text mt-2 pb-3 pt-3">
                Đẳng Cấp
              </span>
            </h2>
            <p className="text-xl text-navy-100 mb-8 leading-relaxed">
              Đặt hàng ngay hôm nay và cảm nhận sự khác biệt từ những ly trà sữa được chế tác tỉ mỉ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-navy-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
              >
                <Link href="/menu">Đặt Hàng Ngay</Link>
              </Button>
              <div className="flex items-center justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gold-400" />
                  <span className="font-medium">{siteConfig.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  <span className="font-medium">{siteConfig.stores.count} Cửa Hàng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
