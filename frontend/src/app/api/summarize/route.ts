import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/constants";
import Groq from "groq-sdk";
export async function POST(request: Request) {
  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });
    const body = await request.json();
    const { transcript } = body;
    if (!transcript || transcript.trim() === "") {
      return NextResponse.json(
        { error: "Meeting transcript is required" },
        { status: 400 }
      );
    }

    // Generate the summary and action items using Groq
    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: transcript,
        },
      ],
      temperature: 0.2,
      max_tokens: 1500,
    });

    const text = chatCompletion.choices[0]?.message?.content || "";
    return NextResponse.json({ summary: text });
  } catch (error: any) {
  console.error("Groq summarize route error:", error);
  return NextResponse.json(
    { error: error.message || "Failed to summarize meeting" },
    { status: 500 }
  );
}

}
