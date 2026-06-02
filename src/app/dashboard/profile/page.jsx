"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/dashboard/Sidebar";

export default function ProfilePage() {
    const [mounted, setMounted] = useState(false);
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("johndoe@email.com");
    const [bio, setBio] = useState("Active gym member since 2023.");

    useEffect(() => setMounted(true), []);

    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "#080808", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
                * { box-sizing: border-box; }
                .input-field {
                    width: 100%;
                    background: #111;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 8px;
                    padding: 12px 14px;
                    color: #fff;
                    font-size: 14px;
                    font-family: 'DM Sans', sans-serif;
                    outline: none;
                    transition: border-color 0.2s ease;
                }
                .input-field:focus { border-color: #facc15; }
                .input-field:disabled { color: #52525b; cursor: default; }
                textarea.input-field { resize: none; }
            `}</style>

            <Sidebar />

            <main style={{ flex: 1, padding: "36px 40px", overflowY: "auto" }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ marginBottom: 36 }}
                >
                    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#facc15", textTransform: "uppercase", marginBottom: 8 }}>
                        — Account
                    </p>
                    <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>Profile</h1>
                    <p style={{ color: "#3f3f46", fontSize: 13, marginTop: 4 }}>
                        {mounted ? new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : ""}
                    </p>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20, alignItems: "start" }}>

                    {/* Left — Avatar Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        style={{
                            background: "#0d0d0d",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: 14,
                            padding: "32px 24px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            gap: 16,
                        }}
                    >
                        <div style={{ position: "relative" }}>
                            <div
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: "50%",
                                    background: "rgba(250,204,21,0.12)",
                                    border: "2px solid rgba(250,204,21,0.3)",
                                    display: "grid",
                                    placeItems: "center",
                                    fontSize: 28,
                                    fontWeight: 800,
                                    color: "#facc15",
                                }}
                            >
                                {name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
                            </div>
                            <div style={{ position: "absolute", bottom: 0, right: 0, width: 20, height: 20, borderRadius: "50%", background: "#22c55e", border: "2px solid #080808" }} />
                        </div>

                        <div>
                            <p style={{ fontWeight: 800, fontSize: 16, color: "#fff", marginBottom: 4 }}>{name}</p>
                            <p style={{ fontSize: 12, color: "#52525b" }}>{email}</p>
                        </div>

                        <span style={{ background: "rgba(250,204,21,0.1)", color: "#facc15", padding: "5px 14px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em" }}>
                            MEMBER
                        </span>

                        <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.05)" }} />

                        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
                            {[
                                { label: "Reports Submitted", value: "12" },
                                { label: "Reports Resolved", value: "3" },
                                { label: "Member Since", value: "2023" },
                            ].map((s) => (
                                <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontSize: 12, color: "#52525b" }}>{s.label}</span>
                                    <span style={{ fontSize: 13, fontWeight: 700, color: "#e4e4e7" }}>{s.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Edit Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "28px 32px" }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                            <h2 style={{ fontSize: 15, fontWeight: 700 }}>Personal Information</h2>
                            <button
                                onClick={() => setEditing(!editing)}
                                style={{
                                    background: editing ? "#facc15" : "transparent",
                                    color: editing ? "#000" : "#facc15",
                                    border: "1px solid #facc15",
                                    borderRadius: 7,
                                    padding: "7px 16px",
                                    fontSize: 12,
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    fontFamily: "'DM Sans', sans-serif",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {editing ? "Save Changes" : "Edit Profile"}
                            </button>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                <div>
                                    <label style={{ display: "block", fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 6 }}>FULL NAME</label>
                                    <input className="input-field" value={name} onChange={(e) => setName(e.target.value)} disabled={!editing} />
                                </div>
                                <div>
                                    <label style={{ display: "block", fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 6 }}>EMAIL</label>
                                    <input className="input-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!editing} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: "block", fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 6 }}>BIO</label>
                                <textarea className="input-field" rows={3} value={bio} onChange={(e) => setBio(e.target.value)} disabled={!editing} />
                            </div>

                            <div>
                                <label style={{ display: "block", fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 6 }}>ROLE</label>
                                <input className="input-field" value="Member" disabled readOnly />
                            </div>
                        </div>

                        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", margin: "28px 0" }} />

                        <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 20 }}>Change Password</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <div>
                                <label style={{ display: "block", fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 6 }}>CURRENT PASSWORD</label>
                                <input className="input-field" type="password" placeholder="••••••••" />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                <div>
                                    <label style={{ display: "block", fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 6 }}>NEW PASSWORD</label>
                                    <input className="input-field" type="password" placeholder="••••••••" />
                                </div>
                                <div>
                                    <label style={{ display: "block", fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 6 }}>CONFIRM PASSWORD</label>
                                    <input className="input-field" type="password" placeholder="••••••••" />
                                </div>
                            </div>
                            <div>
                                <button
                                    style={{
                                        background: "transparent",
                                        color: "#fff",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: 8,
                                        padding: "10px 20px",
                                        fontSize: 13,
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        fontFamily: "'DM Sans', sans-serif",
                                        transition: "border-color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.borderColor = "#facc15"}
                                    onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                                >
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}