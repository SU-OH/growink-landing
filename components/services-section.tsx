"use client"
import { useInView } from "react-intersection-observer"
import { Globe, Film, Palette, MessageSquare, Code, Database, Cpu, BarChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import ContactForm from "./contact-form"

export default function ServicesSection() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: portfolioRef, inView: portfolioInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      techIcon: <Code className="h-6 w-6 text-accent absolute top-2 right-2" />,
      title: "웹 제작",
      description: "랜딩 페이지, 기업 홈페이지, 온라인 몰까지 빠르게 구현",
      features: ["빠른 제작", "반응형 디자인", "사용자 친화적 UI/UX"],
      techFeatures: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      icon: <Film className="h-10 w-10 text-primary" />,
      techIcon: <Cpu className="h-6 w-6 text-accent absolute top-2 right-2" />,
      title: "숏폼 영상(릴스)",
      description: "세상에 어필할 수 있는 짧고 강렬한 영상 콘텐츠",
      features: ["트렌디한 편집", "브랜드 맞춤 콘텐츠", "SNS 최적화"],
      techFeatures: ["AI 편집", "모션 그래픽", "최적화 알고리즘"],
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      techIcon: <Database className="h-6 w-6 text-accent absolute top-2 right-2" />,
      title: "브랜딩 & 마케팅",
      description: "로고 디자인부터 SNS 운영 전략까지 종합 지원",
      features: ["브랜드 아이덴티티 구축", "마케팅 전략 수립", "소셜미디어 관리"],
      techFeatures: ["데이터 분석", "AI 타겟팅", "자동화 툴"],
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      techIcon: <BarChart className="h-6 w-6 text-accent absolute top-2 right-2" />,
      title: "유지보수 & 컨설팅",
      description: "지속적인 성장을 위한 맞춤형 컨설팅 서비스",
      features: ["정기 업데이트", "성과 분석", "일대일 맞춤 컨설팅"],
      techFeatures: ["실시간 모니터링", "성과 대시보드", "예측 분석"],
    },
  ]

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative">
      {/* Tech Background Elements */}
      <div className="circuit-pattern"></div>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "max-w-3xl mx-auto text-center opacity-0 transform translate-y-4 transition-all duration-700",
              aboutInView && "opacity-100 translate-y-0",
            )}
          >
            <div className="inline-block px-4 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-4 block mx-auto">
              ABOUT US
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              우리는 <span className="text-primary">Growink</span>입니다
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Growink는 창업자·소상공인·스타트업의 디지털 브랜딩을 돕기 위해 탄생했습니다. 웹사이트와 숏폼 영상, 그리고
              기초 마케팅 솔루션을 통해 고객과 연결되는 길을 열어드립니다.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-white/80">최신 기술</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-white/80">데이터 기반</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm text-white/80">AI 활용</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-16 md:py-24 bg-black/30 backdrop-blur-sm relative">
        <div className="tech-grid"></div>
        <div className="container mx-auto px-4">
          <div className="inline-block px-4 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-4 block mx-auto text-center">
            OUR SERVICES
          </div>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold text-white mb-12 text-center opacity-0 transform translate-y-4 transition-all duration-700",
              servicesInView && "opacity-100 translate-y-0",
            )}
          >
            핵심 서비스
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={cn(
                  "service-card border-none shadow-lg opacity-0 transform translate-y-4 transition-all relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50",
                  servicesInView && "opacity-100 translate-y-0",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                {service.techIcon}
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-white/70 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-white/80">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-700/50">
                    <p className="text-xs text-primary mb-2">기술 스택:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.techFeatures.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section (Optional) */}
      <section id="portfolio" ref={portfolioRef} className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="inline-block px-4 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-4 block mx-auto text-center">
            SUCCESS STORIES
          </div>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold text-white mb-12 text-center opacity-0 transform translate-y-4 transition-all duration-700",
              portfolioInView && "opacity-100 translate-y-0",
            )}
          >
            성공 사례
          </h2>

          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto opacity-0 transform translate-y-4 transition-all duration-700",
              portfolioInView && "opacity-100 translate-y-0",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-gray-700/50">
              <div className="aspect-video bg-gray-900 relative">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="비포 애프터 이미지"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">카페 A 브랜딩</h3>
                    <p className="text-sm">웹사이트 리뉴얼 및 SNS 마케팅</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/70">Before & After</span>
                  <span className="text-sm font-medium text-primary">2023년</span>
                </div>
                <p className="text-white font-medium">매장 방문 2배 증가, 온라인 주문 150% 상승</p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">반응형 웹</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">SEO 최적화</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">데이터 분석</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-gray-700/50">
              <div className="aspect-video bg-gray-900 relative">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="비포 애프터 이미지"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">스타트업 B</h3>
                    <p className="text-sm">브랜딩 및 숏폼 영상 제작</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/70">Before & After</span>
                  <span className="text-sm font-medium text-primary">2024년</span>
                </div>
                <p className="text-white font-medium">SNS 팔로워 3배 증가, 투자 유치 성공</p>
                <div className="mt-3 flex gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">AI 편집</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">바이럴 마케팅</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">트래픽 분석</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-16 md:py-24 bg-black/30 backdrop-blur-sm relative">
        <div className="tech-grid"></div>
        <div className="container mx-auto px-4">
          <div className="inline-block px-4 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-4 block mx-auto text-center">
            GET IN TOUCH
          </div>
          <div
            className={cn(
              "max-w-3xl mx-auto text-center mb-12 opacity-0 transform translate-y-4 transition-all duration-700",
              contactInView && "opacity-100 translate-y-0",
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Growink와 함께 브랜드를 성장시키고 싶다면?
            </h2>
            <p className="text-lg text-white/80">
              지금 문의하세요! 귀사의 브랜드 성장을 위한 최적의 솔루션을 제안해 드립니다.
            </p>
          </div>

          <div
            className={cn(
              "max-w-md mx-auto opacity-0 transform translate-y-4 transition-all duration-700",
              contactInView && "opacity-100 translate-y-0",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
