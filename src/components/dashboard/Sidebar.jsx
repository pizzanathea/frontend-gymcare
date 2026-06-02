"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/reports", label: "Reports" },
    { href: "/dashboard/profile", label: "Profile" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        // nanti saat JWT sudah dihook:
        // localStorage.removeItem("token");
        // localStorage.removeItem("user");

        router.replace("/");
    };

    return (
        <aside
            style={{
                width: "220px",
                height: "100vh",
                position: "sticky",
                top: 0,
                flexShrink: 0,
                background: "#0d0d0d",
                borderRight: "1px solid rgba(255,255,255,0.06)",
                padding: "28px 16px",
                display: "flex",
                flexDirection: "column",
                fontFamily: "'DM Sans', sans-serif",
                overflowY: "auto",
            }}
        >
            {/* Logo */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 40,
                    paddingLeft: 8,
                }}
            >
                <span
                    style={{
                        fontWeight: 800,
                        fontSize: 12,
                        letterSpacing: "0.1em",
                        color: "#fff",
                    }}
                >
                    GYMCARE
                </span>
            </div>

            {/* Navigation */}
            <nav
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    flex: 1,
                }}
            >
                <p
                    style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "#3f3f46",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        paddingLeft: 10,
                        marginBottom: 8,
                    }}
                >
                    Menu
                </p>

                {navItems.map((item) => {
                    const isActive =
                        pathname === item.href ||
                        (item.href !== "/dashboard" &&
                            pathname.startsWith(item.href));

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px 12px",
                                borderRadius: 8,
                                textDecoration: "none",
                                fontSize: 13,
                                fontWeight: isActive ? 700 : 500,
                                color: isActive ? "#000" : "#52525b",
                                background: isActive ? "#facc15" : "transparent",
                                border: isActive
                                    ? "1.5px solid #facc15"
                                    : "1.5px solid transparent",
                                transition: "all 0.15s ease",
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.background =
                                        "rgba(255,255,255,0.04)";
                                    e.currentTarget.style.color = "#fff";
                                    e.currentTarget.style.borderColor =
                                        "rgba(255,255,255,0.08)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = "#52525b";
                                    e.currentTarget.style.borderColor =
                                        "transparent";
                                }
                            }}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: 16,
                }}
            >
                <Link
                    href="/dashboard/profile"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        textDecoration: "none",
                        borderRadius: 8,
                        padding: 8,
                        transition: "background 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                            "rgba(255,255,255,0.03)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                    }}
                >
                    <div
                        style={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            background: "rgba(250,204,21,0.15)",
                            border:
                                pathname === "/dashboard/profile"
                                    ? "1.5px solid #facc15"
                                    : "1.5px solid transparent",
                            display: "grid",
                            placeItems: "center",
                            fontSize: 12,
                            color: "#facc15",
                            fontWeight: 800,
                        }}
                    >
                        U
                    </div>

                    <div>
                        <p
                            style={{
                                fontSize: 12,
                                fontWeight: 600,
                                color: "#e4e4e7",
                            }}
                        >
                            User
                        </p>

                        <p
                            style={{
                                fontSize: 10,
                                color: "#3f3f46",
                            }}
                        >
                            Member
                        </p>
                    </div>
                </Link>

                <button
                    onClick={handleLogout}
                    style={{
                        width: "100%",
                        background: "transparent",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 8,
                        padding: "9px 12px",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#52525b",
                        cursor: "pointer",
                        fontFamily: "'DM Sans', sans-serif",
                        textAlign: "left",
                        transition: "all 0.15s ease",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                            "rgba(239,68,68,0.3)";
                        e.currentTarget.style.color = "#ef4444";
                        e.currentTarget.style.background =
                            "rgba(239,68,68,0.05)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                            "rgba(255,255,255,0.06)";
                        e.currentTarget.style.color = "#52525b";
                        e.currentTarget.style.background =
                            "transparent";
                    }}
                >
                    <span style={{ fontSize: 14 }}>→</span>
                    Logout
                </button>
            </div>
        </aside>
    );
}