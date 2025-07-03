"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart, User, Heart } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Trang Chủ", href: "/" },
    { name: "Thực Đơn", href: "/menu" },
    { name: "Cửa Hàng", href: "/stores" },
    { name: "Tuyển Dụng", href: "/recruitment" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 border-b border-gold-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="HN Tea Logo"
                width={50}
                height={50}
                className="rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-navy-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-navy-800 to-navy-600 bg-clip-text text-transparent">
                HN Tea
              </span>
              <div className="text-xs text-gray-500 font-medium">Premium Experience</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-navy-800 hover:text-gold-600 font-semibold transition-colors duration-300 group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-navy-700 hover:text-gold-600 hover:bg-gold-50">
              <Heart className="w-5 h-5 mr-2" />
              Yêu Thích
            </Button>
            <Button variant="ghost" size="sm" className="text-navy-700 hover:text-gold-600 hover:bg-gold-50 relative">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Giỏ Hàng
              <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="sm" className="text-navy-700 hover:text-gold-600 hover:bg-gold-50">
              <User className="w-5 h-5 mr-2" />
              Tài Khoản
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-navy-900 shadow-lg hover:shadow-xl transition-all duration-300 px-6 font-semibold"
            >
              Đặt Hàng
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="text-navy-700">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-semibold text-navy-800 hover:text-gold-600 transition-colors duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <hr className="border-gold-200" />
                <Button variant="ghost" className="justify-start text-navy-700 hover:text-gold-600 hover:bg-gold-50">
                  <Heart className="w-5 h-5 mr-3" />
                  Yêu Thích
                </Button>
                <Button variant="ghost" className="justify-start text-navy-700 hover:text-gold-600 hover:bg-gold-50">
                  <ShoppingCart className="w-5 h-5 mr-3" />
                  Giỏ Hàng
                </Button>
                <Button variant="ghost" className="justify-start text-navy-700 hover:text-gold-600 hover:bg-gold-50">
                  <User className="w-5 h-5 mr-3" />
                  Tài Khoản
                </Button>
                <Button className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-navy-900 shadow-lg font-semibold">
                  Đặt Hàng Ngay
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
