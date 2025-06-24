"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, Database, Palette, Wrench, Brain, Shield } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, Text } from "@react-three/drei"

function SkillsScene() {
  return (
    <Canvas camera={{ position: [4, 4, 4], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />

      {/* Create skill blocks in a tower */}
      <Box position={[0, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="#8A2BE2" />
      </Box>
      <Box position={[0, 1, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="#FF4500" />
      </Box>
      <Box position={[0, 2, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="#32CD32" />
      </Box>
      <Box position={[0, 3, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="#FFD700" />
      </Box>

      <Text position={[0, 4, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
        Skills
      </Text>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  )
}

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Enchantments",
    icon: <Code className="w-6 h-6" />,
    color: "blue",
    description: "Crafting beautiful user interfaces",
    skills: [
      { name: "React vite", level: 95, experience: "1+ years" },
      { name: "Next.js", level: 90, experience: "1+ years" },
      { name: "JavaScript", level: 88, experience: "1+ years" },
      { name: "Tailwind CSS", level: 92, experience: "1+ years" },
      { name: "HTML", level: 75, experience: "1+ year" },
      { name: "CSS", level: 70, experience: "1+ years" },
    ],
  },
  {
    id: "backend",
    name: "Backend Potions",
    icon: <Database className="w-6 h-6" />,
    color: "green",
    description: "Building robust server architectures",
    skills: [
      { name: "Node.js", level: 90, experience: "1+ years" },
      { name: "Python", level: 85, experience: "1+ years" },
      { name: "Lang Chain", level: 80, experience: "1+ year" },
      { name: "Socket io", level: 88, experience: "1+ years" },
      { name: "MongoDB", level: 82, experience: "1+ years" },
      { name: "Redis", level: 75, experience: "1+ year" },
      { name: "Express js", level: 75, experience: "1+ year" },
    ],
  },
  {
    id: "design",
    name: "Design Spells",
    icon: <Palette className="w-6 h-6" />,
    color: "purple",
    description: "Creating stunning visual experiences",
    skills: [
      { name: "UI/UX Design", level: 85, experience: "1+ years" },
      { name: "Figma", level: 90, experience: "1+ years" },
      { name: "Blender", level: 65, experience: "2+ months" },
      { name: "3D Modeling", level: 60, experience: "6+ months" },
    ],
  },
  {
    id: "devops",
    name: "DevOps Artifacts",
    icon: <Wrench className="w-6 h-6" />,
    color: "orange",
    description: "Automating and scaling applications",
    skills: [
      { name: "AWS", level: 80, experience: "1+ year" },
      { name: "Google Cloud Services", level: 70, experience: "1+ years" },
    ],
  },
  {
    id: "ai",
    name: "AI Crystals",
    icon: <Brain className="w-6 h-6" />,
    color: "red",
    description: "Harnessing artificial intelligence",
    skills: [
      { name: "Lang Chain", level: 70, experience: "1+ year" },
      { name: "OpenAI API", level: 85, experience: "1+ year" },
      { name: "Python", level: 65, experience: "1+ years" },
    ],
  },
  {
    id: "security",
    name: "Security Shields",
    icon: <Shield className="w-6 h-6" />,
    color: "gray",
    description: "Protecting digital realms",
    skills: [
      { name: "Authentication", level: 88, experience: "1+ years" },
      { name: "Encryption", level: 75, experience: "1+ year" },
    ],
  },
]

export default function SkillsPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
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

  const getCategoryColors = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-900/90", border: "border-blue-600/70", text: "text-blue-300", accent: "text-blue-400" },
      green: {
        bg: "bg-emerald-900/90",
        border: "border-emerald-600/70",
        text: "text-emerald-300",
        accent: "text-emerald-400",
      },
      purple: {
        bg: "bg-indigo-900/90",
        border: "border-indigo-600/70",
        text: "text-indigo-300",
        accent: "text-indigo-400",
      },
      orange: {
        bg: "bg-amber-900/90",
        border: "border-amber-600/70",
        text: "text-amber-300",
        accent: "text-amber-400",
      },
      red: { bg: "bg-red-900/90", border: "border-red-600/70", text: "text-red-300", accent: "text-red-400" },
      gray: { bg: "bg-stone-900/90", border: "border-stone-600/70", text: "text-stone-300", accent: "text-stone-400" },
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return "text-green-400 bg-green-400"
    if (level >= 80) return "text-blue-400 bg-blue-400"
    if (level >= 70) return "text-purple-400 bg-purple-400"
    if (level >= 60) return "text-orange-400 bg-orange-400"
    return "text-red-400 bg-red-400"
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Clear Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/minecraft-cave.png')`,
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 bg-purple-400 rounded-full pointer-events-none animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            boxShadow: "0 0 8px #a855f7",
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with 3D Scene */}
        <div className="flex items-center gap-6 mb-8">
          <Button
            variant="outline"
            onClick={() => router.push("/")}
            className="bg-black/50 text-white border-gray-600/50 hover:bg-gray-800/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Hub
          </Button>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white">🛠️ Skills Database</h1>
            <p className="text-purple-300">My technical abilities and expertise levels</p>
          </div>
          <div className="w-32 h-32">
            <SkillsScene />
          </div>
        </div>

        {/* Skills Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const colors = getCategoryColors(category.color)
            const isSelected = selectedCategory === category.id

            return (
              <Card
                key={category.id}
                className={`${colors.bg} ${colors.border} backdrop-blur-none hover:scale-105 transition-all duration-300 cursor-pointer ${
                  isSelected ? "ring-2 ring-white/50" : ""
                }`}
                onClick={() => setSelectedCategory(isSelected ? null : category.id)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded ${colors.bg} ${colors.accent}`}>{category.icon}</div>
                    <div>
                      <h3 className={`text-xl font-bold ${colors.text}`}>{category.name}</h3>
                      <p className={`${colors.text}/80 text-sm`}>{category.description}</p>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className={`font-medium ${colors.text}`}>{skill.name}</span>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className={`${colors.bg} ${colors.text} ${colors.border} text-xs`}
                              >
                                {skill.experience}
                              </Badge>
                              <span className={`text-sm font-bold ${getSkillLevelColor(skill.level).split(" ")[0]}`}>
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-700/50 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getSkillLevelColor(skill.level).split(" ")[1]} transition-all duration-1000`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {!isSelected && (
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colors.accent} mb-2`}>{category.skills.length} Skills</div>
                      <p className={`${colors.text}/60 text-sm`}>Click to explore skills</p>
                    </div>
                  )}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Overall Stats */}
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          <Card className="bg-emerald-900/90 border-emerald-600/70 backdrop-blur-none p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </div>
            <div className="text-emerald-300">Total Skills</div>
          </Card>
          <Card className="bg-blue-900/90 border-blue-600/70 backdrop-blur-none p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.filter((s) => s.level >= 80).length, 0)}
            </div>
            <div className="text-blue-300">Expert Level</div>
          </Card>
          <Card className="bg-indigo-900/90 border-indigo-600/70 backdrop-blur-none p-6 text-center">
            <div className="text-3xl font-bold text-indigo-400">{skillCategories.length}</div>
            <div className="text-indigo-300">Skill Categories</div>
          </Card>
          <Card className="bg-amber-900/90 border-amber-600/70 backdrop-blur-none p-6 text-center">
            <div className="text-3xl font-bold text-amber-400">
              {Math.round(
                skillCategories.reduce((acc, cat) => acc + cat.skills.reduce((sum, s) => sum + s.level, 0), 0) /
                  skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0),
              )}
              %
            </div>
            <div className="text-amber-300">Average Level</div>
          </Card>
        </div>
      </div>
    </div>
  )
}
