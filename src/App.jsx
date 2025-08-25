import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import Sec5 from "./Sec5";

function App() {
  return (
    <div
      className="min-w-[320px] px-[clamp(25px,6vw,40px)] pb-[.5px] bg-blend-overlay overflow-hidden md:px-[clamp(25px,6vw,60px)]"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAACNJREFUKBVjYCAN/GciTT0Dw6gGYkJsEIYSI9Dd/4lxO0wNAGI0AhSoZQnrAAAAAElFTkSuQmCC")`,
        backgroundSize: "12px 12px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
    </div>
  );
}

export default App;
