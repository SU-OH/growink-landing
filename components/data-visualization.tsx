"use client"

import { useEffect, useRef } from "react"

export default function DataVisualization() {
  const monthlyCanvasRef = useRef<HTMLCanvasElement>(null)
  const quarterlyCanvasRef = useRef<HTMLCanvasElement>(null)
  
  // 월별 데이터 (항상 상승하는 추세)
  const monthlyData = [
    { month: "1월", value: 15 },
    { month: "2월", value: 22 },
    { month: "3월", value: 30 },
    { month: "4월", value: 35 },
    { month: "5월", value: 42 },
    { month: "6월", value: 50 },
    { month: "7월", value: 65 }
  ]
  
  // 분기별 데이터
  const quarterlyData = [
    { quarter: "1분기", value: 25 },
    { quarter: "2분기", value: 45 },
    { quarter: "3분기", value: 70 },
    { quarter: "4분기", value: 90 }
  ]

  useEffect(() => {
    // 월별 그래프 그리기
    const monthlyCanvas = monthlyCanvasRef.current
    if (monthlyCanvas) {
      const ctx = monthlyCanvas.getContext("2d")
      if (ctx) {
        drawChart(ctx, monthlyCanvas, monthlyData, (item) => item.month, (item) => item.value)
      }
    }
    
    // 분기별 그래프 그리기
    const quarterlyCanvas = quarterlyCanvasRef.current
    if (quarterlyCanvas) {
      const ctx = quarterlyCanvas.getContext("2d")
      if (ctx) {
        drawChart(ctx, quarterlyCanvas, quarterlyData, (item) => item.quarter, (item) => item.value)
      }
    }
  }, [])

  // 차트 그리기 함수 (재사용 가능하도록 추출)
  const drawChart = <T,>(
    ctx: CanvasRenderingContext2D, 
    canvas: HTMLCanvasElement, 
    data: T[], 
    getLabelFn: (item: T) => string, 
    getValueFn: (item: T) => number
  ) => {
    canvas.width = canvas.offsetWidth || 300
    canvas.height = 150

    const values = data.map(getValueFn)
    const maxData = Math.max(...values)
    const dataPoints: { x: number; y: number; value: number; label: string }[] = []

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 그리드 라인 그리기
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 0.5

    for (let i = 0; i < 5; i++) {
      const y = (canvas.height / 5) * i
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    // 데이터 라인 그리기
    ctx.strokeStyle = "#D4AF37" // 골드 색상
    ctx.lineWidth = 2
    ctx.beginPath()

    dataPoints.length = 0

    data.forEach((item, index) => {
      const value = getValueFn(item)
      const label = getLabelFn(item)
      const x = (canvas.width / (data.length - 1)) * index
      const y = canvas.height - (value / maxData) * (canvas.height * 0.9) // 상단에 여백 남기기
      dataPoints.push({ x, y, value, label })

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // 선 아래 그라데이션 그리기
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, "rgba(212, 175, 55, 0.3)") // 골드 색상 그라데이션
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

    // 데이터 포인트와 라벨 그리기
    dataPoints.forEach((point) => {
      // 데이터 포인트 (점) 그리기
      ctx.fillStyle = "#D4AF37" // 골드 색상
      ctx.beginPath()
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "#FFFFFF" // 중앙 점은 흰색으로
      ctx.beginPath()
      ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2)
      ctx.fill()
      
      // 퍼센트 값 표시
      ctx.fillStyle = "#D4AF37" // 골드 색상
      ctx.font = "10px Arial"
      ctx.textAlign = "center"
      ctx.fillText(`${point.value}%`, point.x, point.y - 10)
      
      // x축 라벨(월 또는 분기) 표시
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
      ctx.fillText(point.label, point.x, canvas.height - 5)
    })
  }

  return (
    <div className="space-y-6">
      <div className="data-viz-container">
        <h4 className="text-white font-medium mb-2">월별 성장률 추이</h4>
        <canvas ref={monthlyCanvasRef} className="rounded-lg shadow-lg w-full h-40"></canvas>
        <div className="text-xs text-right mt-1 text-white/70">최근 7개월 데이터 기준</div>
      </div>
      
      <div className="data-viz-container">
        <h4 className="text-white font-medium mb-2">분기별 성장률 추이</h4>
        <canvas ref={quarterlyCanvasRef} className="rounded-lg shadow-lg w-full h-40"></canvas>
        <div className="text-xs text-right mt-1 text-white/70">최근 4분기 데이터 기준</div>
      </div>
    </div>
  )
}
