"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Star, CheckCircle } from "lucide-react";
import Link from "next/link"; // Added missing import

export default function Home() {
  const startups = [
    {
      id: 1,
      name: "Bykea",
      description: "Bykea is a ride-hailing and logistics platform focusing on affordable, eco-friendly transportation and delivery services.",
      sdgScore: 8.5,
      riskAssessment: "Medium",
      sdgs: ["SDG 9 - Industry, Innovation & Infrastructure", "SDG 11 - Sustainable Cities and Communities"],
      rating: 4.7,
      impact: "Revolutionizing transport and delivery in Pakistan while reducing traffic congestion.",
      website: "https://www.bykea.com"
    },
    {
      id: 3,
      name: "AyuHealth",
      description: "AyuHealth provides affordable healthcare services in Pakistan, including telemedicine, home care, and pharmacy.",
      sdgScore: 9.0,
      riskAssessment: "Medium",
      sdgs: ["SDG 3 - Good Health and Well-being", "SDG 10 - Reduced Inequalities"],
      rating: 4.5,
      impact: "Expanding healthcare access to underserved populations in Pakistan.",
      website: "https://www.ayuhealth.com"
    },
    {
      id: 4,
      name: "GreenFuture Energy (USA)",
      description: "GreenFuture Energy provides renewable energy solutions in rural areas, reducing reliance on fossil fuels.",
      sdgScore: 9.4,
      riskAssessment: "Medium",
      sdgs: ["SDG 7 - Affordable and Clean Energy", "SDG 13 - Climate Action"],
      rating: 4.8,
      impact: "Reducing CO2 emissions and providing sustainable energy in rural communities.",
      website: "https://www.greenfutureenergy.com"
    },
    {
      id: 5,
      name: "Solar Sister (USA)",
      description: "Solar Sister empowers women entrepreneurs to distribute clean energy solutions in underserved areas of Africa.",
      sdgScore: 9.5,
      riskAssessment: "Low",
      sdgs: ["SDG 7 - Affordable and Clean Energy", "SDG 5 - Gender Equality"],
      rating: 4.9,
      impact: "Empowering women and providing affordable solar energy to rural communities in Africa.",
      website: "https://www.solarsister.org"
    },
    {
      id: 6,
      name: "Sustaining the World (Kenya)",
      description: "This company provides sustainable agricultural practices and technology to boost food security and reduce waste.",
      sdgScore: 8.8,
      riskAssessment: "High",
      sdgs: ["SDG 2 - Zero Hunger", "SDG 12 - Responsible Consumption and Production"],
      rating: 4.6,
      impact: "Helping farmers achieve sustainability through tech-based solutions.",
      website: "https://www.sustainingtheworld.com"
    },
    {
      id: 7,
      name: "Impossible Foods (USA)",
      description: "Impossible Foods creates plant-based meat substitutes, aiming to reduce the environmental impact of livestock farming.",
      sdgScore: 9.6,
      riskAssessment: "Low",
      sdgs: ["SDG 12 - Responsible Consumption and Production", "SDG 13 - Climate Action"],
      rating: 4.8,
      impact: "Offering sustainable food alternatives and reducing the environmental impact of animal agriculture.",
      website: "https://www.impossiblefoods.com"
    },
    {
      id: 8,
      name: "Ola Electric (India)",
      description: "Ola Electric is a pioneer in the electric vehicle (EV) market, focusing on clean, affordable transportation.",
      sdgScore: 8.7,
      riskAssessment: "Medium",
      sdgs: ["SDG 13 - Climate Action", "SDG 11 - Sustainable Cities and Communities"],
      rating: 4.7,
      impact: "Expanding electric vehicle infrastructure and reducing carbon emissions.",
      website: "https://www.olaelectric.com"
    },
    {
      id: 9,
      name: "Ecofilt (UK)",
      description: "Ecofilt develops eco-friendly filtration systems to clean water, providing access to clean drinking water in underserved areas.",
      sdgScore: 9.2,
      riskAssessment: "Low",
      sdgs: ["SDG 6 - Clean Water and Sanitation", "SDG 12 - Responsible Consumption and Production"],
      rating: 4.6,
      impact: "Providing clean water filtration systems for areas with limited access to safe water.",
      website: "https://www.ecofilt.com"
    },
    {
      id: 10,
      name: "Renewable Energy Group (USA)",
      description: "Renewable Energy Group focuses on producing biofuels and renewable energy solutions to reduce dependence on fossil fuels.",
      sdgScore: 9.3,
      riskAssessment: "Low",
      sdgs: ["SDG 7 - Affordable and Clean Energy", "SDG 13 - Climate Action"],
      rating: 4.7,
      impact: "Reducing carbon emissions through renewable energy and biofuels.",
      website: "https://www.regi.com"
    }
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center px-4 md:px-6 overflow-hidden text-white bg-[#0A0F1D] font-sans">
      {/* 🌌 Dynamic Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75 saturate-150" style={{ backgroundImage: "url('/PURPE.jpeg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/90 via-[#0A0F1D]/70 to-[#0A0F1D]/90"></div>
      <div className="absolute inset-0 animate-pulse bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"></div>

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

      {/* 🚀 Startup List Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 w-full max-w-6xl z-10 text-center"
      >
        <h2 className="text-5xl font-bold text-cyan-400">STARTUPS LAUNCHED AND COOKED</h2>
        <p className="text-lg text-gray-400 mt-4">Discover the best startups making an impact through SDG contributions and innovation.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.sort((a, b) => b.sdgScore - a.sdgScore).map((startup) => (
            <motion.div 
              key={startup.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg hover:scale-105 transition-transform hover:shadow-cyan-500/20"
            >
              <h3 className="text-3xl font-semibold text-white">{startup.name}</h3>
              <p className="text-gray-300 mt-2">{startup.description}</p>
              <p className="text-gray-400 mt-4"><strong>SDG Score:</strong> {startup.sdgScore}</p>
              <p className="text-gray-400 mt-2"><strong>Risk Assessment:</strong> {startup.riskAssessment}</p>
              
              <div className="mt-4">
                <strong>SDG Contributions:</strong>
                <ul className="list-disc pl-5 text-gray-300">
                  {startup.sdgs.map((sdg, index) => (
                    <li key={index}>{sdg}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star size={18} />
                  <span>{startup.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-green-400">
                  <CheckCircle size={18} />
                  <span>{startup.impact}</span>
                </div>
              </div>
              
              {/* Website Link */}
              <div className="mt-4">
                <a href={startup.website} target="_blank" className="text-cyan-400 hover:text-cyan-500">
                  Visit Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
