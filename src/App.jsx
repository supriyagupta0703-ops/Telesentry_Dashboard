import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ChatBot from "./components/ChatBot";

import Dashboard from "./components/Dashboard";
import Nodes from "./components/Nodes";
import Alerts from "./components/Alerts";
import Reports from "./components/Reports";

function App() {
  const [dark, setDark] = useState(false); 

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: dark ? "#020617" : "#f1f5f9",
        color: dark ? "white" : "black"
      }}
    >
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* CENTER CONTENT */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        
        {/* NAVBAR */}
        <Navbar dark={dark} setDark={setDark} /> {/* ✅ pass props */}

        {/* ROUTES */}
        <div style={{ padding: "30px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/nodes" element={<Nodes />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>

      {/* GLOBAL CHATBOT */}
      <ChatBot dark={dark} />
    </div>
  );
}

export default App;