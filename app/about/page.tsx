import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TechBackground from "@/components/tech-background"
import { Code, Database, Cpu, Users, Target, Lightbulb, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
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
              ABOUT US
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 premium-heading">
              우리는 <span className="gold-text">Growink</span>입니다
            </h1>
            <p className="text-lg text-white/80">테크놀로지와 창의성을 결합하여 브랜드의 성장을 돕는 디지털 파트너</p>

            <div className="mt-10 flex justify-center">
              <div className="w-20 h-1 bg-gradient-gold rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-white mb-6 premium-heading">우리의 이야기 (예비·초기창업가 버전)</h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Growink는 2023년, 디지털 마케팅과 웹 개발 분야 전문가들이 "초기 창업가와 예비 창업자"가 디지털 환경에서 빠르게 자리 잡고 성장하도록 돕기 위해 모여 탄생했습니다.
                </p>
                <p className="text-white/80 mb-6 leading-relaxed">
                  우리는 스타트업의 속도와 소규모 비즈니스의 실질적 고민을 누구보다 잘 이해합니다. 웹사이트 개발부터 브랜드 홍보, 숏폼 영상 활용 등 최신 트렌드를 접목해, 한정된 자원으로도 가장 큰 임팩트를 낼 수 있는 솔루션을 제공합니다.
                </p>
                <p className="text-white/80 mb-8 leading-relaxed">
                  무엇보다, 단순 서비스 제공을 넘어 고객의 비즈니스 목표를 함께 고민하고, 성장 파트너로서 끊임없이 새로운 기회를 제안합니다. 초기 창업이라도 낮은 예산, 부족한 인력 때문에 포기하지 않도록, Growink가 든든한 동행이 되어드리겠습니다.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-white font-medium">50+ 성공 프로젝트</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-white font-medium">15+ 전문가 팀</span>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2 relative">
                <div className="aspect-square relative rounded-lg overflow-hidden elegant-shadow">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent z-10"></div>
                  <img
                    src="/images/startup-team.png"
                    alt="Growink 팀"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 premium-heading inline-block">핵심 가치</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Growink는 다음과 같은 핵심 가치를 바탕으로 고객의 성공을 위해 최선을 다합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Lightbulb className="h-6 w-6 text-accent" />,
                title: "혁신",
                description:
                  "최신 기술과 트렌드를 활용한 혁신적인 솔루션으로 고객의 비즈니스에 새로운 가치를 창출합니다.",
              },
              {
                icon: <Target className="h-6 w-6 text-accent" />,
                title: "결과 중심",
                description: "측정 가능한 성과와 비즈니스 성장에 집중하여 고객의 투자 대비 최대 효과를 보장합니다.",
              },
              {
                icon: <Zap className="h-6 w-6 text-accent" />,
                title: "열정",
                description: "모든 프로젝트에 열정을 다하며, 고객의 성공이 곧 우리의 성공이라는 신념으로 일합니다.",
              },
            ].map((value, index) => (
              <div key={index} className="premium-card p-8 rounded-lg elegant-shadow">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{value.title}</h3>
                <p className="text-white/70 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 premium-heading inline-block">기술적 전문성</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                최신 기술과 전문 지식을 바탕으로 고객의 디지털 성장을 지원합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="h-6 w-6 text-accent" />,
                  title: "웹 개발",
                  description:
                    "Next.js, React, Tailwind CSS 등 최신 기술을 활용한 고성능 웹사이트 및 웹 애플리케이션 개발",
                  features: ["반응형 디자인", "SEO 최적화", "고성능 UX/UI"],
                },
                {
                  icon: <Database className="h-6 w-6 text-accent" />,
                  title: "데이터 분석",
                  description: "고객 데이터 분석을 통한 인사이트 도출 및 데이터 기반 마케팅 전략 수립",
                  features: ["사용자 행동 분석", "성과 측정", "예측 모델링"],
                },
                {
                  icon: <Cpu className="h-6 w-6 text-accent" />,
                  title: "AI 활용",
                  description: "인공지능 기술을 활용한 콘텐츠 생성 및 마케팅 자동화 솔루션 제공",
                  features: ["자연어 처리", "이미지 생성", "자동화 시스템"],
                },
              ].map((expertise, index) => (
                <div key={index} className="elegant-card p-6 hover:translate-y-[-5px] transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    {expertise.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{expertise.title}</h3>
                  <p className="text-white/70 mb-4">{expertise.description}</p>
                  <div className="elegant-divider my-4"></div>
                  <ul className="space-y-2">
                    {expertise.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-white/80 text-sm">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 relative premium-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 premium-heading inline-block">전문가 팀</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                다양한 분야의 전문가들이 모여 고객의 성공을 위해 협력합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "김경빈",
                  role: "CEO & 전략 디렉터",
                  image: "/images/team/김경빈.jpg",
                  bio: "10년 이상의 디지털 마케팅 경험을 바탕으로 전략적 방향성을 제시합니다.",
                },
                {
                  name: "정요한",
                  role: "크리에이티브 디렉터",
                  image: "/images/team/정요한.jpg",
                  bio: "세련된 디자인과 사용자 경험을 통해 브랜드의 가치를 높입니다.",
                },
                {
                  name: "송수오",
                  role: "기술 책임자",
                  image: "/images/team/송수오.jpg",
                  bio: "최신 웹 기술을 활용하여 안정적이고 확장 가능한 솔루션을 구축합니다.",
                },
              ].map((member, i) => (
                <div key={i} className="premium-card rounded-lg overflow-hidden group">
                  <div className="aspect-square bg-gray-900 relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        <p className="text-white/90 text-sm">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-accent">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button asChild className="premium-button">
                <Link href="/contact">함께 일하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
