"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Trophy, Star, Shield, Zap, Target, Crown, Award, Medal } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, Text } from "@react-three/drei"

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
    id: "first-commit",
    name: "First Commit",
    description: "Made your first commit to the repository",
    icon: <Trophy className="w-6 h-6" />,
    rarity: "common",
    unlocked: true,
    date: "2020-01-15",
    points: 10,
  },
  {
    id: "code-explorer",
    name: "Code Explorer",
    description: "Viewed all project repositories",
    icon: <Target className="w-6 h-6" />,
    rarity: "common",
    unlocked: true,
    date: "2024-01-20",
    points: 25,
  },
  {
    id: "skill-master",
    name: "Skill Master",
    description: "Mastered 10+ technologies",
    icon: <Star className="w-6 h-6" />,
    rarity: "rare",
    unlocked: true,
    date: "2023-06-10",
    points: 50,
  },
  {
    id: "full-stack-warrior",
    name: "Full-Stack Warrior",
    description: "Built complete applications from frontend to backend",
    icon: <Shield className="w-6 h-6" />,
    rarity: "rare",
    unlocked: true,
    date: "2023-03-22",
    points: 75,
  },
  {
    id: "open-source-contributor",
    name: "Open Source Hero",
    description: "Contributed to 25+ open source projects",
    icon: <Award className="w-6 h-6" />,
    rarity: "epic",
    unlocked: true,
    date: "2023-11-05",
    points: 100,
  },
  {
    id: "ai-pioneer",
    name: "AI Pioneer",
    description: "Built AI-powered applications",
    icon: <Zap className="w-6 h-6" />,
    rarity: "epic",
    unlocked: true,
    date: "2024-02-14",
    points: 125,
  },
  {
    id: "architecture-master",
    name: "Architecture Master",
    description: "Designed scalable system architectures",
    icon: <Crown className="w-6 h-6" />,
    rarity: "legendary",
    unlocked: false,
    date: null,
    points: 200,
  },
  {
    id: "minecraft-legend",
    name: "Minecraft Legend",
    description: "Created the ultimate Minecraft-themed portfolio",
    icon: <Medal className="w-6 h-6" />,
    rarity: "legendary",
    unlocked: true,
    date: "2024-01-21",
    points: 250,
  },
]

export default function AchievementsPage() {
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

  const getRarityColors = (rarity: string) => {
    switch (rarity) {
      case "common":
        return {
          bg: "bg-gray-900/90",
          border: "border-gray-600/70",
          text: "text-gray-300",
          accent: "text-gray-400",
          glow: "shadow-gray-500/20",
        }
      case "rare":
        return {
          bg: "bg-blue-900/90",
          border: "border-blue-600/70",
          text: "text-blue-300",
          accent: "text-blue-400",
          glow: "shadow-blue-500/20",
        }
      case "epic":
        return {
          bg: "bg-purple-900/90",
          border: "border-purple-600/70",
          text: "text-purple-300",
          accent: "text-purple-400",
          glow: "shadow-purple-500/20",
        }
      case "legendary":
        return {
          bg: "bg-orange-900/90",
          border: "border-orange-600/70",
          text: "text-orange-300",
          accent: "text-orange-400",
          glow: "shadow-orange-500/20",
        }
      default:
        return {
          bg: "bg-gray-900/90",
          border: "border-gray-600/70",
          text: "text-gray-300",
          accent: "text-gray-400",
          glow: "shadow-gray-500/20",
        }
    }
  }

  const totalPoints = achievements.filter((a) => a.unlocked).reduce((sum, a) => sum + a.points, 0)
  const unlockedCount = achievements.filter((a) => a.unlocked).length

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/minecraft-bg.png')`,
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-1 h-1 bg-yellow-400 rounded-full pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            boxShadow: "0 0 4px #facc15",
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
            <h1 className="text-4xl font-bold text-white">🏆 Achievement Vault</h1>
            <p className="text-yellow-300">Your development milestones and accomplishments</p>
          </div>
          <div className="w-32 h-32">
            <AchievementsScene />
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <Card className="bg-yellow-900/90 border-yellow-600/70 backdrop-blur-none p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400">{totalPoints}</div>
            <div className="text-yellow-300">Total Points</div>
          </Card>
          <Card className="bg-green-900/90 border-green-600/70 backdrop-blur-none p-6 text-center">
            <div className="text-3xl font-bold text-green-400">
              {unlockedCount}/{achievements.length}
            </div>
            <div className="text-green-300">Unlocked</div>
          </Card>
          <Card className="bg-purple-900/90 border-purple-600/70 backdrop-blur-none p-6 text-center">
            <div className="text-3xl font-bold text-purple-400">
              {achievements.filter((a) => a.rarity === "legendary" && a.unlocked).length}
            </div>
            <div className="text-purple-300">Legendary</div>
          </Card>
          <Card className="bg-blue-900/90 border-blue-600/70 backdrop-blur-none p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">
              {Math.round((unlockedCount / achievements.length) * 100)}%
            </div>
            <div className="text-blue-300">Completion</div>
          </Card>
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => {
            const colors = getRarityColors(achievement.rarity)
            return (
              <Card
                key={achievement.id}
                className={`${colors.bg} ${colors.border} backdrop-blur-none transition-all duration-300 ${
                  achievement.unlocked ? `hover:scale-105 hover:shadow-lg ${colors.glow}` : "opacity-50 grayscale"
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-full ${colors.bg} ${colors.accent} ${
                        achievement.unlocked ? "" : "opacity-50"
                      }`}
                    >
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${colors.text}`}>{achievement.name}</h3>
                      <Badge variant="outline" className={`${colors.bg} ${colors.text} ${colors.border} capitalize`}>
                        {achievement.rarity}
                      </Badge>
                    </div>
                  </div>

                  <p className={`${colors.text}/80 mb-4 text-sm`}>{achievement.description}</p>

                  <div className="flex justify-between items-center">
                    <div className={`text-sm ${colors.accent} font-bold`}>+{achievement.points} XP</div>
                    {achievement.unlocked && achievement.date && (
                      <div className={`text-xs ${colors.text}/60`}>
                        {new Date(achievement.date).toLocaleDateString()}
                      </div>
                    )}
                    {!achievement.unlocked && <div className="text-xs text-gray-500">🔒 Locked</div>}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Progress Section */}
        <Card className="bg-gradient-to-r from-purple-900/90 to-orange-900/90 border-purple-600/70 backdrop-blur-none mt-8">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Achievement Progress</h3>
            <div className="space-y-4">
              {["common", "rare", "epic", "legendary"].map((rarity) => {
                const rarityAchievements = achievements.filter((a) => a.rarity === rarity)
                const unlockedRarity = rarityAchievements.filter((a) => a.unlocked).length
                const colors = getRarityColors(rarity)

                return (
                  <div key={rarity} className="flex items-center gap-4">
                    <div className={`w-20 text-sm font-bold ${colors.text} capitalize`}>{rarity}</div>
                    <div className="flex-1 bg-gray-700/50 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${colors.accent.replace("text-", "bg-")} transition-all duration-1000`}
                        style={{ width: `${(unlockedRarity / rarityAchievements.length) * 100}%` }}
                      />
                    </div>
                    <div className={`text-sm ${colors.text}`}>
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
