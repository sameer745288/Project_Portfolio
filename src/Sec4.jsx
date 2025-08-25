import Tech_Skill_Card from "./Tech_Skill_Card";

function Sec4(params) {
    return (
      <div className="my-[60px]">
        <div className="font-[exo-600] text-[clamp(1rem,10vw,2.5rem)] relative mb-[10px] leading-[1.1]">
          <span className="absolute text-wrap">
            My <span className="text-[#FFE9B3]">Technology</span> skillset
          </span>
          <h2 className="text-stroke text-wrap">My Technology skillset</h2>
        </div>
        <p className="font-[Jost-400] text-[clamp(.5rem,5.6vw,1.1rem)] leading-[1.625rem]">
          These are the technologies I have experience with.
        </p>
        <div className="flex overflow-auto gap-[30px] custom_scrollbar snap-mandatory">
          <Tech_Skill_Card skill_name="React" type="Library" />
          <Tech_Skill_Card skill_name="React" type="Library"/>
        </div>
      </div>
    );
}

export default Sec4