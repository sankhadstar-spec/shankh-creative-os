"use client";
import { useState } from "react";

export default function ImageStudio() {
  const [prompt, setPrompt] = useState("a futuristic creator studio, neon purple lighting, cinematic");
  const [ratio, setRatio] = useState<"square" | "portrait" | "landscape">("square");
  const [images, setImages] = useState<string[]>([]);

  const dims: Record<string, [number, number]> = { square: [1024, 1024], portrait: [768, 1024], landscape: [1024, 768] };

  const generate = () => {
    const [w, h] = dims[ratio];
    const seed = Math.floor(Math.random() * 100000);
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${w}&height=${h}&nologo=true&seed=${seed}`;
    setImages(prev => [url, ...prev]);
  };

  const download = async (url: string) => {
    const res = await fetch(url);
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "shankh-creative-os.png";
    link.click();
  };

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a0a0a, #1a0a2e)", fontFamily: "Inter, sans-serif", padding: "40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <a href="/studio" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "14px" }}>← Back to Studio</a>
        <h1 style={{ color: "white", fontSize: "32px", fontWeight: 900, margin: "20px 0 8px" }}>🖼️ AI Image Studio</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>Free, unlimited image generation. No watermark, no signup.</p>

        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "28px", marginBottom: "32px" }}>
          <textarea value={prompt} onChange={e => setPrompt(e.target.value)} rows={3}
            style={{ width: "100%", padding: "14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px", color: "white", fontSize: "15px", resize: "vertical", boxSizing: "border-box", marginBottom: "16px" }} />
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            {(["square", "portrait", "landscape"] as const).map(r => (
              <button key={r} onClick={() => setRatio(r)}
                style={{ padding: "8px 18px", borderRadius: "8px", border: ratio === r ? "1px solid #a855f7" : "1px solid rgba(255,255,255,0.15)", background: ratio === r ? "rgba(168,85,247,0.2)" : "transparent", color: "white", cursor: "pointer", fontSize: "13px" }}>
                {r}
              </button>
            ))}
          </div>
          <button onClick={generate}
            style={{ width: "100%", padding: "14px", background: "linear-gradient(90deg, #ec4899, #a855f7)", border: "none", borderRadius: "10px", color: "white", fontWeight: 700, cursor: "pointer" }}>
            ✨ Generate Image
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
          {images.map((url) => (
            <div key={url} style={{ position: "relative", borderRadius: "12px", overflow: "hidden", background: "rgba(255,255,255,0.05)" }}>
              <img src={url} alt="" style={{ width: "100%", display: "block" }} />
              <button onClick={() => download(url)}
                style={{ position: "absolute", bottom: "10px", right: "10px", padding: "6px 14px", background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "8px", color: "white", fontSize: "12px", cursor: "pointer" }}>
                ⬇ Save
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
