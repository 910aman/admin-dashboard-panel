import React from "react";

export const GrDashboardLogo = ({ width, height }) => (
  <svg
    width={width || "29"}
    height={height || "29"}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99342 27.4899H5.11175C2.683 27.4899 1.51092 26.3662 1.51092 24.0462V4.95449C1.51092 2.63449 2.69508 1.51074 5.11175 1.51074H9.99342C12.4222 1.51074 13.5943 2.63449 13.5943 4.95449V24.0462C13.5943 26.3662 12.4101 27.4899 9.99342 27.4899ZM5.11175 3.32324C3.57717 3.32324 3.32342 3.73408 3.32342 4.95449V24.0462C3.32342 25.2666 3.57717 25.6774 5.11175 25.6774H9.99342C11.528 25.6774 11.7818 25.2666 11.7818 24.0462V4.95449C11.7818 3.73408 11.528 3.32324 9.99342 3.32324H5.11175Z"
      fill="url(#paint0_linear_1_301)"
    />
    <path
      d="M23.8886 16.6149H19.0069C16.5782 16.6149 15.4061 15.4912 15.4061 13.1712V4.95449C15.4061 2.63449 16.5902 1.51074 19.0069 1.51074H23.8886C26.3173 1.51074 27.4894 2.63449 27.4894 4.95449V13.1712C27.4894 15.4912 26.3052 16.6149 23.8886 16.6149ZM19.0069 3.32324C17.4723 3.32324 17.2186 3.73408 17.2186 4.95449V13.1712C17.2186 14.3916 17.4723 14.8024 19.0069 14.8024H23.8886C25.4232 14.8024 25.6769 14.3916 25.6769 13.1712V4.95449C25.6769 3.73408 25.4232 3.32324 23.8886 3.32324H19.0069Z"
      fill="url(#paint1_linear_1_301)"
    />
    <path
      d="M23.8886 27.4893H19.0069C16.5782 27.4893 15.4061 26.3655 15.4061 24.0455V21.8705C15.4061 19.5505 16.5902 18.4268 19.0069 18.4268H23.8886C26.3173 18.4268 27.4894 19.5505 27.4894 21.8705V24.0455C27.4894 26.3655 26.3052 27.4893 23.8886 27.4893ZM19.0069 20.2393C17.4723 20.2393 17.2186 20.6501 17.2186 21.8705V24.0455C17.2186 25.2659 17.4723 25.6768 19.0069 25.6768H23.8886C25.4232 25.6768 25.6769 25.2659 25.6769 24.0455V21.8705C25.6769 20.6501 25.4232 20.2393 23.8886 20.2393H19.0069Z"
      fill="url(#paint2_linear_1_301)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_301"
        x1="1.51092"
        y1="14.5003"
        x2="13.5943"
        y2="14.5003"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#034175" />
        <stop offset="1" stopColor="#37B7FE" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_301"
        x1="15.4061"
        y1="9.06283"
        x2="27.4894"
        y2="9.06283"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#034175" />
        <stop offset="1" stopColor="#37B7FE" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1_301"
        x1="15.4061"
        y1="22.958"
        x2="27.4894"
        y2="22.958"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#034175" />
        <stop offset="1" stopColor="#37B7FE" />
      </linearGradient>
    </defs>
  </svg>
);

