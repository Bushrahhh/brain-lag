"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Briefcase, Star, Globe, Mail, BookOpen, PlayCircle, Clipboard, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Mock data for investors
export default function ConnectWithInvestors() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [bookmarkedInvestors, setBookmarkedInvestors] = useState([]);

  // Mock data for investors
  const investors = [
    {
      id: 1,
      name: "Zafar U. Khan",
      role: "Venture Capitalist",
      bio: "Founder and CEO of Katalyst Ventures, investing in high-growth startups in tech and fintech.",
      image: "/zafar_khan.jpeg", // Replace with actual image path
      rating: 4.9,
      expertise: ["Venture Capital", "Tech", "Fintech", "AI"],
      location: "Karachi, Pakistan",
      email: "zafar.khan@katalyst.pk",
      university: "LUMS",
      fundingAmount: "$500k - $5M",
      investmentStage: "Seed-stage, Growth-stage",
      geographicFocus: "Pakistan, South Asia",
      fundingType: "Equity, Convertible Notes",
      recentInvestments: [
        { name: "Fintech Solutions", industry: "Fintech", amount: "$2.5M" },
        { name: "Smart Robotics", industry: "Tech", amount: "$3.2M" },
      ],
      investmentGoals: ["Tech startups", "AI-driven businesses", "Fintech solutions"],
    },
    {
      id: 2,
      name: "Naveen Tewari",
      role: "Private Equity Investor",
      bio: "Founder of InMobi, an investor in mobile tech startups, AI companies, and digital media businesses.",
      image: "/naveen_tewari.jpeg", // Replace with actual image path
      rating: 4.7,
      expertise: ["Mobile Tech", "Digital Media", "AI", "Advertising"],
      location: "Bengaluru, India",
      email: "naveen.tewari@inmobi.com",
      university: "Harvard University",
      fundingAmount: "$2M - $20M",
      investmentStage: "Growth-stage, Series A & B",
      geographicFocus: "India, Global",
      fundingType: "Equity, Convertible Notes",
      recentInvestments: [
        { name: "TechMob", industry: "Mobile Tech", amount: "$3M" },
        { name: "AdTech", industry: "Advertising", amount: "$6M" },
      ],
      investmentGoals: ["Mobile apps", "Digital media", "AI-powered marketing"],
    },
    {
      id: 3,
      name: "Kiran Mazumdar-Shaw",
      role: "Biotech Investor",
      bio: "Chairperson and founder of Biocon, one of the largest biotechnology companies in India, investing in biotech and healthcare innovations.",
      image: "/kiran_mazumdar.jpg", // Replace with actual image path
      rating: 4.8,
      expertise: ["Biotech", "Healthcare", "Pharma"],
      location: "Bengaluru, India",
      email: "kiran.shaw@biocon.com",
      university: "University of Melbourne",
      fundingAmount: "$500k - $10M",
      investmentStage: "Seed, Series A",
      geographicFocus: "India, Global",
      fundingType: "Equity",
      recentInvestments: [
        { name: "BioGenTech", industry: "Biotech", amount: "$2M" },
        { name: "HealthTech Innovations", industry: "Healthcare", amount: "$3M" },
      ],
      investmentGoals: ["Biotech startups", "Healthcare solutions", "Pharma innovations"],
    },
  ];

  // Mock data for startups
  const startups = [
    {
      id: 1,
      name: "Fintech Solutions",
      industry: "Fintech",
      founder: "Ali Khan",
      teamSize: 15,
      pitchDeck: "/fintech_pitch_deck.pdf",
      videoPitch: "/fintech_video_pitch.mp4",
      fundingGoal: "$2.5M",
      location: "Karachi, Pakistan",
      startupBio: "A leading fintech startup providing AI-powered financial solutions for SMEs in Pakistan.",
      sdgScores: { 
        "SDG 1": 8, // No Poverty
        "SDG 9": 10, // Industry, Innovation, and Infrastructure
        "SDG 8": 7,  // Decent Work and Economic Growth
        "SDG 12": 6, // Responsible Consumption and Production
      },
      collaborationDocs: ["Business Plan", "Pitch Deck", "Financial Projections"],
    },
    {
      id: 2,
      name: "Smart Robotics",
      industry: "Tech",
      founder: "Sana Iqbal",
      teamSize: 20,
      pitchDeck: "/smart_robots_pitch_deck.pdf",
      videoPitch: "/smart_robots_video_pitch.mp4",
      fundingGoal: "$3M",
      location: "Lahore, Pakistan",
      startupBio: "Building autonomous robotics solutions for the manufacturing industry in Pakistan.",
      sdgScores: { 
        "SDG 9": 9, // Industry, Innovation, and Infrastructure
        "SDG 13": 8, // Climate Action
        "SDG 8": 7, // Decent Work and Economic Growth
        "SDG 4": 6, // Quality Education
      },
      collaborationDocs: ["Market Research", "Business Plan"],
    },
    {
      id: 3,
      name: "AI Health",
      industry: "HealthTech",
      founder: "Dr. Ravi Shankar",
      teamSize: 10,
      pitchDeck: "/ai_health_pitch_deck.pdf",
      videoPitch: "/ai_health_video_pitch.mp4",
      fundingGoal: "$4M",
      location: "Mumbai, India",
      startupBio: "Developing AI-powered health solutions to help with diagnostics in rural India.",
      sdgScores: {
        "SDG 3": 9, // Good Health and Well-being
        "SDG 13": 10, // Climate Action
        "SDG 8": 7,  // Decent Work and Economic Growth
      },
      collaborationDocs: ["Health Impact Report", "AI Model Details"],
    },
  ];

  // Drop-a-Text Feature
  const handleDropText = () => {
    if (text.trim()) {
      setMessages([...messages, { id: messages.length + 1, text }]);
      setText("");
    }
  };

  // Calculate SDG Score for a startup
  const calculateSDGScore = (sdgScores) => {
    let totalScore = 0;
    let count = 0;
    for (const score of Object.values(sdgScores)) {
      totalScore += score;
      count++;
    }
    return totalScore / count; // Average score of all SDGs
  };

  // Bookmark Investor Function
  const handleBookmark = (investorId) => {
    if (bookmarkedInvestors.includes(investorId)) {
      setBookmarkedInvestors(bookmarkedInvestors.filter(id => id !== investorId));
    } else {
      setBookmarkedInvestors([...bookmarkedInvestors, investorId]);
    }
  };

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
          🚀 Connect with Investors
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-4xl">
          Find the right investors for your startup, gain funding, and scale your ideas with expert guidance. Connect, collaborate, and get valuable feedback.
        </p>
      </motion.section>

      {/* 🏆 Investors Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 w-full max-w-6xl z-10 text-center"
      >
        <h2 className="text-5xl font-bold text-cyan-400">🔥 Meet Your Investors</h2>
        <p className="text-lg text-gray-400 mt-4">Explore investors that could fund your next big idea.</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investors.map((investor) => (
            <motion.div 
              key={investor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg hover:scale-105 transition-transform hover:shadow-cyan-500/20"
            >
              {/* Investor Image */}
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-cyan-500">
                <Image
                  src={investor.image}
                  alt={investor.name}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-90 hover:brightness-100 transition-all"
                />
              </div>

              {/* Investor Details */}
              <h3 className="text-3xl font-semibold text-white mt-6">{investor.name}</h3>
              <p className="text-gray-300 mt-2 flex items-center justify-center gap-2">
                <Briefcase size={20} /> {investor.role}
              </p>
              <p className="text-gray-400 text-lg mt-3">{investor.bio}</p>

              {/* Investment Preferences */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-cyan-400">Investment Preferences</h4>
                <p className="text-gray-400 mt-2">Funding Amount: <span className="font-bold">{investor.fundingAmount}</span></p>
                <p className="text-gray-400 mt-2">Investment Stage: <span className="font-bold">{investor.investmentStage}</span></p>
                <p className="text-gray-400 mt-2">Geographic Focus: <span className="font-bold">{investor.geographicFocus}</span></p>
                <p className="text-gray-400 mt-2">Funding Type: <span className="font-bold">{investor.fundingType}</span></p>
              </div>

              {/* Connect Button */}
              <button className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg shadow-md flex items-center justify-center gap-3 text-lg transition-all hover:scale-105">
                <MessageSquare size={20} /> Connect
              </button>

              {/* Bookmark Investor Button */}
              <button 
                className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-lg shadow-md flex items-center justify-center gap-3 text-lg transition-all"
                onClick={() => handleBookmark(investor.id)}
              >
                {bookmarkedInvestors.includes(investor.id) ? "Remove Bookmark" : "Bookmark Investor"}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 📝 Startup Pitches */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full max-w-6xl z-10 text-center"
      >
        <h2 className="text-5xl font-bold text-purple-400">📝 Startup Pitches</h2>
        <p className="text-lg text-gray-400 mt-4">Check out some promising startups and their pitch materials.</p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup) => (
            <motion.div 
              key={startup.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg hover:scale-105 transition-transform hover:shadow-cyan-500/20"
            >
              <h3 className="text-2xl font-semibold text-white">{startup.name}</h3>
              <p className="text-gray-300 mt-2">{startup.startupBio}</p>
              <p className="text-gray-400 mt-4">Founder: {startup.founder}</p>
              <p className="text-gray-400 mt-2">Team Size: {startup.teamSize}</p>
              <p className="text-gray-400 mt-2">Funding Goal: {startup.fundingGoal}</p>
              
              {/* Pitch Deck */}
              <a href={startup.pitchDeck} className="text-cyan-400 mt-6 block">View Pitch Deck</a>
              {/* Video Pitch */}
              <a href={startup.videoPitch} className="text-cyan-400 mt-2 block">Watch Pitch Video</a>

              {/* SDG Score */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-cyan-400">SDG Alignment Score: {calculateSDGScore(startup.sdgScores).toFixed(2)}</h4>
                <div className="flex flex-wrap mt-2">
                  {Object.entries(startup.sdgScores).map(([sdg, score]) => (
                    <div key={sdg} className="px-4 py-2 m-1 bg-cyan-500 text-white rounded-full">
                      {sdg}: {score}
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaboration Docs */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-cyan-400">Collaboration Documents</h4>
                <ul className="list-disc pl-6 mt-2">
                  {startup.collaborationDocs.map((doc, index) => (
                    <li key={index} className="text-gray-400">{doc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

{/* 🎮 Request Feedback Feature */}
<motion.section 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-24 w-full max-w-6xl z-10 text-center"
>
  <h2 className="text-5xl font-bold text-cyan-400">💬 Request Feedback from Investor</h2>
  <p className="text-lg text-gray-400 mt-4">Share your thoughts, ideas, or questions and request feedback on your startup idea, pitch deck, or business plan.</p>
  
  <div className="mt-12 p-8 rounded-3xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg">
    {/* Feedback Type Selection */}
    <div className="mb-6">
      <label htmlFor="feedback-type" className="text-lg font-semibold text-cyan-400">Select Feedback Type:</label>
      <select
        id="feedback-type"
        className="w-full p-4 mt-2 rounded-lg bg-[#0A0F1D] border border-cyan-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        <option value="">-- Select Feedback Type --</option>
        <option value="Startup Idea">Startup Idea</option>
        <option value="Pitch Deck">Pitch Deck</option>
        <option value="Business Plan">Business Plan</option>
      </select>
    </div>

    {/* Custom Message */}
    <textarea
      placeholder="Type your message here..."
      className="w-full p-4 rounded-lg bg-[#0A0F1D] border border-cyan-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      rows={4}
    />

    {/* Request Feedback Button */}
    <button
      className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg shadow-md flex items-center justify-center gap-3 text-lg transition-all hover:scale-105"
    >
      <Clipboard size={20} /> Request Feedback
    </button>
  </div>

  {/* Display Messages */}
  <div className="mt-8 space-y-4">
    {/* Display feedback requests as examples */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 rounded-lg bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg"
    >
      <p className="text-gray-300"><strong>Feedback Type:</strong> Startup Idea</p>
      <p className="text-gray-300 mt-2"><strong>Message:</strong> Can you provide insights on how to refine my startup idea for better scalability?</p>
    </motion.div>
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
