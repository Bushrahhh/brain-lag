"use client";
import { useState } from "react"; // Add this import
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Users, MessageCircle, Globe, ArrowLeft, Check, Mail } from "lucide-react";

export default function JoinCommunityPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false)), 3000; // Reset after 3 seconds
  };

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
        <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-300 drop-shadow-lg">Join LaunchLab</h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6">
          Be part of a vibrant community of innovators, learners, and dreamers. Together, we build, learn, and grow. 🚀
        </p>
      </motion.div>

      {/* 🎯 Benefits Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-20 w-full max-w-6xl z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 text-center mb-8">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Benefit Card 1 */}
          <div className="bg-[#1E293B]/95 p-6 rounded-3xl border border-cyan-500 shadow-lg hover:shadow-cyan-500/40 transition-all duration-500">
            <Rocket size={40} className="text-cyan-300 mx-auto" />
            <h3 className="text-2xl font-bold text-cyan-300 mt-4 text-center">Launch Your Ideas</h3>
            <p className="text-gray-300 mt-2 text-center">
              Get the support and resources you need to turn your ideas into reality.
            </p>
          </div>
          {/* Benefit Card 2 */}
          <div className="bg-[#1E293B]/95 p-6 rounded-3xl border border-cyan-500 shadow-lg hover:shadow-cyan-500/40 transition-all duration-500">
            <Users size={40} className="text-cyan-300 mx-auto" />
            <h3 className="text-2xl font-bold text-cyan-300 mt-4 text-center">Connect with Mentors</h3>
            <p className="text-gray-300 mt-2 text-center">
              Learn from experienced mentors who’ve been where you are.
            </p>
          </div>
          {/* Benefit Card 3 */}
          <div className="bg-[#1E293B]/95 p-6 rounded-3xl border border-cyan-500 shadow-lg hover:shadow-cyan-500/40 transition-all duration-500">
            <Globe size={40} className="text-cyan-300 mx-auto" />
            <h3 className="text-2xl font-bold text-cyan-300 mt-4 text-center">Global Network</h3>
            <p className="text-gray-300 mt-2 text-center">
              Join a worldwide community of like-minded individuals.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 📧 Join Form Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 w-full max-w-4xl z-10"
      >
        <div className="bg-[#1E293B]/95 p-8 rounded-3xl border border-cyan-500 shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 text-center">Join the Community</h2>
          <p className="text-lg text-gray-300 mt-4 text-center">
            Enter your email to get started and be part of something amazing.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row items-center gap-4 w-full">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="flex-grow p-3 rounded-lg bg-[#1E293B] border border-gray-500 text-white hover:border-cyan-500 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-md"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 transition-all hover:scale-105 hover:shadow-cyan-500/50">
              <Mail size={24} /> Join Now
            </button>
          </form>
          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-green-400 flex items-center justify-center gap-2"
            >
              <Check size={20} /> You're in! Welcome to LaunchLab.
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* 🚀 Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 mb-20 w-full max-w-4xl z-10"
      >
        <div className="bg-[#1E293B]/95 p-8 rounded-3xl border border-cyan-500 shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 text-center">Ready to Launch?</h2>
          <p className="text-lg text-gray-300 mt-4 text-center">
            Join LaunchLab today and take the first step towards your dreams.
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