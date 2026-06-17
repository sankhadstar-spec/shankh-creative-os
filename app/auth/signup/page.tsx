"use client";
import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const inputStyle = {
    width: "100%", padding: "14px", background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px",
    color: "white", fontSize: "15px", marginBottom: "12px", boxSizing: "border-box" as const,
    transition: "border 0.2s",
  };

  const handleSubmit = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, location }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a0a0a, #1a0a2e)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, sans-serif" }}>
      <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "48px", width: "100%", maxWidth: "420px", transition: "all 0.3s" }}>
        {status === "done" ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>✦</div>
            <h1 style={{ color: "white", fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}>You're in!</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "24px" }}>Welcome to Creative OS, {name}.</p>
            <a href="/studio" style={{ display: "inline-block", padding: "14px 32px", background: "linear-gradient(90deg, #a855f7, #3b82f6)", borderRadius: "10px", color: "white", textDecoration: "none", fontWeight: 700 }}>
              Open Studio →
            </a>
          </div>
        ) : (
          <>
            <h1 style={{ color: "white", fontSize: "28px", fontWeight: 800, marginBottom: "8px" }}>Create Account</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>Start creating for free</p>
            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
            <input type="tel" placeholder="Phone (optional)" value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle} />
            <input type="text" placeholder="Location / Country" value={location} onChange={e => setLocation(e.target.value)} style={inputStyle} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ ...inputStyle, marginBottom: "20px" }} />
            <button onClick={handleSubmit} disabled={status === "loading"} style={{ width: "100%", padding: "14px", background: "linear-gradient(90deg, #a855f7, #3b82f6)", border: "none", borderRadius: "10px", color: "white", fontSize: "16px", fontWeight: 700, cursor: "pointer", opacity: status === "loading" ? 0.6 : 1, transition: "opacity 0.2s" }}>
              {status === "loading" ? "Creating account..." : "Create Free Account"}
            </button>
            {status === "error" && <p style={{ color: "#f87171", fontSize: "13px", marginTop: "12px", textAlign: "center" }}>Something went wrong. Try again.</p>}
            <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
              Already have an account? <a href="/auth/signin" style={{ color: "#a855f7" }}>Sign in</a>
            </p>
          </>
        )}
      </div>
    </main>
  );
}
