import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import AudioPlayer from "../components/AudioPlayer.jsx";
import { soundCategories, soundTracks } from "../data/soundData.js";
import "../styles/sound.css";

export default function SoundGallery() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? soundTracks
        : soundTracks.filter((t) => t.category === filter),
    [filter]
  );

  return (
    <>
      <div className="page-head container">
        <span className="eyebrow">TABLE: sounds</span>
        <h1>Sound gallery</h1>
        <p className="lede">
          Short audio clips — introductions, project walkthroughs, and support
          recordings. Only one plays at a time.
        </p>
      </div>

      <section className="section section--tight section--paper">
        <div className="container">
          <SectionTitle
            tag="Browse"
            title="Listen"
            lede="Replace these placeholder tracks with real audio files in public/audio."
          />

          <div
            className="sound-filters"
            role="tablist"
            aria-label="Filter sounds by category"
          >
            {soundCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={filter === cat.id}
                className={filter === cat.id ? "is-active" : ""}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="sound-list">
            {filtered.map((track) => (
              <AudioPlayer
                key={track.id}
                track={track}
                isActive={activeId === track.id}
                onRequestPlay={setActiveId}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
