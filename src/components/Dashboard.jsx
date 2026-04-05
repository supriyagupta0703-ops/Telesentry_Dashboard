import Heatmap from "../components/Heatmap";
import Charts from "../components/Charts";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <>
      <h1>TeleSentry Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <StatCard title="High Risk Nodes" value="2" />
        <StatCard title="Zones at Risk" value="1" />
        <StatCard title="SLA Risk %" value="72%" />
      </div>

      <Heatmap />
      <Charts />
    </>
  );
}