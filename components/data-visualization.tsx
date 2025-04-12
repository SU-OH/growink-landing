"use client"

import { useEffect, useRef } from "react"

export default function DataVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 150

    // 항상 상승하는 데이터 그래프로 고정
    const data = [20, 35, 45, 60, 70, 85, 95]
    const maxData = Math.max(...data)
    const dataPoints: { x: number; y: number }[] = []

    // Draw chart
    const drawChart = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < 5; i++) {
        const y = (canvas.height / 5) * i
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw data line
      ctx.strokeStyle = "#D4AF37" // 골드 색상으로 변경
      ctx.lineWidth = 2
      ctx.beginPath()

      dataPoints.length = 0

      data.forEach((value, index) => {
        const x = (canvas.width / (data.length - 1)) * index
        const y = canvas.height - (value / maxData) * canvas.height
        dataPoints.push({ x, y })

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.stroke()

      // Draw gradient under the line
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(212, 175, 55, 0.3)") // 골드 색상 그라디언트
      gradient.addColorStop(1, "rgba(212, 175, 55, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.moveTo(0, canvas.height)

      dataPoints.forEach((point) => {
        ctx.lineTo(point.x, point.y)
      })

      ctx.lineTo(canvas.width, canvas.height)
      ctx.closePath()
      ctx.fill()

      // Draw data points
      dataPoints.forEach((point) => {
        ctx.fillStyle = "#D4AF37" // 골드 색상
        ctx.beginPath()
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "#FFFFFF" // 중앙 점은 흰색으로
        ctx.beginPath()
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    drawChart()

    // 애니메이션 제거, 고정된 그래프 유지
    return () => {
      // 클린업 함수
    }
  }, [])

  return (
    <div className="data-viz-container">
      <canvas ref={canvasRef} className="rounded-lg shadow-lg"></canvas>
      <div className="text-xs text-center mt-2 text-white/70">월별 성장률 추이</div>
    </div>
  )
}
