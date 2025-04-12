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

    const data = [25, 40, 60, 80, 65, 75, 90]
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
      ctx.strokeStyle = "#FFC107"
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
      gradient.addColorStop(0, "rgba(76, 175, 80, 0.3)")
      gradient.addColorStop(1, "rgba(76, 175, 80, 0)")

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
        ctx.fillStyle = "#FFC107"
        ctx.beginPath()
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "#4CAF50"
        ctx.beginPath()
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    drawChart()

    // Animate data
    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.05
      data[3] = 70 + Math.sin(time) * 15
      data[5] = 75 + Math.cos(time) * 10
      drawChart()
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="data-viz-container">
      <canvas ref={canvasRef} className="rounded-lg shadow-lg"></canvas>
      <div className="text-xs text-center mt-2 text-white/70">Growth Metrics</div>
    </div>
  )
}
