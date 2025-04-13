import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TechBackground from "@/components/tech-background"
import {
  Globe,
  Film,
  Palette,
  MessageSquare,
  Code,
  Database,
  Cpu,
  BarChart,
  Check,
  ArrowRight,
  Target,
  FileText,
  Layout,
  Layers,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { servicesMetadata } from "../metadata"

export const metadata = servicesMetadata

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-accent" />,
      techIcon: <Code className="h-6 w-6 text-accent absolute top-2 right-2" />,
      title: "웹 제작",
      description: "랜딩 페이지, 기업 홈페이지, 온라인 몰까지 빠르게 구현",
      features: ["빠른 제작", "반응형 디자인", "사용자 친화적 UI/UX"],
      techFeatures: ["Next.js", "React", "Tailwind CSS"],
      details:
        "최신 웹 기술을 활용하여 빠르고 안정적인 웹사이트를 제작합니다. 모바일 최적화된 반응형 디자인으로 모든 디바이스에서 완벽한 사용자 경험을 제공합니다.",
    },
    {
      icon: <Film className="h-10 w-10 text-accent" />,
      techIcon: <Cpu className="h-6 w-6 text-accent absolute top-2 right-2" />,
      title: "숏폼 영상(릴스)",
      description: "세상에 어필할 수 있는 짧고 강렬한 영상 콘텐츠",
      features: ["트렌디한 편집", "브랜드 맞춤 콘텐츠", "SNS 최적화"],
      techFeatures: ["AI 편집", "모션 그래픽", "최적화 알고리즘"],
      details:
        "트렌디한 숏폼 영상을 통해 브랜드의 메시지를 효과적으로 전달합니다. AI 기반 편집 기술과 모션 그래픽을 활용하여 주목도 높은 콘텐츠를 제작합니다.",
    },
    {
      icon: <Palette className="h-10 w-10 text-accent" />,
      techIcon: <Database className="h-6 w-6 text-accent absolute top-2 right-2" />,
      title: "브랜딩 & 마케팅",
      description: "로고 디자인부터 SNS 운영 전략까지 종합 지원",
      features: ["브랜드 아이덴티티 구축", "마케팅 전략 수립", "소셜미디어 관리"],
      techFeatures: ["데이터 분석", "AI 타겟팅", "자동화 툴"],
      details:
        "브랜드의 정체성을 명확히 하고 일관된 메시지를 전달할 수 있는 브랜딩 전략을 수립합니다. 데이터 분석을 통해 효과적인 마케팅 전략을 제시합니다.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-accent" />,
      techIcon: <BarChart className="h-6 w-6 text-accent absolute top-2 right-2" />,
      title: "유지보수 & 컨설팅",
      description: "지속적인 성장을 위한 맞춤형 컨설팅 서비스",
      features: ["정기 업데이트", "성과 분석", "일대일 맞춤 컨설팅"],
      techFeatures: ["실시간 모니터링", "성과 대시보드", "예측 분석"],
      details:
        "지속적인 성장을 위한 정기적인 업데이트와 성과 분석을 제공합니다. 실시간 모니터링 시스템을 통해 문제점을 빠르게 파악하고 개선합니다.",
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
              OUR SERVICES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 premium-heading">우리의 서비스</h1>
            <p className="text-lg text-white/80">브랜드 성장과 고객 연결을 위한 종합적인 디지털 솔루션</p>

            <div className="mt-10 flex justify-center">
              <div className="w-20 h-1 bg-gradient-gold rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="premium-card rounded-lg p-8 relative overflow-hidden elegant-shadow group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>
                {service.techIcon}
                <div className="mb-6 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h2>
                <p className="text-white/70 mb-4">{service.description}</p>
                <p className="text-white/80 mb-6 leading-relaxed">{service.details}</p>

                <h3 className="text-lg font-medium text-white mb-4 premium-border inline-block">주요 특징</h3>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-700/50">
                  <p className="text-xs text-accent mb-3">기술 스택:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.techFeatures.map((tech, i) => (
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
      </section>

      {/* Process */}
      <section className="py-16 premium-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 premium-heading inline-block">서비스 프로세스</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                고객의 비즈니스 목표 달성을 위해, 아래 6단계에 걸쳐 맞춤형 웹 솔루션을 제공합니다.
              </p>
            </div>

            <div className="relative">
              {/* Process Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/30 via-accent/50 to-accent/30 -translate-x-1/2 hidden md:block"></div>

              {/* Process Steps */}
              <div className="space-y-16 md:space-y-32">
                {[
                  {
                    step: "01",
                    title: "컨설팅 및 요구사항 분석",
                    desc: [
                      "초기 상담: 고객과의 미팅(화상·오프라인) 또는 설문 양식을 통해 비즈니스 목표, 타깃 사용자 및 예상 기능 등을 구체적으로 파악",
                      "경쟁사·시장 분석: 주요 경쟁사 웹사이트, 시장 트렌드를 조사하여 차별화 요소와 성공 포인트 도출",
                      "요구사항 문서(Requirement Specification) 작성: 기능 목록, 디자인 콘셉트, 기술 스택, 예산 범위 등을 구조화",
                    ],
                    icon: <FileText className="h-5 w-5 text-accent" />,
                  },
                  {
                    step: "02",
                    title: "전략 수립 및 기획",
                    desc: [
                      "정보구조(IA) 설계: 사이트맵, 페이지 구조, 사용자 플로우 정의",
                      "프로젝트 계획(Execution Plan): 일정표, 투입 리소스(디자이너·개발자·마케터 등), 예산 배분, 주요 마일스톤 설정",
                      "UI/UX 기획: 와이어프레임 혹은 스케치 작업을 통해 사용자 시나리오를 명확히 시각화",
                    ],
                    icon: <Target className="h-5 w-5 text-accent" />,
                  },
                  {
                    step: "03",
                    title: "디자인 및 프로토타이핑",
                    desc: [
                      "브랜딩 요소 반영: 로고, 컬러 팔레트, 폰트 지침 등 브랜드 아이덴티티를 웹 디자인에 일관성 있게 적용",
                      "프로토타입 제작: 저·고충실도 프로토타입(Figma, Adobe XD 등)을 통해 사용자 경험(UX)을 미리 확인",
                      "고객 피드백 반영: 디자인 시안 리뷰, 수정 회의 등을 통해 최종 디자인 방향 확정",
                    ],
                    icon: <Layout className="h-5 w-5 text-accent" />,
                  },
                  {
                    step: "04",
                    title: "개발 및 통합",
                    desc: [
                      "프론트엔드 구현: 반응형 웹 디자인(Responsive Web), 크로스 브라우징 호환성, 성능 최적화 고려",
                      "백엔드 아키텍처: 서버·DB 구조 설계, API 연동(필요 시 외부 서비스, 결제 모듈, 인증 등)",
                      "버전 관리 & 협업: Git 등 협업 도구를 통한 소스코드 관리, 스프린트 단위로 업무 진행",
                    ],
                    icon: <Code className="h-5 w-5 text-accent" />,
                  },
                  {
                    step: "05",
                    title: "테스트 및 최적화",
                    desc: [
                      "기능·퍼포먼스 테스트: QA(품질 보증) 팀이 기능별 시나리오 테스트, 로드 테스트, 보안 취약점 검사 실시",
                      "버그 수정 & 개선: 테스트 결과에 따라 결함 수정, 코드 최적화, UI/UX 미비점 보완",
                      "최종 검수: 고객 확인 후, 운영 환경에 배포 가능한 수준으로 완성도 재점검",
                    ],
                    icon: <Layers className="h-5 w-5 text-accent" />,
                  },
                  {
                    step: "06",
                    title: "출시 및 지속 지원",
                    desc: [
                      "런칭(Deployment): 라이브 서버 환경 구축, DNS 설정, 운영 툴 연동",
                      "지속 모니터링: 웹 트래픽·사용자 피드백·에러 로그 상시 점검",
                      "확장·개선 지원: 콘텐츠 업데이트, 기능 추가, 마케팅 연계, A/B 테스트 등 장기적 로드맵에 따른 업그레이드 진행",
                    ],
                    icon: <Zap className="h-5 w-5 text-accent" />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
                  >
                    <div className="md:w-5/12">
                      <div
                        className={`p-8 premium-card rounded-lg ${i % 2 === 1 ? "md:ml-8" : "md:mr-8"} hover:translate-y-[-5px] transition-all duration-300`}
                      >
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                          <span className="text-accent mr-2">{item.title}</span>
                        </h3>
                        <ul className="space-y-4">
                          {item.desc.map((point, idx) => (
                            <li key={idx} className="text-white/80 leading-relaxed flex">
                              <Check className="h-4 w-4 text-accent mr-3 flex-shrink-0 mt-1" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="my-4 md:my-0 md:w-2/12 flex justify-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center text-primary font-bold relative z-10">
                        {item.icon}
                      </div>
                    </div>

                    <div className="md:w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 premium-heading inline-block">서비스 비교</h2>
              <p className="text-white/80 max-w-2xl mx-auto">고객의 필요에 맞는 최적의 서비스를 선택하세요.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr>
                    <th className="p-4 text-left text-white/80"></th>
                    <th className="p-4 text-center text-white">기본형</th>
                    <th className="p-4 text-center text-white">프리미엄</th>
                    <th className="p-4 text-center text-white">엔터프라이즈</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-800">
                    <td className="p-4 text-white/80">웹사이트 페이지</td>
                    <td className="p-4 text-center text-white">5 페이지</td>
                    <td className="p-4 text-center text-white">10 페이지</td>
                    <td className="p-4 text-center text-white">무제한</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td className="p-4 text-white/80">숏폼 영상</td>
                    <td className="p-4 text-center text-white">월 2개</td>
                    <td className="p-4 text-center text-white">월 5개</td>
                    <td className="p-4 text-center text-white">월 10개</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td className="p-4 text-white/80">SNS 관리</td>
                    <td className="p-4 text-center text-white">-</td>
                    <td className="p-4 text-center text-white">2개 채널</td>
                    <td className="p-4 text-center text-white">5개 채널</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td className="p-4 text-white/80">데이터 분석</td>
                    <td className="p-4 text-center text-white">기본</td>
                    <td className="p-4 text-center text-white">고급</td>
                    <td className="p-4 text-center text-white">맞춤형</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td className="p-4 text-white/80">지원</td>
                    <td className="p-4 text-center text-white">이메일</td>
                    <td className="p-4 text-center text-white">이메일, 전화</td>
                    <td className="p-4 text-center text-white">전담 매니저</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-primary/30 to-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">프로젝트를 시작할 준비가 되셨나요?</h2>
            <p className="text-lg text-white/80 mb-8">
              Growink와 함께 브랜드의 성장을 경험해 보세요. 지금 바로 문의하고 맞춤형 솔루션을 제안받으세요.
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
