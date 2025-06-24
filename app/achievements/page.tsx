"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Trophy,
  Star,
  Shield,
  Zap,
  Target,
  Crown,
  Award,
  Medal,
  MapPin,
  Calendar,
  Users,
  Code,
  Lightbulb,
} from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, Text } from "@react-three/drei"
// import { BackgroundSelector } from "./components/background-selector"

function AchievementsScene() {
  return (
    <Canvas camera={{ position: [4, 4, 4], fov: 60 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />

      {/* Create trophy structure */}
      <Box position={[0, 0, 0]} args={[1, 0.2, 1]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      <Box position={[0, 0.5, 0]} args={[0.3, 0.6, 0.3]}>
        <meshStandardMaterial color="#FFD700" />
      </Box>
      <Box position={[0, 1.2, 0]} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial color="#FFD700" />
      </Box>
      <Box position={[0, 1.8, 0]} args={[0.4, 0.4, 0.4]}>
        <meshStandardMaterial color="#FFA500" />
      </Box>

      <Text position={[0, 2.5, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
        Achievements
      </Text>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  )
}

const achievements = [
  {
    id: "bharattech-hackathon",
    name: "Best First Year Innovator Award – BharatTech 2.0 Hackathon",
    description:
      "A real-time virtual group study platform for students. Users can join topic-based study rooms, communicate through chat, access curated resources, and build a learning network in one place.",
    icon: <Trophy className="w-6 h-6" />,
    category: "Hackathon",
    rarity: "legendary",
    unlocked: true,
    date: "2024",
    location: "SVIET",
    status: "Live",
    points: 250,
    keyAchievements: [
      "Real-time chat system for topic-specific discussions",
      "Friend system for building study connections",
      "Centralized academic resources (notes, videos, links)",
      "Personalized dashboard to track sessions and friends",
    ],
  },
  {
    id: "ai-pioneer",
    name: "Top MongoDB Projects - Hack N Win 2.0",
    description:
      "Built cutting-edge Group Study Platform using modern learning  and deployed scalable solutions.",
    icon: <Zap className="w-6 h-6" />,
    category: "Development",
    rarity: "epic",
    unlocked: true,
    date: "2024",
    location: "CGC Jhanjheri",
    status: "Active",
    points: 200,
    keyAchievements: [
      "Designed and optimized MongoDB queries for high-performance data retrieval",
      "Ranked in Top 7 Projects among 100+ participants",
      "Integrated MongoDB with Node.js and Express for robust API performance",
      "Collaborated in a cross-functional team using Git workflows",
    ],
  },
  {
    id: "full-stack-mastery",
    name: "HackOcto 2.0 Hackathon",
    description:
      "Designed and built complete web applications from frontend to backend , made a AI Interview Website For people.",
    icon: <Shield className="w-6 h-6" />,
    category: "Development",
    rarity: "epic",
    unlocked: true,
    date: "2024",
    location: "IIIT UNA , Himachal Pradesh",
    status: "Happened",
    points: 175,
    keyAchievements: [
      "Got selected among 200 teams , only 20 teams were Selected",
      "Mastered React, Node.js, and database design",
      "Implemented AI System",
      "AI interview Sessions for people Who are struggling in jobs interview",
    ],
  },
  {
    id: "open-source-hero",
    name: "IIT BANARAS , ECOTHON",
    description:
      "A Lost And Found Item Tracking Website.",
    icon: <Award className="w-6 h-6" />,
    category: "Community",
    rarity: "rare",
    unlocked: true,
    date: "2024",
    location: "IIT BANARAS",
    status: "Active",
    points: 150,
    keyAchievements: [
      "SElected Among 500 Teams , only 30 teams were selected.",
      "Maintained 3 popular npm packages",
      "Mastered GIT",
      "Created comprehensive documentation for projects",
    ],
  },
  {
    id: "minecraft-portfolio",
    name: "HackSpire 2.0",
    description:
      "Created a Ride Finding website with less money , Car pooling",
    icon: <Medal className="w-6 h-6" />,
    category: "Design",
    rarity: "rare",
    unlocked: true,
    date: "2025",
    location: "Thapar University , Patiala",
    status: "Live",
    points: 125,
    keyAchievements: [
      "Made A car pooling website",
      "Participation certificate",
      "Integrated So many API",
    ],
  },
  {
    id: "first-commit",
    name: "TechAbhivyagti 2.0",
    description:
      "A competition in which best 1st year front end projects are showcased among judges",
    icon: <Target className="w-6 h-6" />,
    category: "Milestone",
    rarity: "common",
    unlocked: true,
    date: "2020",
    location: "Chitkara University, Rajpura",
    status: "Completed",
    points: 50,
    keyAchievements: [
      "Selected Among 100 of students",
      "Learned version control with Git",
      "Learned Anything can be happened Even when you give your 100 % , nothing goes with plan.",
    ],
  },
  {
    id: "future-architect",
    name: "Rapid Code CSS",
    description: "made a stunning car store website with 3d effects.",
    icon: <Crown className="w-6 h-6" />,
    category: "Architecture",
    rarity: "legendary",
    unlocked: false,
    date: null,
    location: "Chitkara University",
    status: "Locked",
    points: 300,
    keyAchievements: [
      "I get 2nd place in this competition , runnerup",
      "Implement threejs",
      "Responsive CSS",
    ],
  },
]

export default function AchievementsPage() {
  const router = useRouter()
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([])
  // const [currentBackground, setCurrentBackground] = useState({
  //   id: "minecraft-cave",
  //   name: "Minecraft Cave",
  //   type: "image" as const,
  //   value: "/images/minecraft-achievements-bg.png",
  //   preview: "bg-gradient-to-br from-gray-800 to-gray-900",
  // })

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

  const getRarityColors = (rarity: string) => {
    switch (rarity) {
      case "common":
        return {
          bg: "bg-gray-900/95",
          border: "border-gray-600/70",
          text: "text-gray-100",
          accent: "text-gray-400",
          glow: "shadow-gray-500/20",
          badge: "bg-gray-700/80 text-gray-300",
        }
      case "rare":
        return {
          bg: "bg-blue-900/95",
          border: "border-blue-500/70",
          text: "text-blue-100",
          accent: "text-blue-400",
          glow: "shadow-blue-500/30",
          badge: "bg-blue-700/80 text-blue-300",
        }
      case "epic":
        return {
          bg: "bg-purple-900/95",
          border: "border-purple-500/70",
          text: "text-purple-100",
          accent: "text-purple-400",
          glow: "shadow-purple-500/30",
          badge: "bg-purple-700/80 text-purple-300",
        }
      case "legendary":
        return {
          bg: "bg-gradient-to-br from-orange-900/95 to-yellow-900/95",
          border: "border-orange-500/70",
          text: "text-orange-100",
          accent: "text-orange-400",
          glow: "shadow-orange-500/40",
          badge: "bg-orange-700/80 text-orange-300",
        }
      default:
        return {
          bg: "bg-gray-900/95",
          border: "border-gray-600/70",
          text: "text-gray-100",
          accent: "text-gray-400",
          glow: "shadow-gray-500/20",
          badge: "bg-gray-700/80 text-gray-300",
        }
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hackathon":
        return <Trophy className="w-4 h-4" />
      case "Development":
        return <Code className="w-4 h-4" />
      case "Community":
        return <Users className="w-4 h-4" />
      case "Design":
        return <Lightbulb className="w-4 h-4" />
      case "Architecture":
        return <Crown className="w-4 h-4" />
      default:
        return <Star className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-600/20 text-green-400 border-green-500/50"
      case "Active":
        return "bg-blue-600/20 text-blue-400 border-blue-500/50"
      case "Ongoing":
        return "bg-yellow-600/20 text-yellow-400 border-yellow-500/50"
      case "Completed":
        return "bg-gray-600/20 text-gray-400 border-gray-500/50"
      case "Locked":
        return "bg-red-600/20 text-red-400 border-red-500/50"
      default:
        return "bg-gray-600/20 text-gray-400 border-gray-500/50"
    }
  }

  const totalPoints = achievements.filter((a) => a.unlocked).reduce((sum, a) => sum + a.points, 0)
  const unlockedCount = achievements.filter((a) => a.unlocked).length

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Minecraft Background */}
      <div className="fixed inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/minecraft-bg.png')`,
          }}
        />
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Enhanced Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 bg-yellow-400 rounded-full pointer-events-none animate-pulse"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            boxShadow: "0 0 8px #facc15, 0 0 16px #facc15",
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
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white">🏆 Achievement Vault</h1>
            <p className="text-yellow-300">My professional journey and the impact I've made at each step</p>
          </div>
          {/* <BackgroundSelector currentBackground={currentBackground.value} onBackgroundChange={setCurrentBackground} /> */}
          <div className="w-32 h-32">
            <AchievementsScene />
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <Card className="bg-yellow-900/90 border-yellow-600/70 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400">{totalPoints}</div>
            <div className="text-yellow-300">Total Points</div>
          </Card>
          <Card className="bg-green-900/90 border-green-600/70 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-bold text-green-400">
              {unlockedCount}/{achievements.length}
            </div>
            <div className="text-green-300">Unlocked</div>
          </Card>
          <Card className="bg-purple-900/90 border-purple-600/70 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-bold text-purple-400">
              {achievements.filter((a) => a.rarity === "legendary" && a.unlocked).length}
            </div>
            <div className="text-purple-300">Legendary</div>
          </Card>
          <Card className="bg-blue-900/90 border-blue-600/70 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">
              {Math.round((unlockedCount / achievements.length) * 100)}%
            </div>
            <div className="text-blue-300">Completion</div>
          </Card>
        </div>

        {/* Enhanced Achievements Grid */}
        <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2">
          {achievements.map((achievement) => {
            const colors = getRarityColors(achievement.rarity)
            return (
              <Card
                key={achievement.id}
                className={`${colors.bg} ${colors.border} backdrop-blur-sm transition-all duration-300 ${
                  achievement.unlocked ? `hover:scale-[1.02] hover:shadow-2xl ${colors.glow}` : "opacity-60 grayscale"
                } ${achievement.rarity === "legendary" ? "ring-2 ring-orange-500/30" : ""}`}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`p-4 rounded-xl ${colors.bg} ${colors.accent} ${
                        achievement.unlocked ? "shadow-lg" : "opacity-50"
                      } border ${colors.border}`}
                    >
                      {achievement.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`${colors.badge} border-0 text-xs font-medium`}>
                          {getCategoryIcon(achievement.category)}
                          <span className="ml-1">{achievement.category}</span>
                        </Badge>
                        <Badge className={`${getStatusColor(achievement.status)} border text-xs`}>
                          {achievement.status}
                        </Badge>
                      </div>
                      <h3 className={`text-xl font-bold ${colors.text} mb-2 leading-tight`}>{achievement.name}</h3>
                      <div className="flex items-center gap-4 text-sm opacity-80">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className={colors.text}>{achievement.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className={colors.text}>{achievement.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`${colors.text} mb-6 text-sm leading-relaxed opacity-90`}>{achievement.description}</p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold ${colors.accent} mb-3`}>Key Achievements:</h4>
                    <ul className="space-y-2">
                      {achievement.keyAchievements.map((item, index) => (
                        <li key={index} className={`text-sm ${colors.text} opacity-80 flex items-start gap-2`}>
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${colors.accent.replace("text-", "bg-")} mt-2 flex-shrink-0`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-700/30">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={`${colors.badge} ${colors.border} capitalize text-xs`}>
                        {achievement.rarity}
                      </Badge>
                      <div className={`text-sm ${colors.accent} font-bold`}>+{achievement.points} XP</div>
                    </div>
                    {!achievement.unlocked && (
                      <div className="text-xs text-red-400 flex items-center gap-1">🔒 Locked</div>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Progress Section */}
        <Card className="bg-gradient-to-r from-purple-900/90 to-orange-900/90 border-purple-600/70 backdrop-blur-sm mt-12">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Achievement Progress</h3>
            <div className="space-y-4">
              {["common", "rare", "epic", "legendary"].map((rarity) => {
                const rarityAchievements = achievements.filter((a) => a.rarity === rarity)
                const unlockedRarity = rarityAchievements.filter((a) => a.unlocked).length
                const colors = getRarityColors(rarity)

                return (
                  <div key={rarity} className="flex items-center gap-4">
                    <div className={`w-24 text-sm font-bold ${colors.text} capitalize`}>{rarity}</div>
                    <div className="flex-1 bg-gray-700/50 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${colors.accent.replace("text-", "bg-")} transition-all duration-1000`}
                        style={{ width: `${(unlockedRarity / rarityAchievements.length) * 100}%` }}
                      />
                    </div>
                    <div className={`text-sm ${colors.text} w-12 text-right`}>
                      {unlockedRarity}/{rarityAchievements.length}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
