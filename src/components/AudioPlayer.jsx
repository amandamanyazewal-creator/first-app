import { useEffect, useRef, useState } from "react";

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

/**
 * A single track row with its own native <audio> element. Playback is
 * controlled by the parent via `isActive` — only one track plays at a time
 * across the page, the same way a proper media list should behave.
 */
export default function AudioPlayer({ track, isActive, onRequestPlay }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isActive) {
      audio.play().catch(() => setHasError(true));
    } else {
      audio.pause();
      audio.currentTime = 0;
      setCurrentTime(0);
    }
  }, [isActive]);

  function handlePlayPause() {
    if (hasError) return;
    if (isActive && isPlaying) {
      audioRef.current.pause();
    } else {
      onRequestPlay(track.id);
    }
  }

  function handleSeek(e) {
    const audio = audioRef.current;
    if (!audio || !duration || hasError) return;
    const ratio = Number(e.target.value) / 100;
    audio.currentTime = ratio * duration;
    setCurrentTime(audio.currentTime);
  }

  const progressPct = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`sound-row sound-row--${track.category} ${isActive ? "is-active" : ""}`}>
      <button
        type="button"
        className="sound-row__play"
        onClick={handlePlayPause}
        disabled={hasError}
        aria-label={isActive && isPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
      >
        {isActive && isPlaying ? "❚❚" : "►"}
      </button>

      <div className="sound-row__body">
        <div className="sound-row__head">
          <span className="sound-row__title">{track.title}</span>
          <span className="sound-row__tag">{track.tag}</span>
        </div>
        <p className="sound-row__desc">{track.description}</p>

        <div className="sound-row__scrub">
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progressPct}
            onChange={handleSeek}
            disabled={!isActive || hasError}
            aria-label={`Seek ${track.title}`}
          />
          <span className="sound-row__time">
            {hasError
              ? "Audio file not found"
              : `${formatTime(currentTime)} / ${duration ? formatTime(duration) : track.duration}`}
          </span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={track.src}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}