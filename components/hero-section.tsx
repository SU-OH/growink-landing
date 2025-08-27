"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, ArrowUpRight, Star, Award, Shield, Users, Sparkles, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SparklesCore } from "@/components/ui/sparkles"

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
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
      className="relative h-screen w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* SparklesCore Background */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.8}
        />
      </div>

      {/* Dark gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950/60 pointer-events-none" />
      
      {/* Main gradient lines for premium effect */}
      <div className="w-full max-w-4xl relative">
        {/* Top gradient lines */}
        <div className="absolute inset-x-20 -top-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm" />
        <div className="absolute inset-x-20 -top-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4 mx-auto" />
        <div className="absolute inset-x-40 -top-10 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-[3px] w-1/2 mx-auto blur-sm" />
        <div className="absolute inset-x-40 -top-10 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px w-1/2 mx-auto" />
      </div>

      {/* Main Content - Centered and Sparkles-focused */}
      <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 relative z-20 px-6">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1.5 shadow-lg"
        >
          <div className="flex -space-x-1.5 mr-2">
            <Avatar className="h-5 w-5 ring-1 ring-white/30">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="Client" />
              <AvatarFallback className="text-[10px]">김</AvatarFallback>
            </Avatar>
            <Avatar className="h-5 w-5 ring-1 ring-white/30">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b5c3b8e1?w=100" alt="Client" />
              <AvatarFallback className="text-[10px]">이</AvatarFallback>
            </Avatar>
            <Avatar className="h-5 w-5 ring-1 ring-white/30">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="Client" />
              <AvatarFallback className="text-[10px]">박</AvatarFallback>
            </Avatar>
          </div>
          <p className="px-1 text-xs text-white/90">
            <span className="text-white font-medium">50+ 기업</span>이 선택한 파트너
          </p>
          <Badge className="ml-2 bg-blue-500/20 text-blue-300 text-[10px] border-blue-400/30">
            <Award className="mr-1 h-2.5 w-2.5" /> 인증 파트너
          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
            GROWINK
          </h1>
          <motion.div 
            className="text-lg md:text-xl lg:text-2xl font-light text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            디지털 성장의 새로운 기준
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-base md:text-lg text-white/70 text-center max-w-2xl leading-relaxed"
        >
          창의적이고 전문적인 디지털 솔루션으로 브랜드의 혁신적 성장을 이끄는 파트너
          <br className="hidden md:block" />
          <span className="text-blue-300">웹사이트 제작</span> · <span className="text-cyan-300">숏폼 영상</span> · <span className="text-green-300">브랜딩</span> · <span className="text-purple-300">마케팅</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg px-8 py-6 shadow-lg shadow-blue-500/25 border-0">
              <Link href="/contact" className="group">
                <span className="flex items-center">
                  지금 시작하기
                  <ArrowRight className="ml-2 h-5 w-5 transition-all group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 text-lg px-8 py-6 shadow-md">
              <Link href="/services" className="group">
                <span className="flex items-center">
                  서비스 알아보기
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-12 w-full max-w-4xl"
        >
          {[
            { value: "150+", label: "성공 프로젝트", icon: <TrendingUp className="h-4 w-4 text-blue-400" /> },
            { value: "99%", label: "고객 만족도", icon: <Star className="h-4 w-4 text-yellow-400" /> },
            { value: "50+", label: "행복한 고객사", icon: <Users className="h-4 w-4 text-green-400" /> },
            { value: "24/7", label: "전문 지원", icon: <Shield className="h-4 w-4 text-purple-400" /> },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="text-center p-3 md:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + i * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-center mb-1">{stat.icon}</div>
              <div className="text-xl md:text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Radial Gradient Mask to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,black)] pointer-events-none"></div>

      {/* Scroll Down Indicator */}
      <motion.div
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group z-30",
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
        onClick={scrollToContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? 20 : 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.1, y: -5 }}
      >
        <motion.div
          className="relative mb-2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors duration-300">
            더 알아보기
          </span>
        </motion.div>
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300"
          animate={{ 
            boxShadow: [
              "0 0 0 rgba(255, 255, 255, 0.1)", 
              "0 0 10px rgba(255, 255, 255, 0.3)", 
              "0 0 0 rgba(255, 255, 255, 0.1)"
            ] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full mt-2 group-hover:bg-white transition-colors duration-300"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
