"use client";

import { motion } from "framer-motion";

const features = [
    {
        num: "01",
        title: "Photo Report",
        desc: "Foto langsung jadi laporan. Tanpa form panjang, tanpa ribet.",
    },
    {
        num: "02",
        title: "Community Feed",
        desc: "Semua member bisa lihat dan komen di setiap laporan.",
    },
    {
        num: "03",
        title: "Admin Control",
        desc: "Dashboard lengkap untuk admin kelola dan update status laporan.",
    },
    {
        num: "04",
        title: "Status Tracking",
        desc: "Pantau progres perbaikan dari dilaporkan sampai selesai.",
    },
];

export default function Features() {
    return (
        <section className="mx-auto max-w-5xl px-8 py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <div className="mb-16 flex items-end justify-between">
                    <div>
                        <span className="mb-3 block text-xs uppercase tracking-[0.1em] text-zinc-500">
                            — Fitur Platform
                        </span>

                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                            Dirancang untuk
                            <br />
                            komunitas gym
                        </h2>
                    </div>

                    <div className="text-right">
                        <div className="text-4xl font-extrabold leading-none text-yellow-400">
                            04
                        </div>

                        <div className="text-xs text-zinc-600">
                            fitur utama
                        </div>
                    </div>
                </div>

                {/* Features List */}
                {features.map((f, i) => (
                    <motion.div
                        key={f.num}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                        }}
                        className="
              grid
              gap-6
              border-t
              border-white/10
              py-8
              transition-all
              hover:bg-white/[0.02]
              hover:px-3
              md:grid-cols-[80px_1fr_1fr]
            "
                    >
                        <span className="pt-1 text-sm font-semibold tracking-wider text-zinc-500">
                            {f.num}
                        </span>

                        <div>
                            <h3 className="mb-2 text-lg font-bold tracking-tight">
                                {f.title}
                            </h3>

                            <div className="flex items-center gap-2">
                                <div className="h-px w-4 bg-yellow-400" />

                                <span className="text-[11px] tracking-[0.1em] text-zinc-500">
                                    AKTIF
                                </span>
                            </div>
                        </div>

                        <p className="pt-1 text-sm leading-7 text-zinc-500">
                            {f.desc}
                        </p>
                    </motion.div>
                ))}

                <div className="border-t border-white/10" />
            </motion.div>
        </section>
    );
}