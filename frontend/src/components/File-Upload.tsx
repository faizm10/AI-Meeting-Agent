"use client"

import type React from "react"

import { useState } from "react"
import { Upload, FileText, Loader2 } from "lucide-react"

interface FileUploadProps {
  onSubmit: (content: string) => void
  isLoading: boolean
}

export function FileUpload({ onSubmit, isLoading }: FileUploadProps) {
  const [text, setText] = useState("")
  const [fileName, setFileName] = useState("")
  const [isDragOver, setIsDragOver] = useState(false)

  const handleUpload = (file: File) => {
    if (!file) return

    setFileName(file.name)
    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      setText(content)
      onSubmit(content)
    }
    reader.readAsText(file)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleUpload(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file) handleUpload(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div
        className={`relative border-4 border-black bg-cyan-400 p-8 transform transition-all duration-200 ${
          isDragOver
            ? "shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] scale-105"
            : "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:scale-105"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          accept=".txt,.docx"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          disabled={isLoading}
        />

        <div className="text-center space-y-4">
          {isLoading ? (
            <Loader2 className="w-16 h-16 mx-auto text-black animate-spin" />
          ) : (
            <Upload className="w-16 h-16 mx-auto text-black" />
          )}

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-black">{isLoading ? "PROCESSING..." : "DROP YOUR FILE HERE"}</h3>
            <p className="text-lg font-bold text-black">or click to browse • .txt, .docx files only</p>
          </div>

          {fileName && (
            <div className="bg-white border-3 border-black p-3 inline-flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <FileText className="w-5 h-5 text-black" />
              <span className="font-bold text-black">{fileName}</span>
            </div>
          )}
        </div>
      </div>

      {/* Manual Text Input */}
      <div className="bg-green-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-xl font-black text-black mb-4 transform -rotate-1 bg-white inline-block px-3 py-1 border-2 border-black">
          OR PASTE TEXT DIRECTLY
        </h3>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your meeting transcript here..."
          className="w-full h-32 p-4 border-3 border-black font-bold text-black placeholder-gray-600 bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-none"
          disabled={isLoading}
        />
        {text && (
          <button
            onClick={() => onSubmit(text)}
            disabled={isLoading}
            className="mt-4 bg-orange-400 border-3 border-black px-6 py-3 font-black text-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "PROCESSING..." : "SUMMARIZE TEXT"}
          </button>
        )}
      </div>
    </div>
  )
}
