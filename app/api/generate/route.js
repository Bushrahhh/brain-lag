import { NextResponse } from "next/server";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GOOGLE_API_KEY}`;

export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "No input provided" }, { status: 400 });
    }

    // Define the prompt
    const prompt = `Convert the following study notes into concise flashcards, each separated by a newline:\n\n${text}`;

    // Send request to Google Gemini API
    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const data = await response.json();

    console.log("🔹 Google Gemini Response:", JSON.stringify(data, null, 2)); // ✅ LOGGING

    const flashcards = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!flashcards) {
      console.error("❌ No flashcards returned from Gemini.");
      return NextResponse.json({ error: "No flashcards generated" }, { status: 500 });
    }

    return NextResponse.json({ flashcards });
  } catch (error) {
    console.error("❌ Error generating flashcards:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}