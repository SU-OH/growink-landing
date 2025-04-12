"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const codeSnippets = [
  `function growBrand(brand) {
  const strategy = analyze(brand);
  const website = buildWebsite(strategy);
  const content = createContent(strategy);
  return { website, content };
}`,
  `async function connectCustomers(brand) {
  const audience = await identifyAudience(brand);
  const channels = selectChannels(audience);
  return deployContent(brand, channels);
}`,
  `class GrowinkSolution {
  constructor(client) {
    this.client = client;
    this.strategy = new Strategy(client);
  }
  
  implement() {
    const website = this.strategy.createWebsite();
    const content = this.strategy.produceContent();
    return { website, content };
  }
}`,
]

export default function CodeSnippet() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
        setVisible(true)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="code-snippet-container">
      <pre
        className={cn(
          "text-xs md:text-sm bg-secondary/90 text-green-400 p-4 rounded-lg shadow-lg transition-opacity duration-500",
          visible ? "opacity-80" : "opacity-0",
        )}
      >
        <code>{codeSnippets[currentSnippet]}</code>
      </pre>
    </div>
  )
}
