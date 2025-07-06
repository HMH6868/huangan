import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users, Award, Heart, Sparkles, Mail, Phone } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function RecruitmentPage() {
  const jobPositions = [
    {
      title: "Nhân Viên Pha Chế",
      location: "TP.HCM",
      type: "Thời gian linh động",
      salary: "? triệu",
      level: "Senior",
      requirements: [
        "Kinh nghiệm pha chế từ 2 năm trở lên",
        "Thành thạo các kỹ thuật pha chế cao cấp",
        "Kỹ năng giao tiếp và phục vụ khách hàng xuất sắc",
        "Có thể làm việc theo ca và cuối tuần",
      ],
      benefits: [
        "Lương cơ bản 12-15 triệu + thưởng hiệu suất",
        "Bảo hiểm sức khỏe cao cấp",
        "Đào tạo kỹ năng chuyên môn định kỳ",
        "Cơ hội thăng tiến lên vị trí quản lý",
      ],
    },
    {
      title: "Nhân Viên Bán Hàng",
      location: "TP.HCM",
      type: "Thời gian linh động",
      salary: "? triệu",
      level: "Manager",
      requirements: [
        "Kinh nghiệm quản lý cửa hàng F&B từ 3 năm",
        "Kỹ năng lãnh đạo và quản lý nhân sự",
        "Hiểu biết về vận hành cửa hàng và KPI",
        "Bằng cử nhân trở lên",
      ],
      benefits: [
        "Lương cạnh tranh + thưởng doanh số",
        "Chế độ phúc lợi đầy đủ",
        "Cơ hội phát triển thành Regional Manager",
        "Du lịch công ty hàng năm",
      ],
    }
  ]

  const companyValues = [
    {
      icon: Award,
      title: "Chất Lượng Hàng Đầu",
      description: "Chúng tôi cam kết mang đến sản phẩm và dịch vụ tốt nhất cho khách hàng",
    },
    {
      icon: Heart,
      title: "Tận Tâm Phục Vụ",
      description: "Mỗi nhân viên đều được đào tạo để phục vụ khách hàng với tình yêu và sự tận tâm",
    },
    {
      icon: Users,
      title: "Đội Ngũ Đoàn Kết",
      description: "Môi trường làm việc thân thiện, hỗ trợ lẫn nhau để cùng phát triển",
    },
    {
      icon: Sparkles,
      title: "Sáng Tạo Không Ngừng",
      description: "Luôn tìm tòi, sáng tạo để mang đến những trải nghiệm mới cho khách hàng",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Users className="w-4 h-4 mr-2 text-gold-400" />
              <span className="text-sm font-medium">Tham Gia Đội Ngũ</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Tuyển Dụng
            </h1>
            <p className="text-xl text-navy-100 leading-relaxed">
              Gia nhập đội ngũ {siteConfig.name} ngay
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Giá Trị Cốt Lõi
              <span className="block text-transparent bg-gradient-to-r from-gold-500 to-gold-400 bg-clip-text mt-1 pt-1 ">
                {siteConfig.name} ngay
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động và quyết định của chúng tôi
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-gold-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gold-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-gold-600" />
              <span className="text-gold-800 font-medium">Cơ Hội Nghề Nghiệp</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">Vị Trí Đang Tuyển</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá những cơ hội nghề nghiệp hấp dẫn tại {siteConfig.name} 
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobPositions.map((job, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-r from-navy-50 to-gold-50 border-b border-gold-200">
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-2xl font-bold text-navy-900">{job.title}</CardTitle>
                    <Badge
                      variant="outline"
                      className={`border-2 font-semibold ${
                        job.level === "Senior"
                          ? "border-purple-400 text-purple-600 bg-purple-50"
                          : job.level === "Manager"
                            ? "border-red-400 text-red-600 bg-red-50"
                            : job.level === "Specialist"
                              ? "border-blue-400 text-blue-600 bg-blue-50"
                              : "border-green-400 text-green-600 bg-green-50"
                      }`}
                    >
                      {job.level}
                    </Badge>
                  </div>
                  <CardDescription className="flex flex-wrap items-center gap-4 text-base">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-500" />
                      <span className="font-medium">{job.location}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold-500" />
                      <span className="font-medium">{job.type}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-gold-500" />
                      <span className="font-medium text-gold-600">{job.salary}</span>
                    </span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-navy-900 mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-gold-500" />
                        Yêu Cầu Công Việc
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-3 text-gray-600">
                            <span className="text-gold-500 mt-1.5 text-xs">●</span>
                            <span className="leading-relaxed">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-navy-900 mb-3 flex items-center gap-2">
                        <Heart className="w-4 h-4 text-gold-500" />
                        Quyền Lợi & Phúc Lợi
                      </h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3 text-gray-600">
                            <span className="text-gold-500 mt-1.5 text-xs">●</span>
                            <span className="leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 text-lg font-semibold">
                      Ứng Tuyển Ngay
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Application */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">
              Chưa Thấy Vị Trí
              <span className="block text-transparent bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text">
                Phù Hợp?
              </span>
            </h3>
            <p className="text-xl text-navy-100 mb-8 leading-relaxed">
              Hãy gửi CV của bạn cho chúng tôi. {siteConfig.name} luôn chào đón những tài năng mới và sẵn sàng tạo cơ hội cho những
              người có đam mê
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-1xl mx-auto">
              <div className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-navy-100 text-sm">Email HR</p>
                  <p className="text-xl font-semibold">{siteConfig.contact.email} </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-navy-100 text-sm">Hotline Tuyển Dụng</p>
                  <p className="text-xl font-semibold">{siteConfig.contact.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
