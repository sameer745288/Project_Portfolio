import Nav from "./Nav"
import Hero from "./Hero"
import Social from "./Social"

function Sec1(params) {
    return (
        <div className="w-full min-h-svh grid grid-rows-[auto_1fr_auto] items-center py-[clamp(2px,2vw,20px)] xl:grid-cols-2 xl:pt-[clamp(2px,2vw,50px)]">
          <Nav/>
          <Hero/>
          <Social/>
        </div>
    )
}
export default Sec1