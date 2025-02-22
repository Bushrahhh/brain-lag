"use client";
import Link from "next/link";
import Image from "next/image";
import { Rocket, Users, Lightbulb, Code, Trophy, Zap, ArrowLeft, BarChart, TrendingUp, Target, PieChart, Smile } from "lucide-react";
import { motion } from "framer-motion";

export default function LaunchLabX() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 overflow-hidden text-white bg-[#0A0F1D] font-sans">
      
      {/* 🌌 Cyberpunk Background with Animated Gradient */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50 saturate-150" style={{ backgroundImage: "url('/PURPLE_THEME.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/90 via-[#0A0F1D]/70 to-[#0A0F1D]/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>

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
        {/* Neon Glow Title */}
        <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-pulse text-center">
          🚀 LAUNCHLAB X
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-4xl">
          Where student startups become reality. Showcase your venture, get mentorship, and access AI-powered tools to scale.
        </p>
      </motion.section>

      {/* 🏆 Featured Startups */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 w-full max-w-6xl z-10 text-center"
      >
        <h2 className="text-5xl font-bold text-cyan-400">🔥 Student Startups</h2>
        <p className="text-lg text-gray-400 mt-4">Real student-led businesses making an impact.</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "TechNova AI", founder: "Ayesha Khan", revenue: "$5,000/month", category: "AI Solutions", desc: "Developing AI-driven solutions for businesses & automating workflows. Featured in Startup Pakistan." },
            { name: "Green Future", founder: "Ali Raza", revenue: "$3,200/month", category: "Sustainable Energy", desc: "Providing affordable solar energy for rural households. Partnered with Pakistan Clean Energy Initiative." },
            { name: "ByteBoost", founder: "Sara Ahmed", revenue: "$7,800/month", category: "E-commerce Automation", desc: "Helping small businesses scale online with AI-driven store automation. Used by 100+ local shops." },
          ].map((startup, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-2xl bg-[#12192B]/80 backdrop-blur-lg border border-gray-700 shadow-lg hover:scale-105 transition-transform hover:shadow-cyan-500/20"
            >
              <h3 className="text-3xl font-semibold text-white">{startup.name}</h3>
              <p className="text-gray-300 mt-2">Founder: {startup.founder}</p>
              <p className="text-gray-400 text-lg mt-1">Category: {startup.category}</p>
              <p className="text-gray-300 text-lg mt-3">💰 Revenue: {startup.revenue}</p>
              <p className="text-gray-400 mt-3">{startup.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 My Startup - Highlighted Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 rounded-3xl bg-[#1E293B]/90 border border-cyan-500 shadow-2xl text-center"
        >
          <h2 className="text-5xl font-extrabold text-cyan-400">🌟 ECOZY - My Startup</h2>
          <p className="text-lg text-gray-300 mt-4">ECOZY is a premium online store specializing in high-end knit shawls, sweaters, and accessories tailored for modern fashion enthusiasts. The brand has gained traction through influencer marketing, direct sales, and exclusive collaborations with top designers.</p>
          
          {/* Sales Graph Section */}
          <div className="mt-8">
            <h3 className="text-3xl font-bold text-cyan-400 flex items-center justify-center gap-2">
              <BarChart size={32} /> Sales Performance
            </h3>
            <div className="relative w-full h-[300px] mt-6 rounded-xl overflow-hidden border border-cyan-500/50 shadow-lg">
              <Image
                src="/yr.jpg" // Replace with your sales graph image
                alt="Sales Graph"
                layout="fill"
                objectFit="cover"
                className="brightness-75 hover:brightness-100 transition-all duration-300"
              />
            </div>
            <p className="text-gray-400 mt-4">*Sales have grown by 30% YoY, with a steady increase in customer retention.*</p>
          </div>

          {/* Enhance Sales Section */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-purple-400 flex items-center justify-center gap-2">
              <TrendingUp size={32} /> Enhance Your Sales
            </h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Target size={24} />, title: "Target Audience", desc: "Identify and target high-value customer segments using AI-driven analytics." },
                { icon: <PieChart size={24} />, title: "Customer Niche", desc: "Focus on niche markets like eco-conscious buyers and luxury fashion enthusiasts." },
                { icon: <Smile size={24} />, title: "Customer Experience", desc: "Enhance customer satisfaction with personalized recommendations and fast shipping." },
              ].map((feature, index) => (
                <div key={index} className="p-6 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-purple-500 shadow-lg hover:scale-105 transition-transform">
                  <div className="text-purple-400 flex items-center justify-center gap-2">
                    {feature.icon} <h4 className="text-xl font-semibold">{feature.title}</h4>
                  </div>
                  <p className="text-gray-400 mt-3 text-center">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Niche Analysis */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-blue-400 flex items-center justify-center gap-2">
              <PieChart size={32} /> Customer Niche Analysis
            </h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Users size={24} />, title: "Luxury Buyers", desc: "High-income individuals seeking premium, exclusive designs." },
                { icon: <Smile size={24} />, title: "Eco-Conscious", desc: "Environmentally aware customers looking for sustainable fashion." },
                { icon: <Zap size={24} />, title: "Trendsetters", desc: "Young professionals who follow the latest fashion trends." },
              ].map((niche, index) => (
                <div key={index} className="p-6 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-blue-500 shadow-lg hover:scale-105 transition-transform">
                  <div className="text-blue-400 flex items-center justify-center gap-2">
                    {niche.icon} <h4 className="text-xl font-semibold">{niche.title}</h4>
                  </div>
                  <p className="text-gray-400 mt-3 text-center">{niche.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 💡 Action Buttons */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-20 w-full max-w-5xl text-center z-10"
      >
        <h2 className="text-5xl font-bold text-purple-400">🚀 Take Action</h2>
        <p className="text-lg text-gray-400 mt-4">Get mentorship, AI assistance, or launch your own startup today.</p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {[
            { href: "/mentors", text: "Connect with Mentors", icon: <Users size={26} />, color: "bg-purple-600 hover:bg-purple-700" },
            { href: "/badol", text: "Seek AI Assistance", icon: <Code size={26} />, color: "bg-cyan-600 hover:bg-cyan-700" },
            { href: "/startup", text: "Launch Your Startup", icon: <Rocket size={26} />, color: "bg-blue-600 hover:bg-blue-700" },
          ].map((action, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Link href={action.href} className={`${action.color} px-8 py-4 rounded-xl shadow-lg flex items-center gap-3 text-lg transition-all hover:scale-110`}>
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
        className="mt-24 text-gray-400 text-md text-center w-full py-8 border-t border-gray-700"
      >
        <p>© 2025 LaunchLab X | Empowering Student Entrepreneurs 🚀</p>
      </motion.footer>
    </main>
  );
}