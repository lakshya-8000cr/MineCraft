"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, Code, Zap, Youtube, Palette, Mic } from "lucide-react"

interface WelcomePopupProps {
  onClose: () => void
}

export default function WelcomePopup({ onClose }: WelcomePopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const messages = [
    "Hi! I'm Lakshya Chauhan 👋",
    "Problem Solver & Tech Innovator 🧠",
    "Full-Stack Developer 💻",
    "YouTube Creator (1.5K+ Subs) 📺",
    "Video Editor & Narrator 🎬",
    "Digital Artist & Designer 🎨",
    "Let's Create Something Amazing! 🚀",
  ]

  // Typewriter effect
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)

    const typeInterval = setInterval(() => {
      const currentMessage = messages[textIndex]

      if (charIndex < currentMessage.length) {
        setCurrentText(currentMessage.slice(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      } else {
        // Wait then move to next message
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % messages.length)
          setCharIndex(0)
          setCurrentText("")
        }, 1500)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [textIndex, charIndex])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 200)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Enhanced Popup */}
      <div
        className={`relative bg-gradient-to-br from-emerald-900/95 to-blue-900/95 border-2 border-emerald-400/50 rounded-xl backdrop-blur-lg transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-4"
        } max-w-md w-full mx-4 shadow-2xl shadow-emerald-500/25`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="p-6 text-center">
          {/* Multi-Skill Icon */}
          <div className="relative mb-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform">
              <div className="grid grid-cols-2 gap-1">
                <Code className="w-4 h-4 text-white" />
                <Youtube className="w-4 h-4 text-white" />
                <Palette className="w-4 h-4 text-white" />
                <Mic className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
          </div>

          {/* Typewriter Text */}
          <div className="mb-4 h-10 flex items-center justify-center">
            <h2 className="text-xl font-bold text-white text-center">
              {currentText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Multi-Talent Description */}
          <div className="mb-6 space-y-2">
            <p className="text-emerald-300 text-sm">🎯 Multi-Talented Creator & Developer</p>
            <p className="text-blue-300 text-xs">
              Beyond coding, I create content, edit videos, narrate stories, and bring ideas to life through art!
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-2 mb-6 text-xs">
            <div className="bg-black/30 p-2 rounded border border-emerald-400/30">
              <Code className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <div className="text-emerald-300 font-bold">Developer</div>
              <div className="text-emerald-200/70">Full-Stack</div>
            </div>
            <div className="bg-black/30 p-2 rounded border border-red-400/30">
              <Youtube className="w-4 h-4 text-red-400 mx-auto mb-1" />
              <div className="text-red-300 font-bold">YouTuber</div>
              <div className="text-red-200/70">1.5K+ Subs</div>
            </div>
            <div className="bg-black/30 p-2 rounded border border-purple-400/30">
              <Palette className="w-4 h-4 text-purple-400 mx-auto mb-1" />
              <div className="text-purple-300 font-bold">Artist</div>
              <div className="text-purple-200/70">Digital Art</div>
            </div>
            <div className="bg-black/30 p-2 rounded border border-blue-400/30">
              <Mic className="w-4 h-4 text-blue-400 mx-auto mb-1" />
              <div className="text-blue-300 font-bold">Creator</div>
              <div className="text-blue-200/70">Editor & Voice</div>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleClose}
            className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Explore My Universe
            <Zap className="w-4 h-4" />
          </button>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-emerald-400 rounded-full opacity-60"></div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
      </div>
    </div>
  )
}
