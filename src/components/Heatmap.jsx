export default function Heatmap() {
  const zones = [
    { name: "Delhi", risk: 80 },
    { name: "Mumbai", risk: 40 },
    { name: "Bangalore", risk: 65 },
    { name: "Chennai", risk: 30 }
  ];

  const getColor = (risk) =>
    risk > 70 ? "#ef4444" : risk > 50 ? "#f59e0b" : "#22c55e";

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>🌍 Zone Risk Heatmap</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        marginTop: "20px"
      }}>
        {zones.map((z, i) => (
          <div
            key={i}
            style={{
              padding: "30px",
              borderRadius: "16px",
              textAlign: "center",
              color: "white",
              background: getColor(z.risk),
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h3>{z.name}</h3>
            <p>{z.risk}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}