import { homeMetadata } from "./metadata"

export const metadata = homeMetadata

"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import TechBackground from "@/components/tech-background"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code, Film, Palette, BarChart, CheckCircle, Users, Award, Zap, TrendingUp } from "lucide-react"
import CounterStat from "@/components/counter-stat"
import GrowthJourney from "@/components/growth-journey"
import TestimonialSlider from "@/components/testimonial-slider"
import Script from "next/script"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-[#0F172A]">
      <Navbar />
      <HeroSection />

      {/* 구조화된 데이터 - 로컬 비즈니스 정보 */}
      <Script 
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Growink",
            "image": "https://growink.co.kr/images/growink-logo.png",
            "url": "https://growink.co.kr",
            "description": "웹사이트 제작, 숏폼 영상 제작, 브랜딩 및 마케팅 서비스를 제공하는 Growink입니다.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "어내들로5",
              "addressLocality": "의왕시",
              "addressRegion": "경기도",
              "postalCode": "",
              "addressCountry": "KR"
            },
            "telephone": "010-4903-7642",
            "email": "growink.ai@gmail.com",
            "priceRange": "₩₩",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://instagram.com/growink",
              "https://youtube.com/growink"
            ]
          })
        }}
      />

      {/* 구조화된 데이터 - 서비스 정보 */}
      <Script 
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "웹사이트 제작, 숏폼 제작, 브랜딩",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Growink"
            },
            "areaServed": {
              "@type": "Country",
              "name": "대한민국"
            },
            "description": "웹사이트 제작, 숏폼 영상 제작, 브랜딩 및 마케팅 서비스를 제공하는 Growink입니다.",
            "offers": {
              "@type": "Offer",
              "url": "https://growink.co.kr/services"
            }
          })
        }}
      />

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
              {/* 성장 여정 - 왜 Growink를 선택해야 할까요? 섹션에 함께 표시 */}
              <div className="bg-[#0F172A]/80 backdrop-blur-md p-6 rounded-lg border border-accent/20 elegant-shadow">
                <h3 className="text-xl font-bold text-white mb-4 text-center">성장의 여정</h3>
                <GrowthJourney />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 성공 사례 하이라이트 섹션 */}
      <section className="py-24 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="premium-badge mb-4 mx-auto block">SUCCESS STORIES</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 premium-heading inline-block">주목할만한 성공 사례</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Growink와 함께 놀라운 성장을 이룬 실제 성공 사례를 만나보세요.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 성공 사례 카드 1 */}
              <div className="bg-[#0F172A]/80 backdrop-blur-md rounded-lg border border-accent/20 elegant-shadow overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src="/images/portfolio-cafe.png" 
                    alt="기관 웹페이지 제작" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <span className="px-2 py-1 bg-accent/20 rounded text-xs text-accent mr-2">웹사이트</span>
                    <h3 className="text-xl font-bold text-white">기관 웹페이지 제작</h3>
                  </div>
                </div>
                <div className="p-5">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-white/80">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>창업자 관리 시스템 구축</span>
                    </li>
                    <li className="flex items-center text-white/80">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>창업 지원 신청 30% 증가</span>
                    </li>
                    <li className="flex items-center text-white/80">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>교육 참여율 45% 향상</span>
                    </li>
                  </ul>
                  <div className="text-right">
                    <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80">
                      <Link href="/portfolio" className="flex items-center justify-end">
                        자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* 성공 사례 카드 2 */}
              <div className="bg-[#0F172A]/80 backdrop-blur-md rounded-lg border border-accent/20 elegant-shadow overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src="/images/portfolio-startup.png" 
                    alt="스타트업 B" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <span className="px-2 py-1 bg-accent/20 rounded text-xs text-accent mr-2">브랜딩 & 숏폼</span>
                    <h3 className="text-xl font-bold text-white">스타트업 B</h3>
                  </div>
                </div>
                <div className="p-5">
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-white/80">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>매장 방문 고객 2배 증가</span>
                    </li>
                    <li className="flex items-center text-white/80">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>SNS 팔로워 3배 증가</span>
                    </li>
                    <li className="flex items-center text-white/80">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      <span>브랜드 인지도 대폭 상승</span>
                    </li>
                  </ul>
                  <div className="text-right">
                    <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80">
                      <Link href="/portfolio" className="flex items-center justify-end">
                        자세히 보기 <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button asChild className="premium-button">
                <Link href="/portfolio" className="flex items-center">
                  모든 성공 사례 보기 <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="py-24 relative premium-section">
        <div className="absolute inset-0 -z-10">
          <TechBackground />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="premium-badge mb-4 mx-auto block">TESTIMONIALS</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 premium-heading inline-block">고객 후기</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Growink와 함께 성장한 고객들의 생생한 후기를 확인하세요.
              </p>
            </div>
            
            <div className="bg-[#0F172A]/80 backdrop-blur-md p-8 rounded-lg border border-accent/20 elegant-shadow h-96">
              <TestimonialSlider />
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
                title: "기관 웹페이지 제작",
                category: "웹사이트",
                image: "/images/portfolio-cafe.png",
                result: "창업자 관리 시스템",
              },
              {
                title: "스타트업 B",
                category: "브랜딩 & 숏폼 영상",
                image: "/images/portfolio-startup.png",
                result: "매장 방문 2배 증가",
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
