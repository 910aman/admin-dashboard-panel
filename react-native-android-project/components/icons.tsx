import React from "react";
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Rect, Stop } from "react-native-svg";

export const HomeIconOutline = ({ width, height, stroke }: any) => (
  <Svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 28 28"
    fill="none"
  >
    <Path
      d="M14.8246 2.67508L25.3246 13.1751C26.0596 13.9101 25.5393 15.1666 24.4998 15.1666H23.3331V22.1666C23.3331 23.0948 22.9643 23.9851 22.308 24.6415C21.6516 25.2978 20.7614 25.6666 19.8331 25.6666H18.6664V17.4999C18.6665 16.6072 18.3254 15.7481 17.7129 15.0986C17.1005 14.4491 16.263 14.0581 15.3718 14.0057L15.1664 13.9999H12.8331C11.9048 13.9999 11.0146 14.3687 10.3582 15.025C9.70184 15.6814 9.33309 16.5717 9.33309 17.4999V25.6666H8.16643C7.23817 25.6666 6.34793 25.2978 5.69155 24.6415C5.03518 23.9851 4.66643 23.0948 4.66643 22.1666V15.1666H3.49976C2.46143 15.1666 1.93993 13.9101 2.67493 13.1751L13.1749 2.67508C13.3937 2.45636 13.6904 2.3335 13.9998 2.3335C14.3091 2.3335 14.6058 2.45636 14.8246 2.67508Z"
      stroke={stroke}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <Path
      d="M15.1664 16.3332C15.4758 16.3332 15.7726 16.4562 15.9914 16.675C16.2102 16.8937 16.3331 17.1905 16.3331 17.4999V25.6666H11.6664V17.4999C11.6665 17.2142 11.7714 16.9384 11.9613 16.7248C12.1511 16.5113 12.4128 16.3748 12.6966 16.3414L12.8331 16.3332H15.1664Z"
      stroke={stroke}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ActiveHomeIcon = ({ width, height, stroke }: any) => (
  <Svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 28 28"
    fill="none"
  >
    <G clipPath="url(#clip0_2_167)">
      <Path
        d="M14.8246 2.67508L25.3246 13.1751C26.0596 13.9101 25.5393 15.1666 24.4998 15.1666H23.3331V22.1666C23.3331 23.0948 22.9643 23.9851 22.308 24.6415C21.6516 25.2978 20.7614 25.6666 19.8331 25.6666H18.6664V17.4999C18.6665 16.6072 18.3254 15.7481 17.7129 15.0986C17.1005 14.4491 16.263 14.0581 15.3718 14.0057L15.1664 13.9999H12.8331C11.9048 13.9999 11.0146 14.3687 10.3582 15.025C9.70184 15.6814 9.33309 16.5717 9.33309 17.4999V25.6666H8.16643C7.23817 25.6666 6.34793 25.2978 5.69155 24.6415C5.03518 23.9851 4.66643 23.0948 4.66643 22.1666V15.1666H3.49976C2.46143 15.1666 1.93993 13.9101 2.67493 13.1751L13.1749 2.67508C13.3937 2.45636 13.6904 2.3335 13.9998 2.3335C14.3091 2.3335 14.6058 2.45636 14.8246 2.67508ZM15.1664 16.3332C15.4758 16.3332 15.7726 16.4562 15.9914 16.675C16.2102 16.8937 16.3331 17.1905 16.3331 17.4999V25.6666H11.6664V17.4999C11.6665 17.2142 11.7714 16.9384 11.9613 16.7248C12.1511 16.5113 12.4128 16.3748 12.6966 16.3414L12.8331 16.3332H15.1664Z"
        fill={stroke}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2_167">
        <Rect width={"24"} height={"24"} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const PeopleIcon = ({ width, height, stroke }: any) => (
  <Svg
    width={width || "28"}
    height={height || "28"}
    viewBox="0 0 28 28"
    fill="none"
  >
    <G clipPath="url(#clip0_2_173)">
      <Path
        d="M11.667 15.1668C11.667 15.7857 11.9128 16.3792 12.3504 16.8167C12.788 17.2543 13.3815 17.5002 14.0003 17.5002C14.6192 17.5002 15.2127 17.2543 15.6502 16.8167C16.0878 16.3792 16.3337 15.7857 16.3337 15.1668C16.3337 14.548 16.0878 13.9545 15.6502 13.5169C15.2127 13.0793 14.6192 12.8335 14.0003 12.8335C13.3815 12.8335 12.788 13.0793 12.3504 13.5169C11.9128 13.9545 11.667 14.548 11.667 15.1668Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.33301 24.5V23.3333C9.33301 22.7145 9.57884 22.121 10.0164 21.6834C10.454 21.2458 11.0475 21 11.6663 21H16.333C16.9518 21 17.5453 21.2458 17.9829 21.6834C18.4205 22.121 18.6663 22.7145 18.6663 23.3333V24.5"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 5.83333C17.5 6.45217 17.7458 7.04566 18.1834 7.48325C18.621 7.92083 19.2145 8.16667 19.8333 8.16667C20.4522 8.16667 21.0457 7.92083 21.4832 7.48325C21.9208 7.04566 22.1667 6.45217 22.1667 5.83333C22.1667 5.21449 21.9208 4.621 21.4832 4.18342C21.0457 3.74583 20.4522 3.5 19.8333 3.5C19.2145 3.5 18.621 3.74583 18.1834 4.18342C17.7458 4.621 17.5 5.21449 17.5 5.83333Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.833 11.6665H22.1663C22.7852 11.6665 23.3787 11.9123 23.8163 12.3499C24.2538 12.7875 24.4997 13.381 24.4997 13.9998V15.1665"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.83301 5.83333C5.83301 6.45217 6.07884 7.04566 6.51643 7.48325C6.95401 7.92083 7.5475 8.16667 8.16634 8.16667C8.78518 8.16667 9.37867 7.92083 9.81626 7.48325C10.2538 7.04566 10.4997 6.45217 10.4997 5.83333C10.4997 5.21449 10.2538 4.621 9.81626 4.18342C9.37867 3.74583 8.78518 3.5 8.16634 3.5C7.5475 3.5 6.95401 3.74583 6.51643 4.18342C6.07884 4.621 5.83301 5.21449 5.83301 5.83333Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 15.1665V13.9998C3.5 13.381 3.74583 12.7875 4.18342 12.3499C4.621 11.9123 5.21449 11.6665 5.83333 11.6665H8.16667"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2_173">
        <Rect width="28" height="28" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const TimelineIcon = ({ width, height, stroke }: any) => (
  <Svg
    width={width || "28"}
    height={height || "28"}
    viewBox="0 0 28 28"
    fill="none"
  >
    <G clipPath="url(#clip0_2_184)">
      <Path
        d="M16.333 4.6665H23.333V11.6665H16.333V4.6665Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.66699 16.3335H11.667V23.3335H4.66699V16.3335Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.333 19.8335C16.333 20.7618 16.7018 21.652 17.3581 22.3084C18.0145 22.9647 18.9048 23.3335 19.833 23.3335C20.7613 23.3335 21.6515 22.9647 22.3079 22.3084C22.9643 21.652 23.333 20.7618 23.333 19.8335C23.333 18.9052 22.9643 18.015 22.3079 17.3586C21.6515 16.7022 20.7613 16.3335 19.833 16.3335C18.9048 16.3335 18.0145 16.7022 17.3581 17.3586C16.7018 18.015 16.333 18.9052 16.333 19.8335Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.66699 8.1665C4.66699 8.62613 4.75752 9.08126 4.93341 9.5059C5.10931 9.93054 5.36711 10.3164 5.69212 10.6414C6.01712 10.9664 6.40296 11.2242 6.8276 11.4001C7.25224 11.576 7.70737 11.6665 8.16699 11.6665C8.62662 11.6665 9.08174 11.576 9.50638 11.4001C9.93102 11.2242 10.3169 10.9664 10.6419 10.6414C10.9669 10.3164 11.2247 9.93054 11.4006 9.5059C11.5765 9.08126 11.667 8.62613 11.667 8.1665C11.667 7.70688 11.5765 7.25175 11.4006 6.82711C11.2247 6.40247 10.9669 6.01664 10.6419 5.69163C10.3169 5.36663 9.93102 5.10882 9.50638 4.93293C9.08174 4.75703 8.62662 4.6665 8.16699 4.6665C7.70737 4.6665 7.25224 4.75703 6.8276 4.93293C6.40296 5.10882 6.01712 5.36663 5.69212 5.69163C5.36711 6.01664 5.10931 6.40247 4.93341 6.82711C4.75752 7.25175 4.66699 7.70688 4.66699 8.1665Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2_184">
        <Rect width="28" height="28" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const ProfileIcon = ({ width, height, stroke }: any) => (
  <Svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 28 28"
    fill="none"
  >
    <G clipPath="url(#clip0_2_193)">
      <Path
        d="M9.33301 8.16667C9.33301 9.40434 9.82467 10.5913 10.6998 11.4665C11.575 12.3417 12.762 12.8333 13.9997 12.8333C15.2374 12.8333 16.4243 12.3417 17.2995 11.4665C18.1747 10.5913 18.6663 9.40434 18.6663 8.16667C18.6663 6.92899 18.1747 5.742 17.2995 4.86683C16.4243 3.99167 15.2374 3.5 13.9997 3.5C12.762 3.5 11.575 3.99167 10.6998 4.86683C9.82467 5.742 9.33301 6.92899 9.33301 8.16667Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 24.5V22.1667C7 20.929 7.49167 19.742 8.36683 18.8668C9.242 17.9917 10.429 17.5 11.6667 17.5H16.3333C17.571 17.5 18.758 17.9917 19.6332 18.8668C20.5083 19.742 21 20.929 21 22.1667V24.5"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2_193">
        <Rect width="28" height="28" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const UpsideArrowIcon = ({ width, height }: any) => (
  <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <Path
      d="M10.3125 4.14941L4.68892 10.8513"
      stroke="white"
      strokeWidth="0.937364"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.2969 4.14648L5.01375 4.6087"
      stroke="white"
      strokeWidth="0.937364"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.306 4.13203L10.7683 9.41515"
      stroke="white"
      strokeWidth="0.937364"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ChevronDown = ({ width, height, stroke }: any) => (
  <Svg
    width={width || "12"}
    height={height || "5"}
    viewBox="0 0 12 5"
    fill="none"
  >
    <Path opacity="0.898205" d="M0 0H11.4133L5.70667 5L0 0Z" fill="white" />
  </Svg>
);

export const SearchbarIcon = ({ width, height, stroke }: any) => (
  <Svg
    width={width || "15"}
    height={height || "15"}
    viewBox="0 0 15 15"
    fill="none"
  >
    <Path
      d="M1.87109 6.23401C1.87109 6.80708 1.98397 7.37455 2.20328 7.904C2.42258 8.43345 2.74402 8.91452 3.14925 9.31975C3.55447 9.72497 4.03554 10.0464 4.565 10.2657C5.09445 10.485 5.66191 10.5979 6.23499 10.5979C6.80806 10.5979 7.37552 10.485 7.90497 10.2657C8.43443 10.0464 8.9155 9.72497 9.32072 9.31975C9.72595 8.91452 10.0474 8.43345 10.2667 7.904C10.486 7.37455 10.5989 6.80708 10.5989 6.23401C10.5989 5.66093 10.486 5.09347 10.2667 4.56402C10.0474 4.03457 9.72595 3.5535 9.32072 3.14827C8.9155 2.74305 8.43443 2.4216 7.90497 2.2023C7.37552 1.98299 6.80806 1.87012 6.23499 1.87012C5.66191 1.87012 5.09445 1.98299 4.565 2.2023C4.03554 2.4216 3.55447 2.74305 3.14925 3.14827C2.74402 3.5535 2.42258 4.03457 2.20328 4.56402C1.98397 5.09347 1.87109 5.66093 1.87109 6.23401Z"
      stroke="white"
      strokeWidth="0.93512"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.093 13.0916L9.35254 9.35107"
      stroke="white"
      strokeWidth="0.93512"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PlusIcon = ({ width, height, color }: any) => (
  <Svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 24 24"
    fill="none"
  >
    <Path
      d="M12 4.5V19.5M19.5 12H4.5"
      stroke={color || "white"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PlusIconGr = ({ width, height }:any) => (
  <Svg
    width={width || "17"}
    height={height || "17"}
    viewBox="0 0 17 17"
    fill="none"
  >
    <Path
      d="M8.25 0.75V15.75M15.75 8.25H0.75"
      stroke="url(#paint0_linear_2_206)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2_206"
        x1="15.75"
        y1="6.75962"
        x2="0.749978"
        y2="6.76763"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#34B0F5" />
        <Stop offset="1" stopColor="#034175" />
      </LinearGradient>
    </Defs>
  </Svg>
);
