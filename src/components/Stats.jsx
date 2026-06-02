"use client";

import { motion } from "framer-motion";

const stats = [
    {
        value: "500+",
        title: "Report completed",
        subtitle: "Since its initial launch",
    },
    {
        value: "< 24h",
        title: "Response time admin",
        subtitle: "Average follow-up time ",
    },
    {
        value: "100%",
        title: "Transparent",
        subtitle: "All members can be monitored",
    },
];

export default function Stats() {
    return (
        <div className="w-full bg-[#080808]">
            <section className="border-t border-white/10 px-8 py-20">
                <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
                    {stats.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.12,
                            }}
                            className={`px-8 py-10 ${i !== 0 ? "md:border-l md:border-white/10" : ""}`}
                        >
                            <div className="mb-3 text-5xl font-extrabold leading-none tracking-tight text-yellow-400 md:text-6xl">
                                {item.value}
                            </div>

                            <h3 className="mb-2 text-base font-semibold text-white">
                                {item.title}
                            </h3>

                            <p className="text-sm text-zinc-500">
                                {item.subtitle}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}