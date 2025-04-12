"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import TechBackground from "@/components/tech-background"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code, Film, Palette, BarChart, CheckCircle, Users, Award, Zap, TrendingUp } from "lucide-react"
import TechCube from "@/components/tech-cube"
import DataVisualization from "@/components/data-visualization"
import CounterStat from "@/components/counter-stat"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-[#0F172A]">
      <Navbar />
      <HeroSection />

      {/* Services Preview Section */}
      <section className="py-24 bg-black/30 backdrop-blur-sm relative">
        <div className="circuit-pattern opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="premium-badge mb-4 mx-auto block">OUR SERVICES</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 premium-heading inline-block">
              전문적인 디지털 솔루션
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Growink는 웹사이트 제작, 숏폼 영상 제작, 브랜딩 및 마케팅 서비스를 통해 당신의 브랜드를 성장시키고 세상과
              연결해 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Code className="h-8 w-8 text-accent" />,
                title: "웹 제작",
                desc: "최신 기술로 구현하는 반응형 웹사이트",
                features: ["빠른 제작", "반응형 디자인", "SEO 최적화"],
                href: "/services",
              },
              {
                icon: <Film className="h-8 w-8 text-accent" />,
                title: "숏폼 영상",
                desc: "트렌디한 숏폼 콘텐츠로 브랜드 인지도 향상",
                features: ["트렌디한 편집", "브랜드 맞춤형", "SNS 최적화"],
                href: "/services",
              },
              {
                icon: <Palette className="h-8 w-8 text-accent" />,
                title: "브랜딩",
                desc: "차별화된 브랜드 아이덴티티 구축",
                features: ["로고 디자인", "브랜드 전략", "시각적 아이덴티티"],
                href: "/services",
              },
              {
                icon: <BarChart className="h-8 w-8 text-accent" />,
                title: "마케팅",
                desc: "데이터 기반 디지털 마케팅 전략",
                features: ["SNS 마케팅", "성과 분석", "타겟 마케팅"],
                href: "/services",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="premium-card p-8 rounded-lg elegant-shadow group hover:translate-y-[-10px] transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-6">{service.desc}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-white/80">
                      <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80">
                  <Link href={service.href} className="flex items-center">
                    자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative premium-section">
        <div className="absolute inset-0 -z-10">
          <TechBackground />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="premium-badge mb-4 block">WHY CHOOSE US</div>
              <h2 className="text-4xl font-bold text-white mb-6 premium-heading">
                왜 <span className="gold-text">Growink</span>를 선택해야 할까요?
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Growink는 단순한 서비스 제공자가 아닌, 귀사의 성장을 함께 고민하는 파트너입니다. 최신 기술과 창의적인
                접근 방식으로 귀사의 브랜드가 디지털 환경에서 돋보이고 성장할 수 있도록 지원합니다.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Award className="h-6 w-6 text-accent" />,
                    title: "전문성",
                    desc: "디지털 마케팅과 웹 개발 분야의 전문가들로 구성된 팀",
                  },
                  {
                    icon: <Zap className="h-6 w-6 text-accent" />,
                    title: "혁신",
                    desc: "최신 기술과 트렌드를 활용한 혁신적인 솔루션 제공",
                  },
                  {
                    icon: <Users className="h-6 w-6 text-accent" />,
                    title: "고객 중심",
                    desc: "고객의 비즈니스 목표를 이해하고 맞춤형 솔루션 제안",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mr-4 mt-1 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button asChild className="premium-button">
                  <Link href="/about">회사 소개 보기</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              {/* 인터랙티브 데이터 시각화 섹션 */}
              <div className="grid grid-cols-1 gap-6 relative">
                {/* 기술 스택 큐브 */}
                <div className="bg-[#0F172A]/80 backdrop-blur-md p-6 rounded-lg border border-accent/20 elegant-shadow">
                  <h3 className="text-xl font-bold text-white mb-4">성장하는 기술력</h3>
                  <div className="flex justify-center">
                    <TechCube />
                  </div>
                </div>
                
                {/* 데이터 시각화 */}
                <div className="bg-[#0F172A]/80 backdrop-blur-md p-6 rounded-lg border border-accent/20 elegant-shadow">
                  <h3 className="text-xl font-bold text-white mb-4">성장 지표</h3>
                  <DataVisualization />
                </div>
                
                {/* 실시간 카운터 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0F172A]/80 backdrop-blur-md p-6 rounded-lg border border-accent/20 elegant-shadow animate-float">
                    <CounterStat 
                      icon={<Award className="h-6 w-6 text-accent" />}
                      label="프로젝트 성공률"
                      value={98}
                      suffix="%"
                    />
                  </div>
                  
                  <div className="bg-[#0F172A]/80 backdrop-blur-md p-6 rounded-lg border border-accent/20 elegant-shadow animate-float animation-delay-200">
                    <CounterStat 
                      icon={<Users className="h-6 w-6 text-accent" />}
                      label="고객 만족도"
                      value={95}
                      suffix="%"
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="premium-badge mb-4 mx-auto block">PORTFOLIO</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 premium-heading inline-block">성공 사례</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Growink와 함께 성장한 고객들의 실제 성공 스토리를 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "카페 A 브랜딩",
                category: "웹사이트 & SNS 마케팅",
                image: "/images/portfolio-cafe.jpg",
                result: "매장 방문 2배 증가",
              },
              {
                title: "스타트업 B",
                category: "브랜딩 & 숏폼 영상",
                image: "/images/portfolio-startup.jpg",
                result: "투자 유치 성공",
              },
              {
                title: "중소기업 C",
                category: "온라인 쇼핑몰 구축",
                image: "/images/portfolio-shop.jpg",
                result: "온라인 매출 200% 증가",
              },
            ].map((item, i) => (
              <div key={i} className="premium-card rounded-lg overflow-hidden group elegant-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <div className="text-accent mb-2">{item.category}</div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-accent">{item.category}</div>
                    <div className="text-sm text-white/70">
                      <TrendingUp className="h-4 w-4 inline mr-1" />
                      {item.result}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80">
                    <Link href="/portfolio" className="flex items-center">
                      자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="premium-button">
              <Link href="/portfolio">
                모든 성공 사례 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-primary/30 to-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="premium-badge mb-4 mx-auto block">CONTACT US</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              당신의 브랜드를 <span className="gold-text">성장</span>시킬 준비가 되셨나요?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Growink와 함께라면 당신의 브랜드도 성공할 수 있습니다. 지금 바로 문의하고 맞춤형 디지털 솔루션을
              제안받으세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="premium-button text-lg px-8 py-6">
                <Link href="/contact">
                  지금 문의하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="premium-button-outline text-lg px-8 py-6">
                <Link href="/services">
                  서비스 알아보기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
