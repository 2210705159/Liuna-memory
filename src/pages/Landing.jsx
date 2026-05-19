import React from "react";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing-page">

      {/* 视频背景 */}
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://gzyyqxuuzfhrsvushisi.supabase.co/storage/v1/object/public/memory/videos/bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* 遮罩层 */}
      <div className="video-overlay"></div>

      {/* 文字内容 */}
      <div className="landing-content">

        <h1>2022 → 2026</h1>

        <p>
          这是我大学四年的一些碎片。
        </p>

        <span>
          向下滚动开始
        </span>

      </div>

    </div>
  );
}