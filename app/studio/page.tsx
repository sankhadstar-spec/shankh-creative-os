"use client";

export default function Studio() {
  const tools = [
    { icon: "🎙️", title: "AI Voiceover", desc: "100+ voices, free forever", color: "#3b82f6", href: "/studio/voiceover", live: true },
    { icon: "🖼️", title: "AI Image Studio", desc: "Generate images instantly", color: "#ec4899", href: "/studio/image", live: true },
    { icon: "🎵", title: "AI Music Composer", desc: "Generate original loops", color: "#06b6d4", href: "/studio/music", live: true },
    { icon: "🎬", title: "AI Video Generator", desc: "Coming in next phase", color: "#a855f7", href: "#", live: false },
    { icon: "✂️", title: "Smart Video Editor", desc: "Coming in next phase", color: "#8b5cf6", href: "#", live: false },
    { icon: "📱", title: "Reels & Shorts Maker", desc: "Coming in next phase", color: "#f59e0b", href: "#", live: false },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a0a0a, #1a0a2e)", fontFamily: "Inter, sans-serif", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <a href="/" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "14px" }}>← Back</a>
        <h1 style={{ color: "white", fontSize: "36px", fontWeight: 900, margin: "20px 0 8px" }}>Creative Studio</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "40px" }}>Choose a tool to start creating</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {tools.map(tool => (
            <a key={tool.title} href={tool.href} style={{ textDecoration: "none", pointerEvents: tool.live ? "auto" : "none" }}>
              <div style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${tool.color}40`, borderRadius: "16px", padding: "32px", cursor: tool.live ? "pointer" : "default", opacity: tool.live ? 1 : 0.5 }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>{tool.icon}</div>
                <h3 style={{ color: tool.color, fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>{tool.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", margin: "0 0 20px" }}>{tool.desc}</p>
                <span style={{ display: "inline-block", padding: "8px 20px", background: tool.live ? tool.color : "rgba(255,255,255,0.1)", borderRadius: "8px", color: "white", fontWeight: 600, fontSize: "13px" }}>
                  {tool.live ? "Launch →" : "Coming Soon"}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
