"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
    return (
        <div className="w-full bg-[#080808]">
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
                        — Starting Now
                    </span>

                    <h2 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                        A BETTER GYM START
                        <br />
                        WITH A SINGLE REPORT
                    </h2>

                    <p className="mx-auto mb-12 max-w-md text-sm leading-8 text-zinc-500">
                        Don’t stay silent if you see damage. One photo from you can prevent injuries for everyone.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        <button className="rounded-lg bg-yellow-400 px-8 py-3.5 text-sm font-bold text-black transition hover:bg-yellow-300">
                            Open the platform →
                        </button>

                        <button className="rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-white/10">
                            <Link href="/login">Sign In</Link>
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}