import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar"; // Import the Navbar component
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RIZZ-MAZDOOR", // Update the title
  description: "Your ultimate student hub for productivity, startups, and AI-powered learning.", // Update the description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0F1D] text-white`}>
        {/* Add the Navbar */}
        <Navbar />

        {/* Render the children (page content) */}
        {children}
      </body>
    </html>
  );
}