"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";

const categories = ["Equipment", "Facility", "Safety", "Cleanliness", "Other"];

export default function CreateReportPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [dragging, setDragging] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const fileRef = useRef();

    useEffect(() => setMounted(true), []);

    const handleFile = (file) => {
        if (!file || !file.type.startsWith("image/")) return;
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        handleFile(e.dataTransfer.files[0]);
    };

    const handleSubmit = () => {
        if (!title || !category || !desc) return;
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            router.push("/dashboard/reports");
        }, 1500);
    };

    const canSubmit = title.trim() && category && desc.trim();

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
        .input-field::placeholder { color: #3f3f46; }
        textarea.input-field { resize: none; }

        .cat-btn {
          padding: 9px 16px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          background: transparent;
          color: #52525b;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.15s ease;
        }
        .cat-btn:hover { border-color: rgba(250,204,21,0.3); color: #facc15; }
        .cat-btn.active { background: rgba(250,204,21,0.1); border-color: #facc15; color: #facc15; }
      `}</style>

            <Sidebar />

            <main style={{ flex: 1, padding: "36px 40px", overflowY: "auto" }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ marginBottom: 36, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
                >
                    <div>
                        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#facc15", textTransform: "uppercase", marginBottom: 8 }}>
                            — New Report
                        </p>
                        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>Create Report</h1>
                        <p style={{ color: "#3f3f46", fontSize: 13, marginTop: 4 }}>
                            {mounted ? new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : ""}
                        </p>
                    </div>

                    <button
                        onClick={() => router.back()}
                        style={{
                            background: "transparent",
                            color: "#52525b",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: 8,
                            padding: "9px 16px",
                            fontSize: 13,
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "'DM Sans', sans-serif",
                            transition: "all 0.15s ease",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#52525b"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
                    >
                        ← Back
                    </button>
                </motion.div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20, alignItems: "start" }}>

                    {/* Left — Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        style={{ display: "flex", flexDirection: "column", gap: 20 }}
                    >
                        {/* Title */}
                        <div style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "24px 28px" }}>
                            <label style={{ display: "block", fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 10 }}>
                                REPORT TITLE
                            </label>
                            <input
                                className="input-field"
                                placeholder=""
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                maxLength={80}
                            />
                            <p style={{ fontSize: 11, color: "#3f3f46", marginTop: 6, textAlign: "right" }}>{title.length}/80</p>
                        </div>

                        {/* Category */}
                        <div style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "24px 28px" }}>
                            <label style={{ display: "block", fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 14 }}>
                                CATEGORY
                            </label>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {categories.map((c) => (
                                    <button
                                        key={c}
                                        className={`cat-btn${category === c ? " active" : ""}`}
                                        onClick={() => setCategory(c)}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "24px 28px" }}>
                            <label style={{ display: "block", fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 10 }}>
                                DESCRIPTION
                            </label>
                            <textarea
                                className="input-field"
                                rows={5}
                                placeholder="Describe the issue in detail. Include location, severity, and when it started..."
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                maxLength={500}
                            />
                            <p style={{ fontSize: 11, color: "#3f3f46", marginTop: 6, textAlign: "right" }}>{desc.length}/500</p>
                        </div>
                    </motion.div>

                    {/* Right — Photo + Submit */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        style={{ display: "flex", flexDirection: "column", gap: 16 }}
                    >
                        {/* Upload */}
                        <div style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "24px" }}>
                            <label style={{ display: "block", fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 14 }}>
                                PHOTO (OPTIONAL)
                            </label>

                            {preview ? (
                                <div style={{ position: "relative" }}>
                                    <img
                                        src={preview}
                                        alt="preview"
                                        style={{ width: "100%", borderRadius: 10, objectFit: "cover", maxHeight: 200, display: "block" }}
                                    />
                                    <button
                                        onClick={() => { setImage(null); setPreview(null); }}
                                        style={{
                                            position: "absolute",
                                            top: 8,
                                            right: 8,
                                            background: "rgba(0,0,0,0.7)",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "50%",
                                            width: 28,
                                            height: 28,
                                            cursor: "pointer",
                                            fontSize: 14,
                                            display: "grid",
                                            placeItems: "center",
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                            ) : (
                                <div
                                    onClick={() => fileRef.current.click()}
                                    onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                                    onDragLeave={() => setDragging(false)}
                                    onDrop={handleDrop}
                                    style={{
                                        border: `2px dashed ${dragging ? "#facc15" : "rgba(255,255,255,0.08)"}`,
                                        borderRadius: 10,
                                        padding: "36px 20px",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        background: dragging ? "rgba(250,204,21,0.04)" : "transparent",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    <div style={{ fontSize: 28, marginBottom: 10 }}>📸</div>
                                    <p style={{ fontSize: 13, fontWeight: 600, color: "#71717a", marginBottom: 4 }}>Drop photo here</p>
                                    <p style={{ fontSize: 11, color: "#3f3f46" }}>or click to browse</p>
                                </div>
                            )}
                            <input
                                ref={fileRef}
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={(e) => handleFile(e.target.files[0])}
                            />
                        </div>

                        {/* Summary */}
                        <div style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "20px 24px" }}>
                            <p style={{ fontSize: 11, color: "#71717a", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 14 }}>SUMMARY</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                {[
                                    { label: "Title", value: title || "—" },
                                    { label: "Category", value: category || "—" },
                                    { label: "Photo", value: image ? image.name : "None" },
                                ].map((s) => (
                                    <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ fontSize: 12, color: "#52525b" }}>{s.label}</span>
                                        <span style={{ fontSize: 12, fontWeight: 600, color: s.value === "—" || s.value === "None" ? "#3f3f46" : "#e4e4e7", maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            onClick={handleSubmit}
                            disabled={!canSubmit || submitting}
                            style={{
                                width: "100%",
                                background: canSubmit ? "#facc15" : "rgba(250,204,21,0.15)",
                                color: canSubmit ? "#000" : "#52525b",
                                border: "none",
                                borderRadius: 10,
                                padding: "14px",
                                fontSize: 14,
                                fontWeight: 700,
                                cursor: canSubmit ? "pointer" : "not-allowed",
                                fontFamily: "'DM Sans', sans-serif",
                                transition: "all 0.2s ease",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                            }}
                        >
                            {submitting ? (
                                <>
                                    <span style={{ display: "inline-block", width: 14, height: 14, border: "2px solid #000", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.6s linear infinite" }} />
                                    Submitting...
                                </>
                            ) : "Submit Report →"}
                        </button>

                        <p style={{ fontSize: 11, color: "#3f3f46", textAlign: "center" }}>
                            Report will be reviewed by admin within 24 hours.
                        </p>
                    </motion.div>
                </div>
            </main>

            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}