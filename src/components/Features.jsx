"use client";

import { motion } from "framer-motion";

const features = [
    {
        num: "01",
        title: "Photo Report",
        desc: "Instant photo reports. No lengthy forms, no hassle.",
    },
    {
        num: "02",
        title: "Community Feed",
        desc: "All members can view and comment on each report.",
    },
    {
        num: "03",
        title: "Admin Control",
        desc: "A comprehensive dashboard for administrators to manage and update report statuses.",
    },
    {
        num: "04",
        title: "Status Tracking",
        desc: "Track the progress of repairs from the time they are reported until they are completed.",
    },
];

export default function Features() {
    return (
        <div className="w-full bg-[#080808]">
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
                                — Platform Features
                            </span>

                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                                DESIGNED FOR 
                                <br />
                                THE GYM COMMUNITY
                            </h2>
                        </div>

                        <div className="text-right">
                            <div className="text-4xl font-extrabold leading-none text-yellow-400">
                                04
                            </div>

                            <div className="text-xs text-zinc-600">
                                KEY FEATURES
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
                                <h3 className="mb-2 text-lg font-bold tracking-tight text-white">
                                    {f.title}
                                </h3>

                                <div className="flex items-center gap-2">
                                    <div className="h-px w-4 bg-yellow-400" />

                                    <span className="text-[11px] tracking-[0.1em] text-zinc-500">
                                        ACTIVE
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
        </div>
    );
}