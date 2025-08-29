export default function IconWrapper({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center gap-2 underline  px-3 py-1 font-bold text-[#526bcc] text-sm hover:bg-gray-200 transition-colors ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
