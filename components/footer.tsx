import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt={`${siteConfig.name} Logo`} width={40} height={40} className="rounded-full" />
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </div>
            <p className="text-gray-300 mb-4">
              Thương hiệu trà sữa hàng đầu Việt Nam với hương vị tuyệt vời và chất lượng đảm bảo.
            </p>
            <div className="flex space-x-4">
              {siteConfig.social.facebook && (
                <Link href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 text-gold-400 hover:text-gold-300 cursor-pointer transition-colors" />
                </Link>
              )}
              {siteConfig.social.instagram && (
                <Link href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-gold-400 hover:text-gold-300 cursor-pointer transition-colors" />
                </Link>
              )}
              <Youtube className="w-5 h-5 text-gold-400 hover:text-gold-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Liên Kết</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Thực Đơn
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Cửa Hàng
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Tuyển Dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Dịch Vụ</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Giao hàng tận nơi</li>
              <li>Đặt hàng online</li>
              <li>Nhượng quyền</li>
              <li>Sự kiện & Tiệc</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Liên Hệ</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span className="text-sm">{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gold-400" />
                <span className="text-sm">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-400" />
                <span className="text-sm">{siteConfig.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 {siteConfig.name}. Tất cả quyền được bảo lưu.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
              Chính Sách Bảo Mật
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
              Điều Khoản Sử Dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
