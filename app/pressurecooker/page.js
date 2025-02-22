"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link"; // Added missing import

export default function Home() {
  const [notes, setNotes] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateFlashcards = async () => {
    if (!notes.trim()) return;

    setLoading(true);
    setFlashcards([]);
    setError("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: notes }),
      });

      const data = await response.json();

      if (!data.flashcards || data.flashcards.trim() === "") {
        setError("⚠ No flashcards generated. Try different input.");
        return;
      }

      setFlashcards(data.flashcards.split("\n").filter(Boolean));
    } catch (error) {
      console.error("❌ Error fetching flashcards:", error);
      setError("❌ Error generating flashcards. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

      {/* 🚀 Flashcard Generator Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mt-24 p-6 md:p-8 rounded-3xl bg-[#1E293B]/95 border border-cyan-500 shadow-2xl text-center w-full max-w-3xl hover:shadow-cyan-500/40 transition-all duration-500 z-10"
      >
        {/* Header with Sparkles */}
        <div className="flex items-center justify-center gap-3">
          <Sparkles size={32} className="text-cyan-300" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-300 drop-shadow-lg">Flashcard Generator</h1>
          <Sparkles size={32} className="text-cyan-300" />
        </div>
        <p className="text-lg text-gray-300 mt-4">Turn your study notes into interactive flashcards with AI. 🚀</p>

        {/* Textarea for Notes */}
        <textarea
          className="w-full mt-6 p-4 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 text-white hover:border-cyan-400 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-md"
          rows={5}
          placeholder="Paste your study notes here..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        {/* Generate Button */}
        <button
          className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-cyan-500/50"
          onClick={generateFlashcards}
          disabled={loading}
        >
          <Zap size={24} /> {loading ? "Generating Flashcards..." : "Generate Flashcards"}
        </button>

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-red-500/80 rounded-xl shadow-md">
            <p className="text-white">{error}</p>
          </div>
        )}

        {/* Generated Flashcards */}
        {flashcards.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Generated Flashcards</h2>
            <div className="grid gap-4">
              {flashcards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-4 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all"
                >
                  <p className="text-gray-300">{card}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </main>
  );
}