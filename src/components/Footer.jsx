export default function Footer() {
  return (
    <footer>
      <div className="flex h-1">
        <span className="flex-1 bg-[#078930]" />
        <span className="flex-1 bg-[#FCDD09]" />
        <span className="flex-1 bg-[#DA121A]" />
      </div>
      <p className="px-6 py-8 text-center text-sm text-white/40 md:px-12">
        © {new Date().getFullYear()} Lidiya Alemayehu ·
        <span className="ml-2">🇪🇹</span>
      </p>
    </footer>
  );
}