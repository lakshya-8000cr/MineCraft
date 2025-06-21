# 🎮 Minecraft Portfolio Website

A Minecraft-themed interactive portfolio showcasing **Lakshya Chauhan** - Full-Stack Developer, YouTuber (1.5K+ subs), Digital Artist & Content Creator.

##  Quick Start

\`\`\`bash
# Clone and setup
git clone https://github.com/lakshya-chauhan/minecraft-portfolio.git
cd minecraft-portfolio
npm install
npm install @react-three/fiber @react-three/drei three lucide-react
npx shadcn@latest init
npx shadcn@latest add card button badge
npm run dev
\`\`\`

## ✨ Features

###  **Interactive Elements**
- **3D Minecraft Worlds** - Interactive scenes with React Three Fiber
- **Terminal Interface** - Git-style commands (`git projects`, `git skills`, etc.)
- **Welcome Popup** - Creative introduction with typewriter effects
- **Responsive Design** - Optimized for desktop, tablet, and mobile

### 🛠️ **Technical Stack**
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui components
- **3D Graphics**: React Three Fiber + Three.js
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: CSS animations + Framer Motion concepts

### 🎨 **Multi-Talent Showcase**
- **💻 Full-Stack Development** - Projects and technical skills
- **📺 YouTube Content Creation** - 1.5K+ subscribers
- **🎨 Digital Art & Design** - Creative portfolio
- **🎬 Video Editing & Narration** - Content creation skills
- **🧠 Problem Solving** - Technical innovation

## 📁 Project Structure

\`\`\`bash
minecraft-portfolio/
├── app/
│   ├── page.tsx                 # Main hub with terminal
│   ├── projects/page.tsx        # Projects showcase
│   ├── skills/page.tsx          # Technical skills
│   ├── about/page.tsx           # Personal information
│   ├── contact/page.tsx         # Contact form & info
│   ├── achievements/page.tsx    # Achievements & milestones
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── ui/                      # shadcn/ui components
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   └── badge.tsx
│   ├── welcome-popup.tsx        # Welcome introduction popup
│   └── simple-minecraft-scene.tsx # 3D Minecraft scenes
├── public/
│   └── images/
│       ├── minecraft-bg.png     # Background images
│       ├── minecraft-forest.png
│       └── minecraft-cave.png
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
\`\`\`

## 🎮 Navigation & Commands

### Terminal Commands
The portfolio features a functional terminal interface with git-style commands:

\`\`\`bash
git projects     # 🚀 View development projects
git skills       # 🛠️  Check technical skills
git about        # 👤 Personal information
git contact      # 📧 Contact details
git achievements # 🏆 Milestones & achievements
git status       # 🌟 Portfolio status
git help         # 🆘 Show all commands
git clear        # 🧹 Clear terminal
\`\`\`

### Quick Action Buttons
- **🚀 Projects** - Direct access to project showcase
- **🛠️ Skills** - Technical skills overview
- **👤 About** - Personal story and background
- **🆘 Help** - Command reference

## 🎨 Customization

### Adding Background Images
Place Minecraft-themed images in `public/images/`:
- `minecraft-bg.png` - Main background
- `minecraft-forest.png` - Projects page
- `minecraft-cave.png` - Skills/other pages

### Modifying Content
- **Personal Info**: Update `components/welcome-popup.tsx`
- **Projects**: Edit `app/projects/page.tsx`
- **Skills**: Modify `app/skills/page.tsx`
- **Terminal Messages**: Update `app/page.tsx`

### Color Themes
The portfolio uses a Minecraft-inspired color palette:
- **Primary**: Emerald/Green tones
- **Secondary**: Blue/Cyan accents
- **Highlights**: Purple, Yellow, Red
- **Background**: Dark stone/black themes

## 🛠️ Development

### Available Scripts
\`\`\`bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
\`\`\`

### Adding New Pages
1. Create new page in `app/[page-name]/page.tsx`
2. Add navigation command in main `page.tsx`
3. Update terminal command switch statement
4. Add corresponding 3D scene if desired

### Troubleshooting

#### 3D Scenes Not Rendering
- Check WebGL support: https://get.webgl.org/
- Verify Three.js dependencies are installed
- Check browser console for errors

#### Terminal Commands Not Working
- Ensure JavaScript is enabled
- Check for console errors
- Verify command syntax (must start with 'git')

#### Font Loading Errors
- Remove custom font references if not available
- Use system fonts as fallback
- Check font file paths

## 🚀 Deployment

### Vercel (Recommended)
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Netlify
\`\`\`bash
npm run build
# Upload 'out' folder to Netlify
\`\`\`

### Other Platforms
The portfolio is a standard Next.js application and can be deployed to any platform supporting Node.js.

## 🎯 Performance Optimization

- **3D Scenes**: Dynamically imported to avoid SSR issues
- **Images**: Optimized with Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Components loaded on demand

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About Lakshya Chauhan

**Multi-Talented Creator & Developer**

- 🚀 **Full-Stack Developer** - 3+ years experience
- 📺 **YouTuber** - 1.5K+ subscribers
- 🎨 **Digital Artist** - Creative design specialist
- 🎬 **Video Editor & Narrator** - Content creation expert
- 🧠 **Problem Solver** - Technical innovation enthusiast

### Connect With Me
- **Portfolio**: [Your Website URL]
- **YouTube**: [Your YouTube Channel]
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]
- **Email**: [Your Email]

## 🙏 Acknowledgments

- **Minecraft** - Inspiration for the theme and design
- **React Three Fiber** - Amazing 3D capabilities
- **shadcn/ui** - Beautiful UI components
- **Next.js Team** - Excellent framework
- **Vercel** - Hosting and deployment platform

---

**Built by Lakshya Chauhan** 🎮✨
