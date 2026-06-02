"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SignInPage() {
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
      `}</style>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ width: "100%", maxWidth: 360, padding: "0 24px" }}
            >
                {/* Logo */}
                <div style={{ marginBottom: 40, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.1em", color: "#fff" }}>
                        GYMCARE
                    </span>
                </div>

                {/* Heading */}
                <div style={{ marginBottom: 28 }}>
                    <h1 style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 6 }}>
                        Sign in to your account
                    </h1>
                    <p style={{ fontSize: 13, color: "#52525b" }}>
                        Don't have an account yet?{" "}
                        <Link href="/register" style={{ color: "#facc15", fontWeight: 600, textDecoration: "none" }}>
                            Sign Up
                        </Link>
                    </p>
                </div>

                {/* Fields */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div>
                        <label style={{ display: "block", fontSize: 11, color: "#71717a", marginBottom: 6, fontWeight: 600, letterSpacing: "0.06em" }}>EMAIL</label>
                        <input className="input-field" type="email" placeholder="Your email" />
                    </div>

                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                            <label style={{ fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em" }}>PASSWORD</label>
                            <Link href="/login/forgot" style={{ fontSize: 11, color: "#facc15", textDecoration: "none" }}>
                                Forgot password?
                            </Link>
                        </div>
                        <input className="input-field" type="password" placeholder="••••••••" />
                    </div>

                    <div style={{ marginTop: 8 }}>
                        <Link href="/dashboard" style={{ textDecoration: "none" }}>
                            <button className="btn-primary">Sign In</button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}