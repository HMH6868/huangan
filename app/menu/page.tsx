import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function MenuPage() {
  const menuCategories = [
    {
      name: "Signature Collection",
      description: "Những sáng tạo độc quyền của HN Tea",
      color: "from-rose-gold-500 to-rose-gold-400",
      items: [
        {
          name: "Royal Milk Tea",
          description: "Trà sữa hoàng gia với trân châu vàng",
          price: "55.000đ",
          originalPrice: "65.000đ",
          image: "/placeholder.svg?height=300&width=300",
          rating: 4.9,
          badges: ["Signature", "Hot"],
        },
        {
          name: "Emerald Matcha Supreme",
          description: "Matcha cao cấp với kem tươi Hokkaido",
          price: "62.000đ",
          image: "/placeholder.svg?height=300&width=300",
          rating: 4.8,
          badges: ["Premium", "Limited"],
        },
      ],
    },
    {
      name: "Artisan Ice Cream Tea",
      description: "Sự kết hợp hoàn hảo giữa trà và kem thủ công",
      color: "from-purple-500 to-purple-400",
      items: [
        {
          name: "Vanilla Bean Tea Float",
          description: "Trà đen với kem vanilla Madagascar",
          price: "48.000đ",
          image: "/placeholder.svg?height=300&width=300",
          rating: 4.7,
          badges: ["New"],
        },
        {
          name: "Chocolate Mint Tea",
          description: "Trà chocolate với kem bạc hà tươi mát",
          price: "52.000đ",
          image: "/placeholder.svg?height=300&width=300",
          rating: 4.8,
          badges: ["Bestseller"],
        },
      ],
    },
    {
      name: "Fresh Fruit Tea",
      description: "Trà trái cây tươi ngon, thanh mát",
      color: "from-emerald-500 to-teal-400",
      items: [
        {
          name: "Passion Fruit Green Tea",
          description: "Trà xanh với chanh dây tươi",
          price: "38.000đ",
          image: "/placeholder.svg?height=300&width=300",
          rating: 4.6,
          badges: ["Healthy"],
        },
        {
          name: "Lychee Rose Tea",
          description: "Trà hoa hồng với vải thiều",
          price: "42.000đ",
          image: "/placeholder.svg?height=300&width=300",
          rating: 4.7,
          badges: ["Seasonal"],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Star className="w-4 h-4 mr-2 text-rose-gold-400" />
              <span className="text-sm font-medium">Premium Menu Collection</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Thực Đơn
              <span className="block text-transparent bg-gradient-to-r from-rose-gold-400 to-rose-gold-300 bg-clip-text">
                Đặc Biệt
              </span>
            </h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Khám phá bộ sưu tập đồ uống được chế tác tỉ mỉ với nguyên liệu cao cấp
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Tìm kiếm đồ uống..." className="pl-10 border-gray-200 focus:border-emerald-500" />
            </div>
            <Button
              variant="outline"
              className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
            >
              <Filter className="w-4 h-4 mr-2" />
              Bộ Lọc
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`inline-block p-1 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
                  <div className="bg-white rounded-xl px-6 py-3">
                    <h2
                      className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.name}
                    </h2>
                  </div>
                </div>
                <p className="text-gray-600 text-lg">{category.description}</p>
              </div>

              {/* Category Items */}
              <div className="grid lg:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/2 relative">
                        <div className="aspect-square bg-gradient-to-br from-cream-100 to-cream-200 overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          {item.badges.map((badge, badgeIndex) => (
                            <span
                              key={badgeIndex}
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                badge === "Signature"
                                  ? "bg-rose-gold-500 text-white"
                                  : badge === "Premium"
                                    ? "bg-purple-600 text-white"
                                    : badge === "Hot"
                                      ? "bg-red-500 text-white"
                                      : badge === "New"
                                        ? "bg-green-500 text-white"
                                        : badge === "Limited"
                                          ? "bg-gray-800 text-white"
                                          : badge === "Bestseller"
                                            ? "bg-blue-500 text-white"
                                            : badge === "Healthy"
                                              ? "bg-emerald-500 text-white"
                                              : "bg-orange-500 text-white"
                              }`}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-semibold text-gray-800">{item.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:w-1/2 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-emerald-900 mb-3">{item.name}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl font-bold text-emerald-800">{item.price}</span>
                              {item.originalPrice && (
                                <span className="text-lg text-gray-400 line-through">{item.originalPrice}</span>
                              )}
                            </div>
                          </div>
                          <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3">
                            Thêm Vào Giỏ
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
