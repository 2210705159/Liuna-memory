import React, { useEffect, useRef, useState } from "react";

const BGM = () => {
  const audioRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  // 🌸 渐入播放
  const fadeIn = (audio) => {
    audio.volume = 0;
    audio.play();

    let volume = 0;
    const step = 0.02;

    const timer = setInterval(() => {
      volume += step;

      if (volume >= 1) {
        volume = 1;
        clearInterval(timer);
      }

      audio.volume = volume;
    }, 80);
  };

  // 🎧 首次点击播放
  useEffect(() => {
    const handleFirstClick = () => {
      const audio = audioRef.current;

      if (audio && !started) {
        fadeIn(audio);
        setStarted(true);
      }
    };

    window.addEventListener("click", handleFirstClick);

    return () => {
      window.removeEventListener("click", handleFirstClick);
    };
  }, [started]);

  // 🔇 静音切换
  const toggleMute = (e) => {
    e.stopPropagation(); // 防止触发播放逻辑

    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !muted;
    setMuted(!muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/bg.mp3"
        loop
        preload="auto"
      />

      {/* 🎧 控制按钮 */}
      <div className="music-control" onClick={toggleMute}>
        {muted ? "🔇" : "🎧"}
      </div>
    </>
  );
};

export default BGM;