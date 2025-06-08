// src/app/api/summarize/route.ts
import { openai } from "@/app/lib/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { transcript } = await req.json();

  const prompt = `Summarize this meeting transcript:\n\n${transcript}`;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4",
  });

  const summary = completion.choices[0].message.content;
  return NextResponse.json({ summary });
}
