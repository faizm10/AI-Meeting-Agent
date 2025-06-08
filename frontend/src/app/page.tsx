// src/app/page.tsx
"use client";

import { FileUpload } from "@/components/File-Upload";
import { SummaryCard } from "@/components/Summary-Card";
import { useState } from "react";

export default function Home() {
  const [summary, setSummary] = useState("");

  const handleSubmit = async (content: string) => {
    const res = await fetch("/api/summarize", {
      method: "POST",
      body: JSON.stringify({ transcript: content }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setSummary(data.summary);
  };

  return (
    <main className="p-6 space-y-4">
      <FileUpload onSubmit={handleSubmit} />
      {summary && <SummaryCard summary={summary} />}
    </main>
  );
}
