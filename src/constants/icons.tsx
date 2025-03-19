import { ComponentProps } from 'react';

export const Cross = (props: ComponentProps<'svg'>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
    </g>
  </svg>
);

export const Check = (props: ComponentProps<'svg'>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z"></path>
    </g>
  </svg>
);

export const Dot = (props: ComponentProps<'svg'>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"></path>
    </g>
  </svg>
);

export const Phone = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
);

export const Location = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export const Calendar = (props: ComponentProps<'svg'>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path>
    </g>
  </svg>
);

export const Bag = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="currentColor"
    role="img"
  >
    <title />
    <g data-name="briefcase simple" id="briefcase_simple">
      <path d="M20,5H17V4a3,3,0,0,0-3-3H10A3,3,0,0,0,7,4V5H4A3,3,0,0,0,1,8V20a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5ZM9,4a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V5H9ZM4,7H20c2.28,0,.65,6-4,6H13a1,1,0,0,0-2,0H8C3.36,13,1.72,7,4,7ZM20,21H4a1,1,0,0,1-1-1V12.89C5.4,15.34,7.86,15,11,15a1,1,0,0,0,2,0c3.17,0,5.61.33,8-2.11V20A1,1,0,0,1,20,21Z" />
    </g>
  </svg>
);

export const Education = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z"></path>
    </g>
  </svg>
);

export const ArrowLeft = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M15 7L10 12L15 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);
export const ArrowRight = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M9.5 7L14.5 12L9.5 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export const Back = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 -6.5 38 38"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g
        id="icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="ui-gambling-website-lined-icnos-casinoshunter"
          transform="translate(-1641.000000, -158.000000)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <g id="1" transform="translate(1350.000000, 120.000000)">
            <path
              d="M317.812138,38.5802109 L328.325224,49.0042713 L328.41312,49.0858421 C328.764883,49.4346574 328.96954,49.8946897 329,50.4382227 L328.998248,50.6209428 C328.97273,51.0514917 328.80819,51.4628128 328.48394,51.8313977 L328.36126,51.9580208 L317.812138,62.4197891 C317.031988,63.1934036 315.770571,63.1934036 314.990421,62.4197891 C314.205605,61.6415481 314.205605,60.3762573 314.990358,59.5980789 L322.274264,52.3739093 L292.99947,52.3746291 C291.897068,52.3746291 291,51.4850764 291,50.3835318 C291,49.2819872 291.897068,48.3924345 292.999445,48.3924345 L322.039203,48.3917152 L314.990421,41.4019837 C314.205605,40.6237427 314.205605,39.3584519 314.990421,38.5802109 C315.770571,37.8065964 317.031988,37.8065964 317.812138,38.5802109 Z"
              id="left-arrow"
              transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const Search = (props: ComponentProps<'svg'>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M29.156 29.961l-0.709 0.709c-0.785 0.784-2.055 0.784-2.838 0l-5.676-5.674c-0.656-0.658-0.729-1.644-0.281-2.412l-3.104-3.102c-1.669 1.238-3.728 1.979-5.965 1.979-5.54 0-10.031-4.491-10.031-10.031s4.491-10.032 10.031-10.032c5.541 0 10.031 4.491 10.031 10.032 0 2.579-0.98 4.923-2.58 6.7l3.035 3.035c0.768-0.447 1.754-0.375 2.41 0.283l5.676 5.674c0.784 0.785 0.784 2.056 0.001 2.839zM18.088 11.389c0-4.155-3.369-7.523-7.524-7.523s-7.524 3.367-7.524 7.523 3.368 7.523 7.523 7.523 7.525-3.368 7.525-7.523z"></path>
    </g>
  </svg>
);

