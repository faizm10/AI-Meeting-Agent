"use client";

import { FileUpload } from "@/components/File-Upload";
import { SummaryCard } from "@/components/Summary-Card";
import { useState } from "react";

export default function Home() {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (content: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        body: JSON.stringify({ transcript: content }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to summarize meeting");
      }

      const data = await res.json();
      setSummary(data.summary);
    } catch (err) {
      console.error("Error:", err);
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-300 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-black text-black transform -rotate-1 bg-pink-400 inline-block px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            MEETING SUMMARIZER
          </h1>
          <p className="text-xl font-bold text-black bg-white inline-block px-4 py-2 border-3 border-black transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Upload your transcript and get an instant summary!
          </p>
        </div>

        
        <FileUpload onSubmit={handleSubmit} isLoading={isLoading} />

        
        {error && (
          <div className="bg-red-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg font-black text-black">{error}</p>
          </div>
        )}

        
        {summary && <SummaryCard summary={summary} />}
      </div>
    </div>
  );
}
