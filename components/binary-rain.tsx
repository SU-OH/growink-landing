"use client"

import { useEffect, useState } from "react"
import type { JSX } from "react"

export default function BinaryRain() {
  const [columns, setColumns] = useState<JSX.Element[]>([])

  useEffect(() => {
    const createColumns = () => {
      const columnCount = Math.floor(window.innerWidth / 20)
      const newColumns = []

      for (let i = 0; i < columnCount; i++) {
        const duration = Math.random() * 10 + 10
        const delay = Math.random() * 5
        const fontSize = Math.floor(Math.random() * 4) + 10
        const left = `${(i / columnCount) * 100}%`

        const binaryString = Array(20)
          .fill(0)
          .map(() => Math.round(Math.random()))
          .join("")

        newColumns.push(
          <div
            key={i}
            className="binary-column"
            style={{
              left,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              fontSize: `${fontSize}px`,
            }}
          >
            {binaryString}
          </div>,
        )
      }

      setColumns(newColumns)
    }

    createColumns()
    window.addEventListener("resize", createColumns)

    return () => {
      window.removeEventListener("resize", createColumns)
    }
  }, [])

  return <div className="binary-rain">{columns}</div>
}
