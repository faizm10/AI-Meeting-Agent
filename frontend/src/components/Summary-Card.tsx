// src/components/SummaryCard.tsx
export function SummaryCard({ summary }: { summary: string }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">Meeting Summary</h2>
      <p>{summary}</p>
    </div>
  );
}
