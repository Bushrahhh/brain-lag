"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Lightbulb, BookOpen, Zap, Trophy, Users, ArrowLeft } from "lucide-react";

export default function PressureCooker() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds per question
  const [showHint, setShowHint] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Sample CS Quiz Data
  const quizData = [
    {
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Computer Processing Unit", "Central Process Unit", "Computer Process Unit"],
      answer: "Central Processing Unit",
      hint: "It's the brain of the computer.",
    },
    {
      question: "Which data structure uses LIFO (Last In, First Out)?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      answer: "Stack",
      hint: "Think of a stack of plates.",
    },
    {
      question: "What is the time complexity of a binary search algorithm?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      answer: "O(log n)",
      hint: "It halves the search space each time.",
    },
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "HyperText Machine Language", "HyperTool Markup Language", "HyperTool Machine Language"],
      answer: "HyperText Markup Language",
      hint: "It's used to create web pages.",
    },
    {
      question: "Which protocol is used for secure communication over a computer network?",
      options: ["HTTP", "FTP", "TCP", "HTTPS"],
      answer: "HTTPS",
      hint: "It's HTTP with an extra layer of security.",
    },
  ];

  // Timer Logic
  useEffect(() => {
    if (quizStarted && !quizCompleted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      if (timeLeft === 0) {
        handleTimeout();
      }

      return () => clearInterval(timer);
    }
  }, [quizStarted, timeLeft, quizCompleted]);

  // Handle Timeout
  const handleTimeout = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(10); // Reset timer for the next question
      setShowHint(false);
    } else {
      setQuizCompleted(true);
    }
  };

  // Handle Answer Selection
  const handleAnswer = (selectedAnswer, player) => {
    const correctAnswer = quizData[currentQuestion].answer;
    if (selectedAnswer === correctAnswer) {
      if (player === "player1") {
        setPlayer1Score((prev) => prev + 1);
      } else {
        setPlayer2Score((prev) => prev + 1);
      }
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(10); // Reset timer for the next question
      setShowHint(false);
    } else {
      setQuizCompleted(true);
    }
  };

  // Restart Quiz
  const restartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setTimeLeft(10);
    setShowHint(false);
    setQuizCompleted(false);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 overflow-hidden text-white bg-[#0A0F1D] font-sans">
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75 saturate-150" style={{ backgroundImage: "url('/PRESSURE_COOKER_BG.jpg')" }}></div>
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

      {/* 🚀 Quiz Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mt-24 p-8 rounded-3xl bg-[#1E293B]/95 border border-cyan-500 shadow-2xl text-center w-full max-w-4xl hover:shadow-cyan-500/40 transition-shadow duration-500 z-10"
      >
        {/* Quiz Title */}
        <h1 className="text-6xl font-extrabold text-cyan-400 drop-shadow-lg">QUIZZ RIZZ 🎮</h1>
        <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
          Test your knowledge in a fast-paced quiz battle! Compete against your study partner and see who comes out on top. 🚀
        </p>

        {/* Start Quiz Button */}
        {!quizStarted && (
          <button
            onClick={() => setQuizStarted(true)}
            className="mt-8 bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-lg shadow-md flex items-center gap-3 text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]"
          >
            <Zap size={24} /> Start Quiz
          </button>
        )}

        {/* Quiz Content */}
        {quizStarted && !quizCompleted && (
          <div className="mt-12">
            {/* Question and Timer */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-cyan-400">
                Question {currentQuestion + 1} of {quizData.length}
              </h2>
              <div className="flex items-center gap-2 text-xl text-purple-400">
                <Clock size={24} /> {timeLeft}s
              </div>
            </div>

            {/* Question */}
            <h3 className="text-3xl font-semibold text-gray-300 mb-8">
              {quizData[currentQuestion].question}
            </h3>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quizData[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(option, "player1")}
                  className="p-4 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all"
                >
                  {option}
                </motion.button>
              ))}
            </div>

            {/* Hint */}
            <button
              onClick={() => setShowHint(!showHint)}
              className="mt-8 flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all"
            >
              <Lightbulb size={20} /> {showHint ? "Hide Hint" : "Show Hint"}
            </button>
            {showHint && (
              <p className="mt-4 text-gray-400 italic">{quizData[currentQuestion].hint}</p>
            )}
          </div>
        )}

        {/* Quiz Completed */}
        {quizCompleted && (
          <div className="mt-12">
            <h2 className="text-4xl font-bold text-cyan-400">Quiz Completed! 🎉</h2>
            <p className="text-xl text-gray-300 mt-4">
              Final Scores:
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-400">Player 1</h3>
                <p className="text-4xl font-extrabold text-purple-400">{player1Score}</p>
              </div>
              <div className="p-6 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg">
                <h3 className="text-2xl font-bold text-cyan-400">Player 2</h3>
                <p className="text-4xl font-extrabold text-purple-400">{player2Score}</p>
              </div>
            </div>
            <button
              onClick={restartQuiz}
              className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg shadow-md flex items-center gap-3 text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
            >
              <Trophy size={24} /> Restart Quiz
            </button>
          </div>
        )}
      </motion.div>
    </main>
  );
}