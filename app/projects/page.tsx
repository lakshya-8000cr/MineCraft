"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink, Code, Brain, Smartphone, Zap } from "lucide-react"

const projects = [
  {
    id: "ecommerce",
    name: "Campus Navigator",
    description: "Full-stack Lost and Found items tracking website for college students",
    longDescription:
      "A revolutionary Items Tracking Website of college students which they have lost , Interactive Campus Map for students navigation",
    tech: ["HTML , CSS ", "Node.js", "MongoDB", "javascript", "ExpressJs", "UptimeRobot"],
    github: "https://github.com/lakshya-8000cr/CampusNav-frontEnd",
    demo: "https://www.campusnavigator.xyz/",
    type: "web",
    difficulty: "Legendary",
    icon: <Code className="w-6 h-6" />,
    color: "from-emerald-400 via-green-500 to-teal-600",
    category: "web",
    rarity: "legendary",
  },
  {
    id: "Car Store",
    name: "Car Store",
    description: "Car Renting Website With Ease",
    longDescription:
      "Experience premium car services with WeCars. Book, ride, and enjoy the journey.",
    tech: ["HTML CSS", "Java Script"],
    github: "https://github.com/lakshya-8000cr/CarStore",
    demo: "https://car-store-2xtmhn94g-lakshyachauhan147-gmailcoms-projects.vercel.app/",
    type: "ai",
    difficulty: "Legendary",
    icon: <Brain className="w-6 h-6" />,
    color: "from-purple-400 via-pink-500 to-red-500",
    category: "ai",
    rarity: "legendary",
  },
  {
    id: "mobile-app",
    name: "EduSphere",
    description: "Study With Strangers on live video call According to your needs",
    longDescription: "EduSphere is a comprehensive digital platform designed to revolutionize the way students learn and collaborate. It offers a shared study library with curated notes, past papers, and academic resources, along with the ability to create or join both public and private study groups for collaborative learning. With features like real-time chat, file sharing, and group scheduling, EduSphere ensures a seamless and organized study experience. By fostering a community-driven approach to education, it empowers students to study smarter, stay motivated, and succeed together.",
    tech: ["HTML CSS ", "JavaScript", "Flask", "Pytorch" , "MongoDB" , "Nodejs" , "Socket.io" , "WebRTC" , "Monaco Editor" , "Judge 0 API"],
    github: "https://github.com/vaibhav-katyal/EduSphere",
    demo: "https://edu-sphere-steel.vercel.app/dashboard.html",
    type: "mobile",
    difficulty: "Epic",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-blue-400 via-cyan-500 to-indigo-600",
    category: "mobile",
    rarity: "epic",
  },
  {
    id: "ai-assistant",
    name: "Pool Mate",
    description: "Find Your Ride Partner With Ease , No extra charges",
    longDescription:
      "PoolMate is a smart ride finder designed for students and professionals. Users can discover ideal matches based on budget, location, and lifestyle preferences with ease.",
    tech: ["HTML CSS", "JavaScript", "OuthA", "Socket.io", "Cloudinary" , "Express js" , "MongoDB" , "Open Street Map API"],
    github: "https://github.com/pool-mate/poolmate",
    demo: "https://poolmate.onrender.com/",
    type: "ai",
    difficulty: "Epic",
    icon: <Zap className="w-6 h-6" />,
    color: "from-yellow-400 via-orange-500 to-red-600",
    category: "ai",
    rarity: "epic",
  },
  {
    id: "Chanakya AI",
    name: "Chanakya AI",
    description: "Your AI powered Hindi Enabled Legal Assistant",
    longDescription: " an AI-powered voice assistant that anyone can talk to in Hindi or their local language and get simple, spoken answers to their legal problems.",
    tech: ["Whisper STT", "LangChain", "GPT-4", "Mistral 7B", "LLama Groq AI" , "Pinecone" , "React vite" , "TailwindCss" , "Google TTS" , "Nodejs" , "Higging face" , "OmniDimension" ],
    github: "https://github.com/adityasharma0903/Nyay-GPT",
    demo: "https://nyaygpt.vercel.app/",
    type: "AI",
    difficulty: "Legendary",
    color: "from-indigo-400 via-purple-500 to-pink-600",
    category: "blockchain",
    rarity: "legendary",
  },
  {
    id: "Cloud Kitchen For Mothers",
    name: "Home Made",
    description: "Home Made is a cloud kitchen website Empowering Womens",
    longDescription:
      "Home Madw is website made for those who want to eat home made food , who are far away from home also for those womens who want to cook at home and earn some money",
    tech: ["Next.js", "Tailwindcss"],
    demo: "https://v0-cloud-kitchen-app.vercel.app/",
    type: "web",
    difficulty: "Epic",
    color: "from-teal-400 via-green-500 to-emerald-600",
    category: "web",
    rarity: "epic",
  },
]

function EnhancedTechShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  const technologies = [
    { name: "React", icon: "⚛️", color: "from-purple-500 to-purple-600", glow: "shadow-purple-500/50" },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-black", glow: "shadow-gray-500/50" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600", glow: "shadow-green-500/50" },
    { name: "Python", icon: "🐍", color: "from-teal-500 to-teal-600", glow: "shadow-teal-500/50" },
    { name: "Google cloud services", icon: "📘", color: "from-blue-500 to-blue-600", glow: "shadow-blue-500/50" },
    { name: "Cloudinary", icon: "🐘", color: "from-gray-600 to-gray-700", glow: "shadow-gray-500/50" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-700", glow: "shadow-green-600/50" },
    { name: "Socket.io", icon: "🐳", color: "from-blue-400 to-blue-500", glow: "shadow-blue-400/50" },
    { name: "Pinecone Database", icon: "☁️", color: "from-orange-500 to-orange-600", glow: "shadow-orange-500/50" },
    { name: "AI Models Integration", icon: "🧠", color: "from-pink-500 to-pink-600", glow: "shadow-pink-500/50" },
    { name: "LangChain", icon: "📱", color: "from-cyan-500 to-cyan-600", glow: "shadow-cyan-500/50" },
    { name: "Git", icon: "🔧", color: "from-red-500 to-red-600", glow: "shadow-red-500/50" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % technologies.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full p-6 bg-gradient-to-br backdrop-blur-sm overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r  rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header with Animation */}
      <div className="text-center mb-6 relative z-10">
        {/* <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 animate-pulse"> */}
          {/* ⚡ TECH ARSENAL ⚡ */}
        {/* </h2> */}
        <p className="text-cyan-300 font-medium">Mastered Technologies & Digital Weapons</p>
        {/* <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mt-3 rounded-full animate-pulse"></div> */}
      </div>

      {/* Enhanced Tech Grid */}
      <div className="grid grid-cols-4 gap-4 mb-6 relative z-10 margin-bottom-100px">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className={`bg-gradient-to-br ${tech.color} rounded-2xl p-4 text-center hover:scale-110 hover:rotate-6 transition-all duration-500 cursor-pointer group relative overflow-hidden shadow-2xl ${tech.glow} hover:shadow-2xl ${
              activeIndex === index ? "ring-4 ring-white/50 scale-105" : ""
            }`}
            style={{
              animationDelay: `${index * 0.1}s`,
              transform: activeIndex === index ? "scale(1.05) rotate(2deg)" : "",
            }}
          >
            {/* Multiple Shine Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000 delay-200"></div>

            <div className="relative z-10">
              <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                {tech.icon}
              </div>
              <div className="text-sm font-bold text-white drop-shadow-lg">{tech.name}</div>
            </div>

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover:border-white/60 transition-colors duration-300"></div>

            {/* Corner Sparkles */}
            {activeIndex === index && (
              <>
                <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full animate-ping"></div>
                <div
                  className="absolute bottom-1 left-1 w-2 h-2 bg-white rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Spectacular Stats Row */}
    </div>
  )
}

export default function ProjectsPage() {
  const router = useRouter()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; opacity: number; color: string }>
  >([])

  // Floating particles effect
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => {
        const colors = ["#00f5ff", "#ff00ff", "#00ff00", "#ffff00", "#ff6b35"]
        const newParticles = prev
          .map((p) => ({ ...p, y: p.y - 2, opacity: p.opacity - 0.02 }))
          .filter((p) => p.opacity > 0)

        if (Math.random() < 0.3) {
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
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const getRarityStyle = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "ring-4 ring-orange-500/50 shadow-2xl shadow-orange-500/30"
      case "epic":
        return "ring-4 ring-purple-500/50 shadow-2xl shadow-purple-500/30"
      default:
        return "ring-2 ring-blue-500/30 shadow-xl shadow-blue-500/20"
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      {/* <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 opacity-0"></div> */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-1000"
        style={{
          backgroundImage: `url('/images/mine1.png')`,
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-3 h-3 rounded-full pointer-events-none animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}`,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Epic Header */}
        <div className="flex items-center gap-6 mb-8">
          <Button
            variant="outline"
            onClick={() => router.push("/")}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-none hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Hub
          </Button>
          <div className="flex-1">
  <div className="rounded-xl px-4 py-2 mb-2 inline-block" style={{
   // strong dark glass
    
  }}>
<h1 className="text-6xl font-bold text-slate-900 animate-pulse">
  PROJECT
</h1>
<p className="text-2xl text-slate-700 font-medium">
  Epic Coding Adventures & Digital Creations
</p>
  </div>
</div>
        </div>

        {/* Spectacular Tech Showcase */}
        <Card className="bg-gradient-to-br from-black/40 via-purple-900/20 to-indigo-900/40 border-2 border-cyan-500/30 backdrop-blur-md h-[400px] mb-8 overflow-hidden shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-500">
          <EnhancedTechShowcase />
        </Card>

        {/* Epic Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`bg-gradient-to-br ${project.color} backdrop-blur-sm hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden ${getRarityStyle(project.rarity)}`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="p-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm shadow-lg">{project.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {project.name}
                    </h3>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold border-none shadow-lg">
                      {project.difficulty}
                    </Badge>
                  </div>
                </div>

                <p className="text-white/90 mb-4 text-sm font-medium drop-shadow">{project.description}</p>

                {selectedProject === project.id && (
                  <div className="mb-4 p-4 bg-black/30 rounded-xl border border-white/20 backdrop-blur-sm">
                    <p className="text-white/80 text-sm mb-3">{project.longDescription}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-none shadow-lg flex-1"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.github, "_blank")
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-none shadow-lg flex-1"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.demo, "_blank")
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>

              {/* Rarity Indicator */}
              {project.rarity === "legendary" && (
                <div className="absolute top-2 right-2 text-orange-400 animate-pulse">
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Epic Stats */}
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            
          ].map((stat, index) => (
            <Card
              key={stat.label}
              className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm p-8 text-center hover:scale-110 hover:rotate-3 transition-all duration-500 shadow-2xl relative overflow-hidden group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white drop-shadow-lg">{stat.value}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