export const Filter = (props: ComponentProps<'svg'>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 36 36"
    version="1.1"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        className="clr-i-outline clr-i-outline-path-1"
        d="M33,4H3A1,1,0,0,0,2,5V6.67a1.79,1.79,0,0,0,.53,1.27L14,19.58v10.2l2,.76V19a1,1,0,0,0-.29-.71L4,6.59V6H32v.61L20.33,18.29A1,1,0,0,0,20,19l0,13.21L22,33V19.5L33.47,8A1.81,1.81,0,0,0,34,6.7V5A1,1,0,0,0,33,4Z"
      ></path>
      <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect>
    </g>
  </svg>
);

export const Sort = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    transform="matrix(1, 0, 0, -1, 0, 0)"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"></path>
    </g>
  </svg>
);

export const DatePicker = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
        stroke="#828282"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#828282"></rect>
      <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="#828282"></rect>
      <rect x="15" y="12" width="3" height="3" rx="0.5" fill="#828282"></rect>
    </g>
  </svg>
);

export const Slash = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 15 15"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
);

export const Collapse = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <rect
        width="48"
        height="48"
        fill="currentColor"
        fillOpacity="0.01"
      ></rect>
      <path
        d="M8 10.5H40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M24 19.5H40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M24 28.5H40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8 37.5H40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8 19L16 24L8 29V19Z"
        fill="#"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export const Notifications = (props: ComponentProps<'svg'>) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    id="notification-copy"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill="#fff"
        stroke="currentColor"
        strokeWidth={2}
        id="primary"
        d="M19.38,14.38a2.12,2.12,0,0,1,.62,1.5h0A2.12,2.12,0,0,1,17.88,18H6.12A2.12,2.12,0,0,1,4,15.88H4a2.12,2.12,0,0,1,.62-1.5L6,13V9a6,6,0,0,1,6-6h0a6,6,0,0,1,6,6v4ZM15,18H9a3,3,0,0,0,3,3h0A3,3,0,0,0,15,18Z"
      ></path>
    </g>
  </svg>
);

export const Employee = (props: ComponentProps<'svg'>) => (
  <svg
    fill="currentColor"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g id="group">
        <path d="M24,15.9c0-2.8-1.5-5-3.7-6.1C21.3,8.8,22,7.5,22,6c0-2.8-2.2-5-5-5c-2.1,0-3.8,1.2-4.6,3c0,0,0,0,0,0c-0.1,0-0.3,0-0.4,0 c-0.1,0-0.3,0-0.4,0c0,0,0,0,0,0C10.8,2.2,9.1,1,7,1C4.2,1,2,3.2,2,6c0,1.5,0.7,2.8,1.7,3.8C1.5,10.9,0,13.2,0,15.9V20h5v3h14v-3h5 V15.9z M17,3c1.7,0,3,1.3,3,3c0,1.6-1.3,3-3,3c0-1.9-1.1-3.5-2.7-4.4c0,0,0,0,0,0C14.8,3.6,15.8,3,17,3z M13.4,4.2 C13.4,4.2,13.4,4.2,13.4,4.2C13.4,4.2,13.4,4.2,13.4,4.2z M15,9c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S15,7.3,15,9z M10.6,4.2 C10.6,4.2,10.6,4.2,10.6,4.2C10.6,4.2,10.6,4.2,10.6,4.2z M7,3c1.2,0,2.2,0.6,2.7,1.6C8.1,5.5,7,7.1,7,9C5.3,9,4,7.7,4,6S5.3,3,7,3 z M5.1,18H2v-2.1C2,13.1,4.1,11,7,11v0c0,0,0,0,0,0c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0c0.3,0.7,0.8,1.3,1.3,1.8 C6.7,13.8,5.4,15.7,5.1,18z M17,21H7v-2.1c0-2.8,2.2-4.9,5-4.9c2.9,0,5,2.1,5,4.9V21z M22,18h-3.1c-0.3-2.3-1.7-4.2-3.7-5.2 c0.6-0.5,1-1.1,1.3-1.8c0.1,0,0.2,0,0.4,0v0c2.9,0,5,2.1,5,4.9V18z"></path>
      </g>
    </g>
  </svg>
);

