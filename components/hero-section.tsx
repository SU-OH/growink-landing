"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0F172A]"
    >
      {/* Simple Background with Dots */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dots"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 relative"
          >
            <div className="premium-badge mb-8 mx-auto block">DIGITAL GROWTH PARTNER</div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative z-10 mb-10"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
                <span className="block text-white mb-4 font-light">당신의 브랜드를</span>
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <span className="gold-text font-medium">키우고</span>
                  <span className="text-white">&</span>
                  <span className="gold-text font-medium">연결하는</span>
                </div>
                <div className="relative inline-block">
                  <span className="text-white font-medium">파트너</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-gold"
                  ></motion.div>
                </div>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Growink는 창의적인 디지털 솔루션으로 브랜드의 성장과 고객 연결을 위한 최적의 파트너입니다. 웹사이트 제작,
              숏폼 영상, 브랜딩까지 - 당신의 비즈니스를 위한 모든 디지털 솔루션을 제공합니다.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 mt-4"
          >
            <Button asChild size="lg" className="premium-button text-lg px-8 py-6">
              <Link href="/contact">
                지금 시작하기
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="premium-button-outline text-lg px-8 py-6">
              <Link href="/services" className="group">
                서비스 알아보기
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-16 md:mt-24"
          >
            {[
              { value: "50+", label: "성공 프로젝트" },
              { value: "98%", label: "고객 만족도" },
              { value: "30+", label: "행복한 고객사" },
              { value: "15+", label: "전문가 팀" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gold-text mb-2">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer transition-opacity duration-500",
          scrolled ? "opacity-0" : "opacity-100",
        )}
        onClick={scrollToContent}
      >
        <span className="text-white/60 text-sm mb-2">더 알아보기</span>
        <ChevronDown className="text-accent animate-bounce h-6 w-6" />
      </div>
    </section>
  )
}
