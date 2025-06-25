"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import {
  Terminal,
  Activity,
  Cpu,
  HardDrive,
  Youtube,
  Palette,
  Mic,
  Code,
  Star,
  Github,
  Mail,
  Linkedin,
  User,
  Trophy,
  HelpCircle,
  BarChart3,
  Trash2,
  MessageCircle,
  Zap,
  Sparkles,
} from "lucide-react"
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
  const [showWelcomePopup, setShowWelcomePopup] = useState(false)

  // Check if popup has been shown before
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenWelcomePopup")
    if (!hasSeenPopup) {
      setShowWelcomePopup(true)
    }
  }, [])

  // Function to handle popup close
  const handleClosePopup = () => {
    setShowWelcomePopup(false)
    localStorage.setItem("hasSeenWelcomePopup", "true")
  }
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
    "  git projects     - View my projects",
    "  git skills       - Check my skills",
    "  git about        - About me",
    "  git contact      - Get in touch",
    "  git achievements - View achievements",
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

  // All available commands with their details
  const allCommands = [
    {
      cmd: "git projects",
      label: "Projects",
      icon: <Code className="w-4 h-4" />,
      color: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
      description: "View my coding projects",
    },
    {
      cmd: "git skills",
      label: "Skills",
      icon: <Zap className="w-4 h-4" />,
      color: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
      description: "Check my technical skills",
    },
    {
      cmd: "git about",
      label: "About",
      icon: <User className="w-4 h-4" />,
      color: "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800",
      description: "Learn about me",
    },
    {
      cmd: "git contact",
      label: "Contact",
      icon: <MessageCircle className="w-4 h-4" />,
      color: "bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800",
      description: "Get in touch",
    },
    {
      cmd: "git achievements",
      label: "Achievements",
      icon: <Trophy className="w-4 h-4" />,
      color: "bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700",
      description: "View my accomplishments",
    },
    {
      cmd: "git status",
      label: "Status",
      icon: <BarChart3 className="w-4 h-4" />,
      color: "bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800",
      description: "Check portfolio status",
    },
    {
      cmd: "git help",
      label: "🆘 Help",
      icon: <HelpCircle className="w-4 h-4" />,
      color: "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700",
      description: "Show all commands",
    },
    {
      cmd: "git clear",
      label: "🧹 Clear",
      icon: <Trash2 className="w-4 h-4" />,
      color: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800",
      description: "Clear terminal",
    },
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
      {showWelcomePopup && <WelcomePopup onClose={handleClosePopup} />}

      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/main2.jpg')`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Enhanced Skills Showcase Banner */}
        <div className="mb-4 sm:mb-6">
          <Card className="bg-gradient-to-r from-emerald-900/90 to-blue-900/90 border-emerald-500/50 backdrop-blur-md shadow-2xl shadow-emerald-500/20">
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`p-2 sm:p-3 rounded-full bg-black/40 ${skills[skillIndex].color} shadow-lg`}>
                    {skills[skillIndex].icon}
                  </div>
                  <div>
                    <div className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                      Lakshya Chauhan
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 animate-pulse" />
                    </div>
                    <div className={`text-xs sm:text-sm ${skills[skillIndex].color} animate-pulse font-medium`}>
                      {skills[skillIndex].name}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                {/* Enhanced Social Media Icons */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href="https://github.com/lakshya-8000cr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-black/50 hover:bg-black/70 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 hover:text-white" />
                  </a>
                  <a
                    href="https://www.youtube.com/@LAKSHYANET"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-black/50 hover:bg-red-600/70 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 hover:text-red-400" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lakshya-chauhan-297715331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-black/50 hover:bg-blue-600/70 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 hover:text-blue-400" />
                  </a>
                  <a
                    href="mailto:lakshyachauhan147@gmail.com"
                    className="p-2 sm:p-3 bg-black/50 hover:bg-green-600/70 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 hover:text-green-400" />
                  </a>
                </div>

                {/* Enhanced Stats */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm">
                  <div className="text-center">
                    <div className="text-emerald-400 font-bold text-lg xl:text-xl">6+</div>
                    <div className="text-emerald-300/80 text-xs">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-400 font-bold text-lg xl:text-xl">1.5K+</div>
                    <div className="text-red-300/80 text-xs">YouTube Subs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-bold text-lg xl:text-xl">∞</div>
                    <div className="text-purple-300/80 text-xs">Artworks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-bold text-lg xl:text-xl">2+</div>
                    <div className="text-blue-300/80 text-xs">Years Exp</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Enhanced 3D World & Command Center */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {/* 3D Scene */}
            <Card className="bg-black/90 border-green-500/70 backdrop-blur-md shadow-2xl shadow-green-500/20 overflow-hidden">
              <div className="p-4 sm:p-6 h-full">
                <h3 className="text-green-300 font-bold mb-3 sm:mb-4 text-center text-lg sm:text-xl flex items-center justify-center gap-2">
                  🌟 MINECRAFT UNIVERSE 🌟<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </h3>
                <div className="h-64 sm:h-80 border border-green-600/50 rounded-lg bg-black/30 shadow-inner">
                  <SimpleMinecraftScene />
                </div>
              </div>
            </Card>

            {/* Enhanced Command Center */}
            <Card className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 border-purple-500/50 backdrop-blur-md shadow-2xl shadow-purple-500/20">
              <div className="p-4 sm:p-6">
                <h3 className="text-purple-300 font-bold mb-3 sm:mb-4 text-center text-lg sm:text-xl flex items-center justify-center gap-2">
                  ⚡ COMMAND CENTER ⚡<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </h3>
                <p className="text-purple-200/80 text-center mb-4 sm:mb-6 text-xs sm:text-sm">
                  Choose your adventure! Use buttons for quick access or type commands like a pro.
                </p>

                {/* All Command Buttons */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {allCommands.map((btn) => (
                    <button
                      key={btn.cmd}
                      onClick={() => {
                        if (!isLoading) {
                          executeGitCommand(btn.cmd)
                        }
                      }}
                      disabled={isLoading}
                      className={`${btn.color} text-white p-3 sm:p-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 group relative overflow-hidden`}
                    >
                      <div className="flex items-center justify-center gap-1 sm:gap-2 relative z-10">
                        {btn.icon}
                        <span className="hidden xs:inline sm:inline">{btn.label}</span>
                        <span className="xs:hidden sm:hidden">{btn.label.split(" ")[0]}</span>
                      </div>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-purple-800/30 rounded-lg border border-purple-600/30">
                  <p className="text-purple-200/80 text-xs text-center">
                    💡 Pro tip: You can also type commands in the terminal for the full developer experience!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Enhanced Terminal */}
          <div className="lg:col-span-1 flex flex-col">
            <Card className="bg-black/95 border-green-500/70 backdrop-blur-md flex-1 flex flex-col shadow-2xl shadow-green-500/30">
              <div className="bg-gradient-to-r from-green-900/60 to-blue-900/60 px-4 sm:px-6 py-2 sm:py-3 border-b border-green-600/50 flex items-center gap-2 sm:gap-3">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-green-300 font-mono text-sm sm:text-base font-bold">
                  lakshya@minecraft-dev:~$
                </span>
                <div className="ml-auto flex gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-lg"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full shadow-lg"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                </div>
              </div>

              {/* Terminal Content */}
              <div
                ref={terminalRef}
                className="flex-1 p-4 sm:p-6 font-mono text-xs sm:text-sm text-green-300 overflow-y-auto"
                style={{ height: "300px", minHeight: "300px" }}
              >
                {history.map((line, index) => (
                  <div key={`line-${index}`} className="mb-1 leading-relaxed">
                    {line}
                  </div>
                ))}
                {isLoading && (
                  <div className="text-yellow-400 animate-pulse flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>⚡ Processing command...
                  </div>
                )}
              </div>

              {/* Enhanced System Stats */}
              <div className="px-4 sm:px-6 py-2 sm:py-3 border-t border-green-600/30 bg-black/60">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-xs">
                  <div className="flex items-center gap-1 sm:gap-2 text-green-400">
                    <Cpu className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-medium">CPU: 85%</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 text-blue-400">
                    <HardDrive className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-medium">RAM: 12GB</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 text-purple-400">
                    <Activity className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-medium">Creative</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 text-yellow-400">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-medium">Multi-Talent</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Input Area */}
              <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-green-600/50 bg-black/90">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-400 font-mono text-sm sm:text-base font-bold">$</span>
                  <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 bg-transparent text-green-300 font-mono text-sm sm:text-base outline-none border-b-2 border-green-600/40 pb-1 sm:pb-2 focus:border-green-400 focus:shadow-lg focus:shadow-green-500/30 disabled:opacity-50 transition-all duration-300"
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
