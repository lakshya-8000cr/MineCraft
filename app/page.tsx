"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Terminal, Activity, Cpu, HardDrive, Youtube, Palette, Mic, Code, Star } from "lucide-react"
import dynamic from "next/dynamic"
import WelcomePopup from "../components/welcome-popup"

// Safe 3D import
const SimpleMinecraftScene = dynamic(() => import("../components/simple-minecraft-scene"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full text-green-400">🎮 Loading Minecraft World...</div>
  ),
})

export default function MinecraftHub() {
  const router = useRouter()
  const [command, setCommand] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showWelcomePopup, setShowWelcomePopup] = useState(true)
  const [skillIndex, setSkillIndex] = useState(0)
  const [history, setHistory] = useState<string[]>([
    "🎮 WELCOME TO LAKSHYA'S MINECRAFT DEV UNIVERSE! 🎮",
    "⚡ INITIALIZING MULTI-TALENT PORTFOLIO MATRIX...",
    "🔥 LOADING GIT PROTOCOLS...",
    "🎨 ACTIVATING CREATIVE MODULES...",
    "📺 CONNECTING YOUTUBE CHANNEL...",
    "✨ READY TO EXPLORE!",
    "",
    "🌟 AVAILABLE GIT COMMANDS:",
    "  git projects     - 🚀 View my projects",
    "  git skills       - 🛠️  Check my skills",
    "  git about        - 👤 About me",
    "  git contact      - 📧 Get in touch",
    "  git achievements - 🏆 View achievements",
    "  git help         - 🆘 Show all commands",
    "",
    "💡 Type a command and press Enter!",
    "",
  ])
  const terminalRef = useRef<HTMLDivElement>(null)

  const skills = [
    { icon: <Code className="w-4 h-4" />, name: "Full-Stack Dev", color: "text-emerald-400" },
    { icon: <Youtube className="w-4 h-4" />, name: "YouTuber (1.5K+)", color: "text-red-400" },
    { icon: <Palette className="w-4 h-4" />, name: "Digital Artist", color: "text-purple-400" },
    { icon: <Mic className="w-4 h-4" />, name: "Video Editor", color: "text-blue-400" },
  ]

  // Rotate skills showcase
  useEffect(() => {
    const skillInterval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length)
    }, 2000)
    return () => clearInterval(skillInterval)
  }, [])

  const executeGitCommand = (cmd: string) => {
    if (!cmd.trim() || isLoading) return

    const newHistory = [...history, `$ ${cmd}`]
    const args = cmd.toLowerCase().trim().split(" ")

    if (args[0] !== "git") {
      newHistory.push("❌ ERROR: Commands must start with 'git'!")
      newHistory.push("💡 Try: git help")
      setHistory([...newHistory, ""])
      return
    }

    const gitCmd = args[1]
    setIsLoading(true)

    switch (gitCmd) {
      case "projects":
        newHistory.push("🚀 Loading projects...")
        newHistory.push("⚡ Warping to project dimension...")
        setHistory([...newHistory, ""])
        setTimeout(() => {
          setIsLoading(false)
          router.push("/projects")
        }, 1000)
        break

      case "skills":
        newHistory.push("🛠️  Loading skills database...")
        setHistory([...newHistory, ""])
        setTimeout(() => {
          setIsLoading(false)
          router.push("/skills")
        }, 1000)
        break

      case "about":
        newHistory.push("👤 Loading developer info...")
        setHistory([...newHistory, ""])
        setTimeout(() => {
          setIsLoading(false)
          router.push("/about")
        }, 1000)
        break

      case "contact":
        newHistory.push("📧 Opening contact portal...")
        setHistory([...newHistory, ""])
        setTimeout(() => {
          setIsLoading(false)
          router.push("/contact")
        }, 1000)
        break

      case "achievements":
        newHistory.push("🏆 Accessing trophy vault...")
        setHistory([...newHistory, ""])
        setTimeout(() => {
          setIsLoading(false)
          router.push("/achievements")
        }, 1000)
        break

      case "help":
        newHistory.push("🆘 AVAILABLE COMMANDS:")
        newHistory.push("  git projects     - View projects")
        newHistory.push("  git skills       - Check skills")
        newHistory.push("  git about        - About me")
        newHistory.push("  git contact      - Contact info")
        newHistory.push("  git achievements - Achievements")
        newHistory.push("  git status       - Show status")
        newHistory.push("  git clear        - Clear terminal")
        setHistory([...newHistory, ""])
        setIsLoading(false)
        break

      case "status":
        newHistory.push("🌟 LAKSHYA'S PORTFOLIO STATUS:")
        newHistory.push("  🔋 Power Level: OVER 9000!")
        newHistory.push("  🌐 Dimensions: 6 ACTIVE")
        newHistory.push("  ⚡ Git Energy: MAXIMUM")
        newHistory.push("  🎮 Mode: CREATIVE")
        newHistory.push("  📺 YouTube: 1.5K+ SUBSCRIBERS")
        newHistory.push("  🎨 Art Skills: LEGENDARY")
        setHistory([...newHistory, ""])
        setIsLoading(false)
        break

      case "clear":
        setHistory(["🎮 Terminal cleared!", "💡 Type 'git help' for available commands", ""])
        setIsLoading(false)
        break

      default:
        newHistory.push(`❌ Command 'git ${gitCmd}' not found!`)
        newHistory.push("💡 Try 'git help' for available commands")
        setHistory([...newHistory, ""])
        setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (command.trim() && !isLoading) {
      executeGitCommand(command.trim())
      setCommand("")
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Welcome Popup */}
      {showWelcomePopup && <WelcomePopup onClose={() => setShowWelcomePopup(false)} />}

      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/minecraft-bg.png')`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Subtle Skills Showcase Banner */}
        <div className="mb-6">
          <Card className="bg-gradient-to-r from-emerald-900/80 to-blue-900/80 border-emerald-600/50 backdrop-blur-sm">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-full bg-black/30 ${skills[skillIndex].color}`}>
                    {skills[skillIndex].icon}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Lakshya Chauhan</div>
                    <div className={`text-xs ${skills[skillIndex].color} animate-pulse`}>{skills[skillIndex].name}</div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-6 text-xs">
                <div className="text-center">
                  <div className="text-emerald-400 font-bold">10+</div>
                  <div className="text-emerald-300/70">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-bold">1.5K+</div>
                  <div className="text-red-300/70">YouTube Subs</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 font-bold">∞</div>
                  <div className="text-purple-300/70">Artworks</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 font-bold">2+</div>
                  <div className="text-blue-300/70">Years Exp</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 min-h-screen">
          {/* 3D World */}
          <div className="lg:col-span-1">
            <Card className="bg-black/80 border-green-600/70 backdrop-blur-sm h-96 mb-6 overflow-hidden">
              <div className="p-4 h-full">
                <h3 className="text-green-300 font-bold mb-2 text-center">🌟 MINECRAFT UNIVERSE 🌟</h3>
                <div className="h-80 border border-green-600/30 rounded bg-black/20">
                  <SimpleMinecraftScene />
                </div>
              </div>
            </Card>

            {/* Enhanced Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { cmd: "git projects", label: "🚀 Projects", color: "bg-blue-600 hover:bg-blue-700" },
                { cmd: "git skills", label: "🛠️ Skills", color: "bg-purple-600 hover:bg-purple-700" },
                { cmd: "git about", label: "👤 About", color: "bg-green-600 hover:bg-green-700" },
                { cmd: "git help", label: " Help", color: "bg-orange-600 hover:bg-orange-700" },
              ].map((btn) => (
                <button
                  key={btn.cmd}
                  onClick={() => {
                    if (!isLoading) {
                      executeGitCommand(btn.cmd)
                    }
                  }}
                  disabled={isLoading}
                  className={`${btn.color} text-white p-3 rounded text-sm font-bold transition-all duration-200 hover:scale-105 disabled:opacity-50`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div className="lg:col-span-1 flex flex-col">
            <Card className="bg-black/95 border-green-600/70 backdrop-blur-sm flex-1 flex flex-col shadow-2xl shadow-green-500/20">
              <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 px-4 py-2 border-b border-green-600/50 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-green-300 font-mono text-sm font-bold">lakshya@minecraft-dev:~$</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Terminal Content */}
              <div
                ref={terminalRef}
                className="flex-1 p-4 font-mono text-sm text-green-300 overflow-y-auto"
                style={{ height: "400px" }}
              >
                {history.map((line, index) => (
                  <div key={`line-${index}`} className="mb-1 leading-relaxed">
                    {line}
                  </div>
                ))}
                {isLoading && <div className="text-yellow-400 animate-pulse">⚡ Processing command...</div>}
              </div>

              {/* Enhanced System Stats */}
              <div className="px-4 py-2 border-t border-green-600/30 bg-black/50">
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <div className="flex items-center gap-1 text-green-400">
                    <Cpu className="w-3 h-3" />
                    <span>CPU: 85%</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-400">
                    <HardDrive className="w-3 h-3" />
                    <span>RAM: 12GB</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-400">
                    <Activity className="w-3 h-3" />
                    <span>Creative</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-3 h-3" />
                    <span>Multi-Talent</span>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="p-3 border-t border-green-600/50 bg-black/90">
                <div className="flex items-center gap-2">
                  <span className="text-green-400 font-mono text-sm font-bold">$</span>
                  <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 bg-transparent text-green-300 font-mono text-sm outline-none border-b border-green-600/30 pb-1 focus:border-green-400 focus:shadow-lg focus:shadow-green-500/20 disabled:opacity-50"
                    placeholder={isLoading ? "Processing..." : "git <command>"}
                    autoFocus
                  />
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
