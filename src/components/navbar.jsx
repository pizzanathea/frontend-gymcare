"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// useState only used in Navbar for active state

const NAV_LINKS = ["Home", "Laporan", "Feed", "Fitur", "FAQ"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 32px",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
        background: "rgba(8,8,8,0.7)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            fontWeight: 800,
            fontSize: 15,
            letterSpacing: "0.05em",
            color: "#fff",
          }}
        >
          GYMCARE
        </span>
      </div>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {NAV_LINKS.map((l) => {
          const isActive = active === l;
          return (
            <NavLink
              key={l}
              label={l}
              isActive={isActive}
              onClick={() => setActive(l)}
            />
          );
        })}
      </div>

      {/* CTA Button */}
      <button className="btn-ghost">Buat Akun</button>
    </motion.nav>
  );
}

function NavLink({ label, isActive, onClick }) {
  return (
    <span
      onClick={onClick}
      style={{
        color: isActive ? "#ffffff" : "#facc15",
        padding: "5px 12px",
        fontSize: 14,
        fontWeight: isActive ? 600 : 400,
        cursor: "pointer",
        transition: "color 0.3s ease",
        userSelect: "none",
      }}
    >
      {label}
    </span>
  );
}