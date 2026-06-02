"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (!email.trim()) return;
        setSubmitted(true);
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#080808",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'DM Sans', sans-serif",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #0f0f0f inset !important;
          -webkit-text-fill-color: #fff !important;
        }
        .input-field {
          width: 100%;
          background: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 13px 14px;
          color: #fff;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .input-field:focus { border-color: #facc15; }
        .input-field::placeholder { color: #3f3f46; }
        .btn-primary {
          width: 100%;
          background: #facc15;
          color: #000;
          border: none;
          border-radius: 8px;
          padding: 13px;
          font-size: 14px;
          font-weight: 700;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.1s ease;
        }
        .btn-primary:hover { background: #fde047; }
        .btn-primary:active { transform: scale(0.98); }
        .btn-primary:disabled { background: rgba(250,204,21,0.15); color: #52525b; cursor: not-allowed; }
      `}</style>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ width: "100%", maxWidth: 360, padding: "0 24px" }}
            >
                {/* Logo */}
                <div style={{ marginBottom: 40 }}>
                    <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.1em", color: "#fff" }}>
                        GYMCARE
                    </span>
                </div>

                <AnimatePresence mode="wait">
                    {!submitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Heading */}
                            <div style={{ marginBottom: 28 }}>
                                <h1 style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 6 }}>
                                    Forgot Password
                                </h1>
                                <p style={{ fontSize: 13, color: "#52525b", lineHeight: 1.7 }}>
                                    Enter your email and we'll send you a link to reset your password.
                                </p>
                            </div>

                            {/* Field */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                <div>
                                    <label style={{ display: "block", fontSize: 11, color: "#71717a", marginBottom: 6, fontWeight: 600, letterSpacing: "0.06em" }}>
                                        EMAIL
                                    </label>
                                    <input
                                        className="input-field"
                                        type="email"
                                        placeholder="kamu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div style={{ marginTop: 4 }}>
                                    <button
                                        className="btn-primary"
                                        onClick={handleSubmit}
                                        disabled={!email.trim()}
                                    >
                                        Send Reset Link
                                    </button>
                                </div>

                                <p style={{ textAlign: "center", fontSize: 12, color: "#52525b" }}>
                                    Remember your password?{" "}
                                    <Link href="/login" style={{ color: "#facc15", fontWeight: 600, textDecoration: "none" }}>
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            style={{ textAlign: "center" }}
                        >
                            {/* Icon */}
                            <div
                                style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: "50%",
                                    background: "rgba(250,204,21,0.1)",
                                    border: "1.5px solid rgba(250,204,21,0.3)",
                                    display: "grid",
                                    placeItems: "center",
                                    fontSize: 24,
                                    margin: "0 auto 24px",
                                }}
                            >
                                ✉️
                            </div>

                            <h1 style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 8 }}>
                                Check your email
                            </h1>
                            <p style={{ fontSize: 13, color: "#52525b", lineHeight: 1.7, marginBottom: 28 }}>
                                We sent a reset link to{" "}
                                <span style={{ color: "#facc15", fontWeight: 600 }}>{email}</span>.
                                Check your inbox and follow the instructions.
                            </p>

                            <Link href="/login" style={{ textDecoration: "none" }}>
                                <button className="btn-primary">Back to Sign In</button>
                            </Link>

                            <p style={{ fontSize: 11, color: "#3f3f46", marginTop: 16 }}>
                                Didn't receive it?{" "}
                                <span
                                    onClick={() => setSubmitted(false)}
                                    style={{ color: "#facc15", cursor: "pointer", fontWeight: 600 }}
                                >
                                    Try again
                                </span>
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}