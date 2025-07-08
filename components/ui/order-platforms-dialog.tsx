"use client"
import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink, Sparkles, ShoppingBag } from "lucide-react"

export type OrderPlatform = {
  id: string
  name: string
  logo: string
  url: string
  color: string
  textColor: string
  description: string
}

interface OrderPlatformsDialogProps {
  trigger?: React.ReactNode
  productName: string
  productSize?: string
}

const defaultPlatforms: OrderPlatform[] = [
  {
    id: "shopeefood",
    name: "Shopee Food",
    logo: "/shopeefood.webp",
    url: "https://shopeefood.vn",
    color: "from-gold-400 via-gold-500 to-gold-600",
    textColor: "text-navy-900",
    description: "Giao hàng nhanh chóng",
  },
  {
    id: "grabfood",
    name: "GrabFood",
    logo: "/grabfood.webp",
    url: "https://food.grab.com",
    color: "from-navy-600 via-navy-700 to-navy-800",
    textColor: "text-white",
    description: "Đa dạng lựa chọn",
  },
  {
    id: "baemin",
    name: "Baemin",
    logo: "/baemin.webp",
    url: "https://baemin.vn",
    color: "from-gold-300 via-gold-400 to-gold-500",
    textColor: "text-navy-800",
    description: "Ưu đãi hấp dẫn",
  },
  {
    id: "gojek",
    name: "GoFood",
    logo: "/gojek.webp",
    url: "https://gojek.com",
    color: "from-navy-700 via-navy-800 to-navy-900",
    textColor: "text-white",
    description: "Tiện lợi và nhanh",
  },
]

export default function OrderPlatformsDialog({ trigger, productName, productSize }: OrderPlatformsDialogProps) {
  const [open, setOpen] = React.useState(false)
  const platforms = defaultPlatforms

  const handlePlatformSelect = (platform: OrderPlatform) => {
    window.open(platform.url, "_blank")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-navy-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Đặt Hàng Ngay
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md md:max-w-2xl bg-white shadow-2xl rounded-xl p-0 overflow-hidden border-0 w-[calc(100%-2rem)] max-h-[90vh] mx-auto">
        {/* Simplified header for mobile */}
        <div className="bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600 p-4 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

          <DialogHeader className="relative z-10">
            <DialogTitle className="text-xl font-bold text-center flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-gold-300" />
              Chọn Nền Tảng
            </DialogTitle>
            
            {/* Fix: Replace DialogDescription (which renders as p) with a regular div */}
            <div className="text-center text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 mt-2">
              <p className="font-semibold">{productName}</p>
              {productSize && <p className="text-xs text-white/80 mt-1">Size: {productSize}</p>}
            </div>
          </DialogHeader>
        </div>

        {/* Platforms List - Vertical layout optimized for mobile */}
        <div className="p-4 bg-gradient-to-br from-cream-50 to-white overflow-y-auto max-h-[60vh]">
          <div className="flex flex-col gap-3">
            {platforms.map((platform, index) => (
              <div key={platform.id} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${platform.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`}
                ></div>

                {/* Main button - Horizontal layout for better mobile touch targets */}
                <Button
                  onClick={() => handlePlatformSelect(platform)}
                  className={`relative w-full h-auto py-3 px-4 bg-white hover:bg-gray-50 border-2 border-gray-100 hover:border-gold-200 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}
                  ></div>

                  <div className="relative z-10 flex items-center gap-4 w-full">
                    {/* Logo container */}
                    <div
                      className={`relative w-14 h-14 flex-shrink-0 bg-gradient-to-br ${platform.color} rounded-lg p-0.5 shadow-md`}
                    >
                      <div className="w-full h-full bg-white rounded-md flex items-center justify-center p-2">
                        <Image
                          src={platform.logo || "/placeholder.svg"}
                          alt={platform.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Platform info - Left aligned for easier reading */}
                    <div className="text-left flex-1">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="font-bold text-navy-800">
                          {platform.name}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-navy-600" />
                      </div>
                      <div className="text-xs text-gray-500">
                        {platform.description}
                      </div>
                    </div>
                  </div>
                </Button>
              </div>
            ))}
          </div>

          {/* Footer note - Simplified */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 text-xs text-navy-700 bg-navy-50 px-3 py-1.5 rounded-full border border-navy-100">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-pulse"></div>
              Chuyển đến trang đối tác
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
