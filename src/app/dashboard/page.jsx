import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardPage() {
    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                background: "#080808",
                color: "#fff",
            }}
        >
            <Sidebar />

            <main
                style={{
                    flex: 1,
                    padding: "32px",
                }}
            >
                <h1
                    style={{
                        fontSize: "32px",
                        fontWeight: "800",
                        marginBottom: "8px",
                    }}
                >
                    Dashboard
                </h1>

                <p
                    style={{
                        color: "#71717a",
                        marginBottom: "32px",
                    }}
                >
                    Welcome back to GymCare.
                </p>

                {/* Stats */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3,1fr)",
                        gap: "20px",
                        marginBottom: "32px",
                    }}
                >
                    <StatCard title="Total Reports" value="12" />
                    <StatCard title="Pending" value="5" />
                    <StatCard title="Approved" value="7" />
                </div>

                {/* Reports */}
                <div
                    style={{
                        background: "#0f0f0f",
                        border: "1px solid rgba(255,255,255,.06)",
                        borderRadius: "16px",
                        padding: "24px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "18px",
                            fontWeight: "700",
                            marginBottom: "20px",
                        }}
                    >
                        Recent Reports
                    </h2>

                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                        }}
                    >
                        <thead>
                            <tr>
                                <th align="left">Title</th>
                                <th align="left">Status</th>
                                <th align="left">Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Treadmill Not Working</td>
                                <td>
                                    <StatusBadge status="Pending" />
                                </td>
                                <td>29 May 2026</td>
                            </tr>

                            <tr>
                                <td>Broken Locker</td>
                                <td>
                                    <StatusBadge status="Approved" />
                                </td>
                                <td>28 May 2026</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

function StatCard({ title, value }) {
    return (
        <div
            style={{
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,.06)",
                borderRadius: "16px",
                padding: "24px",
            }}
        >
            <p
                style={{
                    color: "#71717a",
                    fontSize: "14px",
                    marginBottom: "8px",
                }}
            >
                {title}
            </p>

            <h2
                style={{
                    fontSize: "32px",
                    fontWeight: "800",
                    color: "#facc15",
                }}
            >
                {value}
            </h2>
        </div>
    );
}

function StatusBadge({ status }) {
    const styles = {
        Pending: {
            background: "rgba(250,204,21,.15)",
            color: "#facc15",
        },
        Approved: {
            background: "rgba(34,197,94,.15)",
            color: "#22c55e",
        },
    };

    return (
        <span
            style={{
                ...styles[status],
                padding: "6px 10px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: "600",
            }}
        >
            {status}
        </span>
    );
}