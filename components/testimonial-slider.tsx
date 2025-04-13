"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "Growink 팀은 우리 브랜드의 비전을 정확히 이해하고 그에 맞는 최적의 솔루션을 제공해 주었습니다.",
      author: "김**",
      company: "중장년기술창업센터장",
      rating: 5
    },
    {
      quote: "단기간에 브랜드 인지도를 크게 높이는데 도움을 주었습니다. 특히 숏폼 영상이 효과적이었습니다.",
      author: "이**",
      company: "스타트업 B 창업자",
      rating: 5
    },
    {
      quote: "온라인 쇼핑몰 구축 후 온라인 매출이 200% 증가했습니다. 전문적인 팀과 함께해 만족스럽습니다.",
      author: "박**",
      company: "중소기업 C 대표",
      rating: 4
    },
    {
      quote: "비용이 저렴하면서도 완성도가 높았습니다. 초보자인 저에게 하나부터 열까지 친절하게 설명해주셨고, 작업속도도 빨라서 정말 감동적이었습니다. 고수가 아니라 천재세요! 타 업체와 비교할 필요 없이 무조건 강추합니다!",
      author: "서**",
      company: "중소기업 D 대표",
      rating: 5
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="p-4 h-full">
      <h3 className="text-xl font-bold text-white mb-5 text-center">고객 후기</h3>
      <div className="h-[calc(100%-3rem)] relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#171f3a] p-6 rounded-lg border border-[#2a365a] shadow-lg h-full flex flex-col"
          >
            <div className="text-accent text-4xl mb-4">"</div>
            <p className="text-gray-300 mb-4 flex-grow">{testimonials[currentIndex].quote}</p>
            
            <div>
              <div className="flex mb-2">
                {Array(5).fill(0).map((_, idx) => (
                  <Star 
                    key={idx} 
                    className={`h-4 w-4 ${idx < testimonials[currentIndex].rating ? "text-accent" : "text-gray-600"}`} 
                    fill={idx < testimonials[currentIndex].rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary font-bold mr-4">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-white">{testimonials[currentIndex].author}</div>
                  <div className="text-sm text-accent">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 인디케이터 */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full ${currentIndex === idx ? "bg-accent" : "bg-gray-600"}`}
              aria-label={`testimonial ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
} 