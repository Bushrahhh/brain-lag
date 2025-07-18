"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Bot, ArrowLeft, Settings, ChevronDown, Sparkles } from "lucide-react";

export default function BadolAI() {
  const [messages, setMessages] = useState([
    { text: "Hello! I am Badol AI, your virtual mentor. How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [fade, setFade] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state for API calls

  useEffect(() => {
    setFade(true);
  }, []);

  // Hardcoded responses for common startup questions
  const hardcodedResponses = {
    "how to start a startup": "Start by identifying a problem you're passionate about solving. Conduct market research, build a MVP (Minimum Viable Product), and validate your idea with real users.",
    "what is a business model": "A business model describes how your company creates, delivers, and captures value. Common models include subscription, freemium, and marketplace.",
    "how to get funding": "You can get funding through bootstrapping, angel investors, venture capital, or crowdfunding. Prepare a solid pitch deck and financial projections.",
    "what is a pitch deck": "A pitch deck is a presentation that provides an overview of your business. It typically includes problem, solution, market size, product, team, and financials.",
    "how do i market my startup": "To market your startup effectively, identify your target audience, leverage digital channels (like social media, SEO, and email marketing), and build partnerships. Consistency and a strong value proposition are key.",
    "what are the best tools for startups": "Some of the best tools for startups include project management tools like Trello, team communication tools like Slack, and marketing automation platforms like HubSpot or Mailchimp. Choose tools based on your specific needs.",
    "how to scale my startup": "To scale your startup, focus on improving operational efficiencies, investing in customer acquisition, and expanding your product or service offerings. Automation and outsourcing certain functions can also help.",
    "how to build a team": "Building a strong team starts with hiring people who align with your vision and values. Look for complementary skills, encourage collaboration, and foster a positive company culture.",
    "what is product-market fit": "Product-market fit occurs when your product meets the needs of the market and has a strong customer base willing to pay for it. It's a sign that you're on the right path toward sustainable growth.",
    "how do i get my first customers": "Start by reaching out to people who have the problem you're solving. Use social media, online communities, and networking events. Offer free trials, incentives, or referral discounts to attract your first customers.",
    "do i need a business plan": "Yes, a business plan is crucial for outlining your business goals, strategy, and financial projections. It helps secure investors and guides your decisions as you grow.",
    "how do i register my startup": "To register your startup, choose a business structure (e.g., LLC, Corporation), register with the local government or online, and obtain necessary licenses or permits. Consult a legal professional to ensure compliance.",
    "do i need a trademark for my startup": "While it’s not required, registering a trademark for your startup can protect your brand identity and prevent others from using your name, logo, or slogan.",
    "how do i raise seed funding": "To raise seed funding, you need a compelling pitch that demonstrates your market opportunity, team, and product. Seek out angel investors, venture capital firms, and crowdfunding platforms.",
    "what is venture capital": "Venture capital (VC) is funding provided by investors to startups and small businesses with high growth potential. In exchange for funding, VCs typically acquire equity in the company.",
    "how to get angel investors": "Angel investors are typically high-net-worth individuals who invest in startups in exchange for equity or convertible debt. You can find them through networking, online platforms, or industry events.",
    "tell me a motivational quote": "Here's a quote for you: 'The way to get started is to quit talking and begin doing.' – Walt Disney",
    "how do i deal with failure": "Failure is a part of entrepreneurship. Learn from your mistakes, adjust your strategies, and keep pushing forward. Remember, every failure is a stepping stone to success.",
    "what are the most common startup mistakes": "Some common startup mistakes include underestimating expenses, failing to validate the market, hiring the wrong team, and not having a clear business model or growth strategy.",
  };

  // Handle sending messages and receiving responses
  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add user message to the chat
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true); // Start loading

    const lowerCaseInput = input.toLowerCase();
    if (hardcodedResponses[lowerCaseInput]) {
      // Respond with hardcoded response
      const botMessage = { text: hardcodedResponses[lowerCaseInput], sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false); // Stop loading
      return;
    }

    try {
      

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gemini-2.0-flash", // Replace with the correct Gemini model name
          messages: [{ role: "user", content: input }],
        }),
      });

      const data = await response.json();
      const botReply = data.choices[0].message.content;
      const botMessage = { text: botReply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = { text: "Oops! Something went wrong. Try again later.", sender: "bot" };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <main className={`relative min-h-screen flex flex-col items-center px-4 md:px-6 overflow-hidden text-white bg-[#0A0F1D] font-sans transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}> 
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

      {/* 🤖 Chatbot Interface */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 p-6 md:p-8 rounded-3xl bg-[#1E293B]/95 border border-cyan-500 shadow-2xl text-center w-full max-w-3xl transition-all duration-500 z-10"
      >
        {/* Header with Sparkles */}
        <div className="flex items-center justify-center gap-3">
          <Sparkles size={32} className="text-cyan-300" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-300 drop-shadow-lg">Badol AI</h2>
          <Sparkles size={32} className="text-cyan-300" />
        </div>
        <p className="text-lg text-gray-300 mt-4">Your AI-powered mentor for startups, learning, and productivity.</p>

        {/* Chatbox */}
        <div className="mt-6 bg-[#101726] p-4 rounded-xl h-96 overflow-y-auto border border-gray-600 hover:border-cyan-500 transition-all duration-500 shadow-md">
          {messages.map((msg, index) => (
            <div key={index} className={`p-3 my-2 rounded-lg transition-all duration-500 shadow-md ${msg.sender === "user" ? "bg-blue-500 text-white ml-auto text-right w-max max-w-xs" : "bg-gray-800 text-white text-left w-max max-w-xs"}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          {isLoading && (
            <div className="p-3 my-2 rounded-lg bg-gray-800 text-white text-left w-max max-w-xs">
              <p>Thinking...</p>
            </div>
          )}
        </div>

        {/* Input Box */}
        <div className="mt-4 flex flex-col md:flex-row items-center gap-4 w-full">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={(e) => e.key === "Enter" && handleSend()} // Send message on Enter key
            className="flex-grow p-3 rounded-lg bg-[#1E293B] border border-gray-500 text-white hover:border-cyan-500 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-md"
            placeholder="Ask something..."
            disabled={isLoading} // Disable input while loading
          />
          <button 
            onClick={handleSend} 
            className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 transition-all hover:scale-105 hover:shadow-cyan-500/50"
            disabled={isLoading} // Disable button while loading
          >
            <MessageCircle size={24} /> Send
          </button>
        </div>
      </motion.div>
    </main>
  );
}
