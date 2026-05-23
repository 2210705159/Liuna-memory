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
          src="https://www.bilibili.com/video/BV1otLq6kEXP/?spm_id_from=333.1387.homepage.video_card.click"
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