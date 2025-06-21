"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink, Code, Brain } from "lucide-react"
import dynamic from "next/dynamic"

// Safely import 3D component
const ProjectsScene = dynamic(() => import("../../components/simple-minecraft-scene"), {
  ssr: false,
  loading: () => <div className="text-center text-white">Loading 3D Scene...</div>,
})

const projects = [
  {
    id: "ecommerce",
    name: "BlockCommerce",
    description: "Full-stack e-commerce platform with quantum shopping cart",
    longDescription:
      "A revolutionary e-commerce solution featuring AI-powered recommendations, blockchain payments, holographic product displays, and interdimensional shipping.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Socket.io", "Docker", "AI", "Blockchain"],
    github: "https://github.com/user/blockcommerce",
    demo: "https://blockcommerce.demo.com",
    type: "web",
    difficulty: "Legendary",
    icon: <Code className="w-6 h-6" />,
    color: "green",
    category: "web",
  },
  {
    id: "neural-game",
    name: "Neural Craft",
    description: "AI-powered game that learns from your playing style",
    longDescription:
      "A revolutionary gaming experience where the AI adapts to your playstyle in real-time, creating infinite procedurally generated challenges.",
    tech: ["Unity", "C#", "TensorFlow", "Python", "Neural Networks"],
    github: "https://github.com/user/neural-craft",
    demo: "https://neuralcraft.demo.com",
    type: "ai",
    difficulty: "Legendary",
    icon: <Brain className="w-6 h-6" />,
    color: "purple",
    category: "ai",
  },
  {
    id: "mobile-app",
    name: "Craft Mobile",
    description: "Cross-platform mobile app with native performance",
    longDescription: "Built with React Native, featuring offline-first architecture and seamless synchronization.",
    tech: ["React Native", "TypeScript", "Redux", "SQLite"],
    github: "https://github.com/user/craft-mobile",
    demo: "https://craftmobile.demo.com",
    type: "mobile",
    difficulty: "Epic",
    icon: <Code className="w-6 h-6" />,
    color: "blue",
    category: "mobile",
  },
]

export default function ProjectsPage() {
  const router = useRouter()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Simple Background - NO PARTICLES */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/minecraft-forest.png')`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <Button
            variant="outline"
            onClick={() => router.push("/")}
            className="bg-black/70 text-white border-blue-600/50 hover:bg-blue-900/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Hub
          </Button>
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-white mb-2">🚀 PROJECT SHOWCASE</h1>
            <p className="text-blue-300 text-lg">Explore my coding adventures</p>
          </div>
        </div>

        {/* 3D Scene */}
        <Card className="bg-black/80 border-blue-600/70 backdrop-blur-sm h-96 mb-8 overflow-hidden">
          <div className="p-4 h-full">
            <h3 className="text-blue-300 font-bold mb-2 text-center">🌟 3D PROJECT UNIVERSE 🌟</h3>
            <div className="h-80">
              <ProjectsScene />
            </div>
          </div>
        </Card>

        {/* Projects Grid - SIMPLE VERSION */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-gradient-to-br from-stone-900/90 to-slate-800/90 border-stone-600/70 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl group"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-600">{project.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-300 group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                    <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white border-none">
                      {project.difficulty}
                    </Badge>
                  </div>
                </div>

                <p className="text-stone-100/80 mb-4 text-sm group-hover:text-white transition-colors">
                  {project.description}
                </p>

                {selectedProject === project.id && (
                  <div className="mb-4 p-4 bg-black/40 rounded border border-emerald-600/30">
                    <p className="text-emerald-200 text-sm mb-3">{project.longDescription}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-stone-800/50 text-stone-300 border-stone-600/50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border-none"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.github, "_blank")
                    }}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-none"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.demo, "_blank")
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            { label: "Total Projects", value: projects.length, color: "from-emerald-600 to-green-600", icon: "🚀" },
            { label: "Technologies", value: 25, color: "from-blue-600 to-cyan-600", icon: "⚡" },
            { label: "Lines of Code", value: "50K+", color: "from-amber-600 to-yellow-600", icon: "💻" },
            { label: "Coffee Consumed", value: "∞", color: "from-orange-600 to-red-600", icon: "☕" },
          ].map((stat) => (
            <Card
              key={stat.label}
              className={`bg-gradient-to-r ${stat.color} backdrop-blur-sm p-6 text-center hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
