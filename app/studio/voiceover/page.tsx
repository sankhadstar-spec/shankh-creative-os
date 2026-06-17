"use client";
import { useEffect, useState } from "react";

export default function VoiceoverStudio() {
  const [text, setText] = useState("Welcome to Shankh Creative OS. Your voice, instantly generated, completely free.");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    const load = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length) setVoices(v);
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
  }, []);

  const speak = () => {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    if (voices[voiceIndex]) utter.voice = voices[voiceIndex];
    utter.rate = rate;
    utter.pitch = pitch;
    utter.onstart = () => setSpeaking(true);
    utter.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utter);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a0a0a, #1a0a2e)", fontFamily: "Inter, sans-serif", padding: "40px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <a href="/studio" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "14px" }}>← Back to Studio</a>
        <h1 style={{ color: "white", fontSize: "32px", fontWeight: 900, margin: "20px 0 8px" }}>🎙️ AI Voiceover</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>Free, unlimited, studio-quality narration — runs right in your browser.</p>

        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "28px" }}>
          <textarea value={text} onChange={e => setText(e.target.value)} rows={5}
            style={{ width: "100%", padding: "14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px", color: "white", fontSize: "15px", resize: "vertical", boxSizing: "border-box", marginBottom: "20px" }} />

          <label style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>Voice</label>
          <select value={voiceIndex} onChange={e => setVoiceIndex(Number(e.target.value))}
            style={{ width: "100%", padding: "12px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "10px", color: "white", marginTop: "6px", marginBottom: "20px" }}>
            {voices.map((v, i) => <option key={i} value={i}>{v.name} ({v.lang})</option>)}
          </select>

          <div style={{ display: "flex", gap: "20px", marginBottom: "24px" }}>
            <div style={{ flex: 1 }}>
              <label style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>Speed: {rate.toFixed(1)}x</label>
              <input type="range" min="0.5" max="2" step="0.1" value={rate} onChange={e => setRate(Number(e.target.value))} style={{ width: "100%" }} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>Pitch: {pitch.toFixed(1)}</label>
              <input type="range" min="0.5" max="2" step="0.1" value={pitch} onChange={e => setPitch(Number(e.target.value))} style={{ width: "100%" }} />
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={speak} disabled={speaking}
              style={{ flex: 1, padding: "14px", background: "linear-gradient(90deg, #3b82f6, #06b6d4)", border: "none", borderRadius: "10px", color: "white", fontWeight: 700, cursor: "pointer", opacity: speaking ? 0.6 : 1 }}>
              {speaking ? "Speaking..." : "▶ Generate & Play"}
            </button>
            <button onClick={stop} style={{ padding: "14px 24px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "10px", color: "white", cursor: "pointer" }}>
              ■ Stop
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
