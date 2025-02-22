"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, ShoppingCart, LayoutDashboard, Zap, Users, Lightbulb, ArrowRight, Code, Globe, BarChart } from "lucide-react";

export default function LaunchYourStartup() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 overflow-hidden text-white bg-[#0A0F1D] font-sans">
      
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-75 saturate-150" style={{ backgroundImage: "url('/STARTUP_THEME.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/90 via-[#0A0F1D]/70 to-[#0A0F1D]/90"></div>

      {/* 🔙 Back to Home */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-6 left-6 z-20"
      >
        <Link href="/" className="flex items-center text-gray-300 hover:text-cyan-400 transition-all">
          <ArrowRight size={20} className="mr-2 transform rotate-180" /> Back to Home
        </Link>
      </motion.div>

      {/* 🚀 Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 p-10 rounded-3xl bg-[#1E293B]/95 border border-cyan-500 shadow-2xl text-center w-full max-w-5xl hover:shadow-cyan-500/40 transition-shadow duration-500"
      >
        <h1 className="text-6xl font-extrabold text-cyan-400 drop-shadow-lg">🚀 Launch Your Startup</h1>
        <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
          Turn your ideas into reality with the ultimate toolkit for building, scaling, and growing your startup. From e-commerce websites to AI-powered analytics, we’ve got you covered. 💡
        </p>
      </motion.div>

      {/* 🛠️ Startup Tools Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full max-w-6xl text-center z-10"
      >
        <h2 className="text-5xl font-bold text-purple-400 drop-shadow-lg">Startup Tools 🛠️</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Everything you need to build, launch, and grow your startup. No fluff, just results. 🔥
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ShoppingCart size={56} />, title: "E-Commerce Builder", desc: "Create a stunning online store in minutes.", link: "https://www.shopify.com/" },
            { icon: <LayoutDashboard size={56} />, title: "Business Dashboard", desc: "Track sales, analytics, and growth metrics.", link: "https://www.tableau.com/" },
            { icon: <Zap size={56} />, title: "AI Marketing Tools", desc: "Automate your marketing with AI-powered tools.", link: "https://www.hubspot.com/" },
          ].map((tool, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-purple-500 shadow-lg hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(192,132,252,0.6)]"
            >
              <div className="text-purple-400 flex items-center justify-center gap-2">
                {tool.icon}
              </div>
              <h3 className="text-2xl font-semibold mt-3">{tool.title}</h3>
              <p className="text-gray-400 text-md text-center mt-3">{tool.desc}</p>
              <a 
                href={tool.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 💡 E-Commerce Website Builder */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full max-w-6xl text-center z-10"
      >
        <h2 className="text-5xl font-bold text-cyan-400 drop-shadow-lg">Build Your E-Commerce Store 🛒</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Launch your online store with zero coding. Choose from hundreds of templates, integrate payment gateways, and start selling today! 🚀
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Globe size={40} />, title: "Custom Domain", desc: "Get a professional domain name for your store.", link: "https://www.namecheap.com/" },
            { icon: <ShoppingCart size={40} />, title: "Product Listings", desc: "Easily add and manage your products.", link: "https://www.shopify.com/" },
            { icon: <BarChart size={40} />, title: "Sales Analytics", desc: "Track your sales and customer behavior.", link: "https://www.google.com/analytics/" },
            { icon: <Code size={40} />, title: "No-Code Editor", desc: "Drag-and-drop editor for custom designs.", link: "https://www.webflow.com/" },
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-cyan-500 shadow-lg hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
            >
              <div className="text-cyan-400 flex items-center justify-center gap-2">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mt-3">{feature.title}</h3>
              <p className="text-gray-400 text-md text-center mt-3">{feature.desc}</p>
              <a 
                href={feature.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>

        <a 
          href="https://www.shopify.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-8 inline-block px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all"
        >
          🚀 Start Building Now
        </a>
      </motion.div>

      {/* 🌟 Success Stories */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full max-w-6xl text-center z-10"
      >
        <h2 className="text-5xl font-bold text-purple-400 drop-shadow-lg">Success Stories 🌟</h2>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          Hear from entrepreneurs who turned their dreams into reality using our tools and resources.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah T.", quote: "I built my online store in a weekend and made $10k in the first month!", link: "https://www.shopify.com/success-stories" },
            { name: "Raj P.", quote: "The AI marketing tools helped me triple my sales in just 3 months.", link: "https://www.hubspot.com/case-studies" },
            { name: "Emily L.", quote: "The no-code editor made it so easy to customize my website.", link: "https://www.webflow.com/customers" },
          ].map((story, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 rounded-xl bg-[#12192B]/80 backdrop-blur-lg border border-purple-500 shadow-lg hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(192,132,252,0.6)]"
            >
              <div className="text-purple-400 flex items-center justify-center gap-2">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-semibold mt-3">{story.name}</h3>
              <p className="text-gray-400 text-md text-center mt-3 italic">"{story.quote}"</p>
              <a 
                href={story.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 inline-block px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
              >
                Read Story
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}