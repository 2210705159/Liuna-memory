import React, {
  useEffect,
  useRef,
  useState
} from "react";

export default function StoryController() {

  const [current, setCurrent] = useState(0);

  const [playing, setPlaying] = useState(true);

  const [finished, setFinished] = useState(false);

  const timerRef = useRef(null);

  // 获取所有 section
  const getSections = () => {
    return document.querySelectorAll(".section");
  };

  // 跳转
  const scrollToSection = React.useCallback((index) => {

    const sections = getSections();

    if (!sections[index]) return;

    sections[index].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // 手机震动反馈
    if (navigator.vibrate) {
      navigator.vibrate(20);
    }

    setCurrent(index);

  }, []);

  // 下一页
  const next = () => {

    const sections = getSections();

    const isLast =
      current + 1 >= sections.length;

    // 到最后
    if (isLast) {

      setFinished(true);

      setPlaying(false);

      return;
    }

    const nextIndex = current + 1;

    scrollToSection(nextIndex);
  };

  // 上一页
  const prev = () => {

    const prevIndex =
      current - 1 <= 0
        ? 0
        : current - 1;

    scrollToSection(prevIndex);
  };

  // 自动播放
  useEffect(() => {

    if (!playing) return;

    timerRef.current = setInterval(() => {

      const sections = getSections();

      setCurrent(prevCurrent => {

        const isLast =
          prevCurrent + 1 >= sections.length;

        // 到最后停止
        if (isLast) {

          setFinished(true);

          setPlaying(false);

          return prevCurrent;
        }

        const nextIndex =
          prevCurrent + 1;

        scrollToSection(nextIndex);

        return nextIndex;
      });

    }, 8000);

    return () => clearInterval(timerRef.current);

  }, [playing, scrollToSection]);

  // 留言时暂停
  useEffect(() => {

    const pauseStory = () => {

      setPlaying(false);
    };

    window.addEventListener(
      "pause-story",
      pauseStory
    );

    return () => {

      window.removeEventListener(
        "pause-story",
        pauseStory
      );
    };

  }, []);

  return (
    <>

      <div className="story-controller">

        {/* 上一页 */}
        <button onClick={prev}>
          ⬆
        </button>

        {/* 播放暂停 */}
        <button
          onClick={() =>
            setPlaying(!playing)
          }
        >
          {playing ? "⏸" : "▶"}
        </button>

        {/* 下一页 */}
        <button onClick={next}>
          ⬇
        </button>

      </div>

      {/* 结束提示 */}
      {finished && (

        <div className="story-end">

          <h2>
            篇章暂歇
          </h2>

          <p>
            等待我的更新吧。
          </p>

        </div>
      )}

    </>
  );
}