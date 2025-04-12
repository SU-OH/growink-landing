"use client"

import { useState, useEffect, ReactNode } from "react"

interface CounterStatProps {
  icon: ReactNode
  label: string
  value: number
  suffix?: string
  duration?: number
}

export default function CounterStat({ icon, label, value, suffix = "", duration = 2000 }: CounterStatProps) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    // 값이 0이면 애니메이션 필요 없음
    if (value <= 0) {
      setCount(0)
      return
    }
    
    // 애니메이션 처리
    let start = 0
    const increment = value / (duration / 16) // 대략 60fps로 업데이트
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    
    return () => {
      clearInterval(timer)
    }
  }, [value, duration])
  
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-3">
        {icon}
      </div>
      <div>
        <div className="text-sm text-white/70">{label}</div>
        <div className="text-2xl font-bold text-white">
          {count}{suffix}
        </div>
      </div>
    </div>
  )
} 