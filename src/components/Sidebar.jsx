import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#020617",
        color: "white",
        padding: "20px"
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>📡 TeleSentry</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>📊 Dashboard</Link>
        <Link to="/nodes" style={{ color: "white" }}>🖥 Nodes</Link>
        <Link to="/alerts" style={{ color: "white" }}>🚨 Alerts</Link>
        <Link to="/reports" style={{ color: "white" }}>📄 Reports</Link>
      </div>
    </div>
  );
}