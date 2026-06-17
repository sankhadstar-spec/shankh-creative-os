"use client";
import { useRef, useState } from "react";

const MOODS = {
  chill: { chords: ["Cmaj7", "Am7", "Fmaj7", "G7"], bpm: 80 },
  upbeat: { chords: ["G", "D", "Em", "C"], bpm: 128 },
  dark: { chords: ["Cm", "Ab", "Eb", "Bb"], bpm: 90 },
  epic: { chords: ["Dm", "Bb", "F", "C"], bpm: 110 },
};

const NOTES: Record<string, string[]> = {
  Cmaj7: ["C4", "E4", "G4", "B4"], Am7: ["A3", "C4", "E4", "G4"],
  Fmaj7: ["F3", "A3", "C4", "E4"], G7: ["G3", "B3", "D4", "F4"],
  G: ["G3", "B3", "D4"], D: ["D4", "F#4", "A4"], Em: ["E4", "G4", "B4"], C: ["C4", "E4", "G4"],
  Cm: ["C4", "D#4", "G4"], Ab: ["G#3", "C4", "D#4"], Eb: ["D#4", "G4", "A#4"], Bb: ["A#3", "D4", "F4"],
  Dm: ["D4", "F4", "A4"], F: ["F3", "A3", "C4"],
};

export default function MusicStudio() {
  const [mood, setMood] = useState<keyof typeof MOODS>("chill");
  const [playing, setPlaying] = useState(false);
  const refs = useRef<any>({});

  const stop = () => {
    const r = refs.current;
    if (r.Tone) {
      r.Tone.Transport.stop();
      r.Tone.Transport.cancel();
      r.seq?.dispose();
      r.synth?.dispose();
    }
    setPlaying(false);
  };

  const play = async () => {
    stop();
    const Tone = await import("tone");
    await Tone.start();
    Tone.Transport.bpm.value = MOODS[mood].bpm;
    const synth = new Tone.PolySynth(Tone.Synth, { volume: -8 }).toDestination();
    const chordNotes = MOODS[mood].chords.map(c => NOTES[c] || ["C4", "E4", "G4"]);
    const seq = new Tone.Sequence((time: number, notes: string[]) => {
      synth.triggerAttackRelease(notes, "2n", time);
    }, chordNotes, "1n").start(0);
    Tone.Transport.start();
    refs.current = { Tone, seq, synth };
    setPlaying(true);
  };

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a0a0a, #1a0a2e)", fontFamily: "Inter, sans-serif", padding: "40px" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <a href="/studio" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "14px" }}>← Back to Studio</a>
        <h1 style={{ color: "white", fontSize: "32px", fontWeight: 900, margin: "20px 0 8px" }}>🎵 AI Music Composer</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>Generate original ambient loops, free forever, right in your browser.</p>

        <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }}>
            {(Object.keys(MOODS) as (keyof typeof MOODS)[]).map(m => (
              <button key={m} onClick={() => setMood(m)}
                style={{ padding: "16px", borderRadius: "10px", border: mood === m ? "1px solid #06b6d4" : "1px solid rgba(255,255,255,0.15)", background: mood === m ? "rgba(6,182,212,0.15)" : "transparent", color: "white", cursor: "pointer", textTransform: "capitalize", fontWeight: 600 }}>
                {m}
              </button>
            ))}
          </div>

          <button onClick={playing ? stop : play}
            style={{ width: "100%", padding: "16px", background: playing ? "rgba(255,255,255,0.1)" : "linear-gradient(90deg, #06b6d4, #3b82f6)", border: playing ? "1px solid rgba(255,255,255,0.2)" : "none", borderRadius: "10px", color: "white", fontWeight: 700, cursor: "pointer" }}>
            {playing ? "■ Stop" : "▶ Generate & Play Loop"}
          </button>
        </div>
      </div>
    </main>
  );
}
