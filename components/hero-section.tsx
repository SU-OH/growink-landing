"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, ArrowUpRight, ChevronDown, Sparkles, Zap, TrendingUp, Star, Award, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background/80 via-background to-background"
      style={{ y, opacity }}
    >
      {/* Enhanced Background Elements with Geometric Patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
        
        {/* Geometric grid overlay with multiple layers */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal lines overlay for additional texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated Elegant Shapes */}
        <motion.div
          initial={{ opacity: 0, y: -150, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 12 }}
          transition={{ duration: 2.4, delay: 0.3, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 600, height: 140 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -15 }}
          transition={{ duration: 2.4, delay: 0.5, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 500, height: 120 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150, rotate: 7 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          transition={{ duration: 2.4, delay: 0.4, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 300, height: 80 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 20 }}
          transition={{ duration: 2.4, delay: 0.6, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 200, height: 60 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: -25 }}
          transition={{ duration: 2.4, delay: 0.7, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="absolute left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 150, height: 40 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </motion.div>
        </motion.div>

        {/* Subtle radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03] blur-3xl" />
        
        {/* Final gradient overlay for content readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mb-12"
          >
            <div className="flex items-center rounded-full border border-border bg-background/80 p-1 shadow-md backdrop-blur-sm">
              <div className="flex -space-x-1.5 mr-2">
                <Avatar className="h-6 w-6 ring-1 ring-background">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" alt="Client" />
                  <AvatarFallback>C1</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 ring-1 ring-background">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/2.jpg" alt="Client" />
                  <AvatarFallback>C2</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 ring-1 ring-background">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/3.jpg" alt="Client" />
                  <AvatarFallback>C3</AvatarFallback>
                </Avatar>
              </div>
              <p className="px-2 text-xs text-muted-foreground">
                <span className="text-foreground font-medium">50+ 기업</span>이 선택한 디지털 파트너
              </p>
              <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary text-[10px]">
                <Award className="mr-1 h-3 w-3" /> 2025 인증 파트너
              </Badge>
            </div>
          </motion.div>

          {/* Main Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="relative z-10 mb-12"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6">
              <motion.span 
                className="block text-foreground mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                당신의 브랜드를
              </motion.span>
              
              <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              >
                <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
                  성장시키고
                </span>
                <div className="flex items-center justify-center w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary opacity-80">
                </div>
                <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
                  연결하는
                </span>
              </motion.div>
              
              <motion.div
                className="w-16 h-px bg-primary/40 mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
              />
            </h1>

            <motion.div 
              className="text-center space-y-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground tracking-wide">
                디지털 파트너
              </h2>
              <div className="max-w-xl mx-auto">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  전문적이고 체계적인 디지털 솔루션으로<br className="hidden md:block" />
                  귀하의 비즈니스 성장을 함께 만들어갑니다
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { icon: <Shield className="h-4 w-4" />, label: "웹사이트 제작" },
              { icon: <Sparkles className="h-4 w-4" />, label: "숏폼 영상" },
              { icon: <Zap className="h-4 w-4" />, label: "브랜딩" },
              { icon: <TrendingUp className="h-4 w-4" />, label: "디지털 마케팅" },
            ].map((service, i) => (
              <Badge 
                key={i} 
                variant="outline" 
                className="px-3 py-1.5 bg-background/50 backdrop-blur-sm border-border/50 shadow-sm"
              >
                {service.icon}
                <span className="ml-1.5">{service.label}</span>
              </Badge>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 mt-8 relative"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 shadow-lg shadow-primary/20 relative overflow-hidden">
                <Link href="/contact" className="group">
                  <span className="relative z-10 flex items-center">
                    지금 시작하기
                    <ArrowRight className="ml-3 h-5 w-5 transition-all group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group"
            >
              <Button asChild variant="outline" size="lg" className="border-border/60 bg-background/50 backdrop-blur-sm text-foreground hover:bg-accent/10 text-lg px-10 py-6 shadow-md">
                <Link href="/services" className="group">
                  <span className="flex items-center">
                    서비스 알아보기
                    <ArrowUpRight className="ml-3 h-5 w-5 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20 md:mt-32"
          >
            {[
              { value: "150+", label: "성공 프로젝트", icon: <TrendingUp className="h-5 w-5 text-primary" /> },
              { value: "99%", label: "고객 만족도", icon: <Star className="h-5 w-5 text-yellow-500" /> },
              { value: "50+", label: "행복한 고객사", icon: <Users className="h-5 w-5 text-blue-500" /> },
              { value: "24/7", label: "전문 지원", icon: <Shield className="h-5 w-5 text-green-500" /> },
            ].map((stat, i) => (
              <Card key={i} className="border border-border/40 bg-background/50 backdrop-blur-sm shadow-md overflow-hidden">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Client Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">
                "
              </div>
              <blockquote className="text-lg md:text-xl text-muted-foreground italic text-center px-8 md:px-12">
                전문적인 접근 방식과 창의적인 솔루션으로 우리 브랜드의 디지털 전환을 성공적으로 이끌어 주었습니다. 
                기대 이상의 결과를 얻었습니다.
              </blockquote>
              <div className="mt-6 flex flex-col items-center">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/42.jpg" alt="CEO" />
                  <AvatarFallback>JK</AvatarFallback>
                </Avatar>
                <div className="mt-2">
                  <p className="font-medium text-foreground">김준호 대표</p>
                  <p className="text-xs text-muted-foreground">테크스타트 주식회사</p>
                </div>
              </div>
            </div>
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
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.1, y: -5 }}
      >
        <motion.div
          className="relative mb-2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
            더 알아보기
          </span>
        </motion.div>
        <motion.div
          className="w-6 h-10 border-2 border-border rounded-full flex justify-center group-hover:border-primary/60 transition-colors duration-300"
          animate={{ 
            boxShadow: [
              "0 0 0 rgba(255, 255, 255, 0.1)", 
              "0 0 10px rgba(255, 255, 255, 0.2)", 
              "0 0 0 rgba(255, 255, 255, 0.1)"
            ] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-muted-foreground/60 rounded-full mt-2 group-hover:bg-primary transition-colors duration-300"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
