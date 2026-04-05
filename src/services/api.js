import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api"
});

// Dashboard
export const getSummary = () => API.get("/dashboard/summary");

// Nodes
export const getNodes = () => API.get("/nodes");

// Alerts
export const getAlerts = (page = 0, size = 10) =>
  API.get(`/alerts?page=${page}&size=${size}`);

// AI
export const askAI = (q) => API.get(`/ai/query?q=${q}`);

// Reports
export const downloadPDF = () =>
  API.get("/reports/sla/pdf", { responseType: "blob" });