"use client"

import { Copy, Download, Share2 } from "lucide-react"
import { useState, useEffect } from "react"

interface SummaryCardProps {
  summary: string
}

export function SummaryCard({ summary }: SummaryCardProps) {
  const [copied, setCopied] = useState(false)
  const [meetingSummary, setMeetingSummary] = useState("")
  const [actionItems, setActionItems] = useState("")

  // Parse the summary to separate meeting summary and action items
  useEffect(() => {
    if (summary) {
      const sections = summary.split("## ACTION ITEMS")

      if (sections.length > 1) {
        // Extract meeting summary (remove the heading)
        const summaryText = sections[0].replace("## MEETING SUMMARY", "").trim()
        setMeetingSummary(summaryText)

        // Extract action items
        setActionItems(sections[1].trim())
      } else {
        // If no clear separation, use the whole text as summary
        setMeetingSummary(summary)
        setActionItems("")
      }
    }
  }, [summary])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(summary)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const blob = new Blob([summary], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "meeting-summary.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-purple-400 border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-black text-black transform -rotate-1 bg-yellow-300 inline-block px-4 py-2 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          MEETING SUMMARY
        </h2>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            className="bg-green-400 border-3 border-black p-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:scale-110 transition-all duration-200 group"
            title="Copy to clipboard"
          >
            <Copy className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={handleDownload}
            className="bg-orange-400 border-3 border-black p-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:scale-110 transition-all duration-200 group"
            title="Download summary"
          >
            <Download className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => navigator.share?.({ text: summary, title: "Meeting Summary" })}
            className="bg-pink-400 border-3 border-black p-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:scale-110 transition-all duration-200 group"
            title="Share summary"
          >
            <Share2 className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Summary Content */}
      <div className="space-y-6">
        {/* Meeting Summary Section */}
        <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-xl font-black text-black mb-4 transform -rotate-1 bg-cyan-300 inline-block px-3 py-1 border-2 border-black">
            KEY POINTS
          </h3>
          <p className="text-lg font-bold text-black leading-relaxed whitespace-pre-wrap">{meetingSummary}</p>
        </div>

        {/* Action Items Section */}
        {actionItems && (
          <div className="bg-white border-3 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-black text-black mb-4 transform -rotate-1 bg-orange-300 inline-block px-3 py-1 border-2 border-black">
              ACTION ITEMS
            </h3>
            <div className="text-lg font-bold text-black leading-relaxed whitespace-pre-wrap">
              {actionItems.split("\n").map((item, index) => {
                if (item.trim() === "") return null

                return (
                  <div
                    key={index}
                    className={`p-3 mb-3 border-2 border-black ${
                      index % 3 === 0 ? "bg-green-200" : index % 3 === 1 ? "bg-pink-200" : "bg-yellow-200"
                    }`}
                  >
                    {item}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Copy Feedback */}
      {copied && (
        <div className="mt-4 bg-green-300 border-3 border-black p-3 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce">
          <span className="font-black text-black">COPIED TO CLIPBOARD!</span>
        </div>
      )}
    </div>
  )
}
