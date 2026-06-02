"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Stats", href: "#stats" },
  { label: "CTA", href: "#cta" },
  { label: "FAQ", href: "#faq" },
];

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

      {/* Navigation */}
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {NAV_LINKS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            style={{ textDecoration: "none" }}
            onClick={() => setActive(item.label)}
          >
            <NavLink
              label={item.label}
              isActive={active === item.label}
            />
          </Link>
        ))}
      </div>

      {/* Button */}
      <BuatAkunButton />
    </motion.nav>
  );
}

function NavLink({ label, isActive }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: isActive || hovered ? "#ffffff" : "#facc15",
        padding: "5px 12px",
        fontSize: 14,
        fontWeight: isActive ? 600 : 400,
        cursor: "pointer",
        transition: "color 0.25s ease",
        userSelect: "none",
      }}
    >
      {label}
    </span>
  );
}

function BuatAkunButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href="/register" style={{ textDecoration: "none" }}>
      <motion.button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          all: "unset",
          display: "inline-block",
          background: hovered ? "#facc15" : "transparent",
          color: hovered ? "#000000" : "#ffffff",
          border: "1.5px solid #facc15",
          borderRadius: "8px",
          padding: "8px 18px",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          letterSpacing: "0.02em",
          boxSizing: "border-box",
          transition: "background 0.25s ease, color 0.25s ease",
        }}
      >
        Sign Up
      </motion.button>
    </Link>
  );
}