export const GrSocietyManagementLogo = ({ width, height }) => (
  <svg
    width={width || "29"}
    height={height || "29"}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_315)">
      <path
        d="M4.83333 25.3752V7.25016C4.83333 6.04183 6.04167 4.8335 7.25 4.8335H13.2917C14.5 4.8335 15.7083 6.04183 15.7083 7.25016V25.3752"
        stroke="url(#outlineGradient)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3333 9.6665H21.75C22.9583 9.6665 24.1667 10.8748 24.1667 12.0832V25.3748"
        stroke="url(#outlineGradient)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.625 25.375H25.375"
        stroke="url(#outlineGradient)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_315">
        <rect width="29" height="29" fill="white" />
      </clipPath>

      <linearGradient id="outlineGradient" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
        <stop stopColor="#034175" />
        <stop offset="1" stopColor="#37B7FE" />
      </linearGradient>
    </defs>
  </svg>
);
export const GrUserManagementLogo = ({ width, height }) => {
  const id = React.useId();
  const gradId = `outlineGradient-${id}`;
  const clipId = `clip-${id}`;

  return (
    <svg
      width={width || "29"}
      height={height || "29"}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradId}
          gradientUnits="userSpaceOnUse"
          x1="1.5"
          y1="14.5"
          x2="27.5"
          y2="14.5"
        >
          <stop offset="0" stopColor="#034175" />
          <stop offset="1" stopColor="#37B7FE" />
        </linearGradient>

        <clipPath id={clipId}>
          <rect width="29" height="29" fill="white" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <path
          d="M21.9192 26.1242C20.8558 26.4383 19.5992 26.5833 18.125 26.5833H10.875C9.40083 26.5833 8.14417 26.4383 7.08083 26.1242C7.34667 22.9825 10.5729 20.5054 14.5 20.5054C18.4271 20.5054 21.6533 22.9825 21.9192 26.1242Z"
          stroke={`url(#${gradId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.125 2.4165H10.875C4.83333 2.4165 2.41667 4.83317 2.41667 10.8748V18.1248C2.41667 22.6923 3.79417 25.1936 7.08084 26.124C7.34667 22.9823 10.5729 20.5052 14.5 20.5052C18.4271 20.5052 21.6533 22.9823 21.9192 26.124C25.2058 25.1936 26.5833 22.6923 26.5833 18.1248V10.8748C26.5833 4.83317 24.1667 2.4165 18.125 2.4165ZM14.5 17.1219C12.1075 17.1219 10.1742 15.1765 10.1742 12.784C10.1742 10.3915 12.1075 8.45817 14.5 8.45817C16.8925 8.45817 18.8258 10.3915 18.8258 12.784C18.8258 15.1765 16.8925 17.1219 14.5 17.1219Z"
          stroke={`url(#${gradId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.8258 12.7844C18.8258 15.1769 16.8925 17.1222 14.5 17.1222C12.1075 17.1222 10.1742 15.1769 10.1742 12.7844C10.1742 10.3919 12.1075 8.4585 14.5 8.4585C16.8925 8.4585 18.8258 10.3919 18.8258 12.7844Z"
          stroke={`url(#${gradId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

/* Marketing - gradient stroke, unique ids per instance */
export const GrMarketingLogo = ({ width, height }) => {
  const id = React.useId();
  const gradId = `outlineGradient-${id}`;
  const clipId = `clip-${id}`;

  return (
    <svg
      width={width || "29"}
      height={height || "29"}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradId}
          gradientUnits="userSpaceOnUse"
          x1="3"
          y1="8.5"
          x2="26"
          y2="8.5"
        >
          <stop offset="0" stopColor="#034175" />
          <stop offset="1" stopColor="#37B7FE" />
        </linearGradient>

        <clipPath id={clipId}>
          <rect width="29" height="29" fill="white" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <path
          d="M3.625 10.8752C3.625 10.2342 3.87961 9.61953 4.33283 9.16632C4.78604 8.71311 5.40073 8.4585 6.04167 8.4585H22.9583C23.5993 8.4585 24.214 8.71311 24.6672 9.16632C25.1204 9.61953 25.375 10.2342 25.375 10.8752V21.7502C25.375 22.3911 25.1204 23.0058 24.6672 23.459C24.214 23.9122 23.5993 24.1668 22.9583 24.1668H6.04167C5.40073 24.1668 4.78604 23.9122 4.33283 23.459C3.87961 23.0058 3.625 22.3911 3.625 21.7502V10.8752Z"
          stroke={`url(#${gradId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.66667 8.45833V6.04167C9.66667 5.40073 9.92128 4.78604 10.3745 4.33283C10.8277 3.87961 11.4424 3.625 12.0833 3.625H16.9167C17.5576 3.625 18.1723 3.87961 18.6255 4.33283C19.0787 4.78604 19.3333 5.40073 19.3333 6.04167V8.45833"
          stroke={`url(#${gradId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const GrSettingLogo = ({ width, height }) => (
  <svg
    width={width || "29"}
    height={height || "29"}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2162 13.4731H9.01416C8.25291 13.4731 7.63668 14.0893 7.63668 14.8506V21.0372H12.2162V13.4731V13.4731Z"
      stroke="url(#outlineGradient)"
      strokeWidth="1.5"
      stroke-miterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4199 7.9751H13.5832C12.8219 7.9751 12.2057 8.59137 12.2057 9.35262V21.0252H16.7853V9.35262C16.7853 8.59137 16.1811 7.9751 15.4199 7.9751Z"
      stroke="url(#outlineGradient)"
      strokeWidth="1.5"
      stroke-miterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.9957 15.5273H16.7936V21.0253H21.3732V16.9049C21.3611 16.1436 20.7448 15.5273 19.9957 15.5273Z"
      stroke="url(#outlineGradient)"
      strokeWidth="1.5"
      stroke-miterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.875 26.5832H18.125C24.1667 26.5832 26.5833 24.1665 26.5833 18.1248V10.8748C26.5833 4.83317 24.1667 2.4165 18.125 2.4165H10.875C4.83333 2.4165 2.41667 4.83317 2.41667 10.8748V18.1248C2.41667 24.1665 4.83333 26.5832 10.875 26.5832Z"
      stroke="url(#outlineGradient)"
      strokeWidth="1.5"
      stroke-miterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="outlineGradient" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
        <stop stopColor="#034175" />
        <stop offset="1" stopColor="#37B7FE" />
      </linearGradient>
    </defs>
  </svg>
);

export const GrEventsLogo = ({ width, height }) => (
  <svg
    width={width || "29"}
    height={height || "29"}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_events)">
      <path
        d="M13.8958 25.3748H7.25C6.60906 25.3748 5.99437 25.1202 5.54116 24.667C5.08794 24.2138 4.83333 23.5991 4.83333 22.9582V8.45817C4.83333 7.81723 5.08794 7.20254 5.54116 6.74933C5.99437 6.29612 6.60906 6.0415 7.25 6.0415H21.75C22.3909 6.0415 23.0056 6.29612 23.4588 6.74933C23.9121 7.20254 24.1667 7.81723 24.1667 8.45817V15.7082"
        stroke="url(#strokeGradientEvents)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3333 3.625V8.45833"
        stroke="url(#strokeGradientEvents)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.66667 3.625V8.45833"
        stroke="url(#strokeGradientEvents)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.83333 13.2915H24.1667"
        stroke="url(#strokeGradientEvents)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.125 22.9582L20.5417 25.3748L25.375 20.5415"
        stroke="url(#strokeGradientEvents)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_events">
        <rect width="29" height="29" fill="white" />
      </clipPath>

      <linearGradient
        id="strokeGradientEvents"
        x1="0"
        y1="14.5"
        x2="29"
        y2="14.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#034175" />
        <stop offset="1" stopColor="#37B7FE" />
      </linearGradient>
    </defs>
  </svg>
);


export const GrComplaintsReqLogo = ({ width, height }) => (
  <svg
    width={width || "29"}
    height={height || "29"}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_346)">
      <path
        d="M3.625 14.5C3.625 15.9281 3.90629 17.3423 4.45281 18.6617C4.99933 19.9811 5.80038 21.1799 6.81021 22.1898C7.82005 23.1996 9.0189 24.0007 10.3383 24.5472C11.6577 25.0937 13.0719 25.375 14.5 25.375C15.9281 25.375 17.3423 25.0937 18.6617 24.5472C19.9811 24.0007 21.1799 23.1996 22.1898 22.1898C23.1996 21.1799 24.0007 19.9811 24.5472 18.6617C25.0937 17.3423 25.375 15.9281 25.375 14.5C25.375 13.0719 25.0937 11.6577 24.5472 10.3383C24.0007 9.0189 23.1996 7.82005 22.1898 6.81021C21.1799 5.80038 19.9811 4.99933 18.6617 4.45281C17.3423 3.90629 15.9281 3.625 14.5 3.625C13.0719 3.625 11.6577 3.90629 10.3383 4.45281C9.0189 4.99933 7.82005 5.80038 6.81021 6.81021C5.80038 7.82005 4.99933 9.0189 4.45281 10.3383C3.90629 11.6577 3.625 13.0719 3.625 14.5Z"
        stroke="url(#complaintsOutlineGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 10.875V15.7083"
        stroke="url(#complaintsOutlineGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 19.3335V19.346"
        stroke="url(#complaintsOutlineGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_1_346">
        <rect width="29" height="29" fill="white" />
      </clipPath>

      {/* Use userSpaceOnUse so gradient direction is absolute across the 29x29 viewBox */}
      <linearGradient
        id="complaintsOutlineGradient"
        gradientUnits="userSpaceOnUse"
        x1="1"
        y1="14.5"
        x2="27.5"
        y2="14.5"
      >
        <stop offset="0" stopColor="#034175" />
        <stop offset="1" stopColor="#37B7FE" />
      </linearGradient>
    </defs>
  </svg>
);

export const GrNotificationLogo = ({ width, height }) => (
  <svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="notificationGradient"
        x1="4"
        y1="3"
        x2="25"
        y2="25"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#034175" />
        <stop offset="1" stopColor="#37B7FE" />
      </linearGradient>
    </defs>

    <path
      d="M12.0857 6.04167C12.0857 5.40073 12.3403 4.78604 12.7935 4.33283C13.2467 3.87961 13.8614 3.625 14.5024 3.625C15.1433 3.625 15.758 3.87961 16.2112 4.33283C16.6644 4.78604 16.919 5.40073 16.919 6.04167C18.3067 6.69782 19.4896 7.71923 20.3411 8.9964C21.1925 10.2736 21.6804 11.7584 21.7524 13.2917V16.9167C21.8433 17.6679 22.1093 18.3873 22.5291 19.0169C22.9488 19.6465 23.5106 20.1688 24.169 20.5417H4.83569C5.49416 20.1688 6.05588 19.6465 6.47563 19.0169C6.89538 18.3873 7.16143 17.6679 7.25236 16.9167V13.2917C7.32433 11.7584 7.81218 10.2736 8.66363 8.9964C9.51508 7.71923 10.698 6.69782 12.0857 6.04167Z"
      stroke="url(#notificationGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M10.875 20.5464V21.7547C10.875 22.7161 11.2569 23.6382 11.9367 24.318C12.6166 24.9978 13.5386 25.3797 14.5 25.3797C15.4614 25.3797 16.3834 24.9978 17.0633 24.318C17.7431 23.6382 18.125 22.7161 18.125 21.7547V20.5464"
      stroke="url(#notificationGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GrAnnouncementsManageLogo = ({ width, height }) => (
  <svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad-announcements" x1="0" y1="0" x2="29" y2="29">
        <stop offset="0%" stopColor="#034175" />
        <stop offset="100%" stopColor="#37B7FE" />
      </linearGradient>
    </defs>

    <path
      d="M21.75 9.6665C22.7114 9.6665 23.6334 10.0484 24.3133 10.7282C24.9931 11.4081 25.375 12.3301 25.375 13.2915C25.375 14.2529 24.9931 15.1749 24.3133 15.8548C23.6334 16.5346 22.7114 16.9165 21.75 16.9165"
      stroke="url(#grad-announcements)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0833 9.6665V22.9582C12.0833 23.2786 11.956 23.586 11.7294 23.8126C11.5028 24.0392 11.1955 24.1665 10.875 24.1665H9.66667C9.3462 24.1665 9.03885 24.0392 8.81224 23.8126C8.58564 23.586 8.45833 23.2786 8.45833 22.9582V16.9165"
      stroke="url(#grad-announcements)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 9.66668L19.9665 5.11127C20.1253 4.97897 20.3186 4.89468 20.5236 4.86828C20.7287 4.84188 20.937 4.87447 21.1241 4.96222C21.3113 5.04997 21.4696 5.18926 21.5804 5.36375C21.6913 5.53824 21.7501 5.74071 21.75 5.94743V20.6359C21.7501 20.8427 21.6913 21.0451 21.5804 21.2196C21.4696 21.3941 21.3113 21.5334 21.1241 21.6211C20.937 21.7089 20.7287 21.7415 20.5236 21.7151C20.3186 21.6887 20.1253 21.6044 19.9665 21.4721L14.5 16.9167H4.83333C4.51286 16.9167 4.20552 16.7894 3.97891 16.5628C3.75231 16.3362 3.625 16.0288 3.625 15.7084V10.875C3.625 10.5545 3.75231 10.2472 3.97891 10.0206C4.20552 9.79399 4.51286 9.66668 4.83333 9.66668H14.5Z"
      stroke="url(#grad-announcements)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GrReportAnalytics = ({ width, height }) => (
  <svg
    width={width || "29"}
    height={height || "29"}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad-analytics" x1="0" y1="0" x2="29" y2="29">
        <stop offset="0%" stopColor="#034175" />
        <stop offset="100%" stopColor="#37B7FE" />
      </linearGradient>
    </defs>

    <path
      d="M12.2162 13.4731H9.01416C8.25291 13.4731 7.63668 14.0893 7.63668 14.8506V21.0372H12.2162V13.4731Z"
      stroke="url(#grad-analytics)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4199 7.9751H13.5832C12.8219 7.9751 12.2057 8.59137 12.2057 9.35262V21.0252H16.7853V9.35262C16.7853 8.59137 16.1811 7.9751 15.4199 7.9751Z"
      stroke="url(#grad-analytics)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.9957 15.5273H16.7936V21.0253H21.3732V16.9049C21.3611 16.1436 20.7448 15.5273 19.9957 15.5273Z"
      stroke="url(#grad-analytics)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.875 26.5832H18.125C24.1667 26.5832 26.5833 24.1665 26.5833 18.1248V10.8748C26.5833 4.83317 24.1667 2.4165 18.125 2.4165H10.875C4.83333 2.4165 2.41667 4.83317 2.41667 10.8748V18.1248C2.41667 24.1665 4.83333 26.5832 10.875 26.5832Z"
      stroke="url(#grad-analytics)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GrEventAmenitiesLogo = ({ width, height }) => (
  <svg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad-event" x1="0" y1="0" x2="29" y2="29">
        <stop offset="0%" stopColor="#034175" />
        <stop offset="100%" stopColor="#37B7FE" />
      </linearGradient>
    </defs>

    <g clipPath="url(#clip0)">
      <path
        d="M13.8958 25.3748H7.25C6.60906 25.3748 5.99437 25.1202 5.54116 24.667C5.08794 24.2138 4.83333 23.5991 4.83333 22.9582V8.45817C4.83333 7.81723 5.08794 7.20254 5.54116 6.74933C5.99437 6.29612 6.60906 6.0415 7.25 6.0415H21.75C22.3909 6.0415 23.0056 6.29612 23.4588 6.74933C23.9121 7.20254 24.1667 7.81723 24.1667 8.45817V15.7082"
        stroke="url(#grad-event)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3333 3.625V8.45833"
        stroke="url(#grad-event)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.66667 3.625V8.45833"
        stroke="url(#grad-event)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.83333 13.2915H24.1667"
        stroke="url(#grad-event)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.125 22.9582L20.5417 25.3748L25.375 20.5415"
        stroke="url(#grad-event)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0">
        <rect width="29" height="29" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