export const Recruitment = (props: ComponentProps<'svg'>) => (
  <svg
    fill="currentColor"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    stroke="currentColor"
    strokeWidth="5.12"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <path d="M0.214,96.347V416.08h511.573V96.347H0.214z M495.799,400.094H16.2v-31.288h192.087V353.09h-23.173 c3.014-9.8,12.15-16.943,22.925-16.943h95.92c10.775,0,19.911,7.143,22.925,16.943h-23.253v15.716h192.168V400.094z M495.8,353.09 H343.293c-3.336-18.692-19.699-32.93-39.334-32.93H208.04c-19.636,0-35.997,14.238-39.333,32.93H16.2V112.334H495.8V353.09z"></path>
        </g>
      </g>
      <g>
        <g>
          <rect x="224.008" y="353.09" width="63.912" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <path d="M255.999,136.314c-48.482,0-87.927,39.443-87.927,87.927c0,48.483,39.444,87.926,87.927,87.926 c48.482,0,87.927-39.443,87.927-87.926C343.926,175.757,304.482,136.314,255.999,136.314z M255.999,296.179 c-39.668,0-71.94-32.273-71.94-71.939c0-39.668,32.273-71.94,71.94-71.94c39.668,0,71.94,32.273,71.94,71.94 C327.94,263.907,295.667,296.179,255.999,296.179z"></path>
        </g>
      </g>
      <g>
        <g>
          <path d="M216.669,239.933v7.858h0c0,22.708,17.107,39.832,39.813,39.832c22.708,0,39.815-17.124,39.815-39.832v-7.858H216.669z M255.999,271.907c-11.185,0-19.914-6.498-22.953-16.258h45.907C275.914,265.408,267.184,271.907,255.999,271.907z"></path>
        </g>
      </g>
      <g>
        <g>
          <rect x="215.626" y="184.403" width="15.716" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="280.586" y="184.403" width="15.716" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="32.266" y="376.14" width="15.716" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="64.746" y="376.14" width="15.716" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="96.183" y="376.14" width="15.716" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="400.029" y="376.14" width="15.716" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="431.461" y="376.14" width="15.716" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="463.941" y="376.14" width="15.716" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <path d="M319.946,472.033v-47.959H303.96v47.959c0,8.989,2.984,17.296,8.011,23.981H208.019 c5.029-6.685,8.013-14.992,8.013-23.981v-47.959h-15.986v47.959c0,13.223-10.758,23.981-23.981,23.981h-7.993V512h175.853v-15.986 C330.704,496.014,319.946,485.256,319.946,472.033z"></path>
        </g>
      </g>
      <g>
        <g>
          <rect x="231.342" y="464.151" width="56.578" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="247.058" y="72.294" width="17.812" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="239.724" y="49.244" width="32.48" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="224.008" y="24.098" width="63.912" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="208.291" width="95.345" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <path d="M383.892,184.274v151.873h95.92V184.274H383.892z M463.826,320.16h-63.947v-119.9h63.947V320.16z"></path>
        </g>
      </g>
      <g>
        <g>
          <rect x="415.745" y="215.835" width="31.432" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="415.745" y="239.933" width="31.432" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="415.745" y="265.079" width="31.432" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <rect x="415.745" y="288.13" width="31.432" height="15.716"></rect>
        </g>
      </g>
      <g>
        <g>
          <polygon points="32.266,127.825 32.266,208.501 47.982,208.501 47.982,143.541 87.797,143.541 87.797,127.825 "></polygon>
        </g>
      </g>
      <g>
        <g>
          <rect x="32.266" y="224.217" width="15.716" height="15.716"></rect>
        </g>
      </g>
    </g>
  </svg>
);

