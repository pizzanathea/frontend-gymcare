"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const floatingItems = [
    { id: 1, label: "Treadmill 3", sub: "Reported", x: "8%", y: "28%" },
    { id: 2, label: "Dumbbell Rack", sub: "In Repair", x: "76%", y: "22%" },
    { id: 3, label: "Bench Press B", sub: "Completed", x: "6%", y: "62%" },
    { id: 4, label: "Pull-up Bar", sub: "New Report", x: "78%", y: "60%" },
];

export default function Hero() {
    const heroRef = useRef(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {
        stiffness: 40,
        damping: 20,
    });

    const springY = useSpring(mouseY, {
        stiffness: 40,
        damping: 20,
    });

    const [scrollCount, setScrollCount] = useState(1);

    useEffect(() => {
        const handleMouse = (e) => {
            const rect = heroRef.current?.getBoundingClientRect();

            if (!rect) return;

            mouseX.set(
                ((e.clientX - rect.left) / rect.width - 0.5) * 40
            );

            mouseY.set(
                ((e.clientY - rect.top) / rect.height - 0.5) * 40
            );
        };

        window.addEventListener("mousemove", handleMouse);

        return () =>
            window.removeEventListener("mousemove", handleMouse);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const progress = Math.min(
                Math.floor(window.scrollY / 300 + 1),
                3
            );

            setScrollCount(progress);
        };

        window.addEventListener("scroll", onScroll);

        return () =>
            window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-8 pt-24 pb-16 bg-[#080808]"
        >
            {/* ORBS */}
            <motion.div
                className="absolute rounded-full blur-[80px]"
                style={{
                    width: 500,
                    height: 500,
                    top: "5%",
                    left: "30%",
                    background:
                        "radial-gradient(circle, rgba(245,197,24,0.09) 0%, transparent 70%)",
                    x: springX,
                    y: springY,
                }}
            />

            <motion.div
                className="absolute rounded-full blur-[80px]"
                style={{
                    width: 400,
                    height: 400,
                    top: "40%",
                    left: "5%",
                    background:
                        "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
                    x: useTransform(springX, (v) => v * -0.5),
                    y: useTransform(springY, (v) => v * -0.5),
                }}
            />

            <motion.div
                className="absolute rounded-full blur-[80px]"
                style={{
                    width: 300,
                    height: 300,
                    top: "30%",
                    right: "5%",
                    background:
                        "radial-gradient(circle, rgba(245,197,24,0.05) 0%, transparent 70%)",
                    x: useTransform(springX, (v) => v * 0.7),
                    y: useTransform(springY, (v) => v * 0.3),
                }}
            />

            {/* GRID */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* FLOATING CARDS */}
            {floatingItems.map((item, i) => (
                <motion.div
                    key={item.id}
                    className="absolute hidden md:flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3"
                    style={{
                        left: item.x,
                        top: item.y,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [0, -6, 0] }}
                    transition={{
                        opacity: {
                            duration: 0.6,
                            delay: 0.8 + i * 0.15,
                        },
                        y: {
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.4,
                        },
                    }}
                >
                    <div
                        className="w-2 h-2 rounded-full"
                        style={{
                            background:
                                item.sub === "Selesai"
                                    ? "#22c55e"
                                    : item.sub === "Dalam perbaikan"
                                        ? "#f5c518"
                                        : item.sub === "Dilaporkan"
                                            ? "#ef4444"
                                            : "#888",
                        }}
                    />

                    <div>
                        <p className="text-xs font-semibold text-white">
                            {item.label}
                        </p>
                        <p className="text-[11px] text-zinc-500">
                            {item.sub}
                        </p>
                    </div>
                </motion.div>
            ))}

            {/* CONTENT */}
            <div className="relative z-10 max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-400 mb-8">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    Live Gym Reporting Platform
                </span>

                <h1 className="mb-6 text-5xl md:text-7xl font-extrabold text-white">
                    JUST ONE CLIK
                    <br />
                    <span className="text-yellow-400">
                        FOR YOUR GYM
                    </span>{" "}
                    REPORT
                </h1>

                <p className="mx-auto mb-10 max-w-xl text-zinc-500 leading-8">
                    Post a photo of broken equipment to the feed, and the admin will know right away.
                    A safer and better-maintained gym starts with the community.
                </p>
            </div>

        </section>
    );
}