import React, { useEffect } from "react";
import "./Top.scss";

export default function Top() {

  function TopEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    const topButton = document.getElementById("topButton");

    if (!topButton) return;

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.visibility = "visible";
    } else {
      topButton.style.visibility = "hidden";
    }
  }

  useEffect(() => {
    window.onscroll = scrollFunction;

    window.onload = scrollFunction;

    return () => {
      window.onscroll = null;
      window.onload = null;
    };
  }, []);

  return (
    <button
      onClick={TopEvent}
      id="topButton"
      title="Go to top"
    >
      <i
        className="fas fa-hand-point-up"
        aria-hidden="true"
      ></i>
    </button>
  );
}