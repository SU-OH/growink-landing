import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TechBackground from "@/components/tech-background"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"

export default function ContactPage() {
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
              GET IN TOUCH
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 premium-heading">문의하기</h1>
            <p className="text-lg text-white/80">프로젝트에 대해 상담하고 싶으신가요? 지금 바로 문의하세요.</p>

            <div className="mt-10 flex justify-center">
              <div className="w-20 h-1 bg-gradient-gold rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 premium-heading">문의 양식</h2>
                <div className="premium-card p-8 rounded-lg elegant-shadow">
                  <ContactForm />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6 premium-heading">연락처 정보</h2>
                <div className="space-y-6">
                  <div className="premium-card p-6 rounded-lg elegant-shadow hover:translate-y-[-5px] transition-all duration-300">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">이메일</h3>
                        <p className="text-white/80">
                          <a href="mailto:growink.ai@gmail.com" className="hover:text-accent transition-colors">
                            growink.ai@gmail.com
                          </a>
                        </p>
                        <p className="text-sm text-white/60 mt-1">24시간 이내 답변 드립니다</p>
                      </div>
                    </div>
                  </div>

                  <div className="premium-card p-6 rounded-lg elegant-shadow hover:translate-y-[-5px] transition-all duration-300">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">전화</h3>
                        <p className="text-white/80">
                          <a href="tel:010-4903-7642" className="hover:text-accent transition-colors">
                            010-4903-7642
                          </a>
                        </p>
                        <p className="text-sm text-white/60 mt-1">평일 오전 9시 ~ 오후 6시</p>
                      </div>
                    </div>
                  </div>

                  <div className="premium-card p-6 rounded-lg elegant-shadow hover:translate-y-[-5px] transition-all duration-300">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">주소</h3>
                        <p className="text-white/80">경기도 의왕시 어내들로5</p>
                      </div>
                    </div>
                  </div>

                  <div className="premium-card p-6 rounded-lg elegant-shadow hover:translate-y-[-5px] transition-all duration-300">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white mb-1">영업 시간</h3>
                        <p className="text-white/80">
                          월요일 - 금요일: 오전 9시 - 오후 6시
                          <br />
                          토요일, 일요일, 공휴일: 휴무
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="premium-card rounded-lg overflow-hidden elegant-shadow h-[400px] relative">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/30">
                <div className="text-center p-8 bg-black/60 backdrop-blur-sm rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">오시는 길</h3>
                  <p className="text-white/80 mb-4">경기도 의왕시 어내들로5</p>
                  <p className="text-accent">
                    <ArrowRight className="inline h-4 w-4 mr-1" />
                    지도 보기
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=400&width=1000"
                alt="Growink 위치"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 premium-heading inline-block">자주 묻는 질문</h2>
              <p className="text-white/80 max-w-2xl mx-auto">고객님들이 자주 문의하시는 질문들을 모았습니다.</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "프로젝트 기간은 얼마나 소요되나요?",
                  a: "프로젝트의 규모와 복잡성에 따라 다르지만, 일반적으로 웹사이트 제작은 2-4주, 브랜딩 프로젝트는 3-6주, 숏폼 영상 제작은 1-2주 정도 소요됩니다. 정확한 일정은 상담 후 안내해 드립니다.",
                },
                {
                  q: "비용은 어떻게 책정되나요?",
                  a: "각 프로젝트의 요구사항과 범위에 따라 맞춤형으로 견적을 제공해 드립니다. 투명한 가격 정책을 통해 예상치 못한 추가 비용이 발생하지 않도록 합니다.",
                },
                {
                  q: "프로젝트 진행 과정은 어떻게 되나요?",
                  a: "초기 상담 → 요구사항 분석 → 제안서 및 견적 제출 → 계약 체결 → 디자인 및 개발 → 피드백 및 수정 → 최종 검수 → 출시 및 지원의 과정으로 진행됩니다.",
                },
                {
                  q: "웹사이트 제작 후 유지보수도 제공하나요?",
                  a: "네, 웹사이트 제작 후 유지보수 서비스를 별도로 제공하고 있습니다. 정기적인 업데이트, 보안 패치, 콘텐츠 관리 등을 포함한 다양한 유지보수 패키지를 선택하실 수 있습니다.",
                },
                {
                  q: "이미 운영 중인 웹사이트의 리뉴얼도 가능한가요?",
                  a: "네, 기존 웹사이트의 디자인 리뉴얼부터 완전한 재구축까지 다양한 수준의 리뉴얼 서비스를 제공합니다. 현재 웹사이트의 문제점을 분석하고 개선 방안을 제시해 드립니다.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="premium-card p-6 rounded-lg elegant-shadow group hover:border-accent/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {faq.q}
                  </h3>
                  <p className="text-white/80 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
