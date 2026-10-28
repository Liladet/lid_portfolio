export default function EthiopianCross({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="currentColor" stroke="currentColor">
        <path d="M12 8.5 L15.5 12 L12 15.5 L8.5 12 Z" stroke="none" />
        <path
          d="M12 8.5 V4 M12 15.5 V20 M8.5 12 H4 M15.5 12 H20"
          strokeWidth="1.6"
          fill="none"
        />
        <circle cx="12" cy="3" r="1.8" stroke="none" />
        <circle cx="12" cy="21" r="1.8" stroke="none" />
        <circle cx="3" cy="12" r="1.8" stroke="none" />
        <circle cx="21" cy="12" r="1.8" stroke="none" />
      </g>
    </svg>
  );
}