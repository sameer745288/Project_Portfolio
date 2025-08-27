import Used_tech from "./Used_tech";
import Project_preview from "./assets/Imgs/Project_Preview.jpg";

function Projects_card(params) {
    return (
      <div className="w-full max-w-[450px] bg-[#FFE9B3] p-[clamp(20px,4vw,28px)] border rounded-[16px] mt-[25px] shrink-0 snap-x my-[20px]">
        <div className="aspect-230/120 w-full mb-[20px] overflow-auto rounded-[11px] border">
          <img
            src={Project_preview}
            alt="Project_Preview"
            srcset=""
            className="w-full"
          />
        </div>
        <div>
          <h3 className="mb-[8px] font-[exo-600] text-[clamp(1.5rem,7vw,1.9rem)]">
            Printverse.in
          </h3>
          <p className="text-[clamp(.6rem,5vw,1.1rem)] font-[Jost-400]">
            A clean, custom-designed landing page for a 3D printing store,
            focused on brand introduction and product highlights with smooth
            user experience.
          </p>
        </div>
        <div>
          <h4 className="mt-[12px] mb-[10px] font-[exo-600] text-[clamp(1.5rem,7vw,1.9rem)]">
            Tech Used:
          </h4>
          <div className="flex flex-wrap gap-[15px] max-w-full">
            <Used_tech tech_name="JavaScript" />
            <Used_tech tech_name="CSS" />
            <Used_tech tech_name="React" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-[8px] mt-[20px]">
          <div className="bg-black aspect-105/34 h-[clamp(34px,11vw,45px)] border-white border-[2px] rounded-[10px] shrink-0 relative">
            <div className="absolute transform -translate-1/2 top-1/2 left-1/2 flex items-center justify-center gap-[9px]">
              <svg
                className="w-[clamp(15px,4vw,22px)] shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 13"
                fill="none"
              >
                <path
                  d="M6.66668 0C2.98333 0 0 2.98333 0 6.66667C0 9.61667 1.90833 12.1083 4.55833 12.9917C4.89167 13.05 5.01667 12.85 5.01667 12.675C5.01667 12.5167 5.00833 11.9917 5.00833 11.4333C3.33333 11.7417 2.9 11.025 2.76667 10.65C2.69167 10.4583 2.36667 9.86667 2.08333 9.70833C1.85 9.58333 1.51667 9.275 2.075 9.26667C2.6 9.25833 2.975 9.75 3.1 9.95C3.7 10.9583 4.65833 10.675 5.04167 10.5C5.1 10.0667 5.275 9.775 5.46668 9.60833C3.98333 9.44167 2.43333 8.86667 2.43333 6.31667C2.43333 5.59167 2.69167 4.99167 3.11667 4.525C3.05 4.35833 2.81667 3.675 3.18333 2.75833C3.18333 2.75833 3.74167 2.58333 5.01667 3.44167C5.55001 3.29167 6.11668 3.21667 6.68335 3.21667C7.25001 3.21667 7.81668 3.29167 8.35001 3.44167C9.62501 2.575 10.1833 2.75833 10.1833 2.75833C10.55 3.675 10.3167 4.35833 10.25 4.525C10.675 4.99167 10.9333 5.58333 10.9333 6.31667C10.9333 8.875 9.37501 9.44167 7.89168 9.60833C8.13335 9.81667 8.34168 10.2167 8.34168 10.8417C8.34168 11.7333 8.33335 12.45 8.33335 12.675C8.33335 12.85 8.45835 13.0583 8.79168 12.9917C11.5053 12.0755 13.3326 9.53087 13.3333 6.66667C13.3333 2.98333 10.35 0 6.66668 0Z"
                  fill="white"
                />
              </svg>
              <p className="text-white font-[Jost-500] text-[.8rem] shrink-0">
                On Github
              </p>
            </div>
          </div>
          <div className="bg-black aspect-105/34 h-[clamp(34px,11vw,45px)] border-white border-[2px] rounded-[10px] shrink-0 relative">
            <div className="absolute transform -translate-1/2 top-1/2 left-1/2 flex items-center justify-center gap-[9px]">
              <svg
                className="w-[clamp(15px,4vw,22px)] shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 12"
                fill="none"
              >
                <path
                  d="M0 0.662267C0 0.296507 0.30354 0 0.6612 0H12.6721C13.0373 0 13.3333 0.296633 13.3333 0.662267V11.3377C13.3333 11.7035 13.0298 12 12.6721 12H0.6612C0.296033 12 0 11.7034 0 11.3377V0.662267ZM6.66667 1.33333V10.6667H12V1.33333H6.66667ZM7.33333 2.66667H11.3333V4H7.33333V2.66667ZM7.33333 4.66667H11.3333V6H7.33333V4.66667Z"
                  fill="white"
                />
              </svg>
              <p className="text-white font-[Jost-500] text-[.8rem] shrink-0">
                Read More
              </p>
            </div>
          </div>
          <div className="bg-black aspect-105/34 h-[clamp(34px,11vw,45px)] border-white border-[2px] rounded-[10px] shrink-0 relative">
            <div className="absolute transform -translate-1/2 top-1/2 left-1/2 flex items-center justify-center gap-[9px]">
              <svg
                className="w-[clamp(10px,2.6vw,20px)] shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  d="M8.00278 3.06066L1.54784 9.5156L0.487183 8.45495L6.94213 2H1.2528V0.5H9.50278V8.75H8.00278V3.06066Z"
                  fill="white"
                />
              </svg>
              <p className="text-white font-[Jost-500] text-[.8rem] shrink-0">
                Live Demo
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Projects_card