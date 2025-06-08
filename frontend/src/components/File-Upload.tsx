"use client";

import { useState } from "react";

export function FileUpload({ onSubmit }: { onSubmit: (content: string) => void }) {
  const [text, setText] = useState("");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setText(content);
      onSubmit(content);
    };
    reader.readAsText(file);
  };

  return <input type="file" accept=".txt,.docx" onChange={handleUpload} />;
}
