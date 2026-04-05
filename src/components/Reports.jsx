import axios from "axios";

export default function Reports() {

  const downloadPDF = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/reports/sla/pdf",
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "SLA_Report.pdf");
      document.body.appendChild(link);
      link.click();

    } catch (err) {
      alert("Error downloading PDF");
    }
  };

  return (
    <div>
      <h1>📄 Reports</h1>

      <button
        onClick={downloadPDF}
        style={{
          padding: "12px 20px",
          background: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Download SLA Report
      </button>
    </div>
  );
}