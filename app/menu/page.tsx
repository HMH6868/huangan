  "use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Search, Coffee, IceCream, Filter, X, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

type MenuItem = {
  id: string;
  _id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  badge: string;
  popular: boolean;
  flavor: string;
  category: string;
  available: boolean;
  prices?: { S: number; M: number; L: number };
  price?: number;
}

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({})
  const [showFilters, setShowFilters] = useState(false)

  // API data states
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 60000])
  const [selectedBadges, setSelectedBadges] = useState<string[]>([])
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])
  const [showPopularOnly, setShowPopularOnly] = useState(false)
  const [sortBy, setSortBy] = useState("name") // name, price-low, price-high, rating

  // Fetch menu items from API
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        // Thay đổi URL để sử dụng API route local thay vì gọi trực tiếp đến API bên ngoài
        const response = await fetch('/api/menu')
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        
        // Transform API data to match our component's expected structure
        const transformedData = data.map((item: any) => ({
          id: item._id,
          _id: item._id,
          name: item.name,
          description: item.description,
          image: item.image || "/placeholder.svg?height=250&width=250",
          rating: item.rating,
          badge: item.badge || "",
          popular: item.popular || false,
          flavor: item.flavor || "",
          category: item.category,
          available: item.available,
          prices: item.prices,
          price: item.price,
        }))
        
        setMenuItems(transformedData)
        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch menu items:", err)
        setError("Failed to load menu items. Please try again later.")
        setLoading(false)
      }
    }
    
    fetchMenuItems()
  }, [])

  // Get milk tea and ice cream items from the fetched data
  const milkTeaItems = menuItems.filter(item => item.category === 'milktea')
  const iceCreamItems = menuItems.filter(item => item.category === 'icecream')

  // Extract unique badges and flavors from API data
  const badges = Array.from(new Set(menuItems.map(item => item.badge).filter(Boolean)))

  const milkTeaFlavors = [
    { id: "classic", name: "Trà Cổ Điển" },
    { id: "matcha", name: "Matcha" },
    { id: "tea", name: "Trà Đặc Biệt" },
    { id: "taro", name: "Taro" },
    { id: "chocolate", name: "Chocolate" },
    { id: "fruit", name: "Trái Cây" },
    { id: "vanilla", name: "Vanilla" },
    { id: "caramel", name: "Caramel" },
    { id: "cheese", name: "Phô Mai" },
    { id: "brown-sugar", name: "Đường Nâu" },
  ]

  const iceCreamFlavors = [
    { id: "vanilla", name: "Vanilla" },
    { id: "chocolate", name: "Chocolate" },
    { id: "fruit", name: "Trái Cây" },
    { id: "matcha", name: "Matcha" },
    { id: "taro", name: "Taro" },
    { id: "cookies", name: "Cookies" },
    { id: "caramel", name: "Caramel" },
    { id: "coconut", name: "Dừa" },
    { id: "coffee", name: "Cà Phê" },
    { id: "rum", name: "Rum" },
    { id: "sesame", name: "Mè Đen" },
  ]

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ"
  }

  const getItemPrice = (item: any) => {
    if (item.price) return item.price
    return item.prices?.S || 0 // Default size
  }

  const filterAndSortItems = (items: any[], currentTab: string) => {
    const filtered = items.filter((item) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Price filter
      const itemPrice = getItemPrice(item)
      const matchesPrice = itemPrice >= priceRange[0] && itemPrice <= priceRange[1]

      // Badge filter
      const matchesBadge = selectedBadges.length === 0 || selectedBadges.includes(item.badge)

      // Flavor filter
      const matchesFlavor = selectedFlavors.length === 0 || selectedFlavors.includes(item.flavor)

      // Popular filter
      const matchesPopular = !showPopularOnly || item.popular

      return matchesSearch && matchesPrice && matchesBadge && matchesFlavor && matchesPopular
    })

    // Sort items
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return getItemPrice(a) - getItemPrice(b)
        case "price-high":
          return getItemPrice(b) - getItemPrice(a)
        case "rating":
          return b.rating - a.rating
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }

  const clearFilters = () => {
    setPriceRange([0, 60000])
    setSelectedBadges([])
    setSelectedFlavors([])
    setShowPopularOnly(false)
    setSortBy("name")
    setSearchQuery("")
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (selectedBadges.length > 0) count++
    if (selectedFlavors.length > 0) count++
    if (showPopularOnly) count++
    if (priceRange[0] > 0 || priceRange[1] < 60000) count++
    return count
  }

  const getSelectedSize = (itemId: string) => {
    return selectedSizes[itemId] || "S" // Default size
  }

  const setSelectedSize = (itemId: string, size: string) => {
    setSelectedSizes({ ...selectedSizes, [itemId]: size })
  }

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-navy-900 mb-2">Đang tải menu...</div>
          <p className="text-gray-600">Vui lòng đợi trong giây lát</p>
        </div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600 mb-2">Lỗi</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Thử lại</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1.5 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 lg:mb-6">
              <Star className="w-3 h-3 lg:w-4 lg:h-4 mr-2 text-gold-400" />
              <span className="text-xs lg:text-sm font-medium">Trà Sữa & Kem Cao Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
              Thực Đơn
              <span className="block text-transparent bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text">
                HN Tea
              </span>
            </h1>
            <p className="text-base lg:text-xl text-navy-100 leading-relaxed px-4">
              Trà sữa thủ công và kem tươi ngon được chế tác từ nguyên liệu cao cấp
            </p>
          </div>
        </div>
      </section> */}

      {/* Search and Filter Bar */}
      <section className="py-2 lg:py-3 bg-white shadow-sm sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-3 lg:items-center lg:justify-between">
            <div className="relative w-full lg:flex-1 lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 lg:w-4 lg:h-4" />
              <Input
                placeholder="Tìm kiếm..."
                className="pl-9 lg:pl-9 border-gray-200 focus:border-navy-500 h-8 lg:h-9 text-xs lg:text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Button
              variant="outline"
              size="sm"
              className="border-navy-200 text-navy-700 hover:bg-navy-50 bg-transparent relative w-full lg:w-auto justify-center lg:justify-start h-8 lg:h-9 text-xs"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-3.5 h-3.5 mr-1.5" />
              Bộ Lọc
              {getActiveFiltersCount() > 0 && (
                <span className="absolute -top-1 -right-1 lg:-top-1.5 lg:-right-1.5 bg-gold-500 text-white text-xs rounded-full w-4 h-4 lg:w-4 lg:h-4 flex items-center justify-center">
                  {getActiveFiltersCount()}
                </span>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Panel */}
      {showFilters && (
        <section className="py-4 lg:py-6 bg-navy-50 border-b">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg p-4 lg:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h3 className="text-base lg:text-lg font-semibold text-navy-900 flex items-center gap-2">
                  <Filter className="w-4 h-4 lg:w-5 lg:h-5" />
                  Bộ Lọc
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="text-xs lg:text-sm px-2 lg:px-3 bg-transparent"
                  >
                    <X className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                    <span className="hidden sm:inline">Xóa</span>
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setShowFilters(false)} className="px-2 lg:px-3">
                    <X className="w-3 h-3 lg:w-4 lg:h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {/* Price Range */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                  <h4 className="font-medium text-navy-800 mb-3 text-sm lg:text-base">Khoảng Giá</h4>
                  <div className="space-y-3">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={60000}
                      min={0}
                      step={5000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs lg:text-sm text-gray-600">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h4 className="font-medium text-navy-800 mb-3 text-sm lg:text-base">Sắp Xếp</h4>
                  <div className="space-y-2">
                    {[
                      { id: "name", name: "Tên A-Z" },
                      { id: "price-low", name: "Giá Thấp" },
                      { id: "price-high", name: "Giá Cao" },
                      { id: "rating", name: "Đánh Giá" },
                    ].map((option) => (
                      <label key={option.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="sort"
                          value={option.id}
                          checked={sortBy === option.id}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="text-navy-600"
                        />
                        <span className="text-xs lg:text-sm">{option.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                <div>
                  <h4 className="font-medium text-navy-800 mb-3 text-sm lg:text-base">Loại Đặc Biệt</h4>
                  <div className="space-y-2 max-h-24 lg:max-h-32 overflow-y-auto">
                    {badges.slice(0, 4).map((badge) => (
                      <label key={badge} className="flex items-center space-x-2 cursor-pointer">
                        <Checkbox
                          checked={selectedBadges.includes(badge)}
                          onCheckedChange={(checked) => {
                            if (checked === true) {
                              setSelectedBadges([...selectedBadges, badge])
                            } else {
                              setSelectedBadges(selectedBadges.filter((b) => b !== badge))
                            }
                          }}
                        />
                        <span className="text-xs lg:text-sm">{badge}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Other Filters */}
                <div>
                  <h4 className="font-medium text-navy-800 mb-3 text-sm lg:text-base">Khác</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <Checkbox 
                        checked={showPopularOnly} 
                        onCheckedChange={(checked) => {
                          if (typeof checked === 'boolean') {
                            setShowPopularOnly(checked)
                          }
                        }} 
                      />
                      <span className="text-xs lg:text-sm">Món phổ biến</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Menu Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="milk-tea" className="w-full">
            <TabsList className="grid w-full max-w-xs sm:max-w-md mx-auto grid-cols-2 mb-8 lg:mb-12 bg-navy-100 h-12 lg:h-auto">
              <TabsTrigger
                value="milk-tea"
                className="data-[state=active]:bg-navy-600 data-[state=active]:text-white flex items-center gap-1 lg:gap-2 text-xs lg:text-sm"
              >
                <Coffee className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Trà Sữa</span>
                <span className="sm:hidden">Trà</span>
              </TabsTrigger>
              <TabsTrigger
                value="ice-cream"
                className="data-[state=active]:bg-gold-500 data-[state=active]:text-navy-900 flex items-center gap-1 lg:gap-2 text-xs lg:text-sm"
              >
                <IceCream className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Kem</span>
                <span className="sm:hidden">Kem</span>
              </TabsTrigger>
            </TabsList>

            {/* Milk Tea Tab */}
            <TabsContent value="milk-tea">
              {/* Flavor Filter for Milk Tea */}
              <div className="mb-6 lg:mb-8">
                <div className="flex flex-wrap gap-1.5 lg:gap-2 justify-center px-2">
                  {milkTeaFlavors.map((flavor) => (
                    <Button
                      key={flavor.id}
                      variant={selectedFlavors.includes(flavor.id) ? "default" : "outline"}
                      size="sm"
                      className={`text-xs lg:text-sm px-2 lg:px-3 py-1 lg:py-2 h-auto ${
                        selectedFlavors.includes(flavor.id)
                          ? "bg-navy-600 text-white hover:bg-navy-700"
                          : "border-navy-200 text-navy-700 hover:bg-navy-50"
                      }`}
                      onClick={() => {
                        if (selectedFlavors.includes(flavor.id)) {
                          setSelectedFlavors(selectedFlavors.filter((f) => f !== flavor.id))
                        } else {
                          setSelectedFlavors([...selectedFlavors, flavor.id])
                        }
                      }}
                    >
                      {flavor.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="text-center mb-8">
                {/* <h2 className="text-3xl font-bold text-navy-900 mb-4">Trà Sữa Thủ Công</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Trà sữa được pha chế thủ công từ những lá trà cao cấp nhất, kết hợp với sữa tươi nguyên chất
                </p> */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {filterAndSortItems(milkTeaItems, "milk-tea").map((item) => (
                  <Card
                    key={item.id}
                    className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm overflow-hidden flex flex-col h-full shadow-lg hover:shadow-2xl"
                  >
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-cream-100 to-cream-200 overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={250}
                          height={250}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-2 lg:top-3 left-2 lg:left-3 flex gap-1 lg:gap-2">
                        {item.badge && (
                          <Badge
                            className={`text-xs font-semibold px-1.5 py-0.5 lg:px-2 lg:py-1 ${
                              item.badge === "Signature"
                                ? "bg-gold-500 text-white"
                                : item.badge === "Premium"
                                  ? "bg-navy-600 text-white"
                                  : item.badge === "Trending"
                                    ? "bg-red-500 text-white"
                                    : "bg-green-500 text-white"
                            }`}
                          >
                            {item.badge}
                          </Badge>
                        )}
                        {item.popular && (
                          <Badge className="bg-orange-500 text-white text-xs font-semibold px-1.5 py-0.5 lg:px-2 lg:py-1">
                            Hot
                          </Badge>
                        )}
                      </div>
                      <div className="absolute top-2 lg:top-3 right-2 lg:right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                          <span className="text-xs font-semibold text-gray-800">{item.rating}</span>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-2 lg:pb-3 p-3 lg:p-6 flex-grow-0">
                      <CardTitle className="text-base lg:text-xl font-bold text-navy-900 leading-tight">
                        {item.name}
                      </CardTitle>
                      <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0 p-3 lg:p-6 lg:pt-0 flex flex-col flex-grow justify-between">
                      {/* Size Selection */}
                      <div className="mb-3 lg:mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs lg:text-sm font-medium text-gray-700">Size:</span>
                          <span className="text-base lg:text-lg font-bold text-gold-600">
                            {item.prices && formatPrice(item.prices[getSelectedSize(item.id) as keyof typeof item.prices] as number)}
                          </span>
                        </div>
                        {item.prices && (
                          <div className="grid grid-cols-3 gap-1 lg:gap-2">
                            {Object.entries(item.prices).map(([size, price]) => (
                              <Button
                                key={size}
                                variant={getSelectedSize(item.id) === size ? "default" : "outline"}
                                size="sm"
                                className={`h-auto py-2 lg:py-3 ${
                                  getSelectedSize(item.id) === size
                                    ? "bg-navy-600 text-white hover:bg-navy-700"
                                    : "border-navy-200 text-navy-700 hover:bg-navy-50"
                                }`}
                                onClick={() => setSelectedSize(item.id, size)}
                              >
                                <div className="text-center">
                                  <div className="font-semibold text-xs lg:text-sm">{size}</div>
                                  <div className="text-xs">{formatPrice(price as number)}</div>
                                </div>
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Order Button */}
                      <Button className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white h-10 lg:h-auto text-sm lg:text-base mt-auto">
                        Đặt Hàng Ngay
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  Hiển thị {filterAndSortItems(milkTeaItems, "milk-tea").length} / {milkTeaItems.length} sản phẩm
                </p>
              </div>

              {filterAndSortItems(milkTeaItems, "milk-tea").length === 0 && (
                <div className="text-center py-16">
                  <div className="text-navy-700 text-2xl font-medium mb-2">Không tìm thấy sản phẩm</div>
                  <p className="text-gray-500 mb-4">Vui lòng thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm</p>
                  <Button variant="outline" onClick={clearFilters}>
                    Xóa bộ lọc
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Ice Cream Tab */}
            <TabsContent value="ice-cream">
              {/* Flavor Filter for Ice Cream */}
              <div className="mb-6 lg:mb-8">
                <div className="flex flex-wrap gap-1.5 lg:gap-2 justify-center px-2">
                  {iceCreamFlavors.map((flavor) => (
                    <Button
                      key={flavor.id}
                      variant={selectedFlavors.includes(flavor.id) ? "default" : "outline"}
                      size="sm"
                      className={`text-xs lg:text-sm px-2 lg:px-3 py-1 lg:py-2 h-auto ${
                        selectedFlavors.includes(flavor.id)
                          ? "bg-gold-500 text-navy-900 hover:bg-gold-600"
                          : "border-gold-300 text-gold-700 hover:bg-gold-50"
                      }`}
                      onClick={() => {
                        if (selectedFlavors.includes(flavor.id)) {
                          setSelectedFlavors(selectedFlavors.filter((f) => f !== flavor.id))
                        } else {
                          setSelectedFlavors([...selectedFlavors, flavor.id])
                        }
                      }}
                    >
                      {flavor.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="text-center mb-8">
                {/* <h2 className="text-3xl font-bold text-navy-900 mb-4">Kem Tươi Ngon</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Kem tươi được làm từ sữa tươi nguyên chất và các nguyên liệu tự nhiên, mang đến hương vị đậm đà
                </p> */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {filterAndSortItems(iceCreamItems, "ice-cream").map((item) => (
                  <Card
                    key={item.id}
                    className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm overflow-hidden flex flex-col h-full shadow-lg hover:shadow-2xl"
                  >
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-cream-100 to-cream-200 overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={250}
                          height={250}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-2 lg:top-3 left-2 lg:left-3 flex gap-1 lg:gap-2">
                        {item.badge && (
                          <Badge
                            className={`text-xs font-semibold px-1.5 py-0.5 lg:px-2 lg:py-1 ${
                              item.badge === "Signature"
                                ? "bg-gold-500 text-white"
                                : item.badge === "Premium"
                                  ? "bg-navy-600 text-white"
                                  : item.badge === "Classic"
                                    ? "bg-blue-500 text-white"
                                    : item.badge === "Fresh"
                                      ? "bg-green-500 text-white"
                                      : item.badge === "Tropical"
                                        ? "bg-orange-500 text-white"
                                        : item.badge === "Adult"
                                          ? "bg-purple-500 text-white"
                                          : "bg-pink-500 text-white"
                            }`}
                          >
                            {item.badge}
                          </Badge>
                        )}
                        {item.popular && (
                          <Badge className="bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 lg:px-2 lg:py-1">
                            Hot
                          </Badge>
                        )}
                      </div>
                      <div className="absolute top-2 lg:top-3 right-2 lg:right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                          <span className="text-xs font-semibold text-gray-800">{item.rating}</span>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-2 lg:pb-3 p-3 lg:p-6 flex-grow-0">
                      <CardTitle className="text-base lg:text-xl font-bold text-navy-900 leading-tight">
                        {item.name}
                      </CardTitle>
                      <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0 p-3 lg:p-6 lg:pt-0 flex flex-col flex-grow justify-between">
                      <div className="flex items-center justify-between mb-3 lg:mb-4">
                        <span className="text-base lg:text-xl font-bold text-gold-600">{item.price && formatPrice(item.price)}</span>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-navy-900 h-10 lg:h-auto text-sm lg:text-base mt-auto">
                        Đặt Hàng Ngay
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  Hiển thị {filterAndSortItems(iceCreamItems, "ice-cream").length} / {iceCreamItems.length} sản phẩm
                </p>
              </div>

              {filterAndSortItems(iceCreamItems, "ice-cream").length === 0 && (
                <div className="text-center py-16">
                  <div className="text-navy-700 text-2xl font-medium mb-2">Không tìm thấy sản phẩm</div>
                  <p className="text-gray-500 mb-4">Vui lòng thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm</p>
                  <Button variant="outline" onClick={clearFilters}>
                    Xóa bộ lọc
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
