"use client"

import { FileUpload } from "@/components/file-upload"
import { SummaryCard } from "@/components/summary-card"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SummarizerPage() {
  const [summary, setSummary] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (content: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        body: JSON.stringify({ transcript: content }),
        headers: { "Content-Type": "application/json" },
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "Failed to summarize meeting")
      }

      const data = await res.json()
      setSummary(data.summary)
    } catch (err) {
      console.error("Error:", err)
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-yellow-300 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-white border-3 border-black px-4 py-3 font-black text-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            BACK TO HOME
          </Link>

          <div className="text-2xl font-black text-black transform -rotate-1 bg-white px-4 py-2 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            MEETSUM
          </div>
        </div>

        {/* Main Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-black text-black transform -rotate-1 bg-pink-400 inline-block px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            MEETING SUMMARIZER
          </h1>
          <p className="text-xl font-bold text-black bg-white inline-block px-4 py-2 border-3 border-black transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Upload your transcript and get an instant summary!
          </p>
        </div>

        
        <FileUpload onSubmit={handleSubmit} isLoading={isLoading} />

        {/* Error Message */}
        {error && (
          <div className="bg-red-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg font-black text-black">{error}</p>
          </div>
        )}

        {/* Summary Section */}
        {summary && <SummaryCard summary={summary} />}
      </div>
    </div>
  )
}
