export default function Tilet() {
  return (
    <div className="px-6 md:px-12" aria-hidden="true">
      <svg width="100%" height="22" className="text-accent opacity-60">
        <defs>
          <pattern
            id="tilet"
            width="44"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <rect y="0" width="44" height="1.5" fill="currentColor" />
            <rect y="20.5" width="44" height="1.5" fill="currentColor" />
            <path
              d="M11 11 L22 4 L33 11 L22 18 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="22" cy="11" r="2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="22" fill="url(#tilet)" />
      </svg>
    </div>
  );
}