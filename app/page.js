"use client";
import Link from "next/link";
import Image from "next/image";
import { Rocket, BookOpen, Brain, Users, ScrollText, Lightbulb, Trophy, Gamepad, Zap, ArrowLeft, Sparkles, Code, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Add a glowing cursor effect
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 overflow-hidden text-white bg-[#0A0F1D] font-cyberpunk">

      {/* 🌌 Cyberpunk Background with Animated Gradient */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50 saturate-150" style={{ backgroundImage: "url('/RI.jpeg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/90 via-[#0A0F1D]/70 to-[#0A0F1D]/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>

      {/* 🎇 Glowing Cursor */}
      <div 
        className="glowing-cursor"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>

      {/* 🚀 Back to Home */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-6 left-6 z-20"
      >
        <Link href="/" className="flex items-center text-gray-300 hover:text-cyan-400 transition-all">
          <ArrowLeft size={20} className="mr-2" /> Back to Home
        </Link>
      </motion.div>

      {/* 🚀 Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center text-center pt-32 pb-20 z-10 w-full max-w-6xl"
      >
        {/* Neon Glow Title with Animated Gradient */}
        <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-gradient">
          <span className="text-purple-400">RIZZ</span>-<span className="text-cyan-400">MAZDOOR</span>
        </h1>

        {/* Subtitle with Glitch Effect */}
        <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-4xl mx-auto font-cyberpunk-sub glitch" data-text="The ultimate student HQ where learning hits different, startups go turbo, and AI’s your 24/7 grind buddy. Stack wins, flex skills, and ride the future wave like a boss. 🚀🔥">
          The ultimate student HQ where learning hits different, startups go turbo, and AI’s your 24/7 grind buddy. Stack wins, flex skills, and ride the future wave like a boss. 🚀🔥
        </p>

        {/* 🚀 Call-To-Action Buttons with Hover Glow */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link href="/launchlab" className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-lg shadow-md flex items-center gap-3 text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] font-cyberpunk-sub">
            <Rocket size={24} /> Enter LaunchLab X
          </Link>
          <Link href="/pressurecooker" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg shadow-md flex items-center gap-3 text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] font-cyberpunk-sub">
            <BookOpen size={24} /> Explore PRESSURE-COOKER
          </Link>
          <Link href="/badol" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg shadow-md flex items-center gap-3 text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] font-cyberpunk-sub">
            <Brain size={24} /> Meet Badol AI
          </Link>
        </div>
      </motion.section>

      {/* 🌟 Giant Image Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mt-12 z-10"
      >
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-cyan-500/50 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all">
          <Image
            src="/MAZDOOR.jpg" // Replace with your image path
            alt="Giant Image"
            layout="fill"
            objectFit="cover"
            className="brightness-75 hover:brightness-100 transition-all duration-300"
          />
        </div>
      </motion.section>

      {/* ⚡ Feature Highlights */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 w-full max-w-6xl text-center z-10"
      >
        <h2 className="text-5xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] font-cyberpunk">
          Why RIZZ-MAZDOOR?
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto font-cyberpunk-sub">
          Tired of boring productivity hacks? Meet RIZZ-MAZDOOR—your AI-powered sidekick for slaying the student grind. 
          We get it: goldfish attention span, endless deadlines, and zero motivation. That’s why we’re here. From startups to exams, we turn chaos into wins with game-like vibes, dopamine hits, and tools that actually work.
          Think of us as your cheat code to success. Flex your skills, vibe with the future, and join the revolution. Let’s make productivity cool again. 
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Rocket size={56} />, title: "LAUNCHLAB X 🚀", desc: "Find mentors, build startups, and launch your ideas into the future. GO BRRRRRRR" },
            { icon: <BookOpen size={56} />, title: "PRESSURE-COOKER📚", desc: "Huhh make your goldfish attention-span legenmaxxx with our cool Gaming-quiz platform" },
            { icon: <Brain size={56} />, title: "BADOL AI 🤖", desc: "AN AI TO WELPPP you with your ultimate empty rizz in yo damn startup" },
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
            >
              <div className="text-cyan-400 flex items-center justify-center gap-2">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mt-3 font-cyberpunk">{feature.title}</h3>
              <p className="text-gray-400 text-md text-center mt-3 font-cyberpunk-sub">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🎮 Gaming-Themed Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full max-w-6xl text-center z-10"
      >
        <h2 className="text-5xl font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] font-cyberpunk">
          Level Up Your Game
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto font-cyberpunk-sub">
          *Unlock achievements, earn XP, and climb the leaderboard.* 🏆
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Trophy size={56} />, title: "ACHIEVEMENTS 🏆", desc: "Complete challenges, earn badges, and flex your skills." },
            { icon: <Gamepad size={56} />, title: "GAME MODE 🎮", desc: "Turn learning into a game and compete with friends." },
            { icon: <Zap size={56} />, title: "POWER-UPS ⚡", desc: "Unlock boosts, shortcuts, and exclusive features." },
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-purple-500 shadow-lg hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            >
              <div className="text-purple-400 flex items-center justify-center gap-2">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mt-3 font-cyberpunk">{feature.title}</h3>
              <p className="text-gray-400 text-md text-center mt-3 font-cyberpunk-sub">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🌟 Community & Support */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full max-w-5xl text-center z-10"
      >
        <h2 className="text-5xl font-bold text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] font-cyberpunk">
          Join the Revolution
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto font-cyberpunk-sub">
          A *community of innovators, entrepreneurs, and AI-powered learners.* 🚀  
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { href: "/joincommunity", text: "Join Our Community", icon: <Users size={24} />, color: "bg-purple-500 hover:bg-purple-600" },
            { href: "/resources", text: "Explore Resources", icon: <ScrollText size={24} />, color: "bg-cyan-500 hover:bg-cyan-600" },
            { href: "/mentors", text: "Find a Mentor", icon: <Lightbulb size={24} />, color: "bg-blue-500 hover:bg-blue-600" },
          ].map((action, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Link href={action.href} className={`${action.color} px-8 py-4 rounded-lg shadow-md flex items-center gap-3 text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] font-cyberpunk-sub`}>
                {action.icon} {action.text}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🔥 Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 text-gray-400 text-sm z-10 tracking-wide py-8 border-t border-gray-700 w-full text-center font-cyberpunk-sub"
      >
        *THE FUTURE OF STUDENT PRODUCTIVITY. POWERED BY AI.*
      </motion.footer>

      {/* Glowing Cursor */}
      <style jsx global>{`
        .glowing-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
        }

        /* Cyberpunk Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Exo+2:wght@400;600&display=swap');

        .font-cyberpunk {
          font-family: 'Orbitron', sans-serif;
        }

        .font-cyberpunk-sub {
          font-family: 'Exo 2', sans-serif;
        }

        /* Glitch Effect */
        .glitch {
          position: relative;
          color: white;
        }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #ff00ff;
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px;
          text-shadow: 2px 0 #00ffff;
          animation: glitch-anim 1s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(55px, 9999px, 56px, 0); }
          5% { clip: rect(47px, 9999px, 30px, 0); }
          10% { clip: rect(33px, 9999px, 36px, 0); }
          15% { clip: rect(35px, 9999px, 9px, 0); }
          20% { clip: rect(63px, 9999px, 59px, 0); }
          25% { clip: rect(96px, 9999px, 98px, 0); }
          30% { clip: rect(48px, 9999px, 77px, 0); }
          35% { clip: rect(50px, 9999px, 34px, 0); }
          40% { clip: rect(60px, 9999px, 72px, 0); }
          45% { clip: rect(10px, 9999px, 60px, 0); }
          50% { clip: rect(2px, 9999px, 60px, 0); }
          55% { clip: rect(23px, 9999px, 89px, 0); }
          60% { clip: rect(76px, 9999px, 91px, 0); }
          65% { clip: rect(62px, 9999px, 30px, 0); }
          70% { clip: rect(60px, 9999px, 73px, 0); }
          75% { clip: rect(60px, 9999px, 87px, 0); }
          80% { clip: rect(2px, 9999px, 14px, 0); }
          85% { clip: rect(28px, 9999px, 87px, 0); }
          90% { clip: rect(73px, 9999px, 50px, 0); }
          95% { clip: rect(79px, 9999px, 70px, 0); }
          100% { clip: rect(17px, 9999px, 79px, 0); }
        }

        /* Floating Animation */
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </main>
  );
}