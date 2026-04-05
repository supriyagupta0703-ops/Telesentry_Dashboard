import { Card, CardContent, Typography } from "@mui/material";

export default function StatCard({ title, value }) {
  return (
    <div
      style={{
        width: "250px",
        padding: "20px",
        borderRadius: "16px",
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        transition: "0.3s"
      }}
    >
      <h4 style={{ opacity: 0.7 }}>{title}</h4>
      <h1>{value}</h1>
    </div>
  );
}