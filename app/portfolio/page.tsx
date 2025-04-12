import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TechBackground from "@/components/tech-background"
import { ArrowRight, Star, TrendingUp, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      title: "기관 웹페이지 제작",
      category: "웹사이트",
      image: "/images/portfolio-cafe.png",
      year: "2023",
      results: ["관리자 대쉬보드", "온라인 주문 150% 상승", "SNS 팔로워 3배 증가"],
      tech: ["반응형 웹", "SEO 최적화", "데이터 분석"],
      description:
        "기관을 위한 웹사이트를 제작하여 온라인 존재감을 강화하고 효율적인 관리자 대쉬보드를 구축했습니다. 직관적인 UI/UX와 최적화된 성능으로 사용자 경험을 크게 향상시켰습니다.",
    },
    {
      title: "스타트업 B",
      category: "브랜딩 & 숏폼 영상",
      image: "/images/portfolio-startup.png",
      year: "2024",
      results: ["매장 방문 2배 증가", "SNS 팔로워 3배 증가", "브랜드 인지도 상승"],
      tech: ["AI 편집", "바이럴 마케팅", "트래픽 분석"],
      description:
        "혁신적인 제품을 가진 스타트업의 브랜드 스토리를 효과적으로 전달하는 숏폼 영상을 제작했습니다. 타겟 고객층에게 정확히 도달하는 마케팅 전략을 통해 매장 방문이 2배 증가하는 성과를 이루었습니다.",
    },
    {
      title: "중소기업 C",
      category: "온라인 쇼핑몰 구축",
      image: "/images/portfolio-shop.jpg",
      year: "2023",
      results: ["온라인 매출 200% 증가", "고객 재방문율 45% 향상", "장바구니 전환율 개선"],
      tech: ["e-커머스 플랫폼", "결제 시스템 통합", "사용자 경험 최적화"],
      description:
        "오프라인 중심이었던 중소기업의 온라인 쇼핑몰을 구축하여 새로운 매출 채널을 확보했습니다. 사용자 친화적인 UI/UX 설계와 효율적인 결제 시스템 통합으로 높은 전환율을 달성했습니다.",
    },
    {
      title: "프리랜서 D",
      category: "포트폴리오 웹사이트",
      image: "/placeholder.svg?height=600&width=800",
      year: "2024",
      results: ["클라이언트 문의 5배 증가", "프로젝트 수주율 향상", "온라인 인지도 확립"],
      tech: ["인터랙티브 디자인", "포트폴리오 최적화", "SEO"],
      description:
        "프리랜서 디자이너의 작업물을 효과적으로 전시할 수 있는 포트폴리오 웹사이트를 제작했습니다. 인터랙티브한 요소와 최적화된 레이아웃으로 방문자들에게 깊은 인상을 남기는데 성공했습니다.",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col relative bg-[#0F172A]">
      <div className="absolute inset-0 -z-10">
        <TechBackground />
      </div>
      <div className="circuit-pattern opacity-20 absolute inset-0 -z-10"></div>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative premium-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-primary/20 rounded-full text-accent text-sm font-medium mb-4 premium-badge">
              SUCCESS STORIES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 premium-heading">성공 사례</h1>
            <p className="text-lg text-white/80">Growink와 함께 성장한 고객들의 실제 성공 스토리를 확인하세요</p>

            <div className="mt-10 flex justify-center">
              <div className="w-20 h-1 bg-gradient-gold rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-24">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-lg elegant-shadow group">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-gold text-primary text-sm font-medium rounded">
                        {item.year}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="text-sm text-accent font-medium mb-2 premium-badge inline-block">
                      {item.category}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 premium-heading">{item.title}</h2>
                    <p className="text-white/80 mb-6 leading-relaxed">{item.description}</p>

                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-white mb-4 premium-border inline-block">주요 성과</h3>
                      <ul className="space-y-3">
                        {item.results.map((result, i) => (
                          <li key={i} className="flex items-center text-white/80">
                            <TrendingUp className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/20 text-accent rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative premium-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Award className="h-6 w-6 text-accent" />, value: "50+", label: "성공 프로젝트" },
                { icon: <Star className="h-6 w-6 text-accent" />, value: "98%", label: "고객 만족도" },
                { icon: <Users className="h-6 w-6 text-accent" />, value: "30+", label: "행복한 고객사" },
              ].map((stat, index) => (
                <div key={index} className="premium-card p-8 rounded-lg text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4 mx-auto">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 gold-text">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 premium-heading inline-block">고객 후기</h2>
              <p className="text-white/80 max-w-2xl mx-auto">Growink와 함께한 고객들의 생생한 후기를 확인하세요.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote:
                    "Growink 팀은 우리 기관의 비전을 정확히 이해하고 그에 맞는 최적의 솔루션을 제공해 주었습니다. 특히 관리자 대시보드 기능이 매우 효율적입니다.",
                  author: "김대표",
                  company: "기관장",
                  rating: 5,
                },
                {
                  quote:
                    "숏폼 영상 제작부터 SNS 마케팅까지 원스톱으로 지원받을 수 있어 매우 효율적이었습니다. 덕분에 짧은 시간 내에 매장 방문 고객이 크게 증가했습니다.",
                  author: "이창업",
                  company: "스타트업 B 창업자",
                  rating: 5,
                },
                {
                  quote:
                    "기술적인 전문성과 창의적인 접근 방식이 균형을 이루는 팀입니다. 우리의 온라인 쇼핑몰은 기대 이상의 성과를 내고 있습니다.",
                  author: "박사장",
                  company: "중소기업 C 대표",
                  rating: 4,
                },
                {
                  quote:
                    "포트폴리오 웹사이트 제작 후 클라이언트 문의가 눈에 띄게 증가했습니다. 전문적이고 세련된 디자인에 매우 만족합니다.",
                  author: "최디자이너",
                  company: "프리랜서 디자이너",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <div key={i} className="premium-card p-8 rounded-lg elegant-shadow">
                  <div className="flex mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <Star
                          key={idx}
                          className={`h-4 w-4 ${idx < testimonial.rating ? "text-accent" : "text-gray-600"}`}
                        />
                      ))}
                  </div>
                  <div className="text-accent text-4xl mb-4">"</div>
                  <p className="text-white/80 mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary font-bold mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-white">{testimonial.author}</div>
                      <div className="text-sm text-accent">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-primary/30 to-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">다음 성공 사례의 주인공이 되세요</h2>
            <p className="text-lg text-white/80 mb-8">
              Growink와 함께라면 당신의 브랜드도 성공할 수 있습니다. 지금 바로 문의하고 성장의 여정을 시작하세요.
            </p>
            <Button asChild size="lg" className="premium-button">
              <Link href="/contact" className="flex items-center">
                문의하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
