import React from "react";
import timelineData from "../data/timelineData";
import TimelineItem from "../components/TimelineItem";

import "../styles/timeline.css";

const Timeline = () => {
  return (
    <div className="timeline-page">

      <div className="timeline-header">
        <h1>2022 → 2026</h1>

        <p>
          这是我大学四年的一些碎片。
        </p>
      </div>

      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;