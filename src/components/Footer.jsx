"use client";

export default function Footer() {
  return (
    <div className="w-full bg-[#080808]">
      <footer className="border-t border-white/10 px-8 py-7 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2.5">

          <span className="font-extrabold text-xs tracking-widest text-white">
            GYMCARE
          </span>
        </div>

        <p className="text-xs text-zinc-500 tracking-wide">
          © 2026 · Raditya Bintang Wijaya · All rights reserved
        </p>

        <div className="flex gap-6">
          {["Feed", "Reports", "Admin"].map((item) => (
            <span
              key={item}
              className="text-xs text-zinc-500 hover:text-white transition-colors cursor-pointer tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}