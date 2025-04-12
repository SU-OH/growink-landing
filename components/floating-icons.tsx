"use client"

import { useEffect, useState } from "react"
import { Code, Database, Server, Cpu, Wifi, Cloud, Globe, Monitor } from "lucide-react"
import type { JSX } from "react"

const icons = [Code, Database, Server, Cpu, Wifi, Cloud, Globe, Monitor]

export default function FloatingIcons() {
  const [iconElements, setIconElements] = useState<JSX.Element[]>([])

  useEffect(() => {
    const createIcons = () => {
      const newIcons = []
      const iconCount = 8

      for (let i = 0; i < iconCount; i++) {
        const Icon = icons[i % icons.length]
        const size = Math.random() * 20 + 20
        const top = `${Math.random() * 80 + 10}%`
        const left = `${Math.random() * 80 + 10}%`
        const animationDuration = Math.random() * 5 + 5
        const animationDelay = Math.random() * 2

        newIcons.push(
          <div
            key={i}
            className="floating-icon"
            style={{
              top,
              left,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${animationDelay}s`,
            }}
          >
            <Icon size={size} color="#4CAF50" opacity={0.2} />
          </div>,
        )
      }

      setIconElements(newIcons)
    }

    createIcons()
    window.addEventListener("resize", createIcons)

    return () => {
      window.removeEventListener("resize", createIcons)
    }
  }, [])

  return <div className="floating-icons">{iconElements}</div>
}
