"use client";

import Link from "next/link";

export default function Sidebar() {
    return (
        <aside
            style={{
                width: "260px",
                background: "#0f0f0f",
                borderRight: "1px solid rgba(255,255,255,.06)",
                padding: "24px",
            }}
        >
            <h2
                style={{
                    color: "#fff",
                    fontWeight: "800",
                    letterSpacing: ".1em",
                    marginBottom: "40px",
                }}
            >
                GYMCARE
            </h2>

            <nav
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }}
            >
                <SidebarLink href="/dashboard">
                    Dashboard
                </SidebarLink>

                <SidebarLink href="/dashboard/reports">
                    Reports
                </SidebarLink>

                <SidebarLink href="/dashboard/reports/create">
                    Create Report
                </SidebarLink>

                <SidebarLink href="/dashboard/profile">
                    Profile
                </SidebarLink>
            </nav>
        </aside>
    );
}

function SidebarLink({ href, children }) {
    return (
        <Link
            href={href}
            style={{
                color: "#a1a1aa",
                textDecoration: "none",
                padding: "12px",
                borderRadius: "10px",
            }}
        >
            {children}
        </Link>
    );
}