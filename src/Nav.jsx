function Nav(params) {
    return (
      <div className="w-full flex items-center place-content-between pt-[25px]">
        <p className="font-[Jost-500] text-[clamp(1rem,5vw,1.8rem)] md:text-[clamp(1rem,3vw,1.8rem)]">Web Developer And Linux Enthusiast</p>
        <div className="ml-[30px] size-[clamp(45px,13vw,50px)] bg-[#FFE9B3] shrink-0 rounded-[10px] border relative md:size-[clamp(45px,8vw,70px)] md:rounded-[12px]">
          <svg className="transform -translate-1/2 absolute top-1/2 left-1/2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 20"
            fill="none"
          >
            <g filter="url(#filter0_d_21_49)">
              <path
                d="M14.4444 16.1667V18.3889H2.22222V16.1667H14.4444ZM20 8.38889V10.6111H0V8.38889H20ZM17.7778 0.611115V2.83334H5.55556V0.611115H17.7778Z"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_21_49"
                x="0"
                y="0.611115"
                width="22"
                height="18.7778"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="2" dy="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_21_49"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_21_49"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    );
}

export default Nav