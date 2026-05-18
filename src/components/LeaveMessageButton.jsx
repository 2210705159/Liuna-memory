import React from "react";

const LeaveMessageButton = () => {

  const scrollToMessage = () => {

    const target =
      document.getElementById(
        "message-board"
      );

    if (target) {

      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (

    <div
      className="leave-message-btn"
      onClick={scrollToMessage}
    >
      💌 留言
    </div>
  );
};

export default LeaveMessageButton;