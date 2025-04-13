"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function GrowthJourney() {
  const stepsRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      title: "발견",
      desc: "브랜드의 가치와 목표를 파악합니다.",
      icon: "🔍",
      color: "from-blue-500 to-cyan-300",
    },
    {
      title: "설계",
      desc: "맞춤형 성장 전략을 설계합니다.",
      icon: "📝",
      color: "from-indigo-500 to-purple-400",
    },
    {
      title: "개발",
      desc: "최신 기술로 솔루션을 구현합니다.",
      icon: "💻",
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "성장",
      desc: "지속적인 개선과 확장을 지원합니다.",
      icon: "📈",
      color: "from-yellow-400 to-orange-500",
    },
  ]

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold text-white mb-5 text-center">성장의 여정</h3>
      <div ref={stepsRef} className="relative">
        {/* 연결선 */}
        <div className="absolute h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 left-5 top-0 rounded-full opacity-60"></div>
        
        {/* 단계들 */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start ml-0"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 mr-4 bg-gradient-to-br ${step.color} text-white shadow-glow`}>
                <span className="text-lg">{step.icon}</span>
              </div>
              <div className="bg-[#171f3a] p-3 rounded-lg border border-[#2a365a] shadow-lg flex-1">
                <h4 className="text-white font-semibold">{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* 장식적 요소 */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500/30 rounded-full blur-md"
        ></motion.div>
      </div>
    </div>
  )
} 