"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MessageSquare, Briefcase, Star, Globe, Mail, BookOpen, Clipboard, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ConnectWithMentors() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  // Mock data for mentors
  const mentors = [
    {
      id: 1,
      name: "SHEERI MAZARIII",
      role: "AI & Machine Learning Expert",
      bio: "Founder of TechNova AI, specializing in AI-driven solutions for businesses. Featured in Startup Pakistan.",
      image: "/sheeri.jpeg",
      rating: 4.8,
      expertise: ["AI", "Startups", "Automation"],
      location: "Karachi, Pakistan",
      email: "sheeri.mazarii@example.com",
      university: "NUST",
    },
    {
      id: 2,
      name: "Adolf Hitler",
      role: "Sustainable Energy Consultant",
      bio: "Co-founder of Green Future, providing affordable solar energy solutions for rural households.",
      image: "/adolfj.jpeg",
      rating: 4.6,
      expertise: ["Renewable Energy", "Sustainability", "Rural Development"],
      location: "Lahore, Pakistan",
      email: "hitler.dolphin@example.com",
      university: "LUMS",
    },
    {
      id: 3,
      name: "Osama Bin",
      role: "E-commerce Automation Specialist",
      bio: "Founder of ByteBoost, helping small businesses scale online with AI-driven store automation.",
      image: "/osama.jpeg",
      rating: 4.9,
      expertise: ["E-commerce", "Automation", "AI"],
      location: "Islamabad, Pakistan",
      email: "bin.laden@example.com",
      university: "FAST",
    },
  ];

  // Drop-a-Text Feature
  const handleDropText = () => {
    if (text.trim()) {
      setMessages([...messages, { id: messages.length + 1, text }]);
      setText("");
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 overflow-hidden text-white bg-gradient-to-b from-[#0A0F1D] to-[#1E293B] font-sans">
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
          🚀 Connect with Mentors
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-4xl">
          BRRRRRR Your friends circle of entrepreneurs. Find mentors, share ideas, and grow together in a vibrant community of innovators.
        </p>
      </motion.section>

      {/* 🏆 Mentors Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 w-full max-w-6xl z-10 text-center"
      >
        <h2 className="text-5xl font-bold text-cyan-400">🔥 Meet Your Mentors</h2>
        <p className="text-lg text-gray-400 mt-4">Real mentors with proven track records, ready to guide you.</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <motion.div 
              key={mentor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg hover:scale-105 transition-transform hover:shadow-cyan-500/20"
            >
              {/* Mentor Image */}
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-cyan-500">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-90 hover:brightness-100 transition-all"
                />
              </div>

              {/* Mentor Details */}
              <h3 className="text-3xl font-semibold text-white mt-6">{mentor.name}</h3>
              <p className="text-gray-300 mt-2 flex items-center justify-center gap-2">
                <Briefcase size={20} /> {mentor.role}
              </p>
              <p className="text-gray-400 text-lg mt-3">{mentor.bio}</p>

              {/* University */}
              <p className="text-gray-300 mt-2 flex items-center justify-center gap-2">
                <BookOpen size={20} /> {mentor.university}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <Star size={20} className="text-yellow-400" />
                <span className="text-gray-300">{mentor.rating}</span>
              </div>

              {/* Expertise */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-cyan-400">Expertise</h4>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {mentor.expertise.map((skill, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location & Contact */}
              <div className="mt-6">
                <p className="text-gray-400 flex items-center justify-center gap-2">
                  <Globe size={18} /> {mentor.location}
                </p>
                <p className="text-gray-400 flex items-center justify-center gap-2 mt-2">
                  <Mail size={18} /> {mentor.email}
                </p>
              </div>

              {/* Connect Button */}
              <button className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg shadow-md flex items-center justify-center gap-3 text-lg transition-all hover:scale-105">
                <MessageSquare size={20} /> Connect
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🌟 Mentor Spotlight */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full max-w-6xl z-10 text-center"
      >
        <h2 className="text-5xl font-bold text-purple-400">🌟 Mentor Spotlight</h2>
        <p className="text-lg text-gray-400 mt-4">Meet this week’s featured mentor.</p>
        
        <div className="mt-12 p-8 rounded-3xl bg-[#1E293B]/90 border border-purple-500 shadow-2xl text-center">
          <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-purple-500">
            <Image
              src="/AISHA.jpeg" // Replace with actual image path
              alt="Featured Mentor"
              layout="fill"
              objectFit="cover"
              className="brightness-90 hover:brightness-100 transition-all"
            />
          </div>
          <h3 className="text-3xl font-semibold text-white mt-6">Ayesha Khan</h3>
          <p className="text-gray-300 mt-2 flex items-center justify-center gap-2">
            <Briefcase size={20} /> AI & Machine Learning Expert
          </p>
          <p className="text-gray-400 text-lg mt-3">Founder of TechNova AI, specializing in AI-driven solutions for businesses. Featured in Startup Pakistan.</p>
          <p className="text-gray-300 mt-2 flex items-center justify-center gap-2">
            <BookOpen size={20} /> NUST
          </p>
          <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg shadow-md flex items-center justify-center gap-3 text-lg transition-all hover:scale-105">
            <MessageSquare size={20} /> Connect
          </button>
        </div>
      </motion.section>

      {/* 🎮 Drop-a-Text Feature */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full max-w-6xl z-10 text-center"
      >
        <h2 className="text-5xl font-bold text-cyan-400">🎮 Drop-a-Text</h2>
        <p className="text-lg text-gray-400 mt-4">Share your thoughts, ideas, or questions with the community.</p>
        
        <div className="mt-12 p-8 rounded-3xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message here..."
            className="w-full p-4 rounded-lg bg-[#0A0F1D] border border-cyan-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            rows={4}
          />
          <button
            onClick={handleDropText}
            className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg shadow-md flex items-center justify-center gap-3 text-lg transition-all hover:scale-105"
          >
            <Clipboard size={20} /> Drop Your Text
          </button>
        </div>

        {/* Display Messages */}
        <div className="mt-8 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 rounded-lg bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg"
            >
              <p className="text-gray-300">{message.text}</p>
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
