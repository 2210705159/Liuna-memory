import React from "react";

const TimelineItem = ({ item }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>

      <div className="timeline-content">
        <span className="timeline-date">
          {item.date}
        </span>

        <h2>{item.title}</h2>

        <p>{item.text}</p>

        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="timeline-image"
          />
        )}
      </div>
    </div>
  );
};

export default TimelineItem;