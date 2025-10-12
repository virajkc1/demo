import { useState, useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

const AudioPlayer = ({ audioUrl, title = "Audio Clip" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!audioUrl) {
    return (
      <div className="audio-player no-audio">
        <div className="audio-info">
          <FaVolumeUp className="audio-icon" />
          <span>No audio available</span>
        </div>
      </div>
    );
  }

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />

      <div className="audio-controls">
        <button
          className="play-button"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <div className="audio-info">
          <span className="audio-title">{title}</span>
          <div className="audio-time">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>

      <div className="audio-progress">
        <div
          className="audio-progress-bar"
          style={{
            width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%",
          }}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
