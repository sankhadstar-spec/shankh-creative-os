"use client";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a0a0a, #1a0a2e)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, sans-serif" }}>
      <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "48px", width: "100%", maxWidth: "420px" }}>
        <h1 style={{ color: "white", fontSize: "28px", fontWeight: 800, marginBottom: "8px" }}>Welcome back</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>Sign in to your Creative OS</p>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", padding: "14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px", color: "white", fontSize: "15px", marginBottom: "12px", boxSizing: "border-box" }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
          style={{ width: "100%", padding: "14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px", color: "white", fontSize: "15px", marginBottom: "20px", boxSizing: "border-box" }} />
        <button style={{ width: "100%", padding: "14px", background: "linear-gradient(90deg, #a855f7, #3b82f6)", border: "none", borderRadius: "10px", color: "white", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
          Sign In
        </button>
        <p style={{ color: "rgba(255,255,255,0.4)", textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
          No account? <a href="/auth/signup" style={{ color: "#a855f7" }}>Sign up free</a>
        </p>
      </div>
    </main>
  );
}
