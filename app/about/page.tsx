"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  User,
  MapPin,
  Calendar,
  Coffee,
  Code,
  Heart,
  Star,
  Sparkles,
  Trophy,
  Youtube,
  Palette,
} from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, Text } from "@react-three/drei"

function AboutScene() {
  return (
    <Canvas camera={{ position: [4, 4, 4], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />

      {/* Create a house structure */}
      <Box position={[0, 0, 0]} args={[2, 1, 2]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      <Box position={[0, 1, 0]} args={[2, 0.2, 2]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      <Box position={[0, 1.5, 0]} args={[1.5, 1, 1.5]}>
        <meshStandardMaterial color="#DC143C" />
      </Box>

      <Text position={[0, 2.5, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
        About
      </Text>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  )
}

export default function AboutPage() {
  const router = useRouter()
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; opacity: number; color: string }>
  >([])

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => {
        const colors = ["#4ade80", "#22d3ee", "#a855f7", "#f59e0b", "#ef4444"]
        const newParticles = prev
          .map((p) => ({ ...p, y: p.y - 1, opacity: p.opacity - 0.01 }))
          .filter((p) => p.opacity > 0)

        if (Math.random() < 0.2) {
          newParticles.push({
            id: Date.now(),
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
            opacity: 1,
            color: colors[Math.floor(Math.random() * colors.length)],
          })
        }

        return newParticles
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  const achievements = [
    { icon: <Trophy className="w-4 h-4" />, text: "1+ Years Experience", color: "bg-yellow-500/20 text-yellow-300" },
    { icon: <Youtube className="w-4 h-4" />, text: "1.5K+ Subscribers", color: "bg-red-500/20 text-red-300" },
    { icon: <Code className="w-4 h-4" />, text: "10+ Projects", color: "bg-blue-500/20 text-blue-300" },
    { icon: <Palette className="w-4 h-4" />, text: "Digital Artist", color: "bg-purple-500/20 text-purple-300" },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/minecraft-forest.png')`,
        }}
      />

      {/* Enhanced Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-1 h-1 sm:w-2 sm:h-2 rounded-full pointer-events-none animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            backgroundColor: particle.color,
            boxShadow: `0 0 8px ${particle.color}`,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Enhanced Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Button
            variant="outline"
            onClick={() => router.push("/")}
            className="bg-black/50 text-white border-gray-600/50 hover:bg-gray-800/50 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Hub
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 flex items-center gap-2">
              About the Developer
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 animate-pulse" />
            </h1>
            <p className="text-green-300 text-sm sm:text-base lg:text-lg">Get to know the person behind the code</p>
          </div>
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 order-first sm:order-last">
            <AboutScene />
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`${achievement.color} border-none backdrop-blur-sm p-3 sm:p-4 text-center hover:scale-105 transition-all duration-300`}
            >
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                {achievement.icon}
                <span className="text-xs sm:text-sm font-bold">{achievement.text}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Main About Card - Takes 2 columns on large screens */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-green-900/95 to-emerald-900/95 border-green-600/70 backdrop-blur-md shadow-2xl shadow-green-500/20">
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 ring-4 ring-green-400/20">
                  <User className="w-12 h-12 sm:w-16 sm:h-16 text-green-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-300 mb-2">Lakshya Chauhan</h2>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <Badge className="bg-green-600/30 text-green-300 border-green-500/50">Full-Stack Developer</Badge>
                  <Badge className="bg-red-600/30 text-red-300 border-red-500/50">YouTuber</Badge>
                  <Badge className="bg-purple-600/30 text-purple-300 border-purple-500/50">Digital Artist</Badge>
                  <Badge className="bg-blue-600/30 text-blue-300 border-blue-500/50">Entrepreneur</Badge>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 text-green-100/90 text-sm sm:text-base leading-relaxed">
                <p className="text-base sm:text-lg">
                  Hey! I'm Lakshya — a full-stack developer driven by creativity, curiosity, and the excitement of
                  building something meaningful from scratch. With over 1 year of experience, I create dynamic web apps
                  that solve real-world problems and offer smooth user experiences.
                </p>

                <p>
                  I'm also a YouTube content creator, sharing coding tutorials, dev insights, and AI-powered projects to
                  inspire and educate fellow tech enthusiasts. I'm deeply passionate about innovation and constantly
                  exploring startup ideas — I'm an entrepreneur enthusiast who loves combining tech with business to
                  create impact.
                </p>

                <p>
                  When I'm not coding, you might find me exploring new technologies, contributing to open-source
                  projects, or actually playing Minecraft (yes, really!). I believe in continuous learning and sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>
          </Card>

          {/* Side Info Cards */}
          <div className="space-y-4 sm:space-y-6">
            {/* Personal Info */}
            <Card className="bg-gradient-to-br from-blue-900/95 to-cyan-900/95 border-blue-600/70 backdrop-blur-md shadow-2xl shadow-blue-500/20">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-blue-300 mb-3 sm:mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Personal Info
                </h3>
                <div className="space-y-2 sm:space-y-3 text-blue-100/80 text-sm sm:text-base">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-blue-800/20">
                    <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Based in India, Chandigarh</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-blue-800/20">
                    <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>1+ years of experience</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-blue-800/20">
                    <Code className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-blue-800/20">
                    <Youtube className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>YouTuber (1.5K+ Subs)</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-blue-800/20">
                    <Coffee className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Powered by coffee & curiosity</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Interests */}
            <Card className="bg-gradient-to-br from-emerald-900/95 to-green-900/95 border-emerald-600/70 backdrop-blur-md shadow-2xl shadow-emerald-500/20">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-emerald-300 mb-3 sm:mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Interests & Hobbies
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {[
                    "🎮 Gaming",
                    "🏗️ Building",
                    "📚 Learning",
                    "🎥 Content Creation",
                    "🤖 AI",
                    "🎨 Artist(Painter)",
                    "✂️ Editing",
                    "🎵 Music",
                    "💼 Entrepreneurial Works",
                  ].map((interest) => (
                    <div
                      key={interest}
                      className="bg-emerald-800/30 hover:bg-emerald-700/40 p-2 sm:p-3 rounded-lg text-emerald-100/80 text-xs sm:text-sm text-center transition-all duration-300 hover:scale-105"
                    >
                      {interest}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Fun Facts - Full Width */}
        <Card className="bg-gradient-to-br from-amber-900/95 to-orange-900/95 border-amber-600/70 backdrop-blur-md shadow-2xl shadow-amber-500/20 mt-6 sm:mt-8">
          <div className="p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-300 mb-4 sm:mb-6 flex items-center gap-2 justify-center">
              <Star className="w-5 h-5 sm:w-6 sm:h-6" />
              Fun Facts & Achievements
            </h3>
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 text-amber-100/80 text-sm sm:text-base">
              {[
                "Built my first website using HTML, CSS & JS during school",
                "Created multiple hackathon projects with unique AI integrations",
                "I'm deeply passionate about startup culture and building real-world solutions",
                "Founder of projects like EduSphere, NyayGPT, and SignSpeak AI",
                "Always balancing between coding, ideating, and pitching ideas",
                "Can explain big ideas simply — I love helping friends understand code",
              ].map((fact, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-amber-800/20 rounded-lg hover:bg-amber-700/30 transition-all duration-300"
                >
                  <span className="text-amber-400 text-lg flex-shrink-0">•</span>
                  <span>{fact}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Philosophy */}
        <Card className="bg-gradient-to-br from-gray-900/95 to-slate-900/95 border-gray-600/70 backdrop-blur-md shadow-2xl shadow-gray-500/20 mt-6 sm:mt-8">
          <div className="p-6 sm:p-8 lg:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
              Development Philosophy
            </h3>
            <blockquote className="text-base sm:text-lg lg:text-xl text-gray-300 italic max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6">
              "Code is like building blocks - each piece should be crafted with care, fit perfectly with others, and
              contribute to something greater than the sum of its parts. Just like in Minecraft, the only limit is your
              imagination."
            </blockquote>
            <div className="text-gray-400 text-sm sm:text-base">- Lakshya Chauhan, Digital Architect</div>
          </div>
        </Card>
      </div>
    </div>
  )
}
