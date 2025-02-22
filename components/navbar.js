"use client"; // Add this if you're using interactivity (e.g., hooks)
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#0A0F1D] p-4 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold text-cyan-400">
          RIZZ-MAZDOOR
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-all">
            HOME
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-all">
           ABOUT
          </Link>
          <Link href="/launchlab" className="text-gray-300 hover:text-cyan-400 transition-all">
            LAUNCHLAB X
          </Link>
          <Link href="/badol" className="text-gray-300 hover:text-cyan-400 transition-all">
            BADOL-AI
          </Link>
          <Link href="/mentors" className="text-gray-300 hover:text-cyan-400 transition-all">
            Connect-With-Mentors
          </Link>
          <Link href="/pressurecooker" className="text-gray-300 hover:text-cyan-400 transition-all">
           PRESSURE-COOKER
          </Link>
          <Link href="/quizrizz" className="text-gray-300 hover:text-cyan-400 transition-all">
            QUIZ-RIZZ
          </Link>
        </div>
      </div>
    </nav>
  );
}