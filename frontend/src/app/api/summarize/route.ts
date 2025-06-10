import { generateText } from "ai";
import { openai } from "@/app/lib/openai";
import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/constants";
export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { transcript } = body;

    if (!transcript || transcript.trim() === "") {
      return NextResponse.json(
        { error: "Meeting transcript is required" },
        { status: 400 }
      );
    }

    // Generate the summary and action items using OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
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

    const text = completion.choices[0]?.message?.content || "";
    // Return the generated summary and action items
    return NextResponse.json({ summary: text });
  } catch (error) {
    console.log("Loaded API Key:", process.env.OPENAI_API_KEY);
    console.error("Error in summarize API:", error);
    return NextResponse.json(
      { error: "Failed to summarize meeting" },
      { status: 500 }
    );
  }
}
