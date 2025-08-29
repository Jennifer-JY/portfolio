type ToolCardProps = {
  toolName: string;
  className?: string;
};

export function ToolCard({ toolName, className = "" }: ToolCardProps) {
  return (
    <div
      className={`bg-[#FDFFFC] text-[#4A90E2] rounded-xl px-3 py-1 text-sm w-fit ${className}`}
    >
      {toolName}
    </div>
  );
}
