export default function NodeTable({ nodes }) {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>🖥 Node Status</h2>

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Node</th>
            <th>Status</th>
            <th>Risk</th>
          </tr>
        </thead>

        <tbody>
          {nodes.map((node, i) => (
            <tr key={i}>
              <td>{node.nodeName}</td>
              <td>{node.status}</td>
              <td style={{ color: node.risk > 70 ? "red" : "green" }}>
                {node.risk}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}