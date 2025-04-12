"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "홈", href: "/" },
    { name: "소개", href: "/about" },
    { name: "서비스", href: "/services" },
    { name: "성공 사례", href: "/portfolio" },
    { name: "문의하기", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-[#0F172A]/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="relative h-10 w-10 mr-2">
            <Image
              src="/images/growink-logo.png"
              alt="Growink 로고"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-bold relative text-white group-hover:text-accent transition-colors">
            Growink
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-gold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-white hover:text-accent transition-colors relative group",
                pathname === item.href && "text-accent",
              )}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-gold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="메뉴 열기">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0F172A]/95 backdrop-blur-md shadow-lg"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-white hover:text-accent transition-colors py-2 text-lg",
                  pathname === item.href && "text-accent",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
