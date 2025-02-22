"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Code, Brain, Lightbulb, Rocket, Users, Star, Zap } from "lucide-react";

export default function ExploreResources() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 overflow-hidden text-white bg-[#0A0F1D] font-sans">
      
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75 saturate-150" style={{ backgroundImage: "url('/PURPLE_THEME.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/90 via-[#0A0F1D]/70 to-[#0A0F1D]/90"></div>

      {/* 🔙 Back to Home */}
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

      {/* 📚 Explore Resources Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 p-10 rounded-3xl bg-[#1E293B]/95 border border-cyan-500 shadow-2xl text-center w-full max-w-5xl hover:shadow-cyan-500/40 transition-shadow duration-500"
      >
        <h2 className="text-6xl font-extrabold text-cyan-400 drop-shadow-lg">📚 Explore Resources</h2>
        <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
          Access the **best tools, guides, and resources** to level up your skills, launch a startup, and master AI-driven learning. 🚀
        </p>
      </motion.div>

      {/* 🔥 Featured Resources */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 w-full max-w-6xl text-center z-10"
      >
        <h2 className="text-5xl font-bold text-cyan-400 drop-shadow-lg">Top Resources 🚀</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Learn from industry experts, explore new technologies, and stay ahead of the curve with our curated resource hub. 🔥
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[ 
            { icon: <BookOpen size={56} />, title: "Ultimate Startup Guide", desc: "A step-by-step guide to building and scaling your startup.", link: "https://www.ycombinator.com/library" },
            { icon: <Brain size={56} />, title: "AI Learning Hub", desc: "Master AI with the best courses, tools, and real-world projects.", link: "https://www.coursera.org/specializations/deep-learning" },
            { icon: <Code size={56} />, title: "Full-Stack Development", desc: "From frontend to backend, get hands-on coding experience.", link: "https://www.freecodecamp.org/" },
          ].map((resource, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
            >
              <div className="text-cyan-400 flex items-center justify-center gap-2">
                {resource.icon}
              </div>
              <h3 className="text-2xl font-semibold mt-3">{resource.title}</h3>
              <p className="text-gray-400 text-md text-center mt-3">{resource.desc}</p>
              <a 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all"
              >
                Explore
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🔥 Trending Now Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full max-w-6xl text-center z-10"
      >
        <h2 className="text-5xl font-bold text-purple-400 drop-shadow-lg">Trending Now 🔥</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Check out what everyone’s talking about! Stay ahead with the latest tools, courses, and research papers.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Rocket size={56} />, title: "AI in 2024", desc: "Top AI trends shaping the future.", link: "https://www.mckinsey.com/featured-insights/artificial-intelligence" },
            { icon: <Lightbulb size={56} />, title: "Startup Pitch Tips", desc: "How to pitch your startup like a pro.", link: "https://www.forbes.com/sites/forbestechcouncil/2023/01/10/how-to-pitch-your-startup-like-a-pro/" },
            { icon: <Code size={56} />, title: "Web3 Basics", desc: "Learn the fundamentals of Web3 and blockchain.", link: "https://ethereum.org/en/web3/" },
          ].map((trend, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-purple-500 shadow-lg hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(192,132,252,0.6)]"
            >
              <div className="text-purple-400 flex items-center justify-center gap-2">
                {trend.icon}
              </div>
              <h3 className="text-2xl font-semibold mt-3">{trend.title}</h3>
              <p className="text-gray-400 text-md text-center mt-3">{trend.desc}</p>
              <a 
                href={trend.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
              >
                Explore
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ⚡ Quick Links Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full max-w-6xl text-center z-10"
      >
        <h2 className="text-5xl font-bold text-cyan-400 drop-shadow-lg">Quick Links ⚡</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Jump straight into the action with these handpicked resources. No fluff, just value! 🚀
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { emoji: "📄", title: "AI Research Paper", link: "https://arxiv.org/" },
            { emoji: "🎥", title: "YouTube Course", link: "https://www.youtube.com/c/Freecodecamp" },
            { emoji: "📚", title: "Free E-Book", link: "https://github.com/EbookFoundation/free-programming-books" },
            { emoji: "💡", title: "Startup Toolkit", link: "https://startupstash.com/" },
          ].map((link, index) => (
            <motion.a 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 rounded-lg hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
            >
              <span className="text-2xl">{link.emoji}</span>
              <span className="text-lg font-medium text-cyan-400">{link.title}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* 🚀 Join the Community */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full max-w-6xl text-center z-10"
      >
        <h2 className="text-5xl font-bold text-purple-400 drop-shadow-lg">Join the Revolution 🚀</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Connect with fellow learners, industry mentors, and AI experts. The future belongs to those who explore, learn, and build! ⚡
        </p>
      </motion.div>
    </main>
  );
}