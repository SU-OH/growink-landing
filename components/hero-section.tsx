"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, ArrowUpRight, ChevronDown, Sparkles, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <motion.section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden mesh-gradient floating-orbs"
      style={{ y, opacity }}
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Background Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full animate-morphGlow opacity-60"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-32 w-24 h-24 rounded-full animate-morphGlow opacity-40"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
          }}
        />
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]/80"></div>
      </div>

      {/* Floating Icons */}
      <motion.div 
        className="absolute inset-0 z-1"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
        }}
      >
        <motion.div 
          className="absolute top-32 left-16 animate-bounceScale"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </motion.div>
        <motion.div 
          className="absolute top-48 right-24 animate-bounceScale animation-delay-200"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Zap className="w-8 h-8 text-purple-400" />
        </motion.div>
        <motion.div 
          className="absolute bottom-48 left-32 animate-bounceScale animation-delay-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <TrendingUp className="w-5 h-5 text-blue-400" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mb-8 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="premium-badge mb-12 mx-auto block relative"
            >
              <span className="relative z-10">✨ DIGITAL GROWTH PARTNER 2025</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="relative z-10 mb-12"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9]">
                <motion.span 
                  className="block glass-text mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  당신의 브랜드를
                </motion.span>
                <div className="text-center space-y-6 mb-8">
                  <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                  >
                    <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
                      성장시키고
                    </span>
                    <div className="flex items-center justify-center w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent opacity-60">
                    </div>
                    <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
                      연결하는
                    </span>
                  </motion.div>
                  
                  <motion.div
                    className="w-16 h-px bg-accent/40 mx-auto"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
                  />
                </div>
                <motion.div 
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 1 }}
                >
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-wide">
                    디지털 파트너
                  </h1>
                  <div className="max-w-xl mx-auto">
                    <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
                      전문적이고 체계적인 디지털 솔루션으로<br className="hidden md:block" />
                      귀하의 비즈니스 성장을 함께 만들어갑니다
                    </p>
                  </div>
                </motion.div>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-lg md:text-xl glass-text mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              <span className="text-2xl">🚀</span> 창의적인 디지털 솔루션으로 브랜드의 혁신적 성장을 이끄는 파트너 
              <br className="hidden md:block" />
              <span className="inline-block mt-2">
                <strong className="text-yellow-400">웹사이트 제작</strong> · 
                <strong className="text-purple-400 ml-1">숏폼 영상</strong> · 
                <strong className="text-blue-400 ml-1">브랜딩</strong>까지
              </span>
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 mt-8 relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Button asChild size="lg" className="premium-button text-lg px-10 py-6 relative overflow-hidden">
                <Link href="/contact" className="group">
                  <span className="relative z-10 flex items-center">
                    🎯 지금 시작하기
                    <ArrowRight className="ml-3 h-5 w-5 transition-all group-hover:translate-x-1 group-hover:scale-110" />
                  </span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Button asChild variant="outline" size="lg" className="premium-button-outline text-lg px-10 py-6">
                <Link href="/services" className="group">
                  <span className="flex items-center">
                    💡 서비스 알아보기
                    <ArrowUpRight className="ml-3 h-5 w-5 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-20 md:mt-32"
          >
            {[
              { value: "150+", label: "성공 프로젝트", icon: "🎯", color: "text-purple-400" },
              { value: "99%", label: "고객 만족도", icon: "⭐", color: "text-yellow-400" },
              { value: "50+", label: "행복한 고객사", icon: "🤝", color: "text-blue-400" },
              { value: "24/7", label: "전문 지원", icon: "🚀", color: "text-green-400" },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6 + i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="relative mb-4">
                  <div className="text-4xl mb-2 group-hover:animate-bounceScale">{stat.icon}</div>
                  <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-2 animate-textGlow`}>
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm md:text-base glass-text font-medium">{stat.label}</div>
                <motion.div 
                  className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Down Indicator */}
      <motion.div
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group",
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
        onClick={scrollToContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 20 : 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        whileHover={{ scale: 1.1, y: -5 }}
      >
        <motion.div
          className="relative mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="glass-text text-sm font-medium group-hover:text-yellow-400 transition-colors duration-300">
            🔽 더 많은 이야기
          </span>
        </motion.div>
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-yellow-400/60 transition-colors duration-300"
          animate={{ 
            boxShadow: [
              "0 0 0 rgba(255, 255, 255, 0.3)", 
              "0 0 20px rgba(255, 255, 255, 0.3)", 
              "0 0 0 rgba(255, 255, 255, 0.3)"
            ] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full mt-2 group-hover:bg-yellow-400 transition-colors duration-300"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
