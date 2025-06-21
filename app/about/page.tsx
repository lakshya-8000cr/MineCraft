"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, User, MapPin, Calendar, Coffee, Code, Heart, Star } from "lucide-react"
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
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => {
        const newParticles = prev
          .map((p) => ({ ...p, y: p.y - 1, opacity: p.opacity - 0.01 }))
          .filter((p) => p.opacity > 0)

        if (Math.random() < 0.2) {
          newParticles.push({
            id: Date.now(),
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
            opacity: 1,
          })
        }

        return newParticles
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/minecraft-forest.png')`,
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-1 h-1 bg-green-400 rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            boxShadow: "0 0 4px #4ade80",
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => router.push("/")}
            className="bg-black/50 text-white border-gray-600/50 hover:bg-gray-800/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Hub
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-white">👤 About the Developer</h1>
            <p className="text-green-300">Get to know the person behind the code</p>
            <div className="w-40 h-40">
              <AboutScene />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Main About Card */}
          <Card className="bg-green-900/90 border-green-600/70 backdrop-blur-none">
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-4 bg-green-400/20 rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-green-300 mb-2">Alex Minecraft</h2>
                <p className="text-green-100/80">Full-Stack Developer & Digital Architect</p>
              </div>

              <div className="space-y-6 text-green-100/90">
                <p className="text-lg leading-relaxed">
                  Welcome to my digital realm! I'm a passionate developer who loves crafting experiences that blend
                  creativity with functionality, much like building in Minecraft - block by block, with attention to
                  detail and endless possibilities.
                </p>

                <p>
                  With over 4 years of experience in software development, I specialize in creating robust web
                  applications, mobile experiences, and innovative solutions that solve real-world problems. My journey
                  started with curiosity about how things work, and it evolved into a passion for building things that
                  matter.
                </p>

                <p>
                  When I'm not coding, you might find me exploring new technologies, contributing to open-source
                  projects, or actually playing Minecraft (yes, really!). I believe in continuous learning and sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>
          </Card>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Personal Info */}
            <Card className="bg-blue-900/90 border-blue-600/70 backdrop-blur-none p-6">
              <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Personal Info
              </h3>
              <div className="space-y-3 text-blue-100/80">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Based in San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>4+ years of experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-4 h-4 text-blue-400" />
                  <span>Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-4 h-4 text-blue-400" />
                  <span>Powered by coffee & curiosity</span>
                </div>
              </div>
            </Card>

            {/* Interests */}
            <Card className="bg-emerald-900/90 border-emerald-600/70 backdrop-blur-none p-6">
              <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "🎮 Gaming",
                  "🏗️ Building",
                  "📚 Learning",
                  "🎨 Design",
                  "🤖 AI/ML",
                  "🌱 Open Source",
                  "📸 Photography",
                  "🎵 Music",
                ].map((interest) => (
                  <div key={interest} className="bg-emerald-800/20 p-2 rounded text-emerald-100/80 text-sm text-center">
                    {interest}
                  </div>
                ))}
              </div>
            </Card>

            {/* Fun Facts */}
            <Card className="bg-amber-900/90 border-amber-600/70 backdrop-blur-none p-6">
              <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Fun Facts
              </h3>
              <div className="space-y-3 text-amber-100/80 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Built my first website at age 12</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Have played Minecraft for over 10 years</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Contributed to 50+ open source projects</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Can solve a Rubik's cube in under 2 minutes</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Favorite programming language changes monthly</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>Built this portfolio inspired by Minecraft</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Philosophy */}
        <Card className="bg-gray-900/90 border-gray-600/70 backdrop-blur-none mt-8">
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Development Philosophy</h3>
            <blockquote className="text-lg text-gray-300 italic max-w-3xl mx-auto">
              "Code is like building blocks - each piece should be crafted with care, fit perfectly with others, and
              contribute to something greater than the sum of its parts. Just like in Minecraft, the only limit is your
              imagination."
            </blockquote>
            <div className="mt-4 text-gray-400">- Alex Minecraft, Digital Architect</div>
          </div>
        </Card>
      </div>
    </div>
  )
}
