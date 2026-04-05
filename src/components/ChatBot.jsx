import { useState } from "react";

export default function ChatBot({ dark }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input) return;

    setMessages([...messages, { type: "user", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "AI response for: " + input }
      ]);
    }, 800);

    setInput("");
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#3b82f6",
          color: "white",
          padding: "14px",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          transition: "0.3s"
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.1)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        🤖
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "340px",
            height: "450px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            background: dark ? "#020617" : "rgba(255,255,255,0.95)",
            color: dark ? "white" : "black",
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            overflow: "hidden",
            animation: "fadeIn 0.3s ease"
          }}
        >
          {/* HEADER */}
          <div
            style={{
              padding: "12px",
              fontWeight: "600",
              borderBottom: "1px solid #ddd",
              background: dark ? "#020617" : "#f8fafc",
              color: dark ? "white" : "black"
            }}
          >
            🤖 AI Assistant
          </div>

          {/* MESSAGES */}
          <div
            style={{
              flex: 1,
              padding: "15px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf:
                    m.type === "user" ? "flex-end" : "flex-start",
                  background:
                    m.type === "user"
                      ? "#3b82f6"
                      : dark
                      ? "#1e293b"
                      : "#e5e7eb",
                  color:
                    m.type === "user"
                      ? "white"
                      : dark
                      ? "white"
                      : "black",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  maxWidth: "70%",
                  transition: "0.2s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #ddd",
              gap: "8px"
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask AI..."
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                background: dark ? "#020617" : "white",
                color: dark ? "white" : "black"
              }}
            />

            <button
              onClick={send}
              style={{
                background: "#3b82f6",
                color: "white",
                border: "none",
                padding: "10px 14px",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "0.2s"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#2563eb")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#3b82f6")
              }
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}