export const Payroll = (props: ComponentProps<'svg'>) => (
  <svg
    fill="currentColor"
    viewBox="0 -7 46 46"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        id="_08.Credit-Card"
        data-name="08.Credit-Card"
        d="M43,40H5a4,4,0,0,1-4-4V12A4,4,0,0,1,5,8H43a4,4,0,0,1,4,4V36A4,4,0,0,1,43,40ZM3,21H45V17H3Zm42-9a2,2,0,0,0-2-2H5a2,2,0,0,0-2,2v3H45Zm0,11H3V36a2,2,0,0,0,2,2H43a2,2,0,0,0,2-2ZM26,29H22a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Zm-9,0H8a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2ZM8,32h6a1,1,0,0,1,0,2H8a1,1,0,0,1,0-2Z"
        transform="translate(-1 -8)"
        fillRule="evenodd"
      ></path>
    </g>
  </svg>
);

export const Attendance = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    mirror-in-rtl="true"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0.00024000000000000003"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill="currentColor"
        d="M7 11c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v1c0 1.1-.9 2-2 2zm-2 6.993L9 18c.55 0 1-.45 1-1v-2c0-1.65-1.35-3-3-3s-3 1.35-3 3v2c0 .552.448.993 1 .993zM19 18h-6c-.553 0-1-.447-1-1s.447-1 1-1h6c.553 0 1 .447 1 1s-.447 1-1 1zm0-4h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1zm0-4h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1z"
      ></path>
      <path
        fill="currentColor"
        d="M22 2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 17.5c0 .28-.22.5-.5.5h-19c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v15z"
      ></path>
    </g>
  </svg>
);

export const Leave = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g id="User / User_Close">
        <path
          id="Vector"
          d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M17 14L19 12M19 12L21 10M19 12L17 10M19 12L21 14M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </g>
  </svg>
);

export const Profile = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export const Settings = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
      ></circle>
      <path
        d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z"
        stroke="currentColor"
        strokeWidth="1.5"
      ></path>
    </g>
  </svg>
);

export const CopyRight = (props: ComponentProps<'svg'>) => (
  <svg
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
    role="img"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g id="layer1">
        <path d="M 9.3457031 2.0019531 L 8.734375 2.0351562 L 8.125 2.1113281 L 7.5214844 2.2324219 L 6.9316406 2.3964844 L 6.3535156 2.6035156 L 5.7929688 2.8515625 L 5.2480469 3.1386719 L 4.7304688 3.4648438 L 4.234375 3.828125 L 3.765625 4.2246094 L 3.328125 4.6542969 L 2.9238281 5.1152344 L 2.5527344 5.6035156 L 2.2167969 6.1191406 L 1.9179688 6.6542969 L 1.6621094 7.2128906 L 1.4433594 7.7851562 L 1.2695312 8.3730469 L 1.1386719 8.9746094 L 1.0488281 9.5820312 L 1.0058594 10.193359 L 1.0058594 10.808594 L 1.0488281 11.417969 L 1.1386719 12.025391 L 1.2695312 12.626953 L 1.4433594 13.212891 L 1.6621094 13.787109 L 1.9179688 14.345703 L 2.2167969 14.880859 L 2.5527344 15.396484 L 2.9238281 15.884766 L 3.328125 16.345703 L 3.765625 16.775391 L 4.234375 17.171875 L 4.7304688 17.535156 L 5.2480469 17.861328 L 5.7929688 18.148438 L 6.3535156 18.394531 L 6.9316406 18.603516 L 7.5214844 18.765625 L 8.125 18.888672 L 8.734375 18.964844 L 9.3457031 18.998047 L 9.9609375 18.988281 L 10.572266 18.933594 L 11.175781 18.832031 L 11.773438 18.689453 L 12.357422 18.505859 L 12.927734 18.277344 L 13.480469 18.009766 L 14.011719 17.703125 L 14.521484 17.357422 L 15.001953 16.976562 L 15.455078 16.564453 L 15.876953 16.117188 L 16.265625 15.642578 L 16.619141 15.142578 L 16.9375 14.617188 L 17.212891 14.068359 L 17.451172 13.501953 L 17.646484 12.921875 L 17.800781 12.326172 L 17.910156 11.724609 L 17.976562 11.113281 L 18 10.5 L 17.976562 9.8867188 L 17.910156 9.2753906 L 17.800781 8.6738281 L 17.646484 8.078125 L 17.451172 7.4980469 L 17.212891 6.9316406 L 16.9375 6.3828125 L 16.619141 5.8574219 L 16.265625 5.3574219 L 15.876953 4.8808594 L 15.455078 4.4355469 L 15.001953 4.0214844 L 14.521484 3.6425781 L 14.011719 3.296875 L 13.480469 2.9902344 L 12.927734 2.7226562 L 12.357422 2.4960938 L 11.773438 2.3105469 L 11.175781 2.1679688 L 10.572266 2.0683594 L 9.9609375 2.0117188 L 9.3457031 2.0019531 z M 9.6445312 3.0019531 L 10.224609 3.0351562 L 10.800781 3.1152344 L 11.369141 3.2363281 L 11.927734 3.4042969 L 12.46875 3.6132812 L 12.996094 3.8632812 L 13.498047 4.1542969 L 13.978516 4.484375 L 14.431641 4.8496094 L 14.853516 5.2480469 L 15.244141 5.6796875 L 15.599609 6.1386719 L 15.919922 6.6230469 L 16.201172 7.1328125 L 16.441406 7.6621094 L 16.640625 8.2109375 L 16.798828 8.7714844 L 16.910156 9.3417969 L 16.976562 9.9199219 L 17 10.5 L 16.976562 11.080078 L 16.910156 11.658203 L 16.798828 12.228516 L 16.640625 12.789062 L 16.441406 13.335938 L 16.201172 13.865234 L 15.919922 14.375 L 15.599609 14.861328 L 15.244141 15.322266 L 14.853516 15.751953 L 14.431641 16.150391 L 13.978516 16.515625 L 13.498047 16.845703 L 12.996094 17.136719 L 12.46875 17.386719 L 11.927734 17.595703 L 11.369141 17.763672 L 10.800781 17.886719 L 10.224609 17.964844 L 9.6445312 17.998047 L 9.0644531 17.988281 L 8.484375 17.929688 L 7.9121094 17.828125 L 7.3496094 17.683594 L 6.7988281 17.496094 L 6.2636719 17.265625 L 5.75 16.996094 L 5.2578125 16.683594 L 4.7910156 16.337891 L 4.3535156 15.955078 L 3.9453125 15.539062 L 3.5722656 15.09375 L 3.234375 14.621094 L 2.9335938 14.123047 L 2.671875 13.603516 L 2.453125 13.064453 L 2.2753906 12.509766 L 2.140625 11.943359 L 2.0507812 11.369141 L 2.0058594 10.791016 L 2.0058594 10.208984 L 2.0507812 9.6289062 L 2.140625 9.0546875 L 2.2753906 8.4902344 L 2.453125 7.9355469 L 2.671875 7.3964844 L 2.9335938 6.8769531 L 3.234375 6.3789062 L 3.5722656 5.9042969 L 3.9453125 5.4609375 L 4.3535156 5.0449219 L 4.7910156 4.6621094 L 5.2578125 4.3144531 L 5.75 4.0039062 L 6.2636719 3.734375 L 6.7988281 3.5039062 L 7.3496094 3.3164062 L 7.9121094 3.1699219 L 8.484375 3.0703125 L 9.0644531 3.0117188 L 9.6445312 3.0019531 z M 9.5 6 C 7.0147186 6 5 8.0147186 5 10.5 C 5 12.985281 7.0147186 15 9.5 15 C 10.511305 14.998 11.492441 14.655313 12.285156 14.027344 L 11.667969 13.248047 C 11.050346 13.735201 10.286624 14.000096 9.5 14 C 7.5670034 14 6 12.432997 6 10.5 C 6 8.5670034 7.5670034 7 9.5 7 C 10.286419 7.00146 11.049432 7.2677186 11.666016 7.7558594 L 12.289062 6.96875 C 11.494783 6.3413529 10.51218 6.0000567 9.5 6 z "></path>
      </g>
    </g>
  </svg>
);
