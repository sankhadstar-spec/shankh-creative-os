"use client";

export default function Studio() {
  const tools = [
    { icon: "🎬", title: "AI Video Generator", desc: "Text to video in seconds", color: "#a855f7" },
    { icon: "🎙️", title: "AI Voiceover", desc: "100+ voices, any language", color: "#3b82f6" },
    { icon: "🎵", title: "AI Music Composer", desc: "Generate original music", color: "#06b6d4" },
    { icon: "✂️", title: "Smart Video Editor", desc: "Auto-cut & auto-caption", color: "#8b5cf6" },
    { icon: "🖼️", title: "AI Image Studio", desc: "Generate & upscale images", color: "#ec4899" },
    { icon: "📱", title: "Reels & Shorts Maker", desc: "Perfect for all platforms", color: "#f59e0b" },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a0a0a, #1a0a2e)", fontFamily: "Inter, sans-serif", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <a href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "14px" }}>← Back</a>
        <h1 style={{ color: "white", fontSize: "36px", fontWeight: 900, margin: "20px 0 8px" }}>Creative Studio</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "40px" }}>Choose a tool to start creating</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {tools.map(tool => (
            <div key={tool.title} style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${tool.color}40`, borderRadius: "16px", padding: "32px", cursor: "pointer" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>{tool.icon}</div>
              <h3 style={{ color: tool.color, fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>{tool.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", margin: "0 0 20px" }}>{tool.desc}</p>
              <button style={{ padding: "10px 24px", background: tool.color, border: "none", borderRadius: "8px", color: "white", fontWeight: 600, cursor: "pointer" }}>
                Launch →
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
