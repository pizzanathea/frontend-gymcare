"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-8 py-7 flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-md bg-yellow-400 grid place-items-center text-xs">
          💪
        </div>

        <span className="font-extrabold text-xs tracking-widest">
          GYMCARE
        </span>
      </div>

      <p className="text-xs text-zinc-500 tracking-wide">
        © 2025 · UKK Project · RPL
      </p>

      <div className="flex gap-6">
        {["Feed", "Laporan", "Admin"].map((item) => (
          <span
            key={item}
            className="text-xs text-zinc-500 hover:text-white transition-colors cursor-pointer tracking-wider"
          >
            {item}
          </span>
        ))}
      </div>
    </footer>
  );
}