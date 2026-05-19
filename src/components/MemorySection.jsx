import React, { useEffect, useRef, useState } from "react";

const MemorySection = ({ item }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  // 🎧 防抖（稳定版）
  const lastTimeRef = useRef(0);

  const playClickSound = () => {
    const now = Date.now();

    if (now - lastTimeRef.current < 200) return;

    lastTimeRef.current = now;

    const audio = new Audio("https://gzyyqxuuzfhrsvushisi.supabase.co/storage/v1/object/public/memory/music/click.mp3");
    audio.volume = 0.6;
    audio.play();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 🌸 主内容 */}
      <section className="memory-section">

        <div
          ref={ref}
          className={`memory-inner ${show ? "show" : ""}`}
        >

          {/* 🎥 视频 */}
          {item.video && (
            <video
              className="memory-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={item.video} type="video/mp4" />
            </video>
          )}

          {/* 🖼 图片（可点击 + 音效 + 放大） */}
          {item.image && (
            <img
              src={item.image}
              alt="memory"
              className="memory-image clickable"
              onClick={() => {
                playClickSound(); // 🎧 点击音效
                setOpen(true);    // 🔍 打开放大
              }}
            />
          )}

          {/* 📝 文本 */}
          <div className="memory-content">

            {item.time && (
              <span className="memory-time">{item.time}</span>
            )}

            {item.title && (
              <h2 className="memory-title">{item.title}</h2>
            )}

            {item.text && (
              <p className="memory-text">{item.text}</p>
            )}

          </div>

        </div>
      </section>

      {/* 🌸 放大查看层 */}
      {open && item.image && (
        <div
          className="lightbox"
          onClick={() => setOpen(false)}
        >

          <img
            src={item.image}
            alt="preview"
            className="lightbox-img"
          />

        </div>
      )}
    </>
  );
};

export default MemorySection;