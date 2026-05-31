"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="relative overflow-hidden border-t border-white/10 py-32 px-8 text-center">
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.06)_0%,transparent_70%)]" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative z-10"
            >
                <span className="mb-5 block text-[11px] uppercase tracking-[0.15em] text-yellow-400">
                    — Mulai sekarang
                </span>

                <h2 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                    Gym yang lebih baik
                    <br />
                    dimulai dari satu laporan
                </h2>

                <p className="mx-auto mb-12 max-w-md text-sm leading-8 text-zinc-500">
                    Jangan diam kalau lihat kerusakan. Satu foto dari kamu bisa
                    mencegah cedera untuk semua member.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    <button className="rounded-lg bg-yellow-400 px-8 py-3.5 text-sm font-bold text-black transition hover:bg-yellow-300">
                        Buka Aplikasi →
                    </button>

                    <button className="rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-white/10">
                        Daftar Member
                    </button>
                </div>
            </motion.div>
        </section>
    );
}