import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import Sec5 from "./Sec5";

function App() {
  return (
    <div className="xl:flex xl:flex-col xl:items-center bg-blend-overlay overflow-hidden" style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAACNJREFUKBVjYCAN/GciTT0Dw6gGYkJsEIYSI9Dd/4lxO0wNAGI0AhSoZQnrAAAAAElFTkSuQmCC")`,
        backgroundSize: "12px 12px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}>
      <div
      className="min-w-[320px] w-full px-[clamp(25px,6vw,40px)] pb-[.5px] overflow-hidden md:px-[clamp(25px,6vw,60px)] max-w-[1600px] xl:overflow-visible"
    >
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
    </div>
    </div>
  );
}

export default App;
