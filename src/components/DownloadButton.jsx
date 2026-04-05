import { downloadPDF } from "../services/api";

export default function DownloadButton() {
  const handleDownload = async () => {
    const res = await downloadPDF();

    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", "sla-report.pdf");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <button onClick={handleDownload}>
        📄 Download SLA Report
      </button>
    </div>
  );
}