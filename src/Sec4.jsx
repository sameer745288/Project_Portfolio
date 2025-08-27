import Tech_Skill_Card from "./Tech_Skill_Card";

function Sec4(params) {
    return (
      <div className="my-[60px] flex flex-col w-full md:items-center">
        <div className="font-[exo-600] text-[clamp(2.1rem,9vw,3rem)] relative mb-[10px] leading-[1.1]">
          <span className="absolute text-wrap">
            My <span className="text-[#FFE9B3]">Technology</span> skillset
          </span>
          <h2 className="text-stroke text-wrap">My Technology skillset</h2>
        </div>
        <p className="font-[Jost-400] text-[clamp(1rem,5vw,1.2rem)] leading-[1.6rem]">
          These are the technologies I have experience with.
        </p>
        <div className="flex overflow-auto gap-[30px] custom_scrollbar w-full md:justify-center">
          <Tech_Skill_Card skill_name="React" type="Library" />
          <Tech_Skill_Card skill_name="React" type="Library"/>
        </div>
      </div>
    );
}

export default Sec4