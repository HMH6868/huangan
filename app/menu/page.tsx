"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Filter, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"

export default function MenuPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  const allBadges = [
    "Signature", "Premium", "Hot", "New", "Limited", "Bestseller", "Healthy", "Seasonal"
  ];

  const menuCategories = [
    {
      name: "Signature Collection",
      description: "Những sáng tạo độc quyền của HN Tea",
      color: "from-gold-500 to-gold-400",
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

  const toggleBadgeFilter = (badge: string) => {
    setSelectedBadges(prev => 
      prev.includes(badge) 
        ? prev.filter(b => b !== badge) 
        : [...prev, badge]
    );
  };

  const applyFilters = (item: any) => {
    // Filter by search query
    const matchesSearch = 
      searchQuery === "" || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by price
    const itemPrice = parseInt(item.price.replace(/\D/g, ''));
    const matchesPrice = itemPrice >= priceRange[0] && itemPrice <= priceRange[1];

    // Filter by rating
    const matchesRating = item.rating >= ratingFilter;

    // Filter by badges
    const matchesBadges = 
      selectedBadges.length === 0 || 
      item.badges.some((badge: string) => selectedBadges.includes(badge));

    return matchesSearch && matchesPrice && matchesRating && matchesBadges;
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  const resetFilters = () => {
    setPriceRange([0, 100000]);
    setRatingFilter(0);
    setSelectedBadges([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Star className="w-4 h-4 mr-2 text-gold-400" />
              <span className="text-sm font-medium">Premium Menu Collection</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Thực Đơn
              <span className="block text-transparent bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text mt-2 pb-2 pt-2">
                Đặc Biệt
              </span>
            </h1>
            <p className="text-xl text-navy-100 leading-relaxed">
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
              <Input 
                placeholder="Tìm kiếm đồ uống..." 
                className="pl-10 border-gray-200 focus:border-navy-500" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              className="border-navy-200 text-navy-700 hover:bg-navy-50 bg-transparent"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Bộ Lọc {selectedBadges.length > 0 || ratingFilter > 0 ? `(${selectedBadges.length + (ratingFilter > 0 ? 1 : 0)})` : ""}
            </Button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-5 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-navy-800">Lọc Sản Phẩm</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={resetFilters}>
                    Đặt lại
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Price Range Filter */}
                <div className="space-y-3">
                  <h4 className="font-medium text-navy-700">Giá tiền</h4>
                  <div className="px-2">
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={100000}
                      step={5000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-6"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="space-y-3">
                  <h4 className="font-medium text-navy-700">Đánh giá</h4>
                  <div className="space-y-2">
                    {[4.5, 4, 3.5, 3].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <Checkbox 
                          id={`rating-${rating}`} 
                          checked={ratingFilter === rating} 
                          onCheckedChange={() => setRatingFilter(ratingFilter === rating ? 0 : rating)}
                        />
                        <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center">
                          <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                          <span className="ml-1 text-sm">{rating}+ sao</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badge Filters */}
                <div className="space-y-3">
                  <h4 className="font-medium text-navy-700">Loại sản phẩm</h4>
                  <div className="flex flex-wrap gap-2">
                    {allBadges.map((badge) => (
                      <Button
                        key={badge}
                        variant={selectedBadges.includes(badge) ? "default" : "outline"}
                        size="sm"
                        className={selectedBadges.includes(badge) 
                          ? "bg-navy-600 text-white" 
                          : "bg-transparent text-navy-700"}
                        onClick={() => toggleBadgeFilter(badge)}
                      >
                        {badge}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {menuCategories.map((category, categoryIndex) => {
            // Filter items in each category
            const filteredItems = category.items.filter(applyFilters);
            
            // Only display categories with matching items
            if (filteredItems.length === 0) return null;

            return (
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
                  {filteredItems.map((item, itemIndex) => (
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
                                    ? "bg-gold-500 text-white"
                                    : badge === "Premium"
                                      ? "bg-navy-600 text-white"
                                      : badge === "Hot"
                                        ? "bg-red-500 text-white"
                                        : badge === "New"
                                          ? "bg-green-500 text-white"
                                          : badge === "Limited"
                                            ? "bg-gray-800 text-white"
                                            : badge === "Bestseller"
                                              ? "bg-blue-500 text-white"
                                              : badge === "Healthy"
                                                ? "bg-navy-500 text-white"
                                                : "bg-orange-500 text-white"
                                }`}
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                              <span className="text-sm font-semibold text-gray-800">{item.rating}</span>
                            </div>
                          </div>
                        </div>

                        <div className="md:w-1/2 p-6 flex flex-col justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-navy-900 mb-3">{item.name}</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <div className="flex items-center gap-3">
                                <span className="text-3xl font-bold text-navy-800">{item.price}</span>
                                {item.originalPrice && (
                                  <span className="text-lg text-gray-400 line-through">{item.originalPrice}</span>
                                )}
                              </div>
                            </div>
                            <Button className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3">
                              Thêm Vào Giỏ
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
          
          {/* No results message */}
          {menuCategories.every(category => category.items.filter(applyFilters).length === 0) && (
            <div className="text-center py-16">
              <div className="text-navy-700 text-2xl font-medium mb-2">Không tìm thấy sản phẩm</div>
              <p className="text-gray-500">Vui lòng thử với bộ lọc khác</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={resetFilters}
              >
                Xóa bộ lọc
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
