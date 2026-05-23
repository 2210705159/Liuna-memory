// import Landing from "./pages/Landing";
// import Timeline from "./pages/Timeline";

// function App() {
//   return (
//     <>
//       <Landing />
//       <Timeline />
//     </>
//   );
// }

// export default App;
import MemoryFlow from "./pages/MemoryFlow";
import BGM from "./components/BGM";
import MessageBoard from "./components/MessageBoard";
import LeaveMessageButton from "./components/LeaveMessageButton";
// import StoryController from "./components/StoryController";
function App() {
  return (
    <>
      <div className="music-tip">点击任意位置开启背景音乐 🎧</div>
      <BGM />
      {/* <StoryController /> */}
      <LeaveMessageButton />
      <MemoryFlow />
      <MessageBoard />
      
    </>
  );
}

export default App;