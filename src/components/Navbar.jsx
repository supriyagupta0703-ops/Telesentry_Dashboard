export default function Navbar({ dark, setDark }) {
  return (
    <div
      style={{
        height: "70px",
        padding: "0 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: dark
          ? "linear-gradient(90deg, #020617, #0f172a)"
          : "linear-gradient(90deg, #e2e8f0, #f8fafc)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)"
      }}
    >
      <h2 style={{ fontWeight: "600" }}>📊 Dashboard</h2>

      <button
        onClick={() => setDark(!dark)}
        style={{
          padding: "8px 14px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          background: dark ? "#1e293b" : "#e2e8f0"
        }}
      >
        {dark ? "☀ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}