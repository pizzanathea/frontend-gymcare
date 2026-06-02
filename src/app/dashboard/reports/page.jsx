"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";

const allReports = [
    { id: "#RPT-001", title: "Treadmill Not Working", category: "Equipment", status: "Pending", date: "29 May 2026", desc: "Treadmill di lantai 2 mati total, tidak bisa dinyalakan." },
    { id: "#RPT-002", title: "Broken Locker", category: "Facility", status: "Approved", date: "28 May 2026", desc: "Loker nomor 14 kuncinya rusak dan tidak bisa dibuka." },
    { id: "#RPT-003", title: "AC Ruang Utama Mati", category: "Facility", status: "In Progress", date: "27 May 2026", desc: "AC di ruang utama tidak dingin sejak 3 hari lalu." },
    { id: "#RPT-004", title: "Kaca Cermin Retak", category: "Safety", status: "Resolved", date: "25 May 2026", desc: "Cermin di area free weight retak di bagian kanan bawah." },
    { id: "#RPT-005", title: "Shower Bocor", category: "Facility", status: "Pending", date: "24 May 2026", desc: "Shower di kamar mandi pria bocor dan menggenang." },
    { id: "#RPT-006", title: "Dumbbell Hilang", category: "Equipment", status: "Resolved", date: "22 May 2026", desc: "Dumbbell 10kg dan 12kg tidak ada di rack." },
    { id: "#RPT-007", title: "Lampu Mati", category: "Facility", status: "Approved", date: "20 May 2026", desc: "Lampu di area stretching mati sebelah kiri." },
    { id: "#RPT-008", title: "Mesin Rowing Error", category: "Equipment", status: "In Progress", date: "18 May 2026", desc: "Rowing machine menampilkan error E3 saat dipakai." },
];

const statusConfig = {
    Pending: { bg: "rgba(250,204,21,0.1)", color: "#facc15", dot: "#facc15" },
    Approved: { bg: "rgba(34,197,94,0.1)", color: "#22c55e", dot: "#22c55e" },
    "In Progress": { bg: "rgba(96,165,250,0.1)", color: "#60a5fa", dot: "#60a5fa" },
    Resolved: { bg: "rgba(161,161,170,0.1)", color: "#a1a1aa", dot: "#a1a1aa" },
};

const filters = ["All", "Pending", "In Progress", "Approved", "Resolved"];

export default function ReportsPage() {
    const [mounted, setMounted] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");
    const [search, setSearch] = useState("");

    useEffect(() => setMounted(true), []);

    const filtered = allReports.filter((r) => {
        const matchFilter = activeFilter === "All" || r.status === activeFilter;
        const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
            r.id.toLowerCase().includes(search.toLowerCase());
        return matchFilter && matchSearch;
    });

    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "#080808", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }

        .report-row {
          display: grid;
          grid-template-columns: 60px 1fr 110px 120px 110px 80px;
          align-items: center;
          padding: 14px 12px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.15s ease;
          gap: 8px;
        }
        .report-row:hover { background: rgba(255,255,255,0.03); }

        .search-input {
          background: #0d0d0d;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 10px 14px;
          color: #fff;
          font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          width: 240px;
          transition: border-color 0.2s ease;
        }
        .search-input:focus { border-color: #facc15; }
        .search-input::placeholder { color: #3f3f46; }

        .filter-btn {
          padding: 7px 14px;
          border-radius: 7px;
          border: 1px solid transparent;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.15s ease;
        }
      `}</style>

            <Sidebar />

            <main style={{ flex: 1, padding: "36px 40px", overflowY: "auto" }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ marginBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
                >
                    <div>
                        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "#facc15", textTransform: "uppercase", marginBottom: 8 }}>
                            — My Reports
                        </p>
                        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>Reports</h1>
                        <p style={{ color: "#3f3f46", fontSize: 13, marginTop: 4 }}>
                            {mounted ? new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : ""}
                        </p>
                    </div>

                    <Link
                        href="/dashboard/reports/Createreport"
                        style={{
                            background: "#facc15",
                            color: "#000",
                            textDecoration: "none",
                            borderRadius: 8,
                            padding: "10px 18px",
                            fontSize: 13,
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                            display: "inline-block",
                        }}
                    >
                        + Create report
                    </Link>
                </motion.div>

                {/* Summary Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 28 }}
                >
                    {[
                        { label: "Total", value: allReports.length, color: "#fff" },
                        { label: "Pending", value: allReports.filter(r => r.status === "Pending").length, color: "#facc15" },
                        { label: "In Progress", value: allReports.filter(r => r.status === "In Progress").length, color: "#60a5fa" },
                        { label: "Resolved", value: allReports.filter(r => r.status === "Resolved").length, color: "#22c55e" },
                    ].map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                            style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "18px 20px" }}
                        >
                            <p style={{ fontSize: 11, color: "#52525b", fontWeight: 500, marginBottom: 8 }}>{s.label}</p>
                            <p style={{ fontSize: 30, fontWeight: 800, color: s.color, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.value}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Table Card */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "24px 24px" }}
                >
                    {/* Toolbar */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                        {/* Filters */}
                        <div style={{ display: "flex", gap: 6 }}>
                            {filters.map((f) => {
                                const isActive = activeFilter === f;
                                return (
                                    <button
                                        key={f}
                                        className="filter-btn"
                                        onClick={() => setActiveFilter(f)}
                                        style={{
                                            background: isActive ? "#facc15" : "transparent",
                                            color: isActive ? "#000" : "#52525b",
                                            borderColor: isActive ? "#facc15" : "rgba(255,255,255,0.06)",
                                        }}
                                    >
                                        {f}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Search */}
                        <input
                            className="search-input"
                            placeholder="Search reports..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Table Header */}
                    <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 110px 120px 110px 80px", gap: 8, padding: "0 12px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: 4 }}>
                        {["ID", "Title", "Category", "Status", "Date", ""].map((h) => (
                            <span key={h} style={{ fontSize: 10, fontWeight: 600, color: "#3f3f46", letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</span>
                        ))}
                    </div>

                    {/* Rows */}
                    {filtered.length === 0 ? (
                        <div style={{ padding: "40px 0", textAlign: "center", color: "#3f3f46", fontSize: 13 }}>
                            No reports found.
                        </div>
                    ) : (
                        filtered.map((r, i) => {
                            const cfg = statusConfig[r.status] || statusConfig.Pending;
                            return (
                                <motion.div
                                    key={r.id}
                                    className="report-row"
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25, delay: i * 0.04 }}
                                >
                                    <span style={{ fontSize: 11, color: "#3f3f46", fontFamily: "monospace" }}>{r.id}</span>

                                    <div>
                                        <p style={{ fontSize: 13, fontWeight: 600, color: "#e4e4e7", marginBottom: 2 }}>{r.title}</p>
                                        <p style={{ fontSize: 11, color: "#3f3f46" }}>{r.desc.slice(0, 48)}…</p>
                                    </div>

                                    <span
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 600,
                                            color: "#71717a",
                                            background: "rgba(255,255,255,0.04)",
                                            padding: "3px 8px",
                                            borderRadius: 5,
                                            display: "inline-block",
                                        }}
                                    >
                                        {r.category}
                                    </span>

                                    <span>
                                        <span
                                            style={{
                                                background: cfg.bg,
                                                color: cfg.color,
                                                padding: "4px 10px",
                                                borderRadius: 999,
                                                fontSize: 11,
                                                fontWeight: 700,
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 5,
                                            }}
                                        >
                                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: cfg.dot, display: "inline-block" }} />
                                            {r.status}
                                        </span>
                                    </span>

                                    <span style={{ fontSize: 12, color: "#52525b" }}>{r.date}</span>

                                    <Link
                                        href={`/dashboard/reports/${r.id.replace("#", "")}`}
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 600,
                                            color: "#facc15",
                                            textDecoration: "none",
                                            padding: "5px 10px",
                                            borderRadius: 6,
                                            border: "1px solid rgba(250,204,21,0.2)",
                                            transition: "all 0.15s ease",
                                            display: "inline-block",
                                            textAlign: "center",
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(250,204,21,0.08)"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                                    >
                                        View
                                    </Link>
                                </motion.div>
                            );
                        })
                    )}
                </motion.div>
            </main>
        </div>
    );
}