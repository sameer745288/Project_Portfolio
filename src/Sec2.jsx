import Projects_card from "./Pojects_card";

function Sec2(params) {
    return (
      <div className="w-full flex flex-col md:items-center">
        <p className="text-[clamp(1.8rem,10vw,6rem)] font-[exo-600] leading-[1.3] my-[80px] md:text-center">
          Building{" "}
          <span className=" relative before:absolute before:content-[''] before:w-full before:h-[clamp(6px,2vw,10px)] before:bg-[#FFE9B3] before:bottom-0 before:translate-y-1 before:rounded-[clamp(1px,.5vw,2.5px)] before:border">
            beautiful
          </span>{" "}
          websites with love
        </p>
        <div className="flex flex-col md:items-center">
          <div className="font-[exo-600] text-[clamp(2.1rem,9vw,3rem)] relative mb-[10px] leading-[1.1]">
            <span className="absolute">
              My <span className="text-[#FFE9B3]">Projects</span>
            </span>
            <h2 className="text-stroke">My Projects</h2>
          </div>
          <p className="font-[Jost-400] text-[clamp(1rem,5vw,1.2rem)] leading-[1.6] md:text-center">
            Some of the most interesting projects that I made. Feel free to
            explore my Github for more projects.
          </p>
          <div className="flex overflow-auto gap-[30px] custom_scrollbar">
            <Projects_card />
            <Projects_card />
          </div>
        </div>
      </div>
    );
}

export default Sec2