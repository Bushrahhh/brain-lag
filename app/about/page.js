"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Rocket, Lightbulb, Code, Globe, Brain, Award, MessageCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 md:px-6 overflow-hidden text-white bg-[#0A0F1D] font-sans">

      {/* 🌌 Dynamic Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75 saturate-150" style={{ backgroundImage: "url('/PURPLE_THEME.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/90 via-[#0A0F1D]/70 to-[#0A0F1D]/90"></div>
      <div className="absolute inset-0 animate-pulse bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>

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
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 text-center max-w-4xl z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-300 drop-shadow-lg">About Rizz-Mazdoor</h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6">
          Rizz-Mazdoor is your ultimate productivity and automation toolkit for students. Whether you're building a startup, seeking mentorship, or acing quizzes, we've got you covered. 🚀
        </p>
      </motion.div>

      {/* 🎯 Mission Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 w-full max-w-6xl z-10"
      >
        <div className="bg-[#1E293B]/95 p-8 rounded-3xl border border-cyan-500 shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 flex items-center justify-center gap-3">
            <Rocket size={32} /> Our Mission
          </h2>
          <p className="text-lg text-gray-300 mt-4 text-center">
            To empower students with the tools they need to innovate, learn, and launch their dreams. From startups to gamified learning, we're here to make productivity fun and effective.
          </p>
        </div>
      </motion.div>

      {/* 💡 Features Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 w-full max-w-6xl z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1 - Badol AI */}
          <div className="bg-[#1E293B]/95 p-6 rounded-3xl border border-cyan-500 shadow-lg hover:shadow-cyan-500/40 transition-all duration-500">
            <Brain size={40} className="text-cyan-300 mx-auto" />
            <h3 className="text-2xl font-bold text-cyan-300 mt-4 text-center">Badol AI</h3>
            <p className="text-gray-300 mt-2 text-center">
              Your AI-powered mentor for startup guidance, learning, and productivity hacks.
            </p>
          </div>
          {/* Feature Card 2 - Pressure-Cooker */}
          <div className="bg-[#1E293B]/95 p-6 rounded-3xl border border-cyan-500 shadow-lg hover:shadow-cyan-500/40 transition-all duration-500">
            <Award size={40} className="text-cyan-300 mx-auto" />
            <h3 className="text-2xl font-bold text-cyan-300 mt-4 text-center">Pressure-Cooker</h3>
            <p className="text-gray-300 mt-2 text-center">
              Gamified quizzes to test your knowledge and boost your skills in a fun, Gen-Z way.
            </p>
          </div>
          {/* Feature Card 3 - Mentorship */}
          <div className="bg-[#1E293B]/95 p-6 rounded-3xl border border-cyan-500 shadow-lg hover:shadow-cyan-500/40 transition-all duration-500">
            <Users size={40} className="text-cyan-300 mx-auto" />
            <h3 className="text-2xl font-bold text-cyan-300 mt-4 text-center">Mentorship</h3>
            <p className="text-gray-300 mt-2 text-center">
              Connect with experienced mentors to guide you through your startup journey.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 👥 Team Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 w-full max-w-6xl z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 text-center mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Team Member 1 */}
          <div className="bg-[#1E293B]/95 p-6 rounded-3xl border border-cyan-500 shadow-lg hover:shadow-cyan-500/40 transition-all duration-500">
            <img src="/KZ.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-2xl font-bold text-cyan-300 mt-4 text-center">Kaneez-E-Zahra</h3>
            <p className="text-gray-300 mt-2 text-center">MMM JSTT AYY GURLLL</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-[#1E293B]/95 p-6 rounded-3xl border border-cyan-500 shadow-lg hover:shadow-cyan-500/40 transition-all duration-500">
            <img src="/ewww.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-2xl font-bold text-cyan-300 mt-4 text-center">Bushrah Z.</h3>
            <p className="text-gray-300 mt-2 text-center">sigma sigma sigma boii</p>
          </div>
        </div>
      </motion.div>

      {/* 🚀 Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 mb-20 w-full max-w-4xl z-10"
      >
        <div className="bg-[#1E293B]/95 p-8 rounded-3xl border border-cyan-500 shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 text-center">Ready to Level Up?</h2>
          <p className="text-lg text-gray-300 mt-4 text-center">
            Join Rizz-Mazdoor today and take control of your productivity, learning, and startup journey.
          </p>
          <div className="flex justify-center mt-6">
            <Link href="/" className="bg-cyan-600 hover:bg-cyan-700 px-8 py-3 rounded-lg shadow-lg flex items-center gap-3 transition-all hover:scale-105 hover:shadow-cyan-500/50">
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}