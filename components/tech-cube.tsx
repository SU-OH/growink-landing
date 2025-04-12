"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export default function TechCube() {
  const cubeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cube = cubeRef.current
    if (!cube) return

    let rotateX = 0
    let rotateY = 0
    const autoRotate = true

    const handleMouseMove = (e: MouseEvent) => {
      if (!autoRotate) return

      const xAxis = (window.innerWidth / 2 - e.pageX) / 25
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25

      rotateX = yAxis
      rotateY = xAxis

      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const animate = () => {
      if (autoRotate) {
        rotateY += 0.2
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const faces = [
    { className: "cube-front", icon: "code", text: "Web" },
    { className: "cube-back", icon: "film", text: "Video" },
    { className: "cube-right", icon: "palette", text: "Design" },
    { className: "cube-left", icon: "bar-chart", text: "Growth" },
    { className: "cube-top", icon: "share-2", text: "Connect" },
    { className: "cube-bottom", icon: "trending-up", text: "Scale" },
  ]

  return (
    <div className="cube-container">
      <div ref={cubeRef} className="cube">
        {faces.map((face, index) => (
          <div key={index} className={cn("cube-face", face.className)}>
            <div className="flex flex-col items-center justify-center h-full">
              <i className={`icon-${face.icon} text-4xl mb-2`}></i>
              <span className="text-sm font-medium">{face.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
