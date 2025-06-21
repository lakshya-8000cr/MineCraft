"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Github, Linkedin, Twitter, MessageSquare, Send, MapPin } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, Text } from "@react-three/drei"

function ContactScene() {
  return (
    <Canvas camera={{ position: [4, 4, 4], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />

      {/* Create communication tower */}
      <Box position={[0, 0, 0]} args={[0.5, 3, 0.5]}>
        <meshStandardMaterial color="#696969" />
      </Box>
      <Box position={[0, 3, 0]} args={[1, 0.2, 1]}>
        <meshStandardMaterial color="#FFD700" />
      </Box>
      <Box position={[0, 3.5, 0]} args={[0.2, 1, 0.2]}>
        <meshStandardMaterial color="#FF0000" />
      </Box>

      <Text position={[0, 4.5, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
        Contact
      </Text>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  )
}

export default function ContactPage() {
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

  const contactMethods = [
    {
      name: "Email",
      value: "alex@minecraft-dev.com",
      icon: <Mail className="w-6 h-6" />,
      color: "blue",
      action: "mailto:alex@minecraft-dev.com",
    },
    {
      name: "GitHub",
      value: "@minecraft-dev",
      icon: <Github className="w-6 h-6" />,
      color: "gray",
      action: "https://github.com/minecraft-dev",
    },
    {
      name: "LinkedIn",
      value: "Alex Minecraft",
      icon: <Linkedin className="w-6 h-6" />,
      color: "blue",
      action: "https://linkedin.com/in/minecraft-dev",
    },
    {
      name: "Twitter",
      value: "@MinecraftDev",
      icon: <Twitter className="w-6 h-6" />,
      color: "cyan",
      action: "https://twitter.com/MinecraftDev",
    },
    {
      name: "Discord",
      value: "MinecraftDev#1234",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "purple",
      action: "https://discord.com/users/MinecraftDev",
    },
  ]

  const getContactColors = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-900/90", border: "border-blue-600/70", text: "text-blue-300", accent: "text-blue-400" },
      gray: { bg: "bg-stone-900/90", border: "border-stone-600/70", text: "text-stone-300", accent: "text-stone-400" },
      cyan: { bg: "bg-cyan-900/90", border: "border-cyan-600/70", text: "text-cyan-300", accent: "text-cyan-400" },
      purple: {
        bg: "bg-indigo-900/90",
        border: "border-indigo-600/70",
        text: "text-indigo-300",
        accent: "text-indigo-400",
      },
      green: {
        bg: "bg-emerald-900/90",
        border: "border-emerald-600/70",
        text: "text-emerald-300",
        accent: "text-emerald-400",
      },
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/minecraft-cave.png')`,
        }}
      />
      {/* <div className="fixed inset-0">
        <ContactScene />
      </div> */}

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-1 h-1 bg-cyan-400 rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            boxShadow: "0 0 4px #22d3ee",
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
            <h1 className="text-4xl font-bold text-white">📧 Contact Portal</h1>
            <p className="text-cyan-300">Let's connect and build something amazing together</p>
            <div className="w-[200px] h-[150px]">
              <ContactScene />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="bg-cyan-900/90 border-cyan-600/70 backdrop-blur-none p-8">
              <h2 className="text-2xl font-bold text-cyan-300 mb-6 text-center">Get In Touch</h2>
              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const colors = getContactColors(method.color)
                  return (
                    <Card
                      key={method.name}
                      className={`${colors.bg} ${colors.border} backdrop-blur-none hover:scale-105 transition-all duration-300 cursor-pointer`}
                      onClick={() => window.open(method.action, "_blank")}
                    >
                      <div className="p-4 flex items-center gap-4">
                        <div className={`p-3 rounded ${colors.bg} ${colors.accent}`}>{method.icon}</div>
                        <div>
                          <h3 className={`font-bold ${colors.text}`}>{method.name}</h3>
                          <p className={`${colors.text}/80 text-sm`}>{method.value}</p>
                        </div>
                        <Send className={`w-4 h-4 ${colors.accent} ml-auto`} />
                      </div>
                    </Card>
                  )
                })}
              </div>
            </Card>

            {/* Location */}
            <Card className="bg-green-900/90 border-green-600/70 backdrop-blur-none p-6">
              <h3 className="text-xl font-bold text-green-300 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Location & Availability
              </h3>
              <div className="space-y-3 text-green-100/80">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>San Francisco, CA (PST/PDT)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>Open to collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Response time: 24-48 hours</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-indigo-900/90 border-indigo-600/70 backdrop-blur-none">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-indigo-300 mb-6 text-center">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-indigo-300 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-black/30 border border-indigo-600/30 rounded text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-indigo-300 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 bg-black/30 border border-indigo-600/30 rounded text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-indigo-300 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-black/30 border border-indigo-600/30 rounded text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-indigo-300 font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full p-3 bg-black/30 border border-indigo-600/30 rounded text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-indigo-800/20 rounded border border-indigo-600/30">
                <p className="text-indigo-100/80 text-sm text-center">
                  💡 Prefer a quick chat? Feel free to reach out on any of the platforms above!
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-600/30 backdrop-blur-sm mt-8">
          <div className="p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-blue-100/80 text-lg mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to chat about technology and
              Minecraft, I'd love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open("mailto:alex@minecraft-dev.com", "_blank")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
              <Button
                variant="outline"
                className="bg-black/30 text-white border-gray-600/50 hover:bg-gray-800/50"
                onClick={() => window.open("https://github.com/minecraft-dev", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
