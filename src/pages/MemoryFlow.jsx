import React from "react";

import memoryData from "../data/memoryData";

import MemorySection from "../components/MemorySection";

import "../styles/memory.css";

const MemoryFlow = () => {

  return (
   <div className="page-bg">

  <div className="phone-container">

    {/* 视频背景 */}
    <video
      className="global-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source
        src="/videos/bg.mp4"
        type="video/mp4"
      />
    </video>

    {/* 粉色遮罩 */}
    <div className="video-mask"></div>

    {/* 内容 */}
    <div className="memory-flow">

      {
        memoryData.map((item, index) => (
          <MemorySection
            key={index}
            item={item}
          />
        ))
      }

    </div>

  </div>

</div>
  );
};

export default MemoryFlow;