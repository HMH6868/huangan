import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hứa Ngân Milk Tea",
  description:
    "Hứa Ngân Milk Tea - Thương hiệu trà sữa hàng đầu với hương vị tuyệt vời và chất lượng đảm bảo. Khám phá thực đơn đa dạng và tìm cửa hàng gần bạn.",
    // generator: 'v0.dev'
  icons: {
    icon: [
      { url: '/logo.png' }
    ],
    apple: [
      { url: '/logo.png' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
