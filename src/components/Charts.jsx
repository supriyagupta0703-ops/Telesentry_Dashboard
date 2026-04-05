import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  PieChart, Pie, Cell,
  AreaChart, Area
} from "recharts";

const data = [
  { name: "Delhi", risk: 80, cpu: 85 },
  { name: "Mumbai", risk: 40, cpu: 50 },
  { name: "Bangalore", risk: 65, cpu: 70 },
  { name: "Chennai", risk: 30, cpu: 45 }
];

const COLORS = ["#ef4444", "#22c55e", "#f59e0b", "#3b82f6"];

export default function Charts() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", marginTop: "40px" }}>

      {/* BAR CHART */}
      <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <h3>📊 Risk by City</h3>
        <BarChart width={400} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="risk" fill="#3b82f6" />
        </BarChart>
      </div>

      {/* PIE CHART */}
      <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <h3>🥧 Risk Distribution</h3>
        <PieChart width={400} height={250}>
          <Pie data={data} dataKey="risk" nameKey="name" outerRadius={100}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* AREA CHART */}
      <div style={{ gridColumn: "span 2", background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <h3>📈 CPU Usage Trend</h3>
        <AreaChart width={800} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="cpu" stroke="#10b981" fill="#6ee7b7" />
        </AreaChart>
      </div>

    </div>
  );
}