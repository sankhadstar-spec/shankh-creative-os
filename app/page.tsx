"use client";
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a1628 100%)",
      color: "white",
      fontFamily: "'Inter', sans-serif",
      padding: "0",
    }}>
      {/* NAV */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 40px", borderBottom: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 100,
        background: "rgba(0,0,0,0.5)"
      }}>
        <div style={{ fontSize: "22px", fontWeight: 800, background: "linear-gradient(90deg, #a855f7, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          ✦ SHANKH Creative OS
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <a href="/auth/signin" style={{ padding: "8px 20px", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "8px", color: "white", textDecoration: "none", fontSize: "14px" }}>Sign In</a>
          <a href="/auth/signup" style={{ padding: "8px 20px", background: "linear-gradient(90deg, #a855f7, #3b82f6)", borderRadius: "8px", color: "white", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>Get Started Free</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "100px 40px 60px" }}>
        <div style={{ display: "inline-block", padding: "6px 16px", background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.4)", borderRadius: "20px", fontSize: "13px", color: "#a855f7", marginBottom: "24px" }}>
          🎬 Free for Creators · No Watermark · AI-Powered
        </div>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 24px", background: "linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Create. Edit. Publish.<br />All with AI.
        </h1>
        <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.6 }}>
          Your all-in-one creative studio. Generate videos, voiceovers, music, and visuals — powered by AI. Free forever.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/studio" style={{ padding: "16px 36px", background: "linear-gradient(90deg, #a855f7, #3b82f6)", borderRadius: "12px", color: "white", textDecoration: "none", fontSize: "18px", fontWeight: 700, boxShadow: "0 0 40px rgba(168,85,247,0.4)" }}>
            Open Studio →
          </a>
          <a href="/explore" style={{ padding: "16px 36px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "12px", color: "white", textDecoration: "none", fontSize: "18px" }}>
            See Examples
          </a>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section style={{ padding: "60px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", fontWeight: 800, marginBottom: "12px" }}>Everything a Creator Needs</h2>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: "48px" }}>No subscriptions. No watermarks. Just create.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {[
            { icon: "🎬", title: "AI Video Generator", desc: "Turn text prompts into stunning videos in seconds. CapCut killer.", color: "#a855f7" },
            { icon: "🎙️", title: "AI Voiceover", desc: "100+ voices, any language. Studio-quality narration instantly.", color: "#3b82f6" },
            { icon: "🎵", title: "AI Music Composer", desc: "Generate original background music for any mood or genre.", color: "#06b6d4" },
            { icon: "✂️", title: "Smart Video Editor", desc: "Auto-cut, auto-caption, auto-enhance. Edit like a pro effortlessly.", color: "#8b5cf6" },
            { icon: "🖼️", title: "AI Image Studio", desc: "Generate, edit, and upscale images with a single prompt.", color: "#ec4899" },
            { icon: "📱", title: "Reels & Shorts Maker", desc: "Export perfectly sized for Instagram, YouTube Shorts & TikTok.", color: "#f59e0b" },
          ].map((tool) => (
            <div key={tool.title} style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px", padding: "28px", cursor: "pointer",
              transition: "all 0.2s", position: "relative", overflow: "hidden"
            }}
              onMouseEnter={e => (e.currentTarget.style.border = `1px solid ${tool.color}`)}
              onMouseLeave={e => (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)")}
            >
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>{tool.icon}</div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: tool.color }}>{tool.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ margin: "40px auto 80px", maxWidth: "900px", padding: "60px 40px", background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(59,130,246,0.2))", border: "1px solid rgba(168,85,247,0.3)", borderRadius: "24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px", fontWeight: 900, marginBottom: "16px" }}>Start Creating Today</h2>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "18px", marginBottom: "32px" }}>Free forever. No credit card. Just your creativity.</p>
        <a href="/auth/signup" style={{ padding: "18px 48px", background: "linear-gradient(90deg, #a855f7, #3b82f6)", borderRadius: "12px", color: "white", textDecoration: "none", fontSize: "20px", fontWeight: 800 }}>
          Create Free Account →
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "24px 40px", textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>
        © 2026 SHANKH Creative OS · Built by 515 Publications
      </footer>
    </main>
  );
}
