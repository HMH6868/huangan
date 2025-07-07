"use client"

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";

export type OrderPlatform = {
  id: string;
  name: string;
  logo: string;
  url: string;
  color: string;
  textColor: string;
};

interface OrderPlatformsDialogProps {
  trigger?: React.ReactNode;
  productName: string;
  productSize?: string;
}

const defaultPlatforms: OrderPlatform[] = [
  {
    id: "shopeefood",
    name: "Shopee Food",
    logo: "/shopeefood.webp",
    url: "https://shopeefood.vn",
    color: "bg-gradient-to-r from-orange-500 to-orange-600",
    textColor: "text-white",
  },
  {
    id: "grabfood",
    name: "GrabFood",
    logo: "/grabfood.webp",
    url: "https://food.grab.com",
    color: "bg-gradient-to-r from-green-600 to-green-500",
    textColor: "text-white",
  },
  {
    id: "baemin",
    name: "Baemin",
    logo: "/baemin.webp",
    url: "https://baemin.vn",
    color: "bg-gradient-to-r from-teal-400 to-teal-500",
    textColor: "text-white",
  },
  {
    id: "gojek",
    name: "GoFood",
    logo: "/gojek.webp",
    url: "https://gojek.com",
    color: "bg-gradient-to-r from-green-500 to-green-400",
    textColor: "text-white",
  },
];

export default function OrderPlatformsDialog({
  trigger,
  productName,
  productSize,
}: OrderPlatformsDialogProps) {
  const [open, setOpen] = React.useState(false);
  const platforms = defaultPlatforms;

  const handlePlatformSelect = (platform: OrderPlatform) => {
    // In a real application, you would construct the URL with product details
    // For example: `${platform.url}/product?name=${encodeURIComponent(productName)}`
    
    // Open the platform URL in a new tab
    window.open(platform.url, "_blank");
    
    // Close the dialog
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white">
            Đặt Hàng Ngay
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-gradient-to-br from-cream-50 to-white border-2 border-gold-200 shadow-2xl rounded-2xl p-0 overflow-hidden">
        <div className="w-full h-2 bg-gradient-to-r from-gold-400 to-gold-500"></div>

        <DialogHeader className="pt-6 pb-2 px-6">
          <DialogTitle className="text-2xl font-bold text-center text-navy-900 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-gold-500" />
            Chọn Nền Tảng Đặt Hàng
          </DialogTitle>
          <DialogDescription className="text-center pt-2 font-semibold text-gold-700 bg-gold-50 border border-gold-100 rounded-lg px-3 py-1.5 mt-2">
            {productName}
            {productSize && <span className="font-normal text-gray-600 ml-1">- Size {productSize}</span>}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-6 pt-4">
          {platforms.map((platform) => (
            <div key={platform.id} className="relative group">
              <div
                className={`absolute -inset-1 rounded-2xl blur-md opacity-0 group-hover:opacity-75 transition-all duration-300 ${platform.color}`}
              />
              <Button
                onClick={() => handlePlatformSelect(platform)}
                className={`relative w-full h-36 p-4 flex flex-col items-center justify-center gap-3 ${platform.color} ${platform.textColor} rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1`}
              >
                <div className="w-16 h-16 bg-white/95 group-hover:bg-white rounded-full flex items-center justify-center p-2.5 shadow-inner backdrop-blur-sm transition-colors duration-300">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={44}
                    height={44}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold tracking-wide">{platform.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-xs text-center text-navy-700/80 py-3 bg-gradient-to-t from-cream-100 to-transparent">
          Bạn sẽ được chuyển đến trang đặt hàng của đối tác
        </div>
      </DialogContent>
    </Dialog>
  );
} 