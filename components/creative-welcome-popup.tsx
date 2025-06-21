"use client"

import { useState, useEffect } from "react"

interface CreativeWelcomePopupProps {
  onClose: () => void
}

export default function CreativeWelcomePopup({ onClose }: CreativeWelcomePopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [blockAnimation, setBlockAnimation] = useState(0)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200)

    const blockInterval = setInterval(() => {
      setBlockAnimation((prev) => (prev + 1) % 4)
    }, 500)

    return () => clearInterval(blockInterval)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 200)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Minecraft-Style Popup */}
      <div
        className={`relative transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        {/* Main Container - Minecraft Block Style */}
        <div className="bg-gradient-to-br from-stone-800 to-stone-900 border-4 border-stone-600 rounded-none shadow-2xl max-w-xs w-full mx-4 relative overflow-hidden">
          {/* Minecraft-style header */}
          <div className="bg-gradient-to-r from-emerald-700 to-green-700 border-b-4 border-emerald-800 p-3 relative">
            <button
              onClick={handleClose}
              className="absolute top-1 right-1 w-6 h-6 bg-red-600 hover:bg-red-700 border-2 border-red-800 text-white text-xs flex items-center justify-center transition-colors"
            >
              ×
            </button>
            <h3 className="text-white font-bold text-center text-sm">PLAYER JOINED</h3>
          </div>

          {/* Content */}
          <div className="p-4 text-center">
            {/* Animated Minecraft Blocks */}
            <div className="flex justify-center mb-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-4 h-4 mx-1 transition-all duration-300 ${
                    blockAnimation === i ? "bg-emerald-400 shadow-lg shadow-emerald-400/50 scale-110" : "bg-stone-600"
                  }`}
                  style={{
                    borderTop: "2px solid rgba(255,255,255,0.3)",
                    borderLeft: "2px solid rgba(255,255,255,0.3)",
                    borderRight: "2px solid rgba(0,0,0,0.3)",
                    borderBottom: "2px solid rgba(0,0,0,0.3)",
                  }}
                />
              ))}
            </div>

            {/* Player Info */}
            <div className="mb-4">
              <div className="text-emerald-400 font-bold text-lg">Lakshya</div>
              <div className="text-stone-300 text-xs">has entered the server</div>
            </div>

            {/* Welcome Message */}
            <div className="bg-black/30 border-2 border-stone-700 p-3 mb-4 text-left">
              <div className="text-yellow-400 text-xs font-mono">
                <div>Welcome to my world!</div>
                <div>Ready to explore?</div>
                <div className="text-emerald-400 mt-1">Type /help to start</div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleClose}
              className="w-full bg-emerald-600 hover:bg-emerald-700 border-2 border-emerald-800 text-white font-bold py-2 px-4 transition-colors text-sm"
              style={{
                borderTop: "2px solid rgba(255,255,255,0.3)",
                borderLeft: "2px solid rgba(255,255,255,0.3)",
                borderRight: "2px solid rgba(0,0,0,0.3)",
                borderBottom: "2px solid rgba(0,0,0,0.3)",
              }}
            >
              START ADVENTURE